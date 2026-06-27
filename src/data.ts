import { Project, SkillCategory, TimelineItem, Statistic, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 'catalyst-ml',
    title: 'CatalystML: Deep Screening Framework',
    description: 'A deep learning platform that predicts chemical catalyst activity and selectivity, accelerating screening of porous materials for carbon capture.',
    longDescription: 'CatalystML bridges molecular chemistry and modern AI. Developed to address the slow turnaround of traditional laboratory catalyst discovery, this software uses Graph Neural Networks (GNNs) to predict transition states, adsorption energies, and reaction kinetics of metal-organic frameworks (MOFs) and heterogeneous catalysts.',
    category: 'AI',
    tags: ['Graph Neural Networks', 'Catalysis', 'Python', 'PyTorch', 'PyG'],
    image: 'https://picsum.photos/seed/catalyst/800/600',
    githubUrl: 'https://github.com/nihar-ce-ai/catalyst-ml',
    liveUrl: 'https://catalyst-ml-demo.vercel.app',
    featured: true,
    metrics: '94% Prediction Accuracy'
  },
  {
    id: 'distill-flow',
    title: 'DistillFlow: Real-time Distillation RL',
    description: 'A reinforcement learning agent that dynamically adjusts reflux ratios and heat duties in fractional distillation columns to optimize purity and energy efficiency.',
    longDescription: 'Fractional distillation is highly energy-intensive. DistillFlow introduces an intelligent double-deep Q-network (DDQN) agent that runs atop transient process simulations. It learns to stabilize temperature profiles across column stages during feed composition upsets, achieving high-purity separations while minimizing steam consumption.',
    category: 'Engineering',
    tags: ['Reinforcement Learning', 'Process Dynamics', 'Thermodynamics', 'React', 'FastAPI'],
    image: 'https://picsum.photos/seed/distill/800/600',
    githubUrl: 'https://github.com/nihar-ce-ai/distill-flow',
    liveUrl: 'https://distillflow-demo.vercel.app',
    featured: true,
    metrics: '14.2% Steam Reduction'
  },
  {
    id: 'thermopy-gnn',
    title: 'ThermoPy: Molecular Thermodynamics Engine',
    description: 'An open-source Python engine and interactive dashboard utilizing molecular graph structures to predict fluid properties and phase equilibria (VLE/LLE).',
    longDescription: 'ThermoPy replaces traditional, computationally heavy equation-of-state parameters (like Peng-Robinson or UNIQUAC) with learned molecular representations. Using SMILES inputs, users can query vapor-liquid equilibrium (VLE) curves, bubble points, and heat capacities with instant neural inferences.',
    category: 'Software',
    tags: ['Python', 'Thermodynamics', 'GNN', 'React', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/thermopy/800/600',
    githubUrl: 'https://github.com/nihar-ce-ai/thermopy-gnn',
    liveUrl: 'https://thermopy.io',
    featured: true,
    metrics: 'Instant Phase Prediction'
  },
  {
    id: 'ecobalance-canvas',
    title: 'EcoBalance: Sustainable Process LCA',
    description: 'An interactive canvas-based material balance and Life Cycle Assessment (LCA) tool designed for evaluating chemical process sustainability.',
    longDescription: 'EcoBalance allows process engineers to visually map raw material streams, recycle loops, and energy inputs. By coupling block flow diagrams with environmental impact databases, it generates instant carbon footprint profiles and waste-stream reports during the initial design phase.',
    category: 'Engineering',
    tags: ['Process Design', 'Material Balance', 'LCA', 'Canvas API', 'TypeScript'],
    image: 'https://picsum.photos/seed/ecobalance/800/600',
    githubUrl: 'https://github.com/nihar-ce-ai/ecobalance',
    liveUrl: 'https://ecobalance-lca.app',
    featured: false,
    metrics: 'Full Scope 1, 2, 3 Reporting'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    iconName: 'Cpu',
    skills: [
      'Machine Learning',
      'Neural Networks & GNNs',
      'Prompt Engineering',
      'Large Language Models',
      'Workflow Automation',
      'Data Analysis & Pandas',
      'Scikit-learn / PyTorch'
    ]
  },
  {
    title: 'Engineering & Science',
    iconName: 'Beaker',
    skills: [
      'Chemical Engineering',
      'Process Design & Simulation',
      'Chemical Thermodynamics',
      'Fluid Mechanics',
      'Material & Energy Balances',
      'Kinetics & Reactor Design',
      'Transport Phenomena'
    ]
  },
  {
    title: 'Programming & Software',
    iconName: 'Code',
    skills: [
      'Python (SciPy/NumPy)',
      'C++',
      'TypeScript / JavaScript',
      'React & Next.js',
      'Tailwind CSS & Framer Motion',
      'REST APIs & Backend Dev',
      'Git / CI-CD Version Control'
    ]
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: 'edu-1',
    year: '2024 - Present',
    title: 'Chemical Engineering Student',
    institution: 'Penn State University (PSU)',
    description: 'Pursuing a Bachelor of Science in Chemical Engineering with a concentration in Process Systems Engineering and Artificial Intelligence. Deepening knowledge in thermodynamics, fluid mechanics, and reactor design while leading AI-driven modeling research.',
    type: 'education',
    iconName: 'GraduationCap'
  },
  {
    id: 'exp-1',
    year: 'Summer 2025',
    title: 'Process Automation & Systems Intern',
    institution: 'Apex Chemical Technologies',
    description: 'Designed and simulated refinery control loops and safety systems. Integrated custom Python scripts with Aspen Plus simulation runs to optimize reactor heat transfer, reducing computational analysis time by 35% and improving modeling fidelity.',
    type: 'experience',
    iconName: 'Briefcase'
  },
  {
    id: 'cert-1',
    year: '2025',
    title: 'Deep Learning & Neural Networks Certification',
    institution: 'DeepLearning.AI',
    description: 'Advanced coursework in hyperparameter tuning, structuring machine learning projects, convolutional networks, sequence models, and graph-based representations.',
    type: 'certification',
    iconName: 'Award'
  },
  {
    id: 'edu-2',
    year: 'Future Goals',
    title: 'AI-Enhanced Sustainable Processes',
    institution: 'Research & Leadership',
    description: 'Aiming to spearhead next-generation sustainable process systems at the intersection of molecular chemistry and AI. Focus areas include machine-learned catalyst synthesis, carbon sequestration networks, and fully automated bio-reactors.',
    type: 'education',
    iconName: 'Sparkles'
  }
];

export const statistics: Statistic[] = [
  {
    label: 'Core Projects',
    value: 12,
    suffix: '+',
    description: 'AI-infused and chemical process systems'
  },
  {
    label: 'Certifications',
    value: 6,
    suffix: '',
    description: 'In engineering and advanced machine learning'
  },
  {
    label: 'Technologies',
    value: 18,
    suffix: '+',
    description: 'Mastered programming, design and modeling tools'
  },
  {
    label: 'GitHub Commits',
    value: 840,
    suffix: '+',
    description: 'Contributions and open-source models in 2025-2026'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Sarah Sterling',
    role: 'Associate Professor of Chemical Engineering',
    company: 'Penn State University',
    content: 'Nihar possesses a rare and brilliant intellectual intersection: absolute rigor in transport thermodynamics and chemical process physics, alongside high fluency in deep machine learning. His research models in Graph Neural Networks have redefined how we screen heterogeneous catalysts in our laboratory group.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Principal Systems Architect',
    company: 'Apex Chemical Technologies',
    content: 'During his time with us, Nihar engineered an elegant interface connecting our process simulation pipeline with real-time deep learning estimators. He acts as a bridge between pure software paradigms and industrial engineering, delivering Vercel-grade quality to standard thermodynamic control problems.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Founder & AI Lead',
    company: 'SustainaLabs AI',
    content: 'Nihar is one of the most proactive student builders I have encountered. He does not just write code; he carefully architects visual interfaces with premium detail and understands how user interaction guides data science. An absolute rising star at the crossroads of green energy and intelligent software.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120'
  }
];
