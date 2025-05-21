import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 固定在顶部的导航栏 */}
      <header className="bg-white border-b z-10 shadow-sm fixed w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">彭世雄</span>
            </div>
            <nav className="flex items-center space-x-8">
              <Link 
                href="#hero" 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                首页
              </Link>
              <Link 
                href="#projects" 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                项目
              </Link>
              <Link 
                href="#skills" 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                技能
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                联系我
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 内容区域，为固定导航栏预留空间 */}
      <main className="flex-1 pt-16">
        {/* 首页 - 个人介绍区 (Hero Section) */}
        <section 
          id="hero" 
          className="bg-gradient-to-r from-gray-50 to-blue-50 py-20 md:py-32 min-h-[80vh] flex items-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hi，我是彭世雄，一名专注于AI应用开发的计算机专业生
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              毕业于东北大学信息安全专业，熟悉Python、Next.js，擅长将AI技术应用到实际问题中，有丰富的项目开发经验
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-all hover:translate-y-[-2px]"
              >
                查看项目
              </a>
              <a 
                href="/Resume_张三.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-all hover:translate-y-[-2px]"
                download
              >
                下载简历
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-primary border border-primary rounded-lg font-medium hover:bg-blue-50 transition-all hover:translate-y-[-2px]"
              >
                联系我
              </a>
            </div>
          </div>
        </section>

        {/* 项目展示区 (Projects Section) */}
        <section 
          id="projects" 
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">项目展示</h2>
            <div className="space-y-8">
              {/* 项目卡片 1 */}
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI简历优化助手</h3>
                  <p className="text-gray-600 mb-6">
                    基于大语言模型的简历优化工具，帮助求职者改进简历内容，提升求职成功率。智能分析简历内容，提供针对性的修改建议，优化关键词和表达方式。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">Next.js</span>
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">OpenAI API</span>
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">Tailwind CSS</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://ai345.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm px-5 py-2.5 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Demo
                    </a>
                    <a 
                      href="https://github.com/849261680/AI_Resume" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm px-5 py-2.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 项目卡片 2 */}
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">RAG企业知识库问答系统</h3>
                  <p className="text-gray-600 mb-6">
                    基于检索增强生成（RAG）的企业知识库问答系统，实现高效精准的企业内部信息检索与问答。融合向量数据库和大语言模型，通过智能检索和上下文理解，为企业员工提供准确、实时的知识库信息查询服务。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">Python</span>
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">LangChain</span>
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">FastAPI</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://ai345.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm px-5 py-2.5 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Demo
                    </a>
                    <a 
                      href="https://github.com/yourusername/recommendation-system" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm px-5 py-2.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 项目卡片 3 */}
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">智能聊天机器人</h3>
                  <p className="text-gray-600 mb-6">
                    基于大语言模型的客服聊天机器人，支持多轮对话和知识库检索。集成业务知识库，实现自动应答、问题解析及精准回复，大幅提升客服效率和用户满意度。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">React</span>
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">Node.js</span>
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-md text-sm">OpenAI API</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="https://ai345.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm px-5 py-2.5 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Demo
                    </a>
                    <a 
                      href="https://github.com/yourusername/chatbot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm px-5 py-2.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技能展示区 (Skills Section) */}
        <section 
          id="skills" 
          className="py-20 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">技能展示</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 语言 */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">语言</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Python</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">JavaScript</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">TypeScript</span>
                  </div>
                </div>
              </div>
              
              {/* 框架 */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">框架</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Next.js</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">React</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">TensorFlow</span>
                  </div>
                </div>
              </div>
              
              {/* 工具 */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1v-3a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">工具</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Git</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Docker</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Vercel</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 联系方式区 (Contact Section) */}
        <section 
          id="contact" 
          className="py-20 bg-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">联系我</h2>
            <p className="text-xl text-gray-600 mb-10">感兴趣的话联系我吧！</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a 
                href="mailto:email@example.com" 
                className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all"
              >
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 mb-1">邮箱</div>
                  <div className="text-gray-900">psx849261680@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/849261680" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all"
              >
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 mb-1">GitHub</div>
                  <div className="text-gray-900">github.com/849261680</div>
                </div>
              </a>
              
              <div 
                className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all"
              >
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.243.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.29.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.831.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.587 0-1.063-.476-1.063-1.064s.476-1.063 1.063-1.063 1.064.476 1.064 1.063-.477 1.064-1.064 1.064zm4.465 0c-.586 0-1.062-.476-1.062-1.064s.476-1.063 1.062-1.063c.588 0 1.064.476 1.064 1.063s-.477 1.064-1.064 1.064zm-8.87 0c-.587 0-1.063-.476-1.063-1.064s.476-1.063 1.063-1.063 1.063.476 1.063 1.063-.476 1.064-1.063 1.064z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 mb-1">微信</div>
                  <div className="text-gray-900">WeChat ID: psxx_xx</div>
                </div>
              </div>
              
              <a 
                href="tel:+8612345678910" 
                className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all"
              >
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500 mb-1">电话</div>
                  <div className="text-gray-900">+86 18980162782</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <div className="text-lg font-semibold mb-4">彭世雄的个人网站</div>
            <div className="flex justify-center space-x-6">
              <Link href="#hero" className="text-gray-300 hover:text-white transition-colors">首页</Link>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">项目</Link>
              <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">技能</Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">联系我</Link>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} 彭世雄. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 页面切换平滑滚动脚本 */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
      `}} />
    </div>
  );
}
