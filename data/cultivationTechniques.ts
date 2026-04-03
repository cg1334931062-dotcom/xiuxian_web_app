// 《凡人修仙传》功法体系数据
// 基于公开资源整理，确保数据准确性

export interface CultivationTechnique {
  id: string;
  name: string;
  aliases: string[];
  type: '基础功法' | '进阶功法' | '顶级功法' | '秘术' | '禁术';
  attribute: '金' | '木' | '水' | '火' | '土' | '雷' | '风' | '冰' | '时间' | '空间' | '魔' | '佛' | '混合';
  levelRequirement: string; // 修炼所需的最低境界
  description: string;
  creator?: string; // 创造者
  origin?: string; // 功法来源
  layers: number; // 功法层数
  currentLayer?: number; // 当前修炼到的层数（用于角色）
  specialAbilities: string[]; // 特殊能力
  advantages: string[]; // 优势
  disadvantages: string[]; // 劣势
  cultivationTime: string; // 修炼时间
  difficulty: number; // 1-10，修炼难度
  compatibility: string[]; // 兼容的其他功法
  incompatible: string[]; // 不兼容的功法
  relatedTechniques: string[]; // 相关功法
  famousPractitioners: string[]; // 著名修炼者
}

export const cultivationTechniques: CultivationTechnique[] = [
  // 基础功法
  {
    id: 'changchungong',
    name: '长春功',
    aliases: ['长春诀'],
    type: '基础功法',
    attribute: '木',
    levelRequirement: '炼气期',
    description: '木属性基础功法，适合木灵根修士修炼。功法温和，修炼速度适中，对延年益寿有一定帮助。',
    creator: '未知',
    origin: '七玄门基础功法',
    layers: 13,
    specialAbilities: [
      '延年益寿',
      '恢复能力较强',
      '对木属性法术有加成'
    ],
    advantages: [
      '修炼门槛低',
      '功法温和不易走火入魔',
      '适合打基础'
    ],
    disadvantages: [
      '攻击力较弱',
      '修炼速度较慢',
      '后期潜力有限'
    ],
    cultivationTime: '每层1-3年',
    difficulty: 2,
    compatibility: ['青元剑诀', '乙木真诀'],
    incompatible: ['火属性功法'],
    relatedTechniques: ['青元剑诀'],
    famousPractitioners: ['韩立（初期）', '七玄门弟子']
  },
  {
    id: 'qingyuanjianjue',
    name: '青元剑诀',
    aliases: ['青元功'],
    type: '进阶功法',
    attribute: '木',
    levelRequirement: '筑基期',
    description: '青元子所创的木属性剑修功法，分为十三层。修炼到高深境界可凝聚青元剑芒，威力强大。',
    creator: '青元子',
    origin: '青元宫',
    layers: 13,
    specialAbilities: [
      '青元剑芒',
      '剑阵攻击',
      '木属性防御',
      '恢复能力'
    ],
    advantages: [
      '攻防一体',
      '剑修威力强大',
      '适合木灵根修士'
    ],
    disadvantages: [
      '修炼难度较高',
      '需要剑道天赋',
      '资源消耗较大'
    ],
    cultivationTime: '每层5-10年',
    difficulty: 6,
    compatibility: ['长春功', '乙木真诀'],
    incompatible: ['金属性剑诀'],
    relatedTechniques: ['大庚剑阵', '青元剑盾'],
    famousPractitioners: ['韩立（中期）', '青元子']
  },
  // 顶级功法
  {
    id: 'fanshengzhenmogong',
    name: '梵圣真魔功',
    aliases: ['梵圣功', '真魔功'],
    type: '顶级功法',
    attribute: '魔',
    levelRequirement: '元婴期',
    description: '魔道顶级炼体功法，源自上古魔族。修炼后可获得强大肉身力量，凝聚真魔法相。',
    creator: '上古魔族',
    origin: '魔界',
    layers: 9,
    specialAbilities: [
      '真魔法相',
      '肉身强化',
      '魔气攻击',
      '恢复能力极强'
    ],
    advantages: [
      '肉身无敌',
      '近战威力巨大',
      '生命力顽强'
    ],
    disadvantages: [
      '修炼风险高',
      '容易入魔',
      '需要魔气环境'
    ],
    cultivationTime: '每层50-100年',
    difficulty: 9,
    compatibility: ['明王诀', '托天魔功'],
    incompatible: ['佛门功法'],
    relatedTechniques: ['真魔法相', '魔气灌体'],
    famousPractitioners: ['韩立（后期）', '魔界修士']
  },
  {
    id: 'mingwangjue',
    name: '明王诀',
    aliases: ['金刚诀'],
    type: '顶级功法',
    attribute: '佛',
    levelRequirement: '元婴期',
    description: '佛门顶级炼体功法，修炼后可凝聚明王法身，肉身强度堪比法宝。',
    creator: '佛门高僧',
    origin: '佛宗',
    layers: 7,
    specialAbilities: [
      '明王法身',
      '金刚不坏',
      '佛光护体',
      '净化魔气'
    ],
    advantages: [
      '防御力极强',
      '克制魔功',
      '心境平和'
    ],
    disadvantages: [
      '攻击手段单一',
      '修炼缓慢',
      '需要佛心'
    ],
    cultivationTime: '每层80-150年',
    difficulty: 8,
    compatibility: ['梵圣真魔功（需谨慎）'],
    incompatible: ['魔道功法'],
    relatedTechniques: ['金刚罩', '佛光普照'],
    famousPractitioners: ['韩立（兼修）', '佛门高僧']
  },
  // 时间空间功法
  {
    id: 'shijianfaze',
    name: '时间法则',
    aliases: ['时间之道'],
    type: '顶级功法',
    attribute: '时间',
    levelRequirement: '大乘期',
    description: '掌握时间法则，可操控时间流速，是修仙界最顶级的法则之一。',
    creator: '时间道祖',
    origin: '仙界',
    layers: 0, // 未知层数
    specialAbilities: [
      '时间加速',
      '时间减速',
      '时间停止',
      '时间回溯',
      '预见未来'
    ],
    advantages: [
      '法则之力强大',
      '近乎无敌',
      '可操控时间'
    ],
    disadvantages: [
      '修炼难度极高',
      '需要时间天赋',
      '反噬风险大'
    ],
    cultivationTime: '数万年',
    difficulty: 10,
    compatibility: ['空间法则'],
    incompatible: [],
    relatedTechniques: ['时间领域', '时间之剑'],
    famousPractitioners: ['韩立（最终）', '时间道祖']
  },
  {
    id: 'kongjianfaze',
    name: '空间法则',
    aliases: ['空间之道'],
    type: '顶级功法',
    attribute: '空间',
    levelRequirement: '炼虚期',
    description: '掌握空间法则，可操控空间，进行瞬移、空间切割等。',
    creator: '空间道祖',
    origin: '灵界/仙界',
    layers: 0, // 未知层数
    specialAbilities: [
      '空间瞬移',
      '空间切割',
      '空间禁锢',
      '创造空间',
      '空间折叠'
    ],
    advantages: [
      '机动性强',
      '攻击诡异',
      '防御独特'
    ],
    disadvantages: [
      '消耗法力大',
      '需要空间天赋',
      '修炼困难'
    ],
    cultivationTime: '数千年',
    difficulty: 9,
    compatibility: ['时间法则'],
    incompatible: [],
    relatedTechniques: ['空间裂缝', '空间屏障'],
    famousPractitioners: ['韩立（兼修）', '空间道祖']
  },
  // 其他重要功法
  {
    id: 'yimuzhenjue',
    name: '乙木真诀',
    aliases: ['乙木功'],
    type: '进阶功法',
    attribute: '木',
    levelRequirement: '筑基期',
    description: '木属性功法，注重生命力和恢复能力，适合炼丹师修炼。',
    creator: '未知',
    origin: '炼丹宗门',
    layers: 9,
    specialAbilities: [
      '快速恢复',
      '炼丹加成',
      '灵药培育'
    ],
    advantages: [
      '生命力强',
      '适合炼丹',
      '修炼平稳'
    ],
    disadvantages: [
      '攻击力弱',
      '依赖丹药',
      '进展缓慢'
    ],
    cultivationTime: '每层3-7年',
    difficulty: 4,
    compatibility: ['长春功'],
    incompatible: ['火属性功法'],
    relatedTechniques: ['乙木回春术', '灵药培育术'],
    famousPractitioners: ['炼丹师']
  },
  {
    id: 'tuotamogong',
    name: '托天魔功',
    aliases: ['托天功'],
    type: '顶级功法',
    attribute: '魔',
    levelRequirement: '元婴期',
    description: '魔道炼体功法，修炼后可获得托天之力，肉身强度惊人。',
    creator: '魔界大能',
    origin: '魔界',
    layers: 6,
    specialAbilities: [
      '托天之力',
      '魔体强化',
      '力量倍增'
    ],
    advantages: [
      '力量巨大',
      '防御强悍',
      '近战无敌'
    ],
    disadvantages: [
      '灵活性差',
      '消耗魔气',
      '容易失控'
    ],
    cultivationTime: '每层60-120年',
    difficulty: 8,
    compatibility: ['梵圣真魔功'],
    incompatible: ['佛门功法'],
    relatedTechniques: ['托天掌', '魔体爆发'],
    famousPractitioners: ['魔界修士']
  }
];

// 功法分类
export const techniqueCategories = {
  byType: {
    '基础功法': cultivationTechniques.filter(t => t.type === '基础功法'),
    '进阶功法': cultivationTechniques.filter(t => t.type === '进阶功法'),
    '顶级功法': cultivationTechniques.filter(t => t.type === '顶级功法'),
    '秘术': cultivationTechniques.filter(t => t.type === '秘术'),
    '禁术': cultivationTechniques.filter(t => t.type === '禁术')
  },
  byAttribute: {
    '金': cultivationTechniques.filter(t => t.attribute === '金'),
    '木': cultivationTechniques.filter(t => t.attribute === '木'),
    '水': cultivationTechniques.filter(t => t.attribute === '水'),
    '火': cultivationTechniques.filter(t => t.attribute === '火'),
    '土': cultivationTechniques.filter(t => t.attribute === '土'),
    '雷': cultivationTechniques.filter(t => t.attribute === '雷'),
    '风': cultivationTechniques.filter(t => t.attribute === '风'),
    '冰': cultivationTechniques.filter(t => t.attribute === '冰'),
    '时间': cultivationTechniques.filter(t => t.attribute === '时间'),
    '空间': cultivationTechniques.filter(t => t.attribute === '空间'),
    '魔': cultivationTechniques.filter(t => t.attribute === '魔'),
    '佛': cultivationTechniques.filter(t => t.attribute === '佛'),
    '混合': cultivationTechniques.filter(t => t.attribute === '混合')
  },
  byDifficulty: {
    '简单（1-3）': cultivationTechniques.filter(t => t.difficulty <= 3),
    '中等（4-6）': cultivationTechniques.filter(t => t.difficulty >= 4 && t.difficulty <= 6),
    '困难（7-8）': cultivationTechniques.filter(t => t.difficulty >= 7 && t.difficulty <= 8),
    '极难（9-10）': cultivationTechniques.filter(t => t.difficulty >= 9)
  }
};

// 辅助函数
export function getTechniqueById(id: string): CultivationTechnique | undefined {
  return cultivationTechniques.find(tech => tech.id === id);
}

export function getTechniquesByLevel(level: string): CultivationTechnique[] {
  return cultivationTechniques.filter(tech => {
    const req = tech.levelRequirement;
    // 简单匹配：如果功法要求境界包含在传入的境界中，或者要求更低
    const levelOrder = getLevelOrder(level);
    const reqOrder = getLevelOrder(req);
    return reqOrder <= levelOrder;
  });
}

// 获取境界的顺序值（简化版）
function getLevelOrder(level: string): number {
  const levelMap: Record<string, number> = {
    '炼气期': 1,
    '筑基期': 2,
    '金丹期': 3,
    '元婴期': 4,
    '化神期': 5,
    '炼虚期': 6,
    '合体期': 7,
    '大乘期': 8,
    '真仙境': 9,
    '金仙境': 10,
    '太乙境': 11,
    '大罗境': 12,
    '道祖境': 13
  };
  return levelMap[level] || 0;
}

export function getCompatibleTechniques(techniqueId: string): CultivationTechnique[] {
  const technique = getTechniqueById(techniqueId);
  if (!technique) return [];
  
  return cultivationTechniques.filter(tech => 
    technique.compatibility.includes(tech.id) || 
    tech.compatibility.includes(techniqueId)
  );
}

export function getIncompatibleTechniques(techniqueId: string): CultivationTechnique[] {
  const technique = getTechniqueById(techniqueId);
  if (!technique) return [];
  
  return cultivationTechniques.filter(tech => 
    technique.incompatible.includes(tech.id) || 
    tech.incompatible.includes(techniqueId)
  );
}

export function getTechniquesByAttribute(attribute: string): CultivationTechnique[] {
  return cultivationTechniques.filter(tech => tech.attribute === attribute);
}

export function getTechniqueStats() {
  const total = cultivationTechniques.length;
  const byType = techniqueCategories.byType;
  const byAttribute = techniqueCategories.byAttribute;
  
  return {
    total,
    byType: Object.keys(byType).reduce((acc, key) => {
      acc[key] = byType[key as keyof typeof byType].length;
      return acc;
    }, {} as Record<string, number>),
    byAttribute: Object.keys(byAttribute).reduce((acc, key) => {
      const count = byAttribute[key as keyof typeof byAttribute].length;
      if (count > 0) acc[key] = count;
      return acc;
    }, {} as Record<string, number>),
    averageDifficulty: Math.round(cultivationTechniques.reduce((sum, tech) => sum + tech.difficulty, 0) / total * 10) / 10
  };
}

// 获取功法推荐（基于属性和境界）
export function getRecommendedTechniques(attribute: string, level: string): CultivationTechnique[] {
  const levelOrder = getLevelOrder(level);
  
  return cultivationTechniques
    .filter(tech => tech.attribute === attribute || tech.attribute === '混合')
    .filter(tech => getLevelOrder(tech.levelRequirement) <= levelOrder)
    .sort((a, b) => {
      // 先按难度排序，再按类型
      if (a.difficulty !== b.difficulty) return a.difficulty - b.difficulty;
      const typeOrder = { '基础功法': 1, '进阶功法': 2, '顶级功法': 3, '秘术': 4, '禁术': 5 };
      return (typeOrder[a.type] || 6) - (typeOrder[b.type] || 6);
    });
}

// 获取功法组合（兼容的功法组合）
export function getTechniqueCombinations(maxTechniques: number = 3): Array<CultivationTechnique[]> {
  const combinations: Array<CultivationTechnique[]> = [];
  
  // 简单的组合算法（实际应用中可能需要更复杂的逻辑）
  for (let i = 0; i < cultivationTechniques.length; i++) {
    const tech1 = cultivationTechniques[i];
    const compatibleWithTech1 = getCompatibleTechniques(tech1.id);
    
    for (let j = i + 1; j < cultivationTechniques.length && j < i + 5; j++) {
      const tech2 = cultivationTechniques[j];
      
      // 检查两个功法是否兼容
      if (tech1.compatibility.includes(tech2.id) || tech2.compatibility.includes(tech1.id)) {
        combinations.push([tech1, tech2]);
        
        // 尝试找第三个兼容的功法
        if (maxTechniques >= 3) {
          for (let k = j + 1; k < cultivationTechniques.length && k < j + 5; k++) {
            const tech3 = cultivationTechniques[k];
            if (
              (tech1.compatibility.includes(tech3.id) || tech3.compatibility.includes(tech1.id)) &&
              (tech2.compatibility.includes(tech3.id) || tech3.compatibility.includes(tech2.id))
            ) {
              combinations.push([tech1, tech2, tech3]);
            }
          }
        }
      }
    }
  }
  
  return combinations.slice(0, 20); // 返回前20个组合
}

// 获取功法修炼路线（从基础到顶级）
export function getCultivationPathways(startingTechniqueId: string): Array<CultivationTechnique[]> {
  const startingTech = getTechniqueById(startingTechniqueId);
  if (!startingTech) return [];
  
  const pathways: Array<CultivationTechnique[]> = [];
  
  // 查找可能的进阶功法
  const advancedTechs = cultivationTechniques.filter(tech => {
    // 同属性且等级要求更高
    return tech.attribute === startingTech.attribute && 
           getLevelOrder(tech.levelRequirement) > getLevelOrder(startingTech.levelRequirement);
  });
  
  for (const advancedTech of advancedTechs) {
    pathways.push([startingTech, advancedTech]);
    
    // 继续查找更高级的功法
    const topTechs = cultivationTechniques.filter(tech => {
      return tech.attribute === startingTech.attribute && 
             getLevelOrder(tech.levelRequirement) > getLevelOrder(advancedTech.levelRequirement);
    });
    
    for (const topTech of topTechs) {
      pathways.push([startingTech, advancedTech, topTech]);
    }
  }
  
  return pathways;
}

// 获取功法对比
export function compareTechniques(techId1: string, techId2: string): {
  tech1: CultivationTechnique;
  tech2: CultivationTechnique;
  similarities: string[];
  differences: string[];
  recommendation?: string;
} {
  const tech1 = getTechniqueById(techId1);
  const tech2 = getTechniqueById(techId2);
  
  if (!tech1 || !tech2) {
    throw new Error('功法不存在');
  }
  
  const similarities: string[] = [];
  const differences: string[] = [];
  
  // 检查相似性
  if (tech1.attribute === tech2.attribute) {
    similarities.push(`同属${tech1.attribute}属性`);
  } else {
    differences.push(`属性不同：${tech1.attribute} vs ${tech2.attribute}`);
  }
  
  if (tech1.type === tech2.type) {
    similarities.push(`同为${tech1.type}`);
  } else {
    differences.push(`类型不同：${tech1.type} vs ${tech2.type}`);
  }
  
  if (Math.abs(tech1.difficulty - tech2.difficulty) <= 2) {
    similarities.push('难度相近');
  } else {
    differences.push(`难度差异：${tech1.difficulty}/10 vs ${tech2.difficulty}/10`);
  }
  
  // 生成推荐
  let recommendation: string | undefined;
  if (tech1.difficulty < tech2.difficulty) {
    recommendation = `${tech1.name}更适合初学者`;
  } else if (tech2.difficulty < tech1.difficulty) {
    recommendation = `${tech2.name}更适合初学者`;
  }
  
  if (tech1.compatibility.includes(tech2.id)) {
    recommendation = `${tech1.name}和${tech2.name}可以兼修`;
  } else if (tech1.incompatible.includes(tech2.id)) {
    recommendation = `${tech1.name}和${tech2.name}不建议同时修炼`;
  }
  
  return {
    tech1,
    tech2,
    similarities,
    differences,
    recommendation
  };
}