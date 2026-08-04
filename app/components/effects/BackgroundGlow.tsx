"use client";

export default function BackgroundGlow() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#09070f]" />

      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[180px]" />

      <div className="pointer-events-none fixed right-0 top-32 -z-10 h-[500px] w-[500px] rounded-full bg-red-500/15 blur-[180px]" />

      <div className="pointer-events-none fixed left-0 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[180px]" />
    </>
  );
}