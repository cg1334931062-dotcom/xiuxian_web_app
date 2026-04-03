import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import '../styles/globals.css';

// 导航栏组件
function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: '首页', path: '/' },
    { name: '世界观', path: '/worldview' },
    { name: '人物', path: '/characters' },
    { name: '时间线', path: '/timeline' },
    { name: '门派', path: '/sects' },
    { name: '搜索', path: '/search' },
  ];
  
  const isActive = (path: string) => router.pathname === path;
  
  return (
    <>
      <nav className="navbar" style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-color)',
        padding: 'var(--space-4) 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--space-6)',
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--gradient-immortal)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: 'var(--text-xl)',
            }}>
              凡
            </div>
            <div>
              <div style={{
                fontWeight: '700',
                fontSize: 'var(--text-lg)',
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                凡人修仙传
              </div>
              <div style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--text-tertiary)',
              }}>
                数据百科
              </div>
            </div>
          </div>
          
          {/* 桌面导航 */}
          <div className="desktop-nav" style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}>
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                style={{
                  padding: 'var(--space-2) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: isActive(item.path) ? '600' : '500',
                  color: isActive(item.path) ? 'var(--color-immortal-primary)' : 'var(--text-secondary)',
                  background: isActive(item.path) ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = 'rgba(14, 165, 233, 0.05)';
                    e.currentTarget.style.color = 'var(--color-immortal-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: 'transparent',
              cursor: 'pointer',
            }}
            aria-label="菜单"
          >
            <div style={{
              width: '20px',
              height: '2px',
              background: 'var(--text-primary)',
              position: 'relative',
              transition: 'all var(--transition-fast) var(--ease-in-out)',
            }}>
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'inherit',
                top: isMenuOpen ? '0' : '-6px',
                transform: isMenuOpen ? 'rotate(45deg)' : 'none',
                transition: 'inherit',
              }} />
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'inherit',
                top: isMenuOpen ? '0' : '6px',
                transform: isMenuOpen ? 'rotate(-45deg)' : 'none',
                transition: 'inherit',
              }} />
            </div>
          </button>
        </div>
        
        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
            padding: 'var(--space-4)',
            zIndex: 1000,
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
            }}>
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-base)',
                    fontWeight: isActive(item.path) ? '600' : '500',
                    color: isActive(item.path) ? 'var(--color-immortal-primary)' : 'var(--text-primary)',
                    background: isActive(item.path) ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* 响应式样式 */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          button[aria-label="菜单"] {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

// 页脚组件
function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: 'var(--space-12) 0 var(--space-8)',
      marginTop: 'var(--space-16)',
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 var(--space-6)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--space-8)',
        }}>
          {/* Logo和描述 */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-4)',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--gradient-immortal)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: 'var(--text-2xl)',
              }}>
                凡
              </div>
              <div>
                <div style={{
                  fontWeight: '700',
                  fontSize: 'var(--text-xl)',
                  background: 'var(--gradient-text)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  凡人修仙传百科
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  探索修仙世界的完整数据
                </div>
              </div>
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-sm)',
              maxWidth: '400px',
            }}>
              本网站提供《凡人修仙传》的完整数据查询，包括人物、境界、时间线、门派等详细信息，帮助读者更好地理解这个宏大的修仙世界。
            </p>
          </div>
          
          {/* 链接部分 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-8)',
          }}>
            <div>
              <h4 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)',
              }}>
                探索
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}>
                {['世界观', '人物', '时间线', '门派', '搜索'].map((item) => (
                  <a
                    key={item}
                    href={`/${item === '首页' ? '' : item.toLowerCase()}`}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--text-sm)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast) var(--ease-in-out)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-immortal-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)',
              }}>
                项目
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}>
                <a
                  href="https://github.com/cg1334931062-dotcom/xiuxian_web_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--text-sm)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast) var(--ease-in-out)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-immortal-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  GitHub 仓库
                </a>
                <div style={{
                  color: 'var(--text-tertiary)',
                  fontSize: 'var(--text-sm)',
                }}>
                  版本 1.0.0
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div style={{
          marginTop: 'var(--space-12)',
          paddingTop: 'var(--space-8)',
          borderTop: '1px solid var(--border-color)',
          textAlign: 'center',
          color: 'var(--text-tertiary)',
          fontSize: 'var(--text-sm)',
        }}>
          <p>
            © {new Date().getFullYear()} 凡人修仙传百科 · 数据基于公开资源整理 · 仅供学习交流使用
          </p>
          <p style={{ marginTop: 'var(--space-2)' }}>
            本网站与《凡人修仙传》原著作者无关，所有内容仅供参考
          </p>
        </div>
      </div>
    </footer>
  );
}

// 主布局组件
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>凡人修仙传百科 - 探索修仙世界</title>
        <meta name="description" content="《凡人修仙传》完整数据百科网站，提供人物、境界、时间线、门派等详细信息查询" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph 标签 */}
        <meta property="og:title" content="凡人修仙传百科" />
        <meta property="og:description" content="探索《凡人修仙传》修仙世界的完整数据百科" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xiuxian-web-app.vercel.app" />
        
        {/* Twitter 卡片 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="凡人修仙传百科" />
        <meta name="twitter:description" content="探索《凡人修仙传》修仙世界的完整数据百科" />
      </Head>
      
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar />
        <main style={{
          flex: 1,
          padding: 'var(--space-8) 0',
        }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;