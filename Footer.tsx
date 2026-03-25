import React from 'react';
import { Tool } from '../types';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const Icon = (Icons as any)[tool.icon] || Icons.HelpCircle;

  if (tool.isPro) {
    return (
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="glass-elevated group rounded-xl p-6 relative overflow-hidden border-primary/20 md:col-span-2 xl:col-span-1"
      >
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/10 blur-[64px] rounded-full"></div>
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(125,211,252,0.4)]">
            <Icon className="text-on-primary w-6 h-6" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-primary text-on-primary px-2 py-1 rounded-full">
            Pro Recommendation
          </span>
        </div>
        <h4 className="text-xl font-bold text-on-surface mb-2 relative z-10">{tool.name}</h4>
        <p className="text-sm text-slate-400 mb-6 relative z-10">
          {tool.description}
        </p>
        <div className="flex items-center gap-4 relative z-10">
          <button className="flex-1 bg-primary/20 border border-primary/30 text-primary py-2 rounded-lg text-sm font-bold hover:bg-primary/30 transition-all active:scale-95">
            查看评测
          </button>
          <button className="flex-1 bg-primary text-on-primary py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/80 transition-all active:scale-95">
            官方渠道
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-panel group rounded-xl p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(125,211,252,0.1)]"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradientFrom || 'from-surface-variant'} to-surface flex items-center justify-center border border-primary/10 shadow-inner`}>
          <Icon className="text-primary w-6 h-6" />
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
          {tool.category}
        </span>
      </div>
      
      <h4 className="text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
        {tool.name}
      </h4>
      <p className="text-sm text-slate-400 line-clamp-2 mb-4">
        {tool.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
        {tool.authorInitials ? (
          <div className="flex -space-x-2">
            {tool.authorInitials.map((initial, i) => (
              <div 
                key={i}
                className={`w-6 h-6 rounded-full border border-background flex items-center justify-center text-[10px] font-bold ${
                  i === 0 ? 'bg-slate-800' : 'bg-sky-900'
                }`}
              >
                {initial}
              </div>
            ))}
          </div>
        ) : tool.rating ? (
          <div className="flex items-center gap-1 text-slate-400">
            <Icons.Star className="w-3 h-3 fill-current text-primary" />
            <span className="text-xs">{tool.rating} ({tool.reviews})</span>
          </div>
        ) : tool.tags ? (
          <div className="flex items-center gap-1 text-slate-400 text-[10px]">
            {tool.tags.map(tag => (
              <span key={tag} className="px-1.5 py-0.5 rounded bg-surface border border-outline-variant">{tag}</span>
            ))}
          </div>
        ) : tool.status ? (
          <span className={`text-[10px] px-2 py-0.5 rounded ${
            tool.status === 'Early Access' ? 'bg-red-500/10 text-red-400' : 'text-slate-500 font-mono italic'
          }`}>
            {tool.status}
          </span>
        ) : (
          <div />
        )}

        <button className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
          立即访问 <Icons.ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};

export default ToolCard;
