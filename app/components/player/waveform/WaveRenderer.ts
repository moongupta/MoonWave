import { getSmoothFrequencyData } from "./AudioMath";
import { createWaveGradient } from "./Gradient";

export interface DrawWaveOptions {
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    analyser: AnalyserNode | null;
    dataArray: Uint8Array | null;
    color: string;
    playing: boolean;
}

export function drawWave({
    ctx,
    canvas,
    analyser,
    dataArray,
    color,
    playing,
}: DrawWaveOptions) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!analyser || !dataArray) return;

    analyser.getByteFrequencyData(dataArray);

    // Configuration
    const bars = 48;
    const centerY = canvas.height / 2;
    const spacing =
        (canvas.width - 10) / bars;
    const barWidth = 4;

    // Get smoothed values
    const values = getSmoothFrequencyData(dataArray, bars);
    drawSmoothWave(
        ctx,
        values,
        canvas.width,
        canvas.height,
        color
    );

    return;

    for (let i = 0; i < bars; i++) {
        const height = Math.max(4, values[i] * 22);

        const x = i * spacing;

        // Gradient
        const gradient = createWaveGradient(
            ctx,
            canvas.height,
            color
        );

        ctx.fillStyle = gradient;

        gradient.addColorStop(0, "#22d3ee");
        gradient.addColorStop(0.45, "#8b5cf6");
        gradient.addColorStop(1, color);

        ctx.fillStyle = gradient;

        // Glow
        ctx.shadowBlur = playing ? 26 : 8;
        ctx.shadowColor = color;

        // Upper Half
        ctx.beginPath();
        ctx.roundRect(
            x,
            centerY - height,
            barWidth,
            height,
            3
        );
        ctx.fill();

        // Lower Half (Mirror)
        ctx.beginPath();
        ctx.roundRect(
            x,
            centerY,
            barWidth,
            height,
            3
        );
        ctx.fill();
    }

    // Reset shadow
    ctx.shadowBlur = 0;
}
export function drawSmoothWave(
    ctx: CanvasRenderingContext2D,
    values: number[],
    width: number,
    height: number,
    color: string
) {
    const centerY = height / 2;
    const step = width / (values.length - 1);

    ctx.beginPath();

    ctx.moveTo(0, centerY);

    for (let i = 0; i < values.length - 1; i++) {
        const x1 = i * step;
        const y1 = centerY - values[i] * 18;

        const x2 = (i + 1) * step;
        const y2 = centerY - values[i + 1] * 18;

        const cx = (x1 + x2) / 2;
        const cy = (y1 + y2) / 2;

        ctx.quadraticCurveTo(
            x1,
            y1,
            cx,
            cy
        );
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.shadowBlur = 20;
    ctx.shadowColor = color;

    ctx.stroke();

    ctx.shadowBlur = 0;
}