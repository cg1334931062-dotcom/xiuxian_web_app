import React, { useState } from 'react';
import Link from 'next/link';
import { sortedTimelineEvents, getImportantEvents, getEventsByImportance } from '../data/timelineEvents';

const TimelinePage: React.FC = () => {
  const [filterImportance, setFilterImportance] = useState<number>(0); // 0表示全部
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');

  // 根据筛选条件获取事件
  const filteredEvents = filterImportance === 0 
    ? sortedTimelineEvents 
    : getEventsByImportance(filterImportance);

  // 获取选中的事件
  const selectedEventData = selectedEvent 
    ? sortedTimelineEvents.find(event => event.id === selectedEvent)
    : null;

  // 按时代分组
  const eventsByEra = filteredEvents.reduce((acc, event) => {
    if (!acc[event.era]) {
      acc[event.era] = [];
    }
    acc[event.era].push(event);
    return acc;
  }, {} as Record<string, typeof filteredEvents>);

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
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        }} />
        
        <div className="container" style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px',
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
              background: 'rgba(139, 92, 246, 0.1)',
              borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--space-6)',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--color-immortal-accent)',
                borderRadius: '50%',
                animation: 'glow 2s ease-in-out infinite',
              }} />
              <span style={{
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
                color: 'var(--color-immortal-accent)',
              }}>
                剧情发展
              </span>
            </div>
            
            {/* 主标题 */}
            <h1 style={{
              fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-4xl))',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'var(--space-6)',
              background: 'linear-gradient(90deg, var(--color-immortal-accent), var(--color-immortal-primary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              剧情时间线
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
              按时间顺序整理《凡人修仙传》的重要事件，从人界篇到仙界篇，完整呈现韩立的修仙历程。
            </p>
            
            {/* 筛选和视图切换 */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              marginBottom: 'var(--space-8)',
            }}>
              {/* 重要性筛选 */}
              <div style={{
                display: 'flex',
                gap: 'var(--space-2)',
              }}>
                <button
                  onClick={() => setFilterImportance(0)}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: filterImportance === 0 ? 'var(--color-immortal-accent)' : 'transparent',
                    color: filterImportance === 0 ? 'white' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: filterImportance === 0 ? 'none' : '1px solid var(--border-color)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                >
                  全部事件
                </button>
                <button
                  onClick={() => setFilterImportance(3)}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: filterImportance === 3 ? 'var(--color-immortal-accent)' : 'transparent',
                    color: filterImportance === 3 ? 'white' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: filterImportance === 3 ? 'none' : '1px solid var(--border-color)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                >
                  重要事件
                </button>
              </div>
              
              {/* 视图切换 */}
              <div style={{
                display: 'flex',
                gap: 'var(--space-2)',
              }}>
                <button
                  onClick={() => setViewMode('timeline')}
                  style={{
                    padding: 'var(--space-2) var(--space-4)',
                    background: viewMode === 'timeline' ? 'var(--color-immortal-primary)' : 'transparent',
                    color: viewMode === 'timeline' ? 'white' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: viewMode === 'timeline' ? 'none' : '1px solid var(--border-color)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                >
                  时间线视图
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
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 var(--space-6)',
        }}>
          {viewMode === 'timeline' ? (
            /* 时间线视图 */
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-12)',
            }}>
              {Object.entries(eventsByEra).map(([era, events]) => (
                <div key={era}>
                  {/* 时代标题 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    marginBottom: 'var(--space-8)',
                    paddingBottom: 'var(--space-4)',
                    borderBottom: '2px solid var(--border-color)',
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: era === '人界篇' ? 'rgba(16, 185, 129, 0.1)' : 
                                era === '灵界篇' ? 'rgba(14, 165, 233, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                      color: era === '人界篇' ? 'var(--color-success)' : 
                            era === '灵界篇' ? 'var(--color-immortal-primary)' : 'var(--color-immortal-accent)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: 'var(--text-xl)',
                      fontWeight: '700',
                    }}>
                      {era === '人界篇' ? '🌍' : era === '灵界篇' ? '⚡' : '👑'}
                    </div>
                    <div>
                      <h2 style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                      }}>
                        {era}
                      </h2>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-tertiary)',
                      }}>
                        {events.length} 个重要事件
                      </p>
                    </div>
                  </div>
                  
                  {/* 时间线事件 */}
                  <div style={{
                    position: 'relative',
                    paddingLeft: 'var(--space-8)',
                  }}>
                    {/* 时间线轴线 */}
                    <div style={{
                      position: 'absolute',
                      left: '24px',
                      top: '0',
                      bottom: '0',
                      width: '2px',
                      background: 'var(--border-color)',
                    }} />
                    
                    {events.map((event, index) => (
                      <div
                        key={event.id}
                        style={{
                          position: 'relative',
                          marginBottom: 'var(--space-8)',
                        }}
                      >
                        {/* 时间点 */}
                        <div style={{
                          position: 'absolute',
                          left: '-32px',
                          top: '0',
                          width: '16px',
                          height: '16px',
                          background: selectedEvent === event.id ? 'var(--color-immortal-accent)' : 'var(--color-immortal-primary)',
                          borderRadius: '50%',
                          border: '3px solid var(--bg-secondary)',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast) var(--ease-in-out)',
                        }}
                        onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                        />
                        
                        {/* 事件卡片 */}
                        <div
                          style={{
                            padding: 'var(--space-6)',
                            background: selectedEvent === event.id ? 'rgba(139, 92, 246, 0.1)' : 'var(--bg-primary)',
                            border: selectedEvent === event.id ? '2px solid var(--color-immortal-accent)' : '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-lg)',
                            cursor: 'pointer',
                            transition: 'all var(--transition-fast) var(--ease-in-out)',
                          }}
                          onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                          onMouseEnter={(e) => {
                            if (selectedEvent !== event.id) {
                              e.currentTarget.style.transform = 'translateX(8px)';
                              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                              e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedEvent !== event.id) {
                              e.currentTarget.style.transform = 'translateX(0)';
                              e.currentTarget.style.boxShadow = 'none';
                              e.currentTarget.style.borderColor = 'var(--border-color)';
                            }
                          }}
                        >
                          <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: 'var(--space-4)',
                            marginBottom: 'var(--space-4)',
                          }}>
                            <div>
                              <h3 style={{
                                fontSize: 'var(--text-xl)',
                                fontWeight: '600',
                                marginBottom: 'var(--space-2)',
                                color: selectedEvent === event.id ? 'var(--color-immortal-accent)' : 'var(--text-primary)',
                              }}>
                                {event.title}
                              </h3>
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-3)',
                                flexWrap: 'wrap',
                              }}>
                                <span style={{
                                  padding: 'var(--space-1) var(--space-3)',
                                  background: 'rgba(14, 165, 233, 0.1)',
                                  color: 'var(--color-immortal-primary)',
                                  borderRadius: 'var(--radius-full)',
                                  fontSize: 'var(--text-xs)',
                                  fontWeight: '600',
                                }}>
                                  {event.time}
                                </span>
                                <span style={{
                                  padding: 'var(--space-1) var(--space-3)',
                                  background: event.importance >= 3 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                  color: event.importance >= 3 ? 'var(--color-warning)' : 'var(--color-success)',
                                  borderRadius: 'var(--radius-full)',
                                  fontSize: 'var(--text-xs)',
                                  fontWeight: '600',
                                }}>
                                  {event.importance >= 3 ? '重要事件' : '普通事件'}
                                </span>
                              </div>
                            </div>
                            
                            {/* 重要性星级 */}
                            <div style={{
                              display: 'flex',
                              gap: '2px',
                            }}>
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '2px',
                                    background: i < event.importance ? 'var(--color-warning)' : 'var(--bg-tertiary)',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          <p style={{
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6',
                            marginBottom: 'var(--space-4)',
                          }}>
                            {event.description}
                          </p>
                          
                          {/* 相关人物 */}
                          {event.relatedCharacters && event.relatedCharacters.length > 0 && (
                            <div>
                              <h4 style={{
                                fontSize: 'var(--text-sm)',
                                fontWeight: '600',
                                marginBottom: 'var(--space-2)',
                                color: 'var(--text-tertiary)',
                              }}>
                                相关人物
                              </h4>
                              <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 'var(--space-2)',
                              }}>
                                {event.relatedCharacters.map((character, idx) => (
                                  <span
                                    key={idx}
                                    style={{
                                      padding: 'var(--space-1) var(--space-3)',
                                      background: 'rgba(14, 165, 233, 0.1)',
                                      color: 'var(--color-immortal-primary)',
                                      borderRadius: 'var(--radius-full)',
                                      fontSize: 'var(--text-xs)',
                                    }}
                                  >
                                    {character}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* 网格视图 */
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: 'var(--space-6)',
              }}>
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    style={{
                      padding: 'var(--space-6)',
                      background: selectedEvent === event.id ? 'rgba(139, 92, 246, 0.1)' : 'var(--bg-primary)',
                      border: selectedEvent === event.id ? '2px solid var(--color-immortal-accent)' : '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-lg)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast) var(--ease-in-out)',
                    }}
                    onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    onMouseEnter={(e) => {
                      if (selectedEvent !== event.id) {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                        e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedEvent !== event.id) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                      }
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: 'var(--space-4)',
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: 'var(--text-lg)',
                          fontWeight: '600',
                          marginBottom: 'var(--space-2)',
                          color: selectedEvent === event.id ? 'var(--color-immortal-accent)' : 'var(--text-primary)',
                        }}>
                          {event.title}
                        </h3>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)',
                          flexWrap: 'wrap',
                        }}>
                          <span style={{
                            padding: 'var(--space-1) var(--space-2)',
                            background: 'rgba(14, 165, 233, 0.1)',
                            color: 'var(--color-immortal-primary)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-xs)',
                          }}>
                            {event.time}
                          </span>
                          <span style={{
                            padding: 'var(--space-1) var(--space-2)',
                            background: event.era === '人界篇' ? 'rgba(16, 185, 129, 0.1)' : 
                                      event.era === '灵界篇' ? 'rgba(14, 165, 233, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                            color: event.era === '人界篇' ? 'var(--color-success)' : 
                                  event.era === '灵界篇' ? 'var(--color-immortal-primary)' : 'var(--color-immortal-accent)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-xs)',
                          }}>
                            {event.era}
                          </span>
                        </div>
                      </div>
                      
                      {/* 重要性星级 */}
                      <div style={{
                        display: 'flex',
                        gap: '2px',
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '2px',
                              background: i < event.importance ? 'var(--color-warning)' : 'var(--bg-tertiary)',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                      fontSize: 'var(--text-sm)',
                      marginBottom: 'var(--space-4)',
                    }}>
                      {event.description.substring(0, 150)}...
                    </p>
                    
                    {/* 相关人物 */}
                    {event.relatedCharacters && event.relatedCharacters.length > 0 && (
                      <div>
                        <div style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: '600',
                          marginBottom: 'var(--space-2)',
                          color: 'var(--text-tertiary)',
                        }}>
                          相关人物
                        </div>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 'var(--space-1)',
                        }}>
                          {event.relatedCharacters.slice(0, 3).map((character, idx) => (
                            <span
                              key={idx}
                              style={{
                                padding: 'var(--space-1) var(--space-2)',
                                background: 'rgba(14, 165, 233, 0.1)',
                                color: 'var(--color-immortal-primary)',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-xs)',
                              }}
                            >
                              {character}
                            </span>
                          ))}
                          {event.relatedCharacters.length > 3 && (
                            <span style={{
                              padding: 'var(--space-1) var(--space-2)',
                              background: 'var(--bg-tertiary)',
                              color: 'var(--text-tertiary)',
                              borderRadius: 'var(--radius-full)',
                              fontSize: 'var(--text-xs)',
                            }}>
                              +{event.relatedCharacters.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* 事件统计 */}
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
              时间线统计
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
                  {sortedTimelineEvents.length}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  总事件数
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  color: 'var(--color-success)',
                  marginBottom: 'var(--space-1)',
                }}>
                  {getImportantEvents().length}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  重要事件
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  color: 'var(--color-immortal-accent)',
                  marginBottom: 'var(--space-1)',
                }}>
                  {Object.keys(eventsByEra).length}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  时代篇章
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: '800',
                  color: 'var(--color-warning)',
                  marginBottom: 'var(--space-1)',
                }}>
                  {Math.max(...sortedTimelineEvents.map(e => e.importance))}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-tertiary)',
                }}>
                  最高重要性
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
          maxWidth: '1400px',
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
              href="/worldview"
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
              🏔️ 查看修仙境界
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
                e.currentTarget.style.background = 'var(--color-warning)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'var(--color-warning)';
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

export default TimelinePage;