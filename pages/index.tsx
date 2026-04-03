import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const features = [
    {
      title: '完整人物数据',
      description: '收录《凡人修仙传》所有重要角色，包括韩立、南宫婉、墨大夫等，详细记录境界、门派、法宝等信息。',
      icon: '👤',
      color: 'var(--color-immortal-primary)',
      link: '/characters',
    },
    {
      title: '修仙境界体系',
      description: '从炼气期到道祖境，完整展示13个修仙境界的详细说明、能力特点和突破难度。',
      icon: '⚡',
      color: 'var(--color-success)',
      link: '/worldview',
    },
    {
      title: '剧情时间线',
      description: '按时间顺序整理人界篇、灵界篇、仙界篇的重要事件，帮助理解剧情发展脉络。',
      icon: '📜',
      color: 'var(--color-immortal-accent)',
      link: '/timeline',
    },
    {
      title: '门派势力',
      description: '黄枫谷、掩月宗、灵兽山等10大门派详细资料，包括实力、地域和特色介绍。',
      icon: '🏛️',
      color: 'var(--color-warning)',
      link: '/sects',
    },
    {
      title: '功法体系',
      description: '长春功、青元剑诀、梵圣真魔功等完整功法数据，包含属性、难度、兼容性分析。',
      icon: '📚',
      color: 'var(--color-success)',
      link: '/techniques',
    },
    {
      title: '法宝法器',
      description: '掌天瓶、青竹蜂云剑、虚天鼎等强大法宝数据，包含威力、珍贵程度、炼制方法。',
      icon: '⚔️',
      color: 'var(--color-danger)',
      link: '/treasures',
    },
    {
      title: '丹药灵药',
      description: '筑基丹、结金丹、元婴丹等完整丹药数据，包含功效、炼制难度、材料配方。',
      icon: '💊',
      color: 'var(--color-purple)',
      link: '/pills',
    },
    {
      title: '妖兽灵兽',
      description: '墨蛟、冰凤、噬金虫等妖兽数据，包含能力、栖息地、驯服难度、进化路径。',
      icon: '🐉',
      color: 'var(--color-orange)',
      link: '/beasts',
    },
    {
      title: '智能搜索',
      description: '强大的全文搜索功能，支持关键词搜索、高级筛选和相关性排序，快速找到所需信息。',
      icon: '🔍',
      color: 'var(--color-info)',
      link: '/search',
    },
    {
      title: '持续更新',
      description: '数据持续扩展中，计划收录功法、法宝、地点等更多内容，打造最完整的修仙百科。',
      icon: '🔄',
      color: 'var(--color-immortal-secondary)',
      link: '/search',
    },
  ];

  const stats = [
    { label: '人物数量', value: '16+', description: '核心角色' },
    { label: '修仙境界', value: '13', description: '完整体系' },
    { label: '时间线事件', value: '30+', description: '重要节点' },
    { label: '门派势力', value: '10', description: '详细资料' },
  ];

  return (
    <div>
      {/* 英雄区域 */}
      <section style={{
        padding: 'var(--space-16) 0 var(--space-24)',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* 背景装饰 */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        }} />
        
        <div className="container" style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--space-6)',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {/* 标签 */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-4)',
              background: 'rgba(14, 165, 233, 0.1)',
              borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--space-6)',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--color-immortal-primary)',
                borderRadius: '50%',
                animation: 'glow 2s ease-in-out infinite',
              }} />
              <span style={{
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
                color: 'var(--color-immortal-primary)',
              }}>
                探索修仙世界
              </span>
            </div>
            
            {/* 主标题 */}
            <h1 style={{
              fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'var(--space-6)',
              background: 'var(--gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              凡人修仙传
              <br />
              <span style={{ fontSize: '0.8em' }}>数据百科</span>
            </h1>
            
            {/* 副标题 */}
            <p style={{
              fontSize: 'clamp(var(--text-lg), 2vw, var(--text-xl))',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6',
            }}>
              收录完整的《凡人修仙传》数据，包括人物、境界、时间线、门派等详细信息，助你深入探索这个宏大的修仙世界。
            </p>
            
            {/* 行动按钮 */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              marginBottom: 'var(--space-12)',
            }}>
              <Link
                href="/characters"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--space-4) var(--space-8)',
                  background: 'var(--gradient-immortal)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  fontWeight: '600',
                  fontSize: 'var(--text-base)',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-lg)',
                  transition: 'all var(--transition-normal) var(--ease-in-out)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
              >
                开始探索 →
              </Link>
              
              <Link
                href="/search"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--space-4) var(--space-8)',
                  background: 'white',
                  color: 'var(--color-immortal-primary)',
                  borderRadius: 'var(--radius-lg)',
                  fontWeight: '600',
                  fontSize: 'var(--text-base)',
                  textDecoration: 'none',
                  border: '2px solid var(--color-immortal-primary)',
                  transition: 'all var(--transition-normal) var(--ease-in-out)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-immortal-primary)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = 'var(--color-immortal-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                🔍 快速搜索
              </Link>
            </div>
            
            {/* 数据统计 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--space-6)',
              maxWidth: '500px',
              margin: '0 auto',
            }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                    padding: 'var(--space-4)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    transition: 'all var(--transition-normal) var(--ease-in-out)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <div style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: '800',
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: 'var(--space-1)',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-1)',
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-tertiary)',
                  }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 功能特性区域 */}
      <section style={{
        padding: 'var(--space-16) 0',
        background: 'var(--bg-secondary)',
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--space-6)',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--space-12)',
          }}>
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: '700',
              marginBottom: 'var(--space-4)',
              color: 'var(--text-primary)',
            }}>
              完整功能特性
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              从基础数据查询到高级搜索分析，我们提供全方位的《凡人修仙传》数据探索体验
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-6)',
          }}>
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'var(--space-6)',
                  background: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-normal) var(--ease-in-out)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = feature.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${feature.color}20`,
                    color: feature.color,
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--text-xl)',
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    flex: 1,
                  }}>
                    {feature.title}
                  </h3>
                  <div style={{
                    color: 'var(--text-tertiary)',
                    fontSize: 'var(--text-lg)',
                  }}>
                    →
                  </div>
                </div>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-base)',
                  lineHeight: '1.6',
                }}>
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA区域 */}
      <section style={{
        padding: 'var(--space-16) 0',
        background: 'linear-gradient(135deg, var(--color-immortal-dark) 0%, #0f172a 100%)',
        color: 'white',
      }}>
        <div className="container" style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 var(--space-6)',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: 'var(--text-3xl)',
            fontWeight: '700',
            marginBottom: 'var(--space-4)',
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            开始你的修仙之旅
          </h2>
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-tertiary)',
            marginBottom: 'var(--space-8)',
            opacity: 0.9,
          }}>
            无论是重温经典剧情，还是深入研究修仙体系，这里都有你需要的一切信息。
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            justifyContent: 'center',
          }}>
            <Link
              href="/characters"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-4) var(--space-8)',
                background: 'var(--gradient-immortal)',
                color: 'white',
                borderRadius: 'var(--radius-lg)',
                fontWeight: '600',
                fontSize: 'var(--text-base)',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-lg)',
                transition: 'all var(--transition-normal) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
            >
              浏览所有人物
            </Link>
            
            <Link
              href="/timeline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-4) var(--space-8)',
                background: 'transparent',
                color: 'white',
                borderRadius: 'var(--radius-lg)',
                fontWeight: '600',
                fontSize: 'var(--text-base)',
                textDecoration: 'none',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all var(--transition-normal) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              查看时间线
            </Link>
          </div>
        </div>
      </section>
      
      {/* 响应式样式 */}
      <style jsx>{`
        @media (min-width: 768px) {
          section:first-child .container > div > div:last-child {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          
          section:nth-child(2) .container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (min-width: 1024px) {
          section:nth-child(2) .container > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;