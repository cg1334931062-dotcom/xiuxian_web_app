// 《凡人修仙传》丹药/灵药数据
// 基于公开资源整理，确保数据准确性

export interface Pill {
  id: string;
  name: string;
  aliases: string[];
  type: '修为丹药' | '疗伤丹药' | '解毒丹药' | '突破丹药' | '特殊丹药' | '灵药';
  grade: '下品' | '中品' | '上品' | '极品' | '未知';
  attribute: '无' | '木' | '火' | '水' | '土' | '金' | '混合';
  description: string;
  effects: string[]; // 功效
  sideEffects?: string[]; // 副作用
  cultivationRequirement?: string; // 服用所需最低境界
  materials: string[]; // 炼制材料
  difficulty: number; // 1-10，炼制难度
  successRate: string; // 成功率
  value: number; // 1-10，珍贵程度
  shelfLife?: string; // 保质期
  famousUsers?: string[]; // 著名使用者
  relatedTechniques?: string[]; // 相关功法
  famousEvents?: string[]; // 著名事件
}

export const pills: Pill[] = [
  // 突破丹药（最重要）
  {
    id: 'zhujidan',
    name: '筑基丹',
    aliases: ['筑基灵丹'],
    type: '突破丹药',
    grade: '上品',
    attribute: '无',
    description: '炼气期修士突破到筑基期必备的丹药，可大幅提升筑基成功率。是修仙界最抢手的丹药之一。',
    effects: [
      '提升筑基成功率30-50%',
      '稳固根基',
      '减少心魔干扰',
      '改善灵根资质'
    ],
    sideEffects: [
      '药力过猛可能损伤经脉',
      '失败后需要长时间恢复',
      '可能产生耐药性'
    ],
    cultivationRequirement: '炼气期十层以上',
    materials: [
      '百年灵芝',
      '龙涎草',
      '朱果',
      '千年黄精',
      '筑基丹主药（稀有）'
    ],
    difficulty: 7,
    successRate: '30-50%（视炼丹师水平）',
    value: 8,
    shelfLife: '10年',
    famousUsers: ['韩立', '南宫婉', '各大宗门弟子'],
    famousEvents: [
      '韩立服用筑基丹成功筑基',
      '黄枫谷筑基丹分配大会',
      '各大宗门筑基丹争夺战'
    ]
  },
  {
    id: 'jiejindan',
    name: '结金丹',
    aliases: ['金丹灵丹'],
    type: '突破丹药',
    grade: '上品',
    attribute: '无',
    description: '筑基期修士凝结金丹必备的丹药，可大幅提升结丹成功率。比筑基丹更加稀有珍贵。',
    effects: [
      '提升结丹成功率20-40%',
      '稳固金丹品质',
      '减少心魔劫难度',
      '增强法力纯度'
    ],
    sideEffects: [
      '药力狂暴，需要强大肉身',
      '失败可能导致修为倒退',
      '需要长时间准备'
    ],
    cultivationRequirement: '筑基后期',
    materials: [
      '千年灵芝',
      '金线莲',
      '紫猴花',
      '结金丹主药（极其稀有）',
      '多种辅助灵草'
    ],
    difficulty: 8,
    successRate: '20-40%',
    value: 9,
    shelfLife: '5年（药效易流失）',
    famousUsers: ['韩立', '各大宗门长老'],
    famousEvents: [
      '韩立凝结九品金丹',
      '宗门结金丹分配'
    ]
  },
  {
    id: 'yuanyingdan',
    name: '元婴丹',
    aliases: ['元婴灵丹'],
    type: '突破丹药',
    grade: '极品',
    attribute: '无',
    description: '金丹期修士凝结元婴必备的丹药，极其稀有，可大幅提升凝结元婴的成功率。',
    effects: [
      '提升凝结元婴成功率15-30%',
      '稳固元婴根基',
      '减少天劫威力',
      '增强神识'
    ],
    sideEffects: [
      '药力极其狂暴',
      '需要度过心魔劫',
      '失败可能形神俱灭'
    ],
    cultivationRequirement: '金丹后期',
    materials: [
      '万年灵芝',
      '龙血草',
      '天魂花',
      '元婴丹主药（传说级）',
      '数十种珍稀灵草'
    ],
    difficulty: 9,
    successRate: '15-30%',
    value: 10,
    shelfLife: '3年（必须新鲜服用）',
    famousUsers: ['韩立', '各大宗门老祖'],
    famousEvents: [
      '韩立凝结元婴',
      '元婴丹争夺大战'
    ]
  },
  // 修为丹药
  {
    id: 'lingqidan',
    name: '灵气丹',
    aliases: ['聚气丹'],
    type: '修为丹药',
    grade: '下品',
    attribute: '无',
    description: '炼气期修士常用的修炼丹药，可加速灵气吸收，提升修炼速度。',
    effects: [
      '加速灵气吸收',
      '提升修炼速度50%',
      '恢复法力',
      '稳固境界'
    ],
    sideEffects: [
      '长期服用可能产生丹毒',
      '效果随抗药性减弱'
    ],
    cultivationRequirement: '炼气期',
    materials: [
      '十年灵芝',
      '普通灵草',
      '灵石粉末'
    ],
    difficulty: 3,
    successRate: '70-90%',
    value: 3,
    shelfLife: '3年',
    famousUsers: ['所有炼气期修士']
  },
  {
    id: 'zhenyuandan',
    name: '真元丹',
    aliases: ['培元丹'],
    type: '修为丹药',
    grade: '中品',
    attribute: '无',
    description: '筑基期和金丹期修士常用的修炼丹药，可加速真元积累，提升修炼效率。',
    effects: [
      '加速真元积累',
      '提升修炼速度100%',
      '增强法力纯度',
      '减少瓶颈'
    ],
    sideEffects: [
      '需要定期排除丹毒',
      '价格昂贵'
    ],
    cultivationRequirement: '筑基期',
    materials: [
      '百年灵芝',
      '龙涎草',
      '中级灵草',
      '中品灵石'
    ],
    difficulty: 5,
    successRate: '60-80%',
    value: 5,
    shelfLife: '5年',
    famousUsers: ['韩立（中期）', '宗门核心弟子']
  },
  // 疗伤丹药
  {
    id: 'huichundan',
    name: '回春丹',
    aliases: ['疗伤丹'],
    type: '疗伤丹药',
    grade: '中品',
    attribute: '木',
    description: '常见的疗伤丹药，可快速恢复外伤和内伤，是修士必备的保命丹药。',
    effects: [
      '快速恢复外伤',
      '治疗内伤',
      '止血止痛',
      '加速伤口愈合'
    ],
    sideEffects: [
      '对严重道伤效果有限',
      '可能产生抗药性'
    ],
    cultivationRequirement: '无',
    materials: [
      '回春草',
      '止血藤',
      '木属性灵草',
      '普通灵石'
    ],
    difficulty: 4,
    successRate: '80-95%',
    value: 4,
    shelfLife: '5年',
    famousUsers: ['所有修士']
  },
  {
    id: 'jiushendan',
    name: '九神丹',
    aliases: ['救命丹'],
    type: '疗伤丹药',
    grade: '上品',
    attribute: '木',
    description: '高级疗伤丹药，可治疗严重内伤，甚至能保住濒死修士的性命。',
    effects: [
      '治疗严重内伤',
      '保住濒死性命',
      '恢复本源',
      '增强生命力'
    ],
    sideEffects: [
      '炼制材料稀有',
      '价格极其昂贵'
    ],
    cultivationRequirement: '无',
    materials: [
      '九叶灵芝',
      '生命之泉',
      '木属性珍稀灵草',
      '上品灵石'
    ],
    difficulty: 7,
    successRate: '50-70%',
    value: 8,
    shelfLife: '10年',
    famousUsers: ['韩立（曾使用）', '宗门高层']
  },
  // 解毒丹药
  {
    id: 'qingxiedan',
    name: '清邪丹',
    aliases: ['解毒丹'],
    type: '解毒丹药',
    grade: '中品',
    attribute: '水',
    description: '常见的解毒丹药，可解大多数常见毒素，是探险必备丹药。',
    effects: [
      '解常见毒素',
      '净化体内毒素',
      '预防中毒',
      '增强抗毒性'
    ],
    sideEffects: [
      '对特殊毒素无效',
      '需要针对性解毒'
    ],
    cultivationRequirement: '无',
    materials: [
      '清心草',
      '水属性灵草',
      '解毒藤',
      '普通灵石'
    ],
    difficulty: 4,
    successRate: '70-90%',
    value: 4,
    shelfLife: '3年',
    famousUsers: ['探险修士']
  },
  // 特殊丹药
  {
    id: 'yanshoudan',
    name: '延寿丹',
    aliases: ['长寿丹'],
    type: '特殊丹药',
    grade: '极品',
    attribute: '木',
    description: '可延长寿命的珍贵丹药，极其稀有，是元婴期以上修士争夺的至宝。',
    effects: [
      '延长寿命50-100年',
      '延缓衰老',
      '增强生命力',
      '改善体质'
    ],
    sideEffects: [
      '多次服用效果递减',
      '可能产生抗药性'
    ],
    cultivationRequirement: '元婴期',
    materials: [
      '万年灵芝',
      '生命之树果实',
      '时间法则碎片（传说）',
      '数十种珍稀材料'
    ],
    difficulty: 10,
    successRate: '10-20%',
    value: 10,
    shelfLife: '永久（但需特殊保存）',
    famousUsers: ['寿元将尽的老怪'],
    famousEvents: [
      '延寿丹拍卖大会',
      '老怪争夺延寿丹'
    ]
  },
  {
    id: 'yisuidan',
    name: '易髓丹',
    aliases: ['洗髓丹'],
    type: '特殊丹药',
    grade: '上品',
    attribute: '无',
    description: '可改善灵根资质，洗髓易筋的珍贵丹药，对资质平庸的修士尤为重要。',
    effects: [
      '改善灵根资质',
      '洗髓易筋',
      '提升修炼潜力',
      '排除体内杂质'
    ],
    sideEffects: [
      '洗髓过程极其痛苦',
      '可能损伤经脉',
      '需要强大意志力'
    ],
    cultivationRequirement: '炼气期以上',
    materials: [
      '洗髓草',
      '易经花',
      '多种珍稀灵草',
      '上品灵石'
    ],
    difficulty: 8,
    successRate: '40-60%',
    value: 9,
    shelfLife: '1年（必须新鲜服用）',
    famousUsers: ['资质平庸的修士'],
    famousEvents: [
      '韩立曾寻求易髓丹'
    ]
  },
  // 灵药
  {
    id: 'zhuguo',
    name: '朱果',
    aliases: ['赤果'],
    type: '灵药',
    grade: '中品',
    attribute: '火',
    description: '火属性灵果，可直接服用提升修为，也可作为炼丹材料。',
    effects: [
      '直接提升修为',
      '增强火属性法力',
      '炼制火属性丹药',
      '改善体质'
    ],
    sideEffects: [
      '火属性过强可能伤身',
      '需要适量服用'
    ],
    cultivationRequirement: '无',
    materials: ['天地孕育'],
    difficulty: 0, // 自然生长
    successRate: '100%（采摘）',
    value: 5,
    shelfLife: '1年',
    famousUsers: ['火属性修士']
  },
  {
    id: 'lingzhi',
    name: '灵芝',
    aliases: ['仙草'],
    type: '灵药',
    grade: '可变',
    attribute: '木',
    description: '最常见的灵药，年份越长品质越好，是大多数丹药的基础材料。',
    effects: [
      '炼制多种丹药',
      '直接服用补充灵气',
      '增强生命力',
      '辅助修炼'
    ],
    sideEffects: ['无'],
    cultivationRequirement: '无',
    materials: ['天地灵气'],
    difficulty: 0,
    successRate: '100%',
    value: 2, // 基础价值，年份增加价值提升
    shelfLife: '10-1000年（视年份）',
    famousUsers: ['所有修士']
  }
];

// 丹药分类
export const pillCategories = {
  byType: {
    '修为丹药': pills.filter(p => p.type === '修为丹药'),
    '疗伤丹药': pills.filter(p => p.type === '疗伤丹药'),
    '解毒丹药': pills.filter(p => p.type === '解毒丹药'),
    '突破丹药': pills.filter(p => p.type === '突破丹药'),
    '特殊丹药': pills.filter(p => p.type === '特殊丹药'),
    '灵药': pills.filter(p => p.type === '灵药')
  },
  byGrade: {
    '下品': pills.filter(p => p.grade === '下品'),
    '中品': pills.filter(p => p.grade === '中品'),
    '上品': pills.filter(p => p.grade === '上品'),
    '极品': pills.filter(p => p.grade === '极品'),
    '未知': pills.filter(p => p.grade === '未知')
  },
  byDifficulty: {
    '简单（1-3）': pills.filter(p => p.difficulty <= 3),
    '中等（4-6）': pills.filter(p => p.difficulty >= 4 && p.difficulty <= 6),
    '困难（7-8）': pills.filter(p => p.difficulty >= 7 && p.difficulty <= 8),
    '极难（9-10）': pills.filter(p => p.difficulty >= 9)
  }
};

// 辅助函数
export function getPillById(id: string): Pill | undefined {
  return pills.find(pill => pill.id === id);
}

export function getPillsByType(type: string): Pill[] {
  return pills.filter(pill => pill.type === type);
}

export function getPillsByCultivation(level: string): Pill[] {
  const levelOrder = getLevelOrder(level);
  return pills.filter(pill => {
    if (!pill.cultivationRequirement) return true;
    const reqOrder = getLevelOrder(pill.cultivationRequirement);
    return reqOrder <= levelOrder;
  });
}

// 获取境界的顺序值
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

export function getPillsByValue(minValue: number, maxValue: number = 10): Pill[] {
  return pills.filter(pill => 
    pill.value >= minValue && pill.value <= maxValue
  );
}

export function getPillStats() {
  const total = pills.length;
  const byType = pillCategories.byType;
  const byGrade = pillCategories.byGrade;
  
  const totalDifficulty = pills.reduce((sum, p) => sum + p.difficulty, 0);
  const totalValue = pills.reduce((sum, p) => sum + p.value, 0);
  
  return {
    total,
    byType: Object.keys(byType).reduce((acc, key) => {
      acc[key] = byType[key as keyof typeof byType].length;
      return acc;
    }, {} as Record<string, number>),
    byGrade: Object.keys(byGrade).reduce((acc, key) => {
      acc[key] = byGrade[key as keyof typeof byGrade].length;
      return acc;
    }, {} as Record<string, number>),
    averageDifficulty: Math.round(totalDifficulty / total * 10) / 10,
    averageValue: Math.round(totalValue / total * 10) / 10,
    mostDifficult: pills.reduce((max, p) => p.difficulty > max.difficulty ? p : max, pills[0]),
    mostValuable: pills.reduce((max, p) => p.value > max.value ? p : max, pills[0])
  };
}

// 获取丹药推荐（基于境界和需求）
export function getRecommendedPills(level: string, need: '突破' | '修炼' | '疗伤' | '解毒'): Pill[] {
  const levelOrder = getLevelOrder(level);
  
  return pills
    .filter(pill => {
      if (!pill.cultivationRequirement) return true;
      return getLevelOrder(pill.cultivationRequirement) <= levelOrder;
    })
    .filter(pill => {
      switch (need) {
        case '突破':
          return pill.type === '突破丹药';
        case '修炼':
          return pill.type === '修为丹药';
        case '疗伤':
          return pill.type === '疗伤丹药';
        case '解毒':
          return pill.type === '解毒丹药';
        default:
          return true;
      }
    })
    .sort((a, b) => {
      // 先按价值排序，再按难度
      if (b.value !== a.value) return b.value - a.value;
      return a.difficulty - b.difficulty;
    });
}

// 获取丹药炼制路线
export function getPillCraftingPath(material: string): Pill[] {
  return pills.filter(pill => 
    pill.materials.some(mat => mat.toLowerCase().includes(material.toLowerCase()))
  );
}

// 获取丹药对比
export function comparePills(pillId1: string, pillId2: string): {
  pill1: Pill;
  pill2: Pill;
  similarities: string[];
  differences: string[];
  recommendation?: string;
} {
  const pill1 = getPillById(pillId1);
  const pill2 = getPillById(pillId2);
  
  if (!pill1 || !pill2) {
    throw new Error('丹药不存在');
  }
  
  const similarities: string[] = [];
  const differences: string[] = [];
  
  // 检查相似性
  if (pill1.type === pill2.type) {
    similarities.push(`同为${pill1.type}`);
  } else {
    differences.push(`类型不同：${pill1.type} vs ${pill2.type}`);
  }
  
  if (pill1.grade === pill2.grade) {
    similarities.push(`同为${pill1.grade}品质`);
  } else {
    differences.push(`品质不同：${pill1.grade} vs ${pill2.grade}`);
  }
  
  if (Math.abs(pill1.difficulty - pill2.difficulty) <= 2) {
    similarities.push('炼制难度相近');
  } else {
    differences.push(`难度差异：${pill1.difficulty}/10 vs ${pill2.difficulty}/10`);
  }
  
  // 生成推荐
  let recommendation: string | undefined;
  if (pill1.value > pill2.value && pill1.difficulty <= pill2.difficulty) {
    recommendation = `${pill1.name}性价比更高`;
  } else if (pill2.value > pill1.value && pill2.difficulty <= pill1.difficulty) {
    recommendation = `${pill2.name}性价比更高`;
  }
  
  if (pill1.type === '突破丹药' && pill2.type !== '突破丹药') {
    recommendation = `${pill1.name}更适合突破境界`;
  } else if (pill2.type === '突破丹药' && pill1.type !== '突破丹药') {
    recommendation = `${pill2.name}更适合突破境界`;
  }
  
  return {
    pill1,
    pill2,
    similarities,
    differences,
    recommendation
  };
}

// 获取丹药组合（互补效果）
export function getPillCombinations(): Array<{
  pills: Pill[];
  combinedEffects: string[];
  warnings?: string[];
}> {
  const combinations: Array<{
    pills: Pill[];
    combinedEffects: string[];
    warnings?: string[];
  }> = [];
  
  // 突破 + 疗伤组合
  const breakthroughPills = pills.filter(p => p.type === '突破丹药');
  const healingPills = pills.filter(p => p.type === '疗伤丹药');
  
  for (const bp of breakthroughPills) {
    for (const hp of healingPills) {
      combinations.push({
        pills: [bp, hp],
        combinedEffects: [
          '突破境界同时治疗可能的内伤',
          '减少突破后的恢复时间',
          '提高突破安全性'
        ],
        warnings: ['注意服用间隔，避免药力冲突']
      });
    }
  }
  
  // 修为 + 特殊组合
  const cultivationPills = pills.filter(p => p.type === '修为丹药');
  const specialPills = pills.filter(p => p.type === '特殊丹药');
  
  for (const cp of cultivationPills.slice(0, 3)) {
    for (const sp of specialPills.slice(0, 2)) {
      if (sp.id === 'yisuidan') { // 易髓丹
        combinations.push({
          pills: [cp, sp],
          combinedEffects: [
            '提升修为同时改善资质',
            '加速修炼进程',
            '减少瓶颈'
          ],
          warnings: ['洗髓过程痛苦，需谨慎使用']
        });
      }
    }
  }
  
  return combinations.slice(0, 10); // 返回前10个组合
}

// 获取丹药炼制成功率预测
export function getPillSuccessPrediction(pillId: string, alchemistLevel: number): {
  pill: Pill;
  baseRate: string;
  adjustedRate: string;
  factors: string[];
} {
  const pill = getPillById(pillId);
  if (!pill) {
    throw new Error('丹药不存在');
  }
  
  const baseRate = pill.successRate;
  let adjustedRate = '';
  const factors: string[] = [];
  
  // 根据炼丹师水平调整成功率
  const baseMin = parseInt(pill.successRate.split('-')[0]);
  const baseMax = parseInt(pill.successRate.split('-')[1].split('%')[0]);
  
  if (alchemistLevel >= 8) {
    // 高级炼丹师
    const adjustedMin = Math.min(100, baseMin + 20);
    const adjustedMax = Math.min(100, baseMax + 20);
    adjustedRate = `${adjustedMin}-${adjustedMax}%`;
    factors.push('高级炼丹师：+20%成功率');
  } else if (alchemistLevel >= 5) {
    // 中级炼丹师
    const adjustedMin = Math.min(100, baseMin + 10);
    const adjustedMax = Math.min(100, baseMax + 10);
    adjustedRate = `${adjustedMin}-${adjustedMax}%`;
    factors.push('中级炼丹师：+10%成功率');
  } else {
    // 初级炼丹师或无加成
    adjustedRate = baseRate;
    factors.push('初级炼丹师：无加成');
  }
  
  // 材料新鲜度影响
  factors.push('材料新鲜度影响成功率±5%');
  
  // 炼丹环境影响
  factors.push('炼丹环境（地火、丹炉）影响成功率±10%');
  
  return {
    pill,
    baseRate,
    adjustedRate,
    factors
  };
}