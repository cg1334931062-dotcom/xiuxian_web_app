// 《凡人修仙传》百科全书 - 数据统计和搜索功能

import {
  Character, Sect, CultivationTechnique, Treasure, Event, Location,
  Material, CultivationLevel, Monster, Pill, Organization, Inheritance,
  EncyclopediaStats, SearchOptions, SearchResult
} from './encyclopedia';

import {
  characters, sects, techniques, treasures, events, locations, materials
} from './encyclopedia_data';

// ==================== 数据统计 ====================

export function getEncyclopediaStats(): EncyclopediaStats {
  return {
    totalCharacters: characters.length,
    totalSects: sects.length,
    totalTechniques: techniques.length,
    totalTreasures: treasures.length,
    totalEvents: events.length,
    totalLocations: locations.length,
    totalMaterials: materials.length,
    totalMonsters: 0, // 待添加
    totalPills: 0, // 待添加
    totalOrganizations: 0, // 待添加
    totalInheritances: 0, // 待添加
    
    byEra: {
      humanRealm: characters.filter(c => c.era === '人界篇').length +
                 sects.filter(s => s.era === '人界篇').length +
                 techniques.filter(t => t.era === '人界篇').length +
                 treasures.filter(t => t.era === '人界篇').length +
                 events.filter(e => e.era === '人界篇').length +
                 locations.filter(l => l.era === '人界篇').length +
                 materials.filter(m => m.era === '人界篇').length,
      
      spiritRealm: characters.filter(c => c.era === '灵界篇').length +
                  sects.filter(s => s.era === '灵界篇').length +
                  techniques.filter(t => t.era === '灵界篇').length +
                  treasures.filter(t => t.era === '灵界篇').length +
                  events.filter(e => e.era === '灵界篇').length +
                  locations.filter(l => l.era === '灵界篇').length +
                  materials.filter(m => m.era === '灵界篇').length,
      
      immortalRealm: characters.filter(c => c.era === '仙界篇').length +
                    sects.filter(s => s.era === '仙界篇').length +
                    techniques.filter(t => t.era === '仙界篇').length +
                    treasures.filter(t => t.era === '仙界篇').length +
                    events.filter(e => e.era === '仙界篇').length +
                    locations.filter(l => l.era === '仙界篇').length +
                    materials.filter(m => m.era === '仙界篇').length
    },
    
    byImportance: {
      critical: characters.filter(c => c.importance >= 9).length +
               sects.filter(s => s.importance >= 9).length +
               techniques.filter(t => t.importance >= 9).length +
               treasures.filter(t => t.importance >= 9).length +
               events.filter(e => e.importance >= 9).length +
               locations.filter(l => l.importance >= 9).length +
               materials.filter(m => m.importance >= 9).length,
      
      important: characters.filter(c => c.importance >= 7 && c.importance < 9).length +
                sects.filter(s => s.importance >= 7 && s.importance < 9).length +
                techniques.filter(t => t.importance >= 7 && t.importance < 9).length +
                treasures.filter(t => t.importance >= 7 && t.importance < 9).length +
                events.filter(e => e.importance >= 7 && e.importance < 9).length +
                locations.filter(l => l.importance >= 7 && l.importance < 9).length +
                materials.filter(m => m.importance >= 7 && m.importance < 9).length,
      
      normal: characters.filter(c => c.importance >= 4 && c.importance < 7).length +
             sects.filter(s => s.importance >= 4 && s.importance < 7).length +
             techniques.filter(t => t.importance >= 4 && t.importance < 7).length +
             treasures.filter(t => t.importance >= 4 && t.importance < 7).length +
             events.filter(e => e.importance >= 4 && e.importance < 7).length +
             locations.filter(l => l.importance >= 4 && l.importance < 7).length +
             materials.filter(m => m.importance >= 4 && m.importance < 7).length,
      
      minor: characters.filter(c => c.importance < 4).length +
            sects.filter(s => s.importance < 4).length +
            techniques.filter(t => t.importance < 4).length +
            treasures.filter(t => t.importance < 4).length +
            events.filter(e => e.importance < 4).length +
            locations.filter(l => l.importance < 4).length +
            materials.filter(m => m.importance < 4).length
    }
  };
}

// ==================== 搜索功能 ====================

function calculateRelevance(item: any, query: string): number {
  const queryLower = query.toLowerCase();
  let score = 0;
  
  // 名称匹配（最高权重）
  if (item.name.toLowerCase().includes(queryLower)) {
    score += 50;
  }
  
  // 别名匹配
  if (item.aliases && item.aliases.some((alias: string) => 
    alias.toLowerCase().includes(queryLower))) {
    score += 40;
  }
  
  // 描述匹配
  if (item.description.toLowerCase().includes(queryLower)) {
    score += 30;
  }
  
  // 标签匹配
  if (item.tags && item.tags.some((tag: string) => 
    tag.toLowerCase().includes(queryLower))) {
    score += 20;
  }
  
  // 重要性加成
  score += item.importance * 2;
  
  return Math.min(score, 100);
}

export function searchEncyclopedia(options: SearchOptions): SearchResult[] {
  const {
    query,
    types = ['character', 'sect', 'technique', 'treasure', 'event', 'location', 'material'],
    era,
    minImportance = 0,
    maxImportance = 10,
    tags = [],
    limit = 50,
    offset = 0
  } = options;
  
  const queryLower = query.toLowerCase();
  const allResults: SearchResult[] = [];
  
  // 搜索人物
  if (types.includes('character')) {
    characters.forEach(character => {
      if (era && !era.includes(character.era)) return;
      if (character.importance < minImportance || character.importance > maxImportance) return;
      if (tags.length > 0 && !tags.some(tag => character.tags.includes(tag))) return;
      
      const relevance = calculateRelevance(character, query);
      if (relevance > 0) {
        allResults.push({
          id: character.id,
          type: 'character',
          name: character.name,
          description: character.description.substring(0, 150) + '...',
          relevance,
          importance: character.importance,
          era: character.era,
          tags: character.tags
        });
      }
    });
  }
  
  // 搜索宗门
  if (types.includes('sect')) {
    sects.forEach(sect => {
      if (era && !era.includes(sect.era)) return;
      if (sect.importance < minImportance || sect.importance > maxImportance) return;
      if (tags.length > 0 && !tags.some(tag => sect.tags.includes(tag))) return;
      
      const relevance = calculateRelevance(sect, query);
      if (relevance > 0) {
        allResults.push({
          id: sect.id,
          type: 'sect',
          name: sect.name,
          description: sect.description.substring(0, 150) + '...',
          relevance,
          importance: sect.importance,
          era: sect.era,
          tags: sect.tags
        });
      }
    });
  }
  
  // 搜索功法
  if (types.includes('technique')) {
    techniques.forEach(technique => {
      if (era && !era.includes(technique.era)) return;
      if (technique.importance < minImportance || technique.importance > maxImportance) return;
      if (tags.length > 0 && !tags.some(tag => technique.tags.includes(tag))) return;
      
      const relevance = calculateRelevance(technique, query);
      if (relevance > 0) {
        allResults.push({
          id: technique.id,
          type: 'technique',
          name: technique.name,
          description: technique.description.substring(0, 150) + '...',
          relevance,
          importance: technique.importance,
          era: technique.era,
          tags: technique.tags
        });
      }
    });
  }
  
  // 搜索法宝
  if (types.includes('treasure')) {
    treasures.forEach(treasure => {
      if (era && !era.includes(treasure.era)) return;
      if (treasure.importance < minImportance || treasure.importance > maxImportance) return;
      if (tags.length > 0 && !tags.some(tag => treasure.tags.includes(tag))) return;
      
      const relevance = calculateRelevance(treasure, query);
      if (relevance > 0) {
        allResults.push({
          id: treasure.id,
          type: 'treasure',
          name: treasure.name,
          description: treasure.description.substring(0, 150) + '...',
          relevance,
          importance: treasure.importance,
          era: treasure.era,
          tags: treasure.tags
        });
      }
    });
  }
  
  // 搜索事件
  if (types.includes('event')) {
    events.forEach(event => {
      if (era && !era.includes(event.era)) return;
      if (event.importance < minImportance || event.importance > maxImportance) return;
      if (tags.length > 0 && !tags.some(tag => event.tags.includes(tag))) return;
      
      const relevance = calculateRelevance(event, query);
      if (relevance > 0) {
        allResults.push({
          id: event.id,
          type: 'event',
          name: event.name,
          description: event.description.substring(0, 150) + '...',
          relevance,
          importance: event.importance,
          era: event.era,
          tags: event.tags
        });
      }
    });
  }
  
  // 搜索地点
  if (types.includes('location')) {
    locations.forEach(location => {
      if (era && !era.includes(location.era)) return;
      if (location.importance < minImportance || location.importance > maxImportance) return;
      if (tags.length > 0 && !tags.some(tag => location.tags.includes(tag))) return;
      
      const relevance = calculateRelevance(location, query);
      if (relevance > 0) {
        allResults.push({
          id: location.id,
          type: 'location',
          name: location.name,
          description: location.description.substring(0, 150) + '...',
          relevance,
          importance: location.importance,
          era: location.era,
          tags: location.tags
        });
      }
    });
  }
  
  // 搜索材料
  if (types.includes('material')) {
    materials.forEach(material => {
      if (era && !era.includes(material.era)) return;
      if (material.importance < minImportance || material.importance > maxImportance) return;
      if (tags.length > 0 && !tags.some(tag => material.tags.includes(tag))) return;
      
      const relevance = calculateRelevance(material, query);
      if (relevance > 0) {
        allResults.push({
          id: material.id,
          type: 'material',
          name: material.name,
          description: material.description.substring(0, 150) + '...',
          relevance,
          importance: material.importance,
          era: material.era,
          tags: material.tags
        });
      }
    });
  }
  
  // 按相关性排序
  allResults.sort((a, b) => b.relevance - a.relevance);
  
  // 应用分页
  return allResults.slice(offset, offset + limit);
}

// ==================== 获取详情 ====================

export function getCharacterById(id: string): Character | undefined {
  return characters.find(c => c.id === id);
}

export function getSectById(id: string): Sect | undefined {
  return sects.find(s => s.id === id);
}

export function getTechniqueById(id: string): CultivationTechnique | undefined {
  return techniques.find(t => t.id === id);
}

export function getTreasureById(id: string): Treasure | undefined {
  return treasures.find(t => t.id === id);
}

export function getEventById(id: string): Event | undefined {
  return events.find(e => e.id === id);
}

export function getLocationById(id: string): Location | undefined {
  return locations.find(l => l.id === id);
}

export function getMaterialById(id: string): Material | undefined {
  return materials.find(m => m.id === id);
}

// ==================== 获取相关数据 ====================

export function getRelatedCharacters(characterId: string): Character[] {
  const character = getCharacterById(characterId);
  if (!character) return [];
  
  return character.relationships
    .map(rel => getCharacterById(rel.targetId))
    .filter((c): c is Character => c !== undefined);
}

export function getCharacterTechniques(characterId: string): CultivationTechnique[] {
  const character = getCharacterById(characterId);
  if (!character) return [];
  
  return character.techniques
    .map(techName => techniques.find(t => t.name === techName))
    .filter((t): t is CultivationTechnique => t !== undefined);
}

export function getCharacterTreasures(characterId: string): Treasure[] {
  const character = getCharacterById(characterId);
  if (!character) return [];
  
  return character.treasures
    .map(treasureName => treasures.find(t => t.name === treasureName))
    .filter((t): t is Treasure => t !== undefined);
}

export function getSectMembers(sectId: string): Character[] {
  return characters.filter(character => 
    character.sects.some(sect => sect.includes(sectId))
  );
}

export function getEventsByCharacter(characterId: string): Event[] {
  return events.filter(event => 
    event.participants.includes(characterId)
  );
}

export function getEventsByLocation(locationId: string): Event[] {
  return events.filter(event => 
    event.location && event.location.includes(locationId)
  );
}

// ==================== 数据导出 ====================

export {
  characters,
  sects,
  techniques,
  treasures,
  events,
  locations,
  materials
};