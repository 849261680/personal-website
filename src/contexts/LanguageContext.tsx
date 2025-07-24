'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 语言内容配置
const translations = {
  zh: {
    // 导航
    'nav.home': '首页',
    'nav.projects': '项目',
    'nav.skills': '技能',
    'nav.contact': '联系我',
    
    // 首页内容
    'hero.title': 'Hi，我是彭世雄，一位信仰AGI的Agent开发者。',
    'hero.subtitle': '毕业于东北大学软件学院，熟悉Python、Fast API、LangChain,长将AI技术应用到实际问题中，有丰富的项目开发经验',
    'hero.viewProjects': '查看项目',
    'hero.downloadResume': '下载简历',
    'hero.contactMe': '联系我',
    
    // 项目展示
    'projects.title': '项目展示',
    'projects.chatResume.title': 'Chat Resume',
    'projects.chatResume.description': '直接与AI交流获取简历的针对性优化建议，并且在线编辑和预览简历，提升您的简历竞争力。',
    'projects.researchAgent.title': 'Deep Research Agent',
    'projects.researchAgent.description': '基于大语言模型的智能研究助手平台，能够深度分析和研究各种主题。支持多维度信息收集、智能分析和报告生成，为用户提供全面深入的研究结果和洞察。',
    'projects.ragSystem.title': 'DocPal',
    'projects.ragSystem.description': '基于检索增强生成（RAG）的企业知识库问答系统，实现高效精准的企业内部信息检索与问答。融合向量数据库和大语言模型，通过智能检索和上下文理解，为企业员工提供准确、实时的知识库信息查询服务。',
    'projects.demo': 'Demo',
    'projects.github': 'GitHub',
    
    // 技能展示
    'skills.title': '技能展示',
    'skills.languages': '语言',
    'skills.frameworks': '框架',
    'skills.tools': '工具',
    
    // 联系方式
    'contact.title': '联系我',
    'contact.subtitle': '感兴趣的话联系我吧！',
    'contact.email': '邮箱',
    'contact.github': 'GitHub',
    'contact.wechat': '微信',
    'contact.phone': '电话',
    
    // 页脚
    'footer.title': '彭世雄的个人网站',
    'footer.rights': 'All rights reserved.',
    
    // 语言切换
    'language.switch': 'English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero content
    'hero.title': 'Hi, I\'m Peng Shixiong, an Agent developer who believes in AGI.',
    'hero.subtitle': 'Graduated from School of Software, Northeastern University, proficient in Python, FastAPI, LangChain, and experienced in applying AI technology to real-world problems with rich project development experience.',
    'hero.viewProjects': 'View Projects',
    'hero.downloadResume': 'Download Resume',
    'hero.contactMe': 'Contact Me',
    
    // Projects
    'projects.title': 'Projects',
    'projects.chatResume.title': 'Chat Resume',
    'projects.chatResume.description': 'Get targeted resume optimization suggestions by chatting directly with AI, with online editing and preview capabilities to enhance your resume competitiveness.',
    'projects.researchAgent.title': 'Deep Research Agent',
    'projects.researchAgent.description': 'An intelligent research assistant platform based on large language models, capable of in-depth analysis and research on various topics. Supports multi-dimensional information collection, intelligent analysis, and report generation, providing users with comprehensive and insightful research results.',
    'projects.ragSystem.title': 'DocPal',
    'projects.ragSystem.description': 'An enterprise knowledge base Q&A system based on Retrieval-Augmented Generation (RAG), achieving efficient and accurate enterprise internal information retrieval and Q&A. Integrating vector databases and large language models, it provides accurate and real-time knowledge base information query services for enterprise employees through intelligent retrieval and context understanding.',
    'projects.demo': 'Demo',
    'projects.github': 'GitHub',
    
    // Skills
    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks',
    'skills.tools': 'Tools',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Feel free to reach out if you\'re interested!',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.wechat': 'WeChat',
    'contact.phone': 'Phone',
    
    // Footer
    'footer.title': 'Peng Shixiong\'s Personal Website',
    'footer.rights': 'All rights reserved.',
    
    // Language switch
    'language.switch': '中文',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  // 从 localStorage 读取语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // 保存语言设置到 localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // 翻译函数
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}