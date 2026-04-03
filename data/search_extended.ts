// 智能搜索工具函数（全量扩展）
// 支持全文搜索《凡人修仙传》中的所有数据

import { characters, Character, getCharacterById, sects, Sect, getCharactersBySect, getStrongestCharacters } from './characters';
import { cultivationLevels, CultivationLevel, getLevelById, getMortalWorldLevels, getSpiritWorldLevels, getImmortalWorldLevels } from './cultivationLevels';
import { timelineEvents, TimelineEvent, getEventById, getEventsByEra, getMilestones } from './timelineEvents';

export interface SearchResult {
  id: string;
  type: 'character' | 'level' | 'event' | 'sect';
  title: string;
  description: string;
  relevance: number; // 0-100，相关性评分
  data: any; // 原始数据
  metadata?: {
    era?: string;
    strength?: number;
    importance?: number;
    age?: number;
  };
}

export interface SearchOptions {
  types?: ('character' | 'level' | 'event' | 'sect')[];
  minRelevance?: number;
  limit?: number;
  era?: '人界篇' | '灵界篇' | '仙界篇';
  minStrength?: number;
  maxStrength?: number;
  minImportance?: number;
}

// 搜索所有数据
export function searchAll(query: string, options: SearchOptions = {}): SearchResult[] {
  const results: SearchResult[] = [];
  
  // 搜索人物
  if (!options.types || options.types.includes('character')) {
    results.push(...searchCharacters(query, options));
  }
  
  // 搜索境界
  if (!options.types || options.types.includes('level')) {
    results.push(...searchCultivationLevels(query, options));
  }
  
  // 搜索事件
  if (!options.types || options.types.includes('event')) {
    results.push(...searchTimelineEvents(query, options));
  }
  
  // 搜索门派
  if (!options.types || options.types.includes('sect')) {
    results.push(...searchSects(query, options));
  }
  
  // 按相关性排序
  results.sort((a, b) => b.relevance - a.relevance);
  
  // 应用过滤
  const minRelevance = options.minRelevance || 10;
  const limit = options.limit || 50;
  
  return results
    .filter(result => result.relevance >= minRelevance)
    .slice(0, limit);
}

// 搜索人物（增强版）
function searchCharacters(query: string, options: SearchOptions = {}): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];
  
  for (const character of characters) {
    let relevance = 0;
    
    // 名称匹配（最高权重）
    if (character.name.toLowerCase().includes(lowerQuery)) {
      relevance += 85;
    }
    
    // 别名匹配
    if (character.aliases.some(alias => alias.toLowerCase().includes(lowerQuery))) {
      relevance += 75;
    }
    
    // 境界匹配
    if (character.cultivationLevel.toLowerCase().includes(lowerQuery)) {
      relevance += 45;
    }
    
    // 门派匹配
    if (character.sect.toLowerCase().includes(lowerQuery)) {
      relevance += 45;
    }
    
    // 描述匹配
    if (character.description.toLowerCase().includes(lowerQuery)) {
      relevance += 35;
    }
    
    // 重要事件匹配
    if (character.importantEvents.some(event => event.toLowerCase().includes(lowerQuery))) {
      relevance += 30;
    }
    
    // 法宝匹配
    if (character.treasures.some(treasure => treasure.toLowerCase().includes(lowerQuery))) {
      relevance += 30;
    }
    
    // 关系匹配
    if (character.relationships.some(rel => 
      rel.description.toLowerCase().includes(lowerQuery) || 
      rel.type.toLowerCase().includes(lowerQuery)
    )) {
      relevance += 25;
    }
    
    if (relevance > 0) {
      // 提取时代信息
      let era: string | undefined;
      if (character.cultivationLevel.includes('道祖') || character.cultivationLevel.includes('大罗') || 
          character.cultivationLevel.includes('太乙') || character.cultivationLevel.includes('金仙') || 
          character.cultivationLevel.includes('真仙')) {
        era = '仙界篇';
      } else if (character.cultivationLevel.includes('大乘') || character.cultivationLevel.includes('合体') || 
                 character.cultivationLevel.includes('炼虚')) {
        era = '灵界篇';
      } else {
        era = '人界篇';
      }
      
      // 提取实力信息（简单估算）
      let strength = 0;
      if (character.cultivationLevel.includes('道祖')) strength = 10;
      else if (character.cultivationLevel.includes('大罗')) strength = 9;
      else if (character.cultivationLevel.includes('太乙')) strength = 8;
      else if (character.cultivationLevel.includes('金仙')) strength = 7;
      else if (character.cultivationLevel.includes('真仙')) strength = 6;
      else if (character.cultivationLevel.includes('大乘')) strength = 5;
      else if (character.cultivationLevel.includes('合体')) strength = 4;
      else if (character.cultivationLevel.includes('炼虚')) strength = 3;
      else if (character.cultivationLevel.includes('化神')) strength = 2;
      else if (character.cultivationLevel.includes('元婴')) strength = 1;
      
      // 应用时代过滤
      if (options.era && era !== options.era) {
        continue;
      }
      
      // 应用实力过滤
      if (options.minStrength !== undefined && strength < options.minStrength) {
        continue;
      }
      if (options.maxStrength !== undefined && strength > options.maxStrength) {
        continue;
      }
      
      results.push({
        id: character.id,
        type: 'character',
        title: character.name,
        description: `${character.cultivationLevel}，${character.sect.split('（')[0]}。${character.description.split('。')[0]}。`,
        relevance,
        data: character,
        metadata: {
          era,
          strength
        }
      });
    }
  }
  
  return results;
}

// 搜索境界（增强版）
function searchCultivationLevels(query: string, options: SearchOptions = {}): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];
  
  for (const level of cultivationLevels) {
    let relevance = 0;
    
    // 名称匹配（最高权重）
    if (level.name.toLowerCase().includes(lowerQuery)) {
      relevance += 85;
    }
    
    // 描述匹配
    if (level.description.toLowerCase().includes(lowerQuery)) {
      relevance += 45;
    }
    
    // 能力匹配
    if (level.abilities.some(ability => ability.toLowerCase().includes(lowerQuery))) {
      relevance += 35;
    }
    
    // 特点匹配
    if (level.keyFeatures.some(feature => feature.toLowerCase().includes(lowerQuery))) {
      relevance += 35;
    }
    
    // 示例匹配
    if (level.examples.some(example => example.toLowerCase().includes(lowerQuery))) {
      relevance += 30;
    }
    
    // 寿元匹配
    if (level.lifespan.toLowerCase().includes(lowerQuery)) {
      relevance += 25;
    }
    
    // 难度匹配
    if (level.difficulty.toString().includes(lowerQuery)) {
      relevance += 20;
    }
    
    if (relevance > 0) {
      // 提取时代信息
      let era: string | undefined;
      if (level.order >= 9) era = '仙界篇';
      else if (level.order >= 6) era = '灵界篇';
      else era = '人界篇';
      
      // 应用时代过滤
      if (options.era && era !== options.era) {
        continue;
      }
      
      // 应用难度过滤（作为实力代理）
      if (options.minStrength !== undefined && level.difficulty < options.minStrength) {
        continue;
      }
      if (options.maxStrength !== undefined && level.difficulty > options.maxStrength) {
        continue;
      }
      
      results.push({
        id: level.id,
        type: 'level',
        title: level.name,
        description: `${level.description.split('。')[0]}。寿元约${level.lifespan}，突破难度：${level.difficulty}/10。`,
        relevance,
        data: level,
        metadata: {
          era,
          strength: level.difficulty
        }
      });
    }
  }
  
  return results;
}

// 搜索事件（增强版）
function searchTimelineEvents(query: string, options: SearchOptions = {}): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];
  
  for (const event of timelineEvents) {
    let relevance = 0;
    
    // 标题匹配（最高权重）
    if (event.title.toLowerCase().includes(lowerQuery)) {
      relevance += 85;
    }
    
    // 描述匹配
    if (event.description.toLowerCase().includes(lowerQuery)) {
      relevance += 45;
    }
    
    // 地点匹配
    if (event.location.toLowerCase().includes(lowerQuery)) {
      relevance += 40;
    }
    
    // 人物匹配
    if (event.characters.some(character => character.toLowerCase().includes(lowerQuery))) {
      relevance += 40;
    }
    
    // 标签匹配
    if (event.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
      relevance += 35;
    }
    
    // 时代匹配
    if (event.era.toLowerCase().includes(lowerQuery)) {
      relevance += 30;
    }
    
    // 时间匹配
    if (event.time.toLowerCase().includes(lowerQuery)) {
      relevance += 25;
    }
    
    if (relevance > 0) {
      // 应用时代过滤
      if (options.era && event.era !== options.era) {
        continue;
      }
      
      // 应用重要性过滤
      if (options.minImportance !== undefined && event.importance < options.minImportance) {
        continue;
      }
      if (options.minStrength !== undefined && event.importance < options.minStrength) {
        continue;
      }
      if (options.maxStrength !== undefined && event.importance > options.maxStrength) {
        continue;
      }
      
      const ageText = event.age ? `（韩立${event.age}岁）` : '';
      results.push({
        id: event.id,
        type: 'event',
        title: event.title,
        description: `${event.description.split('。')[0]}。发生在${event.location}${ageText}。`,
        relevance,
        data: event,
        metadata: {
          era: event.era,
          importance: event.importance,
          age: event.age
        }
      });
    }
  }
  
  return results;
}

// 搜索门派（增强版）
function searchSects(query: string, options: SearchOptions = {}): SearchResult[] {
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];
  
  for (const sect of sects) {
    let relevance = 0;
    
    // 名称匹配（最高权重）
    if (sect.name.toLowerCase().includes(lowerQuery)) {
      relevance += 85;
    }
    
    // 地区匹配
    if (sect.region.toLowerCase().includes(lowerQuery)) {
      relevance += 55;
    }
    
    // 描述匹配
    if (sect.description.toLowerCase().includes(lowerQuery)) {
      relevance += 45;
    }
    
    // 领袖匹配
    if (sect.leader && sect.leader.toLowerCase().includes(lowerQuery)) {
      relevance += 40;
    }
    
    // 擅长领域匹配
    if (sect.speciality && sect.speciality.toLowerCase().includes(lowerQuery)) {
      relevance += 35;
    }
    
    // 创建时间匹配
    if (sect.foundingTime && sect.foundingTime.toLowerCase().includes(lowerQuery)) {
      relevance += 25;
    }
    
    if (relevance > 0) {
      // 应用实力过滤
      if (options.minStrength !== undefined && sect.strength < options.minStrength) {
        continue;
      }
      if (options.maxStrength !== undefined && sect.strength > options.maxStrength) {
        continue;
      }
      
      const leaderText = sect.leader ? `，领袖：${sect.leader}` : '';
      const specialityText = sect.speciality ? `，擅长：${sect.speciality}` : '';
      results.push({
        id: sect.id,
        type: 'sect',
        title: sect.name,
        description: `${sect.region}，实力评分：${sect.strength}/10${leaderText}${specialityText}。${sect.description.split('。')[0]}。`,
        relevance,
        data: sect,
        metadata: {
          strength: sect.strength
        }
      });
    }
  }
  
  return results;
}

// 高级搜索：按类型搜索
export function searchByType(query: string, type: 'character' | 'level' | 'event' | 'sect', options: SearchOptions = {}): SearchResult[] {
  switch (type) {
    case 'character':
      return searchCharacters(query, options);
    case 'level':
      return searchCultivationLevels(query, options);
    case 'event':
      return searchTimelineEvents(query, options);
    case 'sect':
      return searchSects(query, options);
    default:
      return [];
  }
}

// 获取搜索结果详情（增强版）
export function getResultDetails(result: SearchResult): string {
  switch (result.type) {
    case 'character':
      const char = result.data as Character;
      const eraText = result.metadata?.era ? `【${result.metadata.era}】` : '';
      return `
${eraText}**姓名**：${char.name}
**境界**：${char.cultivationLevel}
**门派**：${char.sect}
**描述**：${char.description}
**重要事件**：${char.importantEvents.slice(0, 4).join('；')}
**法宝**：${char.treasures.slice(0, 4).join('、')}
**关系**：${char.relationships.slice(0, 3).map(rel => `${rel.type}：${rel.description}`).join('；')}
      `.trim();
    
    case 'level':
      const level = result.data as CultivationLevel;
      const levelEraText = result.metadata?.era ? `【${result.metadata.era}】` : '';
      return `
${levelEraText}**境界**：${level.name}
**描述**：${level.description}
**寿元**：${level.lifespan}
**突破难度**：${level.difficulty}/10
**典型修炼时间**：${level.typicalTime}
**主要能力**：${level.abilities.slice(0, 4).join('、')}
**特点**：${level.keyFeatures.slice(0, 4).join('；')}
**示例**：${level.examples.slice(0, 2).join('；')}
      `.trim();
    
    case 'event':
      const event = result.data as TimelineEvent;
      const ageText = event.age ? `韩立${event.age}岁` : '时间未知';
      return `
【${event.era}】**事件**：${event.title}
**时间**：${event.time}（${ageText}）
**地点**：${event.location}
**描述**：${event.description}
**涉及人物**：${event.characters.join('、')}
**标签**：${event.tags.slice(0, 5).join('、')}
**重要性**：${'★'.repeat(event.importance)}（${event.importance}/5）
      `.trim();
    
    case 'sect':
      const sect = result.data as Sect;
      const leaderText = sect.leader ? `**领袖**：${sect.leader}\n` : '';
      const foundingText = sect.foundingTime ? `**创建时间**：${sect.foundingTime}\n` : '';
      const specialityText = sect.speciality ? `**擅长领域**：${sect.speciality}\n` : '';
      return `
**门派**：${sect.name}
**地区**：${sect.region}
**实力评分**：${sect.strength}/10
${leaderText}${foundingText}${specialityText}**描述**：${sect.description}
      `.trim();
    
    default:
      return '暂无详细信息';
  }
}

// 获取搜索统计（增强版）
export function getSearchStats(query: string): {
  total: number;
  byType: Record<string, number>;
  byEra: Record<string, number>;
  topResults: SearchResult[];
  averageRelevance: number;
} {
  const allResults = searchAll(query, { minRelevance: 1 });
  const byType: Record<string, number> = {};
  const byEra: Record<string, number> = {};
  let totalRelevance = 0;
  
  for (const result of allResults) {
    byType[result.type] = (byType[result.type] || 0) + 1;
    
    if (result.metadata?.era) {
      byEra[result.metadata.era] = (byEra[result.metadata.era] || 0) + 1;
    }
    
    totalRelevance += result.relevance;
  }
  
  return {
    total: allResults.length,
    byType,
    byEra,
    topResults: allResults.slice(0, 5),
    averageRelevance: allResults.length > 0 ? Math.round(totalRelevance / allResults.length) : 0
  };
}

// 获取热门搜索建议（增强版）
export function getSearchSuggestions(query: string): string[] {
  const suggestions: string[] = [];
  const lowerQuery = query.toLowerCase();
  
  // 如果查询为空，返回热门搜索
  if (!query.trim()) {
    return [
      '韩立', '南宫婉', '元婴期', '黄枫谷', '飞升',
      '掌天瓶', '令狐老祖', '掩月宗', '化神', '坠魔谷'
    ];
  }
  
  // 人物建议
  characters.forEach(char => {
    if (char.name.toLowerCase().includes(lowerQuery) && suggestions.length < 8) {
      suggestions.push(char.name);
    }
    // 别名建议
    char.aliases.forEach(alias => {
      if (alias.toLowerCase().includes(lowerQuery) && suggestions.length < 10) {
        suggestions.push(alias);
      }
    });
  });
  
  // 境界建议
  cultivationLevels.forEach(level => {
    if (level.name.toLowerCase().includes(lowerQuery) && suggestions.length < 15) {
      suggestions.push(level.name);
    }
  });
  
  // 门派建议
  sects.forEach(sect => {
    if (sect.name.toLowerCase().includes(lowerQuery) && suggestions.length < 20) {
      suggestions.push(sect.name);
    }
  });
  
  // 事件建议
  timelineEvents.forEach(event => {
    if (event.title.toLowerCase().includes(lowerQuery) && suggestions.length < 25) {
      suggestions.push(event.title);
    }
  });
  
  // 去重并限制数量
  return [...new Set(suggestions)].slice(0, 15);
}

// 获取相关搜索（基于搜索结果）
export function getRelatedSearches(query: string): string[] {
  const results = searchAll(query, { minRelevance: 30, limit: 10 });
  const related: string[] = [];
  
  for (const result of results) {
    // 从结果中提取相关关键词
    switch (result.type) {
      case 'character':
        const char = result.data as Character;
        // 添加境界和门派
        if (!related.includes(char.cultivationLevel.split('（')[0])) {
          related.push(char.cultivationLevel.split('（')[0]);
        }
        if (!related.includes(char.sect.split('（')[0])) {
          related.push(char.sect.split('（')[0]);
        }
        // 添加法宝
        char.treasures.slice(0, 2).forEach(treasure => {
          if (!related.includes(treasure)) {
            related.push(treasure);
          }
        });
        break;
        
      case 'level':
        const level = result.data as CultivationLevel;
        // 添加相关能力
        level.abilities.slice(0, 2).forEach(ability => {
          const key = ability.split('，')[0];
          if (!related.includes(key)) {
            related.push(key);
          }
        });
        break;
        
      case 'event':
        const event = result.data as TimelineEvent;
        // 添加地点和标签
        if (!related.includes(event.location)) {
          related.push(event.location);
        }
        event.tags.slice(0, 3).forEach(tag => {
          if (!related.includes(tag)) {
            related.push(tag);
          }
        });
        break;
        
      case 'sect':
        const sect = result.data as Sect;
        // 添加地区和领袖
        if (!related.includes(sect.region)) {
          related.push(sect.region);
        }
        if (sect.leader && !related.includes(sect.leader)) {
          related.push(sect.leader);
        }
        break;
    }
  }
  
  return related.slice(0, 10);
}

// 获取搜索历史（模拟）
export function getSearchHistory(): string[] {
  // 这里可以连接实际的历史存储
  return [
    '韩立', '元婴期', '黄枫谷', '南宫婉',
    '飞升', '掌天瓶', '化神', '掩月宗'
  ];
}

// 获取搜索分析报告
export function getSearchAnalysis(query: string): {
  query: string;
  totalResults: number;
  relevanceDistribution: { range: string; count: number }[];
  typeDistribution: { type: string; count: number; percentage: number }[];
  topKeywords: string[];
  searchDifficulty: '简单' | '中等' | '困难';
} {
  const allResults = searchAll(query, { minRelevance: 1 });
  const total = allResults.length;
  
  // 相关性分布
  const relevanceRanges = [
    { min: 80, max: 100, label: '高度相关 (80-100)' },
    { min: 60, max: 79, label: '中度相关 (60-79)' },
    { min: 40, max: 59, label: '低度相关 (40-59)' },
    { min: 1, max: 39, label: '轻微相关 (1-39)' }
  ];
  
  const relevanceDistribution = relevanceRanges.map(range => ({
    range: range.label,
    count: allResults.filter(r => r.relevance >= range.min && r.relevance <= range.max).length
  }));
  
  // 类型分布
  const typeCounts: Record<string, number> = {};
  allResults.forEach(result => {
    typeCounts[result.type] = (typeCounts[result.type] || 0) + 1;
  });
  
  const typeDistribution = Object.entries(typeCounts).map(([type, count]) => ({
    type,
    count,
    percentage: Math.round((count / total) * 100)
  }));
  
  // 提取关键词
  const keywords = new Set<string>();
  allResults.slice(0, 10).forEach(result => {
    // 从标题和描述中提取关键词
    const text = `${result.title} ${result.description}`;
    const words = text.split(/[^\u4e00-\u9fa5]+/).filter(word => word.length > 1);
    words.slice(0, 3).forEach(word => keywords.add(word));
  });
  
  // 搜索难度评估
  let searchDifficulty: '简单' | '中等' | '困难' = '中等';
  if (total === 0) searchDifficulty = '困难';
  else if (total >= 20 && relevanceDistribution[0].count >= 5) searchDifficulty = '简单';
  else if (total >= 5) searchDifficulty = '中等';
  else searchDifficulty = '困难';
  
  return {
    query,
    totalResults: total,
    relevanceDistribution,
    typeDistribution,
    topKeywords: Array.from(keywords).slice(0, 8),
    searchDifficulty
  };
}

// 高级搜索：组合搜索
export function advancedSearch(filters: {
  query?: string;
  types?: ('character' | 'level' | 'event' | 'sect')[];
  era?: '人界篇' | '灵界篇' | '仙界篇';
  minStrength?: number;
  maxStrength?: number;
  minImportance?: number;
  minRelevance?: number;
  limit?: number;
}): SearchResult[] {
  const options: SearchOptions = {
    types: filters.types,
    era: filters.era,
    minStrength: filters.minStrength,
    maxStrength: filters.maxStrength,
    minImportance: filters.minImportance,
    minRelevance: filters.minRelevance || 10,
    limit: filters.limit || 50
  };
  
  return searchAll(filters.query || '', options);
}

// 获取搜索帮助提示
export function getSearchTips(): string[] {
  return [
    '尝试搜索具体名称，如"韩立"、"元婴期"、"黄枫谷"',
    '使用多个关键词，如"韩立 元婴"',
    '按类型筛选：在搜索页面点击类型按钮',
    '查看热门搜索获取灵感',
    '使用相关搜索发现更多内容',
    '高级搜索：可以按时代、实力等条件筛选'
  ];
}