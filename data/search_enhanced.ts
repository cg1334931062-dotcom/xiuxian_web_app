// 增强版智能搜索工具函数
// 整合百科全书数据，支持更全面的搜索

import {
  searchEncyclopedia,
  getEncyclopediaStats,
  getCharacterById,
  getSectById,
  getTechniqueById,
  getTreasureById,
  getEventById,
  getLocationById,
  getMaterialById,
  getRelatedCharacters,
  getCharacterTechniques,
  getCharacterTreasures,
  getSectMembers,
  getEventsByCharacter,
  getEventsByLocation
} from './encyclopedia_stats';

import { SearchOptions, SearchResult } from './encyclopedia';

// 扩展搜索选项
export interface EnhancedSearchOptions extends SearchOptions {
  includeRelated?: boolean; // 是否包含相关结果
  maxRelated?: number; // 最大相关结果数
  sortBy?: 'relevance' | 'importance' | 'name' | 'era'; // 排序方式
}

// 增强版搜索函数
export function enhancedSearch(query: string, options: EnhancedSearchOptions = {}): SearchResult[] {
  const {
    includeRelated = false,
    maxRelated = 5,
    sortBy = 'relevance',
    ...searchOptions
  } = options;
  
  // 执行基础搜索
  let results = searchEncyclopedia({
    query,
    ...searchOptions
  });
  
  // 添加相关结果
  if (includeRelated && results.length > 0) {
    const mainResult = results[0];
    const relatedResults = getRelatedResults(mainResult, maxRelated);
    results = [...results, ...relatedResults];
    
    // 去重
    const seenIds = new Set();
    results = results.filter(result => {
      if (seenIds.has(result.id)) return false;
      seenIds.add(result.id);
      return true;
    });
  }
  
  // 排序
  results = sortResults(results, sortBy);
  
  return results;
}

// 获取相关结果
function getRelatedResults(mainResult: SearchResult, maxRelated: number): SearchResult[] {
  const relatedResults: SearchResult[] = [];
  
  switch (mainResult.type) {
    case 'character':
      // 获取相关人物
      const relatedChars = getRelatedCharacters(mainResult.id);
      relatedChars.slice(0, maxRelated).forEach(char => {
        relatedResults.push({
          id: char.id,
          type: 'character',
          name: char.name,
          description: `相关人物：${char.description.substring(0, 100)}...`,
          relevance: 60, // 相关结果默认相关性
          importance: char.importance,
          era: char.era,
          tags: char.tags
        });
      });
      break;
      
    case 'sect':
      // 获取宗门成员
      const members = getSectMembers(mainResult.id);
      members.slice(0, maxRelated).forEach(member => {
        relatedResults.push({
          id: member.id,
          type: 'character',
          name: member.name,
          description: `宗门成员：${member.description.substring(0, 100)}...`,
          relevance: 60,
          importance: member.importance,
          era: member.era,
          tags: member.tags
        });
      });
      break;
      
    case 'technique':
      // 获取修炼此功法的人物
      const characters = getCharacterById(mainResult.id);
      if (characters) {
        relatedResults.push({
          id: characters.id,
          type: 'character',
          name: characters.name,
          description: `修炼者：${characters.description.substring(0, 100)}...`,
          relevance: 60,
          importance: characters.importance,
          era: characters.era,
          tags: characters.tags
        });
      }
      break;
      
    case 'treasure':
      // 获取法宝拥有者
      const treasure = getTreasureById(mainResult.id);
      if (treasure && treasure.owners.length > 0) {
        const ownerId = treasure.owners[0];
        const owner = getCharacterById(ownerId);
        if (owner) {
          relatedResults.push({
            id: owner.id,
            type: 'character',
            name: owner.name,
            description: `拥有者：${owner.description.substring(0, 100)}...`,
            relevance: 60,
            importance: owner.importance,
            era: owner.era,
            tags: owner.tags
          });
        }
      }
      break;
      
    case 'event':
      // 获取事件参与者
      const event = getEventById(mainResult.id);
      if (event && event.participants.length > 0) {
        event.participants.slice(0, maxRelated).forEach(participantId => {
          const participant = getCharacterById(participantId);
          if (participant) {
            relatedResults.push({
              id: participant.id,
              type: 'character',
              name: participant.name,
              description: `事件参与者：${participant.description.substring(0, 100)}...`,
              relevance: 60,
              importance: participant.importance,
              era: participant.era,
              tags: participant.tags
            });
          }
        });
      }
      break;
  }
  
  return relatedResults;
}

// 排序结果
function sortResults(results: SearchResult[], sortBy: string): SearchResult[] {
  switch (sortBy) {
    case 'importance':
      return [...results].sort((a, b) => b.importance - a.importance);
      
    case 'name':
      return [...results].sort((a, b) => a.name.localeCompare(b.name));
      
    case 'era':
      const eraOrder = { '人界篇': 1, '灵界篇': 2, '仙界篇': 3, '全篇': 0 };
      return [...results].sort((a, b) => eraOrder[a.era] - eraOrder[b.era]);
      
    case 'relevance':
    default:
      return [...results].sort((a, b) => b.relevance - a.relevance);
  }
}

// 获取搜索统计
export function getSearchStats(query: string) {
  const startTime = Date.now();
  const stats = getEncyclopediaStats();
  const endTime = Date.now();
  
  return {
    time: endTime - startTime,
    totalCharacters: stats.totalCharacters,
    totalSects: stats.totalSects,
    totalTechniques: stats.totalTechniques,
    totalTreasures: stats.totalTreasures,
    totalEvents: stats.totalEvents,
    totalLocations: stats.totalLocations,
    totalMaterials: stats.totalMaterials,
    byEra: stats.byEra,
    byImportance: stats.byImportance
  };
}

// 获取搜索建议
export function getSearchSuggestions(query: string): string[] {
  const suggestions: string[] = [];
  
  if (!query.trim()) {
    return [
      '韩立',
      '南宫婉',
      '黄枫谷',
      '掌天瓶',
      '青元剑诀',
      '虚天殿',
      '时间法则',
      '道祖'
    ];
  }
  
  const queryLower = query.toLowerCase();
  
  // 人物建议
  const characterSuggestions = [
    '韩立', '南宫婉', '墨大夫', '向之礼', '魏无涯',
    '令狐老祖', '燕如嫣', '元瑶', '张铁', '金元子'
  ].filter(name => name.toLowerCase().includes(queryLower));
  
  // 宗门建议
  const sectSuggestions = [
    '黄枫谷', '掩月宗', '魔道六宗', '落云宗', '青元宫'
  ].filter(name => name.toLowerCase().includes(queryLower));
  
  // 功法建议
  const techniqueSuggestions = [
    '长春功', '青元剑诀', '梵圣真魔功', '大衍决', '惊神刺', '时间法则'
  ].filter(name => name.toLowerCase().includes(queryLower));
  
  // 法宝建议
  const treasureSuggestions = [
    '掌天瓶', '青竹蜂云剑', '虚天鼎', '风雷翅', '玄天斩灵剑'
  ].filter(name => name.toLowerCase().includes(queryLower));
  
  // 事件建议
  const eventSuggestions = [
    '韩立入七玄门', '夺舍之战', '加入黄枫谷', '虚天殿争夺战', '飞升灵界'
  ].filter(name => name.toLowerCase().includes(queryLower));
  
  suggestions.push(...characterSuggestions);
  suggestions.push(...sectSuggestions);
  suggestions.push(...techniqueSuggestions);
  suggestions.push(...treasureSuggestions);
  suggestions.push(...eventSuggestions);
  
  // 去重并限制数量
  return [...new Set(suggestions)].slice(0, 10);
}

// 获取热门搜索
export function getHotSearches() {
  return [
    { query: '韩立', type: 'character', description: '主角，凡人修仙' },
    { query: '南宫婉', type: 'character', description: '韩立的道侣' },
    { query: '掌天瓶', type: 'treasure', description: '韩立最重要的法宝' },
    { query: '黄枫谷', type: 'sect', description: '韩立加入的第一个门派' },
    { query: '青元剑诀', type: 'technique', description: '韩立主要修炼的功法' },
    { query: '时间法则', type: 'technique', description: '韩立最终成就道祖' },
    { query: '虚天殿', type: 'location', description: '上古遗迹，内有重宝' },
    { query: '夺舍之战', type: 'event', description: '韩立与墨大夫的关键战斗' }
  ];
}

// 获取类型统计
export function getTypeStats() {
  const stats = getEncyclopediaStats();
  return {
    characters: stats.totalCharacters,
    sects: stats.totalSects,
    techniques: stats.totalTechniques,
    treasures: stats.totalTreasures,
    events: stats.totalEvents,
    locations: stats.totalLocations,
    materials: stats.totalMaterials
  };
}

// 导出类型
export type { SearchResult, EnhancedSearchOptions };