import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-2 p-1 glass-panel rounded-full">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant text-slate-400 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-bold text-sm">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant text-slate-400 font-medium text-sm transition-colors">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant text-slate-400 font-medium text-sm transition-colors">3</button>
        <span className="px-2 text-slate-600">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant text-slate-400 font-medium text-sm transition-colors">12</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant text-slate-400 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
