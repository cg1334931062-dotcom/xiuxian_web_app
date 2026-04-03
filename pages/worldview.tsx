import React, { useState } from 'react';
import Link from 'next/link';
import { cultivationLevels, getLevelProgress } from '../data/cultivationLevels';

const WorldviewPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('炼气期');
  
  const currentLevel = cultivationLevels.find(level => level.name === selectedLevel);
  const progress = currentLevel ? getLevelProgress(currentLevel.id) : 0;
  
  // 境界分类
  const mortalLevels = cultivationLevels.filter(level => level.category === '凡人');
  const immortalLevels = cultivationLevels.filter(level => level.category === '仙人');
  const supremeLevels = cultivationLevels.filter(level => level.category === '至高');
  
  return (
    <div>
      {/* 页面标题区域 */}
      <section style={{
        padding: 'var(--space-12) 0 var(--space-16)',
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
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
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
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--space-6)',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--color-success)',
                borderRadius: '50%',
                animation: 'glow 2s ease-in-out infinite',
              }} />
              <span style={{
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
                color: 'var(--color-success)',
              }}>
                修仙体系
              </span>
            </div>
            
            {/* 主标题 */}
            <h1 style={{
              fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-4xl))',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'var(--space-6)',
              background: 'linear-gradient(90deg, var(--color-success), var(--color-immortal-primary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              修仙境界体系
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
              探索《凡人修仙传》完整的修仙境界体系，从炼气期到道祖境，了解每个境界的特点、能力和修炼要点。
            </p>
            
            {/* 导航按钮 */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              justifyContent: 'center',
            }}>
              <button
                onClick={() => setSelectedLevel('炼气期')}
                style={{
                  padding: 'var(--space-3) var(--space-6)',
                  background: selectedLevel === '炼气期' ? 'var(--color-success)' : 'rgba(16, 185, 129, 0.1)',
                  color: selectedLevel === '炼气期' ? 'white' : 'var(--color-success)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                凡人境界
              </button>
              <button
                onClick={() => setSelectedLevel('化神期')}
                style={{
                  padding: 'var(--space-3) var(--space-6)',
                  background: selectedLevel === '化神期' ? 'var(--color-immortal-primary)' : 'rgba(14, 165, 233, 0.1)',
                  color: selectedLevel === '化神期' ? 'white' : 'var(--color-immortal-primary)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                仙人境界
              </button>
              <button
                onClick={() => setSelectedLevel('大乘期')}
                style={{
                  padding: 'var(--space-3) var(--space-6)',
                  background: selectedLevel === '大乘期' ? 'var(--color-immortal-accent)' : 'rgba(139, 92, 246, 0.1)',
                  color: selectedLevel === '大乘期' ? 'white' : 'var(--color-immortal-accent)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                至高境界
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 主要内容区域 */}
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
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-8)',
          }}>
            {/* 当前选中境界详情 */}
            {currentLevel && (
              <div className="card-immortal" style={{
                padding: 'var(--space-8)',
                marginBottom: 'var(--space-8)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-6)',
                  flexWrap: 'wrap',
                  gap: 'var(--space-4)',
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-2)',
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--gradient-immortal)',
                        color: 'white',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--text-xl)',
                        fontWeight: '700',
                      }}>
                        {currentLevel.emoji}
                      </div>
                      <div>
                        <h2 style={{
                          fontSize: 'var(--text-3xl)',
                          fontWeight: '700',
                          color: 'var(--text-primary)',
                        }}>
                          {currentLevel.name}
                        </h2>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)',
                        }}>
                          <span style={{
                            padding: 'var(--space-1) var(--space-3)',
                            background: currentLevel.category === '凡人' ? 'rgba(16, 185, 129, 0.1)' : 
                                      currentLevel.category === '仙人' ? 'rgba(14, 165, 233, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                            color: currentLevel.category === '凡人' ? 'var(--color-success)' : 
                                  currentLevel.category === '仙人' ? 'var(--color-immortal-primary)' : 'var(--color-immortal-accent)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-xs)',
                            fontWeight: '600',
                          }}>
                            {currentLevel.category}境界
                          </span>
                          <span style={{
                            color: 'var(--text-tertiary)',
                            fontSize: 'var(--text-sm)',
                          }}>
                            第{currentLevel.order}层
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 进度条 */}
                  <div style={{
                    flex: 1,
                    maxWidth: '300px',
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 'var(--space-2)',
                    }}>
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                      }}>
                        修炼进度
                      </span>
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        color: 'var(--color-immortal-primary)',
                      }}>
                        {progress}%
                      </span>
                    </div>
                    <div style={{
                      height: '8px',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-full)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${progress}%`,
                        background: 'var(--gradient-immortal)',
                        borderRadius: 'var(--radius-full)',
                        transition: 'width 1s ease-in-out',
                      }} />
                    </div>
                  </div>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 'var(--space-6)',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-3)',
                      color: 'var(--text-primary)',
                    }}>
                      境界特点
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                    }}>
                      {currentLevel.description}
                    </p>
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-4)',
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        寿命
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: '700',
                        color: 'var(--color-success)',
                      }}>
                        {currentLevel.lifespan}
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        突破难度
                      </h4>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-1)',
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '2px',
                              background: i < currentLevel.difficulty ? 'var(--color-warning)' : 'var(--bg-tertiary)',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        代表人物
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '500',
                        color: 'var(--text-primary)',
                      }}>
                        {currentLevel.representative}
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        关键功法
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '500',
                        color: 'var(--text-primary)',
                      }}>
                        {currentLevel.keyTechnique}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* 境界总览 */}
            <div>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: '700',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
              }}>
                完整境界体系
              </h2>
              
              {/* 凡人境界 */}
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)',
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--color-success)',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--text-lg)',
                  }}>
                    👤
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                  }}>
                    凡人境界
                  </h3>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: 'var(--space-4)',
                }}>
                  {mortalLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.name)}
                      style={{
                        textAlign: 'left',
                        padding: 'var(--space-4)',
                        background: selectedLevel === level.name ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-primary)',
                        border: selectedLevel === level.name ? '2px solid var(--color-success)' : '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-lg)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast) var(--ease-in-out)',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedLevel !== level.name) {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                          e.currentTarget.style.borderColor = 'var(--color-success)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedLevel !== level.name) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-3)',
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(16, 185, 129, 0.1)',
                          color: 'var(--color-success)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: 'var(--text-lg)',
                        }}>
                          {level.emoji}
                        </div>
                        <div>
                          <div style={{
                            fontSize: 'var(--text-base)',
                            fontWeight: '600',
                            color: selectedLevel === level.name ? 'var(--color-success)' : 'var(--text-primary)',
                          }}>
                            {level.name}
                          </div>
                          <div style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--text-tertiary)',
                          }}>
                            第{level.order}层 · {level.lifespan}
                          </div>
                        </div>
                      </div>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.4',
                        marginBottom: 'var(--space-2)',
                      }}>
                        {level.description.substring(0, 80)}...
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                        <span style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-tertiary)',
                        }}>
                          突破难度
                        </span>
                        <div style={{
                          display: 'flex',
                          gap: '2px',
                        }}>
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '1px',
                                background: i < level.difficulty ? 'var(--color-warning)' : 'var(--bg-tertiary)',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* 仙人境界 */}
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)',
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(14, 165, 233, 0.1)',
                    color: 'var(--color-immortal-primary)',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--text-lg)',
                  }}>
                    ⚡
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                  }}>
                    仙人境界
                  </h3>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: 'var(--space-4)',
                }}>
                  {immortalLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.name)}
                      style={{
                        textAlign: 'left',
                        padding: 'var(--space-4)',
                        background: selectedLevel === level.name ? 'rgba(14, 165, 233, 0.1)' : 'var(--bg-primary)',
                        border: selectedLevel === level.name ? '2px solid var(--color-immortal-primary)' : '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-lg)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast) var(--ease-in-out)',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedLevel !== level.name) {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                          e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedLevel !== level.name) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-3)',
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(14, 165, 233, 0.1)',
                          color: 'var(--color-immortal-primary)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: 'var(--text-lg)',
                        }}>
                          {level.emoji}
                        </div>
                        <div>
                          <div style={{
                            fontSize: 'var(--text-base)',
                            fontWeight: '600',
                            color: selectedLevel === level.name ? 'var(--color-immortal-primary)' : 'var(--text-primary)',
                          }}>
                            {level.name}
                          </div>
                          <div style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--text-tertiary)',
                          }}>
                            第{level.order}层 · {level.lifespan}
                          </div>
                        </div>
                      </div>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.4',
                        marginBottom: 'var(--space-2)',
                      }}>
                        {level.description.substring(0, 80)}...
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                        <span style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-tertiary)',
                        }}>
                          突破难度
                        </span>
                        <div style={{
                          display: 'flex',
                          gap: '2px',
                        }}>
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '1px',
                                background: i < level.difficulty ? 'var(--color-warning)' : 'var(--bg-tertiary)',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* 至高境界 */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-4)',
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(139, 92, 246, 0.1)',
                    color: 'var(--color-immortal-accent)',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--text-lg)',
                  }}>
                    👑
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                  }}>
                    至高境界
                  </h3>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: 'var(--space-4)',
                }}>
                  {supremeLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.name)}
                      style={{
                        textAlign: 'left',
                        padding: 'var(--space-4)',
                        background: selectedLevel === level.name ? 'rgba(139, 92, 246, 0.1)' : 'var(--bg-primary)',
                        border: selectedLevel === level.name ? '2px solid var(--color-immortal-accent)' : '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-lg)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast) var(--ease-in-out)',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedLevel !== level.name) {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                          e.currentTarget.style.borderColor = 'var(--color-immortal-accent)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedLevel !== level.name) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-3)',
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(139, 92, 246, 0.1)',
                          color: 'var(--color-immortal-accent)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: 'var(--text-lg)',
                        }}>
                          {level.emoji}
                        </div>
                        <div>
                          <div style={{
                            fontSize: 'var(--text-base)',
                            fontWeight: '600',
                            color: selectedLevel === level.name ? 'var(--color-immortal-accent)' : 'var(--text-primary)',
                          }}>
                            {level.name}
                          </div>
                          <div style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--text-tertiary)',
                          }}>
                            第{level.order}层 · {level.lifespan}
                          </div>
                        </div>
                      </div>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.4',
                        marginBottom: 'var(--space-2)',
                      }}>
                        {level.description.substring(0, 80)}...
                      </p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                        <span style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-tertiary)',
                        }}>
                          突破难度
                        </span>
                        <div style={{
                          display: 'flex',
                          gap: '2px',
                        }}>
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '1px',
                                background: i < level.difficulty ? 'var(--color-warning)' : 'var(--bg-tertiary)',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 底部导航 */}
      <section style={{
        padding: 'var(--space-8) 0',
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--space-6)',
        }}>
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
                padding: 'var(--space-3) var(--space-6)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-md)',
                fontWeight: '600',
                fontSize: 'var(--text-sm)',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
                transition: 'all var(--transition-fast) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-immortal-primary)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              👤 查看所有人物
            </Link>
            
            <Link
              href="/timeline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-3) var(--space-6)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-md)',
                fontWeight: '600',
                fontSize: 'var(--text-sm)',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
                transition: 'all var(--transition-fast) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-success)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'var(--color-success)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              📜 查看时间线
            </Link>
            
            <Link
              href="/sects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-3) var(--space-6)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-md)',
                fontWeight: '600',
                fontSize: 'var(--text-sm)',
                textDecoration: 'none',
                border: '1px solid var(--border-color)',
                transition: 'all var(--transition-fast) var(--ease-in-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-immortal-accent)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'var(--color-immortal-accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🏛️ 查看所有门派
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldviewPage;