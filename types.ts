@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@import "tailwindcss";

@theme {
  --color-background: #0a0e1a;
  --color-on-background: #e0e8f0;
  --color-primary: #7dd3fc;
  --color-on-primary: #001f2e;
  --color-secondary: #88b4cc;
  --color-tertiary: #c8a0f0;
  --color-surface: #0f1524;
  --color-surface-variant: #1a2438;
  --color-outline: #4a6070;
  --color-outline-variant: #2a3a48;
}

@layer base {
  body {
    @apply bg-background text-on-background antialiased selection:bg-primary/30;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
}

@layer components {
  .glass-panel {
    @apply bg-[#0f1524]/60 backdrop-blur-lg border border-primary/10;
  }
  
  .glass-elevated {
    @apply bg-[#0f1524]/75 backdrop-blur-xl border border-primary/15;
  }

  .glow-primary {
    @apply shadow-[0_0_30px_rgba(125,211,252,0.05)];
  }
}
