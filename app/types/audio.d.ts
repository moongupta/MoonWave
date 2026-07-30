declare global {
  interface AnalyserNode {
    getByteFrequencyData(array: Uint8Array): void;
  }
}

export {};