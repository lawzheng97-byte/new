import { Search, Globe, Moon, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/60 backdrop-blur-xl border-b border-primary/10 shadow-[0_0_30px_rgba(125,211,252,0.05)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-semibold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(125,211,252,0.3)]">
          极光资讯 (Glacier AI)
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-sans antialiased tracking-tight">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">首页</a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">技术动态</a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">行业观察</a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">政策分析</a>
          <a href="#" className="text-primary border-b-2 border-primary pb-1">AI工具集</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="搜索AI工具..." 
              className="bg-[#141c2e] border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 text-on-background"
            />
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 text-slate-400 hover:bg-primary/5 rounded-full transition-all duration-300 ease-out active:scale-95">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:bg-primary/5 rounded-full transition-all duration-300 ease-out active:scale-95">
              <Moon className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:bg-primary/5 rounded-full transition-all duration-300 ease-out active:scale-95">
              <UserCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
