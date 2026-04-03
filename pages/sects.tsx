import React, { useState } from 'react';
import Link from 'next/link';
import { sects, getSectById, getCharactersBySect } from '../data/characters';

const SectsPage: React.FC = () => {
  const [selectedSect, setSelectedSect] = useState<string>(sects[0].id);
  const [sortBy, setSortBy] = useState<'strength' | 'name'>('strength');
  const [viewMode, setViewMode] = useState<'detail' | 'grid'>('detail');

  // 获取选中的门派
  const currentSect = getSectById(selectedSect);
  
  // 获取该门派的人物
  const sectCharacters = currentSect ? getCharactersBySect(currentSect.name) : [];

  // 排序门派
  const sortedSects = [...sects].sort((a, b) => {
    if (sortBy === 'strength') {
      return b.strength - a.strength;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  // 获取实力等级颜色
  const getStrengthColor = (strength: number) => {
    if (strength >= 8) return 'var(--color-error)'; // 红色，实力强大
    if (strength >= 6) return 'var(--color-warning)'; // 橙色，实力较强
    if (strength >= 4) return 'var(--color-success)'; // 青色，实力中等
    return 'var(--color-immortal-primary)'; // 蓝色，实力一般
  };

  // 获取实力等级描述
  const getStrengthDescription = (strength: number) => {
    if (strength >= 8) return '顶尖势力';
    if (strength >= 6) return '强大势力';
    if (strength >= 4) return '中等势力';
    return '普通势力';
  };

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
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
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
              background: 'rgba(245, 158, 11, 0.1)',
              borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--space-6)',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--color-warning)',
                borderRadius: '50%',
                animation: 'glow 2s ease-in-out infinite',
              }} />
              <span style={{
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
                color: 'var(--color-warning)',
              }}>
                门派势力
              </span>
            </div>
            
            {/* 主标题 */}
            <h1 style={{
              fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-4xl))',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'var(--space-6)',
              background: 'linear-gradient(90deg, var(--color-warning), var(--color-success))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              门派势力图
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
              探索《凡人修仙传》中的各大门派势力，了解黄枫谷、掩月宗、灵兽山等门派的实力、地域和特色。
            </p>
            
            {/* 控制和视图切换 */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              marginBottom: 'var(--space-8)',
            }}>
              {/* 排序方式 */}
              <div style={{
                display: 'flex',
                gap: 'var(--space-2)',
              }}>
                <button
                  onClick={() => setSortBy('strength')}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: sortBy === 'strength' ? 'var(--color-warning)' : 'transparent',
                    color: sortBy === 'strength' ? 'white' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: sortBy === 'strength' ? 'none' : '1px solid var(--border-color)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                >
                  按实力排序
                </button>
                <button
                  onClick={() => setSortBy('name')}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: sortBy === 'name' ? 'var(--color-warning)' : 'transparent',
                    color: sortBy === 'name' ? 'white' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: sortBy === 'name' ? 'none' : '1px solid var(--border-color)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                >
                  按名称排序
                </button>
              </div>
              
              {/* 视图切换 */}
              <div style={{
                display: 'flex',
                gap: 'var(--space-2)',
              }}>
                <button
                  onClick={() => setViewMode('detail')}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: viewMode === 'detail' ? 'var(--color-immortal-primary)' : 'transparent',
                    color: viewMode === 'detail' ? 'white' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: viewMode === 'detail' ? 'none' : '1px solid var(--border-color)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                >
                  详情视图
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: viewMode === 'grid' ? 'var(--color-immortal-primary)' : 'transparent',
                    color: viewMode === 'grid' ? 'white' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: viewMode === 'grid' ? 'none' : '1px solid var(--border-color)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                >
                  网格视图
                </button>
              </div>
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
          {viewMode === 'detail' && currentSect ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-8)',
            }}>
              {/* 当前选中门派详情 */}
              <div className="card-immortal" style={{
                padding: 'var(--space-8)',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 'var(--space-8)',
                }}>
                  {/* 门派头部信息 */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 'var(--space-4)',
                  }}>
                    <div style={{
                      width: '120px',
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: getStrengthColor(currentSect.strength),
                      color: 'white',
                      borderRadius: 'var(--radius-xl)',
                      fontSize: 'var(--text-4xl)',
                      fontWeight: '700',
                      marginBottom: 'var(--space-2)',
                    }}>
                      {currentSect.emoji}
                    </div>
                    
                    <div>
                      <h2 style={{
                        fontSize: 'var(--text-3xl)',
                        fontWeight: '700',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-primary)',
                      }}>
                        {currentSect.name}
                      </h2>
                      <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--text-secondary)',
                        marginBottom: 'var(--space-4)',
                      }}>
                        {currentSect.title}
                      </p>
                    </div>
                    
                    {/* 实力标签 */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-2)',
                      justifyContent: 'center',
                    }}>
                      <span style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: `${getStrengthColor(currentSect.strength)}20`,
                        color: getStrengthColor(currentSect.strength),
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '600',
                      }}>
                        {getStrengthDescription(currentSect.strength)}
                      </span>
                      <span style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: 'var(--color-immortal-primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '600',
                      }}>
                        {currentSect.region}
                      </span>
                      <span style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--color-success)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '600',
                      }}>
                        {currentSect.era}
                      </span>
                    </div>
                  </div>
                  
                  {/* 实力进度条 */}
                  <div>
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
                        门派实力
                      </span>
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        color: getStrengthColor(currentSect.strength),
                      }}>
                        {currentSect.strength}/10
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
                        width: `${currentSect.strength * 10}%`,
                        background: `linear-gradient(90deg, ${getStrengthColor(currentSect.strength)}, ${getStrengthColor(currentSect.strength)}80)`,
                        borderRadius: 'var(--radius-full)',
                      }} />
                    </div>
                  </div>
                  
                  {/* 门派描述 */}
                  <div>
                    <h3 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-4)',
                      color: 'var(--text-primary)',
                    }}>
                      门派介绍
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      fontSize: 'var(--text-base)',
                    }}>
                      {currentSect.description}
                    </p>
                  </div>
                  
                  {/* 关键信息 */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-6)',
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        特色功法
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '500',
                        color: 'var(--text-primary)',
                      }}>
                        {currentSect.specialTechnique}
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
                        {currentSect.representative}
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        门派地位
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '500',
                        color: 'var(--text-primary)',
                      }}>
                        {currentSect.status}
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        关键事件
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '500',
                        color: 'var(--text-primary)',
                      }}>
                        {currentSect.keyEvent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 门派人物 */}
              {sectCharacters.length > 0 && (
                <div>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: '700',
                    marginBottom: 'var(--space-6)',
                    color: 'var(--text-primary)',
                  }}>
                    门派人物
                  </h2>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: 'var(--space-4)',
                  }}>
                    {sectCharacters.map((character) => (
                      <Link
                        key={character.id}
                        href={`/characters?character=${character.id}`}
                        style={{
                          textAlign: 'left',
                          padding: 'var(--space-4)',
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-lg)',
                          textDecoration: 'none',
                          transition: 'all var(--transition-fast) var(--ease-in-out)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                          e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
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
                          gap: 'var(--space-3)',
                          marginBottom: 'var(--space-3)',
                        }}>
                          <div style={{
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(14, 165, 233, 0.1)',
                            color: 'var(--color-immortal-primary)',
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-xl)',
                          }}>
                            {character.emoji}
                          </div>
                          <div>
                            <div style={{
                              fontSize: 'var(--text-base)',
                              fontWeight: '600',
                              color: 'var(--text-primary)',
                            }}>
                              {character.name}
                            </div>
                            <div style={{
                              fontSize: 'var(--text-xs)',
                              color: 'var(--text-tertiary)',
                            }}>
                              {character.cultivationLevel} · {character.title}
                            </div>
                          </div>
                        </div>
                        
                        <p style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.4',
                        }}>
                          {character.description.substring(0, 100)}...
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* 网格视图 */
            <div>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: '700',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
              }}>
                所有门派
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--space-6)',
              }}>
                {sortedSects.map((sect) => (
                  <button
                    key={sect.id}
                    onClick={() => {
                      setSelectedSect(sect.id);
                      setViewMode('detail');
                    }}
                    style={{
                      textAlign: 'left',
                      padding: 'var(--space-6)',
                      background: selectedSect === sect.id ? 'rgba(245, 158, 11, 0.1)' : 'var(--bg-primary)',
                      border: selectedSect === sect.id ? '2px solid var(--color-warning)' : '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-lg)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast) var(--ease-in-out)',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedSect !== sect.id) {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                        e.currentTarget.style.borderColor = getStrengthColor(sect.strength);
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedSect !== sect.id) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                      }
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-4)',
                      marginBottom: 'var(--space-4)',
                    }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: getStrengthColor(sect.strength),
                        color: 'white',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: 'var(--text-2xl)',
                        fontWeight: '700',
                      }}>
                        {sect.emoji}
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: 'var(--text-xl)',
                          fontWeight: '600',
                          marginBottom: 'var(--space-1)',
                          color: selectedSect === sect.id ? 'var(--color-warning)' : 'var(--text-primary)',
                        }}>
                          {sect.name}
                        </h3>
                        <div style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-secondary)',
                        }}>
                          {sect.title}
                        </div>
                      </div>
                    </div>
                    
                    {/* 实力进度条 */}
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 'var(--space-1)',
                      }}>
                        <span style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: '600',
                          color: 'var(--text-tertiary)',
                        }}>
                          实力等级
                        </span>
                        <span style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: '600',
                          color: getStrengthColor(sect.strength),
                        }}>
                          {getStrengthDescription(sect.strength)}
                        </span>
                      </div>
                      <div style={{
                        height: '6px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-full)',
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${sect.strength * 10}%`,
                          background: getStrengthColor(sect.strength),
                          borderRadius: 'var(--radius-full)',
                        }} />
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-2)',
                      marginBottom: 'var(--space-4)',
                    }}>
                      <span style={{
                        padding: 'var(--space-1) var(--space-2)',
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: 'var(--color-immortal-primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                      }}>
                        {sect.region}
                      </span>
                      <span style={{
                        padding: 'var(--space-1) var(--space-2)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--color-success)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                      }}>
                        {sect.era}
                      </span>
                    </div>
                    
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                    }}>
                      {sect.description.substring(0, 120)}...
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* 门派统计 */}
          <div style={{
            marginTop: 'var(--space-12)',
            padding: 'var(--space-6)',
            background: 'var(--bg-primary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
          }}>
            <h3 style={{
              fontSize: 'var(--text-lg)',
              fontWeight: '600',
              marginBottom: 'var(--space-4)',
              color: 'var(--text-primary)',
              textAlign: 'center',
            }}>
              门派统计
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--space-4)',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  color: 'var(--color-immortal-primary)',
                  marginBottom: 'var(--space-1)',
                }}>
                  {sects.length}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  总门派数
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  color: 'var(--color-error)',
                  marginBottom: 'var(--space-1)',
                }}>
                  {sects.filter(s => s.strength >= 8).length}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  顶尖势力
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  color: 'var(--color-warning)',
                  marginBottom: 'var(--space-1)',
                }}>
                  {Math.max(...sects.map(s => s.strength))}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  最高实力
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  color: 'var(--color-success)',
                  marginBottom: 'var(--space-1)',
                }}>
                  {Math.round(sects.reduce((sum, s) => sum + s.strength, 0) / sects.length * 10) / 10}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  平均实力
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 门派选择侧边栏 */}
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
          <h3 style={{
            fontSize: 'var(--text-lg)',
            fontWeight: '600',
            marginBottom: 'var(--space-4)',
            color: 'var(--text-primary)',
            textAlign: 'center',
          }}>
            快速选择门派
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-2)',
            justifyContent: 'center',
          }}>
            {sortedSects.slice(0, 6).map((sect) => (
              <button
                key={sect.id}
                onClick={() => {
                  setSelectedSect(sect.id);
                  setViewMode('detail');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-3)',
                  background: selectedSect === sect.id ? getStrengthColor(sect.strength) : 'var(--bg-secondary)',
                  color: selectedSect === sect.id ? 'white' : 'var(--text-primary)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                <span>{sect.emoji}</span>
                <span>{sect.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* 底部导航 */}
      <section style={{
        padding: 'var(--space-8) 0',
        background: 'var(--bg-secondary)',
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
                background: 'var(--bg-primary)',
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
                e.currentTarget.style.background = 'var(--bg-primary)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              👤 查看所有人物
            </Link>
            
            <Link
              href="/worldview"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-3) var(--space-6)',
                background: 'var(--bg-primary)',
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
                e.currentTarget.style.background = 'var(--bg-primary)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🏔️ 查看修仙境界
            </Link>
            
            <Link
              href="/timeline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-3) var(--space-6)',
                background: 'var(--bg-primary)',
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
                e.currentTarget.style.background = 'var(--bg-primary)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              📜 查看时间线
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectsPage;