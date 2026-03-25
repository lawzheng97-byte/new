import { Globe, Mail, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-primary/10 bg-[#0a0e1a]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-center gap-8">
        <div className="space-y-4">
          <div className="text-lg font-bold text-primary">极光资讯 Glacier AI News</div>
          <p className="text-sm font-normal text-slate-500 max-w-xs leading-relaxed">
            © 2024 极光资讯 Glacier AI News. 极寒光影，智慧未来.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">关于我们</a>
          <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">合作咨询</a>
          <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">隐私政策</a>
          <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">API接口</a>
          <a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">加入我们</a>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
            <Globe className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
            <Mail className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
            <Share2 className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
