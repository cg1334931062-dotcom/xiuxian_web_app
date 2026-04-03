import React, { useState } from 'react';
import Link from 'next/link';
import { characters, getCharacterById, getRelatedCharacters, getRelationshipStrength } from '../data/characters';

const CharactersPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('hanli');
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('detail');

  const currentCharacter = getCharacterById(selectedCharacter);
  const relatedCharacters = currentCharacter ? getRelatedCharacters(currentCharacter.id) : [];

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
                人物关系
              </span>
            </div>
            
            {/* 主标题 */}
            <h1 style={{
              fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-4xl))',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'var(--space-6)',
              background: 'linear-gradient(90deg, var(--color-immortal-primary), var(--color-immortal-accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              人物关系图
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
              探索《凡人修仙传》主要人物关系网络，了解韩立、南宫婉、厉飞雨、令狐老祖等核心角色的关系和故事。
            </p>
            
            {/* 视图切换 */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-8)',
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
          {viewMode === 'detail' && currentCharacter ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-8)',
            }}>
              {/* 当前选中人物详情 */}
              <div className="card-immortal" style={{
                padding: 'var(--space-8)',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 'var(--space-8)',
                }}>
                  {/* 人物头部信息 */}
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
                      background: 'var(--gradient-immortal)',
                      color: 'white',
                      borderRadius: 'var(--radius-xl)',
                      fontSize: 'var(--text-4xl)',
                      fontWeight: '700',
                      marginBottom: 'var(--space-2)',
                    }}>
                      {currentCharacter.emoji}
                    </div>
                    
                    <div>
                      <h2 style={{
                        fontSize: 'var(--text-3xl)',
                        fontWeight: '700',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-primary)',
                      }}>
                        {currentCharacter.name}
                      </h2>
                      <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--text-secondary)',
                        marginBottom: 'var(--space-4)',
                      }}>
                        {currentCharacter.title}
                      </p>
                    </div>
                    
                    {/* 标签 */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-2)',
                      justifyContent: 'center',
                    }}>
                      <span style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: 'var(--color-immortal-primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '600',
                      }}>
                        {currentCharacter.cultivationLevel}
                      </span>
                      <span style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--color-success)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '600',
                      }}>
                        {currentCharacter.sect}
                      </span>
                      <span style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: 'rgba(139, 92, 246, 0.1)',
                        color: 'var(--color-immortal-accent)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: '600',
                      }}>
                        {currentCharacter.era}
                      </span>
                    </div>
                  </div>
                  
                  {/* 人物描述 */}
                  <div>
                    <h3 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-4)',
                      color: 'var(--text-primary)',
                    }}>
                      人物介绍
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      fontSize: 'var(--text-base)',
                    }}>
                      {currentCharacter.description}
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
                        主要法宝
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '500',
                        color: 'var(--text-primary)',
                      }}>
                        {currentCharacter.mainTreasure}
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
                        {currentCharacter.keyTechnique}
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        性格特点
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '500',
                        color: 'var(--text-primary)',
                      }}>
                        {currentCharacter.personality}
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--text-tertiary)',
                      }}>
                        重要成就
                      </h4>
                      <div style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: '500',
                        color: 'var(--text-primary)',
                      }}>
                        {currentCharacter.achievement}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 相关人物 */}
              {relatedCharacters.length > 0 && (
                <div>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: '700',
                    marginBottom: 'var(--space-6)',
                    color: 'var(--text-primary)',
                  }}>
                    相关人物
                  </h2>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: 'var(--space-4)',
                  }}>
                    {relatedCharacters.map((character) => {
                      const strength = getRelationshipStrength(currentCharacter.id, character.id);
                      return (
                        <button
                          key={character.id}
                          onClick={() => setSelectedCharacter(character.id)}
                          style={{
                            textAlign: 'left',
                            padding: 'var(--space-4)',
                            background: selectedCharacter === character.id ? 'rgba(14, 165, 233, 0.1)' : 'var(--bg-primary)',
                            border: selectedCharacter === character.id ? '2px solid var(--color-immortal-primary)' : '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-lg)',
                            cursor: 'pointer',
                            transition: 'all var(--transition-fast) var(--ease-in-out)',
                          }}
                          onMouseEnter={(e) => {
                            if (selectedCharacter !== character.id) {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                              e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedCharacter !== character.id) {
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
                                color: selectedCharacter === character.id ? 'var(--color-immortal-primary)' : 'var(--text-primary)',
                              }}>
                                {character.name}
                              </div>
                              <div style={{
                                fontSize: 'var(--text-xs)',
                                color: 'var(--text-tertiary)',
                              }}>
                                {character.cultivationLevel} · {character.sect}
                              </div>
                            </div>
                          </div>
                          
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 'var(--space-2)',
                          }}>
                            <span style={{
                              fontSize: 'var(--text-xs)',
                              color: 'var(--text-tertiary)',
                            }}>
                              关系强度
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
                                    background: i < strength ? 'var(--color-immortal-primary)' : 'var(--bg-tertiary)',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.4',
                          }}>
                            {character.relationship}
                          </p>
                        </button>
                      );
                    })}
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
                所有人物
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 'var(--space-4)',
              }}>
                {characters.map((character) => (
                  <button
                    key={character.id}
                    onClick={() => {
                      setSelectedCharacter(character.id);
                      setViewMode('detail');
                    }}
                    style={{
                      textAlign: 'left',
                      padding: 'var(--space-4)',
                      background: selectedCharacter === character.id ? 'rgba(14, 165, 233, 0.1)' : 'var(--bg-primary)',
                      border: selectedCharacter === character.id ? '2px solid var(--color-immortal-primary)' : '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-lg)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast) var(--ease-in-out)',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCharacter !== character.id) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                        e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCharacter !== character.id) {
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
                          color: selectedCharacter === character.id ? 'var(--color-immortal-primary)' : 'var(--text-primary)',
                        }}>
                          {character.name}
                        </div>
                        <div style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-tertiary)',
                        }}>
                          {character.cultivationLevel} · {character.sect}
                        </div>
                      </div>
                    </div>
                    
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4',
                      marginBottom: 'var(--space-3)',
                    }}>
                      {character.description.substring(0, 100)}...
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-1)',
                    }}>
                      <span style={{
                        padding: 'var(--space-1) var(--space-2)',
                        background: 'rgba(14, 165, 233, 0.1)',
                        color: 'var(--color-immortal-primary)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--text-xs)',
                      }}>
                        {character.era}
                      </span>
                      <span style={{
                        padding: 'var(--space-1) var(--space-2)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: 'var(--color-success)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--text-xs)',
                      }}>
                        {character.personality.split('、')[0]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* 人物选择侧边栏 */}
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
            快速选择人物
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-2)',
            justifyContent: 'center',
          }}>
            {characters.slice(0, 8).map((character) => (
              <button
                key={character.id}
                onClick={() => {
                  setSelectedCharacter(character.id);
                  setViewMode('detail');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-3)',
                  background: selectedCharacter === character.id ? 'var(--color-immortal-primary)' : 'var(--bg-secondary)',
                  color: selectedCharacter === character.id ? 'white' : 'var(--text-primary)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                <span>{character.emoji}</span>
                <span>{character.name}</span>
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
            
            <Link
              href="/sects"
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
                e.currentTarget.style.background = 'var(--color-warning)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'var(--color-warning)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-primary)';
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

export default CharactersPage;