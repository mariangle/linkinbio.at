export function StatusBanner() {
  return (
    <div className="hidden items-center gap-2 rounded-full bg-black/25 p-1 px-2 sm:flex">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
      </span>
      <span className="text-[10px] text-zinc-300">All systems operational</span>
    </div>
  );
}
