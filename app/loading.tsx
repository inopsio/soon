export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
        <p className="text-gray-400 font-mono text-sm">Loading...</p>
      </div>
    </div>
  );
}
