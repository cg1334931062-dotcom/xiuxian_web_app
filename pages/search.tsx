import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  enhancedSearch, 
  getSearchStats, 
  getSearchSuggestions, 
  getHotSearches,
  getTypeStats,
  EnhancedSearchOptions,
  SearchResult 
} from '../data/search_enhanced';

// 防抖函数
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTypes, setSelectedTypes] = useState<('character' | 'level' | 'event' | 'sect')[]>(['character', 'level', 'event', 'sect']);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  
  // 使用防抖
  const debouncedQuery = useDebounce(query, 300);

  // 搜索函数
  const performSearch = useCallback(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setSelectedResult(null);
      return;
    }

    setLoading(true);
    
    const options: SearchOptions = {
      types: selectedTypes,
      minRelevance: 10,
      limit: 50
    };
    
    const searchResults = searchAll(debouncedQuery, options);
    setResults(searchResults);
    setLoading(false);
    
    // 如果有结果，默认选择第一个
    if (searchResults.length > 0 && !selectedResult) {
      setSelectedResult(searchResults[0]);
    }
  }, [debouncedQuery, selectedTypes, selectedResult]);

  // 当查询变化时执行搜索
  useEffect(() => {
    performSearch();
  }, [performSearch]);

  // 获取搜索建议
  useEffect(() => {
    if (query.trim()) {
      const newSuggestions = getSearchSuggestions(query);
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  // 获取搜索统计
  const stats = getSearchStats(debouncedQuery);

  // 处理类型选择
  const toggleType = (type: 'character' | 'level' | 'event' | 'sect') => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // 处理建议点击
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  // 获取类型图标
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'character': return '👤';
      case 'level': return '🏔️';
      case 'event': return '📅';
      case 'sect': return '🏛️';
      default: return '🔍';
    }
  };

  // 获取类型颜色
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'character': return 'var(--color-immortal-primary)';
      case 'level': return 'var(--color-success)';
      case 'event': return 'var(--color-immortal-accent)';
      case 'sect': return 'var(--color-warning)';
      default: return 'var(--text-tertiary)';
    }
  };

  // 获取相关性颜色
  const getRelevanceColor = (relevance: number) => {
    if (relevance >= 70) return 'var(--color-error)'; // 红色，高度相关
    if (relevance >= 50) return 'var(--color-warning)'; // 橙色，中度相关
    if (relevance >= 30) return 'var(--color-success)'; // 青色，低度相关
    return 'var(--color-immortal-primary)'; // 蓝色，轻微相关
  };

  // 热门搜索建议
  const hotSearches = [
    { query: '韩立', type: 'character', description: '主角，凡人修仙' },
    { query: '炼气期', type: 'level', description: '修仙第一境' },
    { query: '黄枫谷', type: 'sect', description: '韩立加入的第一个门派' },
    { query: '南宫婉', type: 'character', description: '韩立的道侣' },
    { query: '元婴期', type: 'level', description: '修仙重要境界' },
    { query: '掩月宗', type: 'sect', description: '越国七派之一' },
  ];

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
                智能搜索
              </span>
            </div>
            
            {/* 主标题 */}
            <h1 style={{
              fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-4xl))',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'var(--space-6)',
              background: 'linear-gradient(90deg, var(--color-immortal-primary), var(--color-success))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              🔍 智能搜索
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
              搜索《凡人修仙传》中的所有内容：人物、境界、事件、门派。支持全文搜索、高级筛选和智能建议。
            </p>
            
            {/* 搜索框 */}
            <div style={{
              position: 'relative',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)',
            }}>
              <div style={{
                position: 'relative',
              }}>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="搜索人物、境界、事件、门派..."
                  style={{
                    width: '100%',
                    padding: 'var(--space-4) var(--space-12) var(--space-4) var(--space-6)',
                    fontSize: 'var(--text-lg)',
                    border: '2px solid var(--border-color)',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'all var(--transition-fast) var(--ease-in-out)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-immortal-primary)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 165, 233, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  right: 'var(--space-4)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-tertiary)',
                  fontSize: 'var(--text-xl)',
                }}>
                  🔍
                </div>
              </div>
              
              {/* 搜索建议 */}
              {showSuggestions && suggestions.length > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  right: '0',
                  marginTop: 'var(--space-2)',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 100,
                  maxHeight: '300px',
                  overflowY: 'auto',
                }}>
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      style={{
                        width: '100%',
                        padding: 'var(--space-3) var(--space-4)',
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontSize: 'var(--text-base)',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast) var(--ease-in-out)',
                        borderBottom: index < suggestions.length - 1 ? '1px solid var(--border-color)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--bg-secondary)';
                        e.currentTarget.style.color = 'var(--color-immortal-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* 搜索统计 */}
            {debouncedQuery.trim() && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                marginBottom: 'var(--space-8)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-4)',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-tertiary)',
                  }}>
                    搜索结果：
                  </span>
                  <span style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: '600',
                    color: 'var(--color-immortal-primary)',
                  }}>
                    {results.length}
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-4)',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-tertiary)',
                  }}>
                    搜索耗时：
                  </span>
                  <span style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: '600',
                    color: 'var(--color-success)',
                  }}>
                    {stats.time}ms
                  </span>
                </div>
              </div>
            )}
            
            {/* 类型筛选 */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
              justifyContent: 'center',
              marginBottom: 'var(--space-8)',
            }}>
              <button
                onClick={() => toggleType('character')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-4)',
                  background: selectedTypes.includes('character') ? 'var(--color-immortal-primary)' : 'transparent',
                  color: selectedTypes.includes('character') ? 'white' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: selectedTypes.includes('character') ? 'none' : '1px solid var(--border-color)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                👤 人物
              </button>
              <button
                onClick={() => toggleType('level')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-4)',
                  background: selectedTypes.includes('level') ? 'var(--color-success)' : 'transparent',
                  color: selectedTypes.includes('level') ? 'white' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: selectedTypes.includes('level') ? 'none' : '1px solid var(--border-color)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                🏔️ 境界
              </button>
              <button
                onClick={() => toggleType('event')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-4)',
                  background: selectedTypes.includes('event') ? 'var(--color-immortal-accent)' : 'transparent',
                  color: selectedTypes.includes('event') ? 'white' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: selectedTypes.includes('event') ? 'none' : '1px solid var(--border-color)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                📅 事件
              </button>
              <button
                onClick={() => toggleType('sect')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-4)',
                  background: selectedTypes.includes('sect') ? 'var(--color-warning)' : 'transparent',
                  color: selectedTypes.includes('sect') ? 'white' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: selectedTypes.includes('sect') ? 'none' : '1px solid var(--border-color)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast) var(--ease-in-out)',
                }}
              >
                🏛️ 门派
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
          {/* 加载状态 */}
          {loading && (
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-12)',
            }}>
              <div style={{
                fontSize: 'var(--text-3xl)',
                marginBottom: 'var(--space-4)',
              }}>
                🔍
              </div>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
              }}>
                正在搜索中...
              </p>
            </div>
          )}
          
          {/* 搜索结果 */}
          {!loading && debouncedQuery.trim() && (
            <div>
              {results.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: 'var(--space-12)',
                  background: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                }}>
                  <div style={{
                    fontSize: 'var(--text-4xl)',
                    marginBottom: 'var(--space-4)',
                    color: 'var(--text-tertiary)',
                  }}>
                    🔍
                  </div>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: '600',
                    marginBottom: 'var(--space-2)',
                    color: 'var(--text-primary)',
                  }}>
                    未找到相关结果
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-4)',
                  }}>
                    尝试使用不同的关键词或调整筛选条件
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-2)',
                    justifyContent: 'center',
                  }}>
                    {hotSearches.slice(0, 3).map((hotSearch) => (
                      <button
                        key={hotSearch.query}
                        onClick={() => setQuery(hotSearch.query)}
                        style={{
                          padding: 'var(--space-2) var(--space-4)',
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--border-color)',
                          fontSize: 'var(--text-sm)',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast) var(--ease-in-out)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = getTypeColor(hotSearch.type);
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.borderColor = getTypeColor(hotSearch.type);
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-secondary)';
                          e.currentTarget.style.color = 'var(--text-primary)';
                          e.currentTarget.style.borderColor = 'var(--border-color)';
                        }}
                      >
                        {hotSearch.query}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h2 style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: '700',
                    marginBottom: 'var(--space-6)',
                    color: 'var(--text-primary)',
                  }}>
                    搜索结果 ({results.length})
                  </h2>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--space-6)',
                  }}>
                    {results.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => setSelectedResult(result)}
                        style={{
                          textAlign: 'left',
                          padding: 'var(--space-6)',
                          background: selectedResult?.id === result.id ? `${getTypeColor(result.type)}20` : 'var(--bg-primary)',
                          border: selectedResult?.id === result.id ? `2px solid ${getTypeColor(result.type)}` : '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-lg)',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast) var(--ease-in-out)',
                        }}
                        onMouseEnter={(e) => {
                          if (selectedResult?.id !== result.id) {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            e.currentTarget.style.borderColor = getTypeColor(result.type);
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedResult?.id !== result.id) {
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
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `${getTypeColor(result.type)}20`,
                            color: getTypeColor(result.type),
                            borderRadius: 'var(--radius-md)',
                            fontSize: 'var(--text-xl)',
                          }}>
                            {getTypeIcon(result.type)}
                          </div>
                          <div>
                            <h3 style={{
                              fontSize: 'var(--text-lg)',
                              fontWeight: '600',
                              marginBottom: 'var(--space-1)',
                              color: selectedResult?.id === result.id ? getTypeColor(result.type) : 'var(--text-primary)',
                            }}>
                              {result.title}
                            </h3>
                            <div style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--text-secondary)',
                            }}>
                              {result.type === 'character' ? '人物' : 
                               result.type === 'level' ? '境界' : 
                               result.type === 'event' ? '事件' : '门派'}
                            </div>
                          </div>
                        </div>
                        
                        {/* 相关性进度条 */}
                        <div style={{ marginBottom: 'var(--space-4)' }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 'var(--space-1)',
                          }}>
                            <span style={{
                              fontSize: 'var(--text-xs)',
                              color: 'var(--text-tertiary)',
                            }}>
                              相关性
                            </span>
                            <span style={{
                              fontSize: 'var(--text-xs)',
                              fontWeight: '600',
                              color: getRelevanceColor(result.relevance),
                            }}>
                              {result.relevance}%
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
                              width: `${result.relevance}%`,
                              background: getRelevanceColor(result.relevance),
                              borderRadius: 'var(--radius-full)',
                            }} />
                          </div>
                        </div>
                        
                        <p style={{
                          color: 'var(--text-secondary)',
                          lineHeight: '1.5',
                          fontSize: 'var(--text-sm)',
                        }}>
                          {result.description.substring(0, 120)}...
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* 热门搜索建议 */}
          {!debouncedQuery.trim() && (
            <div>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: '700',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}>
                热门搜索
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 'var(--space-6)',
              }}>
                {hotSearches.map((hotSearch) => (
                  <button
                    key={hotSearch.query}
                    onClick={() => setQuery(hotSearch.query)}
                    style={{
                      textAlign: 'left',
                      padding: 'var(--space-6)',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-lg)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast) var(--ease-in-out)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                      e.currentTarget.style.borderColor = getTypeColor(hotSearch.type);
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
                        background: `${getTypeColor(hotSearch.type)}20`,
                        color: getTypeColor(hotSearch.type),
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--text-xl)',
                      }}>
                        {getTypeIcon(hotSearch.type)}
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: 'var(--text-lg)',
                          fontWeight: '600',
                          marginBottom: 'var(--space-1)',
                          color: 'var(--text-primary)',
                        }}>
                          {hotSearch.query}
                        </h3>
                        <div style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-secondary)',
                        }}>
                          {hotSearch.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
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

export default SearchPage;