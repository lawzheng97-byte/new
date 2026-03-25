export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tags?: string[];
  rating?: string;
  reviews?: string;
  authorInitials?: string[];
  isPro?: boolean;
  status?: string;
  gradientFrom?: string;
}

export const TOOLS: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT Plus',
    description: '由 OpenAI 开发的先进对话式 AI，支持 GPT-4 模型、多模态视觉理解及 DALL-E 3 集成。',
    category: 'Chatbot',
    icon: 'MessageSquare',
    authorInitials: ['JD', 'AL'],
    gradientFrom: 'from-sky-900/40',
  },
  {
    id: '2',
    name: 'Midjourney v6',
    description: '业界领先的艺术图像生成工具，以其电影级的质感和极高的审美标准著称。',
    category: 'Generator',
    icon: 'Palette',
    rating: '4.9',
    reviews: '2.1k',
    gradientFrom: 'from-purple-900/40',
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: '全球最受欢迎的 AI 编程助手，提供实时代码补全、测试生成和聊天问答功能。',
    category: 'Coding',
    icon: 'Code2',
    tags: ['VS Code', 'IntelliJ'],
    gradientFrom: 'from-blue-900/40',
  },
  {
    id: '4',
    name: 'Claude 3.5 Sonnet',
    description: 'Anthropic 推出的新一代模型，以其极高的逻辑推理能力和接近人类的自然对话而闻名。',
    category: 'LLM',
    icon: 'BrainCircuit',
    status: 'Recently Updated',
  },
  {
    id: '5',
    name: 'Runway Gen-3 Alpha',
    description: '下一代视频生成 AI，能够从文本或图像生成极具现实感且符合物理规律的高质量视频。',
    category: 'Video',
    icon: 'Video',
    status: 'Early Access',
  },
  {
    id: '6',
    name: 'Notion AI',
    description: '深度集成在工作流中的 AI 助手，能够帮你总结会议纪要、润色文案、提取待办事项以及构建数据库。',
    category: 'Pro Recommendation',
    icon: 'Sparkles',
    isPro: true,
  },
];

export const CATEGORIES = [
  { name: '全部工具', icon: 'LayoutGrid', count: 128, active: true },
  { name: '聊天机器人', icon: 'Bot', count: 24 },
  { name: '图像生成', icon: 'Image', count: 36 },
  { name: '编程助手', icon: 'Terminal', count: 18 },
  { name: '视频剪辑', icon: 'Film', count: 15 },
  { name: '音频创作', icon: 'Music', count: 12 },
];

export const HOT_LIST = [
  { rank: 1, name: 'ChatGPT', views: '42.5k' },
  { rank: 2, name: 'Midjourney', views: '38.2k' },
  { rank: 3, name: 'GitHub Copilot', views: '31.9k' },
];
