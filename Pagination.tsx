import { CATEGORIES, HOT_LIST } from '../types';
import * as Icons from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-72 space-y-6">
      <div className="glass-panel p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <Icons.LayoutGrid className="w-5 h-5" />
          工具分类
        </h3>
        <nav className="space-y-1">
          {CATEGORIES.map((cat) => {
            const Icon = (Icons as any)[cat.icon];
            return (
              <a 
                key={cat.name}
                href="#" 
                className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all group ${
                  cat.active ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:bg-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  cat.active ? 'bg-primary/20' : 'opacity-0 group-hover:opacity-100 transition-opacity bg-surface-variant'
                }`}>
                  {cat.count}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="glass-panel p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-tertiary mb-4 flex items-center gap-2">
          <Icons.TrendingUp className="w-5 h-5" />
          热门榜单
        </h3>
        <div className="space-y-4">
          {HOT_LIST.map((item) => (
            <div key={item.rank} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-outline-variant group-hover:border-primary transition-colors">
                <span className="text-xs font-bold text-slate-500">#{item.rank}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-on-surface">{item.name}</p>
                <p className="text-xs text-slate-500">{item.views} 访问量</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
