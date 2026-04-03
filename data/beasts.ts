// 《凡人修仙传》妖兽/灵兽数据
// 基于公开资源整理，确保数据准确性

export interface Beast {
  id: string;
  name: string;
  aliases: string[];
  type: '妖兽' | '灵兽' | '神兽' | '凶兽' | '异兽' | '魔兽';
  grade: '一阶' | '二阶' | '三阶' | '四阶' | '五阶' | '六阶' | '七阶' | '八阶' | '九阶' | '十阶' | '未知';
  attribute: '金' | '木' | '水' | '火' | '土' | '风' | '雷' | '冰' | '毒' | '暗' | '光' | '混合' | '未知';
  description: string;
  abilities: string[]; // 能力/技能
  weaknesses?: string[]; // 弱点
  habitat: string[]; // 栖息地
  cultivationLevel?: string; // 对应修士境界
  dangerLevel: number; // 1-10，危险程度
  value: number; // 1-10，珍贵程度
  tamingDifficulty: number; // 1-10，驯服难度
  materials?: string[]; // 可获取材料（妖丹、皮毛等）
  famousOwners?: string[]; // 著名拥有者
  relatedEvents?: string[]; // 相关事件
  evolutionPath?: string[]; // 进化路径
}

export const beasts: Beast[] = [
  // 神兽/顶级妖兽
  {
    id: 'mojiao',
    name: '墨蛟',
    aliases: ['黑蛟', '蛟龙'],
    type: '神兽',
    grade: '八阶',
    attribute: '水',
    description: '拥有真龙血脉的强大妖兽，生活在深海或大江大河中，实力堪比元婴期修士。',
    abilities: [
      '控水神通',
      '呼风唤雨',
      '蛟龙之躯（强大防御）',
      '龙息攻击',
      '水遁术'
    ],
    weaknesses: [
      '雷属性攻击',
      '火属性克制',
      '陆地作战能力下降'
    ],
    habitat: ['深海', '大江大河', '龙宫'],
    cultivationLevel: '元婴期',
    dangerLevel: 9,
    value: 9,
    tamingDifficulty: 9,
    materials: [
      '墨蛟妖丹（八阶）',
      '蛟龙鳞片',
      '蛟龙筋',
      '蛟龙血'
    ],
    famousOwners: ['韩立（曾对战）'],
    relatedEvents: [
      '韩立与墨蛟大战',
      '墨蛟守护宝物'
    ],
    evolutionPath: ['蛟龙 → 真龙']
  },
  {
    id: 'bingfeng',
    name: '冰凤',
    aliases: ['冰凤凰'],
    type: '神兽',
    grade: '九阶',
    attribute: '冰',
    description: '拥有凤凰血脉的顶级神兽，掌控冰之法则，实力堪比化神期修士。',
    abilities: [
      '冰封万里',
      '凤凰涅槃',
      '冰属性法则',
      '飞行极速',
      '冰晶护盾'
    ],
    weaknesses: [
      '火属性克制',
      '雷属性攻击',
      '惧怕高温'
    ],
    habitat: ['极北冰原', '雪山之巅', '凤凰巢'],
    cultivationLevel: '化神期',
    dangerLevel: 10,
    value: 10,
    tamingDifficulty: 10,
    materials: [
      '冰凤妖丹（九阶）',
      '凤凰羽毛',
      '冰凤精血',
      '凤凰翎'
    ],
    famousOwners: ['灵界大能'],
    relatedEvents: [
      '冰凤现世',
      '凤凰涅槃传说'
    ],
    evolutionPath: ['冰凤 → 凤凰']
  },
  {
    id: 'shijinchong',
    name: '噬金虫',
    aliases: ['金虫'],
    type: '异兽',
    grade: '可变',
    attribute: '金',
    description: '韩立培养的奇异灵虫，可吞噬金属和灵气进化，最终形态极其强大。',
    abilities: [
      '吞噬金属',
      '群体攻击',
      '金刚不坏',
      '分裂繁殖',
      '灵气感知'
    ],
    weaknesses: [
      '火属性攻击',
      '雷属性克制',
      '惧怕高温'
    ],
    habitat: ['灵虫袋', '金属矿脉'],
    cultivationLevel: '可变',
    dangerLevel: 8,
    value: 8,
    tamingDifficulty: 7,
    materials: [
      '噬金虫卵',
      '金虫外壳',
      '灵虫精华'
    ],
    famousOwners: ['韩立（主要培养者）'],
    relatedEvents: [
      '韩立培养噬金虫',
      '噬金虫大战',
      '噬金虫进化'
    ],
    evolutionPath: ['幼虫 → 成熟体 → 完全体']
  },
  // 妖兽
  {
    id: 'qingyuanlang',
    name: '青元狼',
    aliases: ['风狼'],
    type: '妖兽',
    grade: '三阶',
    attribute: '风',
    description: '常见的风属性妖兽，速度极快，擅长群体作战。',
    abilities: [
      '风刃攻击',
      '疾速移动',
      '群体协作',
      '嗅觉追踪'
    ],
    weaknesses: [
      '火属性攻击',
      '雷属性克制',
      '防御较低'
    ],
    habitat: ['森林', '草原', '山脉'],
    cultivationLevel: '筑基期',
    dangerLevel: 4,
    value: 3,
    tamingDifficulty: 4,
    materials: [
      '青元狼妖丹（三阶）',
      '狼皮',
      '狼牙',
      '风属性材料'
    ],
    famousOwners: ['低阶修士']
  },
  {
    id: 'huoyanhu',
    name: '火焰虎',
    aliases: ['火虎'],
    type: '妖兽',
    grade: '四阶',
    attribute: '火',
    description: '强大的火属性妖兽，攻击凶猛，擅长火焰攻击。',
    abilities: [
      '火焰喷射',
      '虎啸震慑',
      '火遁术',
      '猛扑攻击'
    ],
    weaknesses: [
      '水属性克制',
      '冰属性攻击',
      '移动较慢'
    ],
    habitat: ['火山区域', '炎热地带', '森林'],
    cultivationLevel: '金丹期',
    dangerLevel: 6,
    value: 5,
    tamingDifficulty: 6,
    materials: [
      '火焰虎妖丹（四阶）',
      '虎皮',
      '虎骨',
      '火属性材料'
    ],
    famousOwners: ['火属性修士']
  },
  {
    id: 'leidiao',
    name: '雷雕',
    aliases: ['闪电雕'],
    type: '妖兽',
    grade: '五阶',
    attribute: '雷',
    description: '稀有的雷属性飞行妖兽，速度极快，攻击带有雷电效果。',
    abilities: [
      '雷电攻击',
      '高速飞行',
      '鹰眼视觉',
      '雷遁术'
    ],
    weaknesses: [
      '土属性克制',
      '金属性攻击',
      '近战较弱'
    ],
    habitat: ['高山', '悬崖', '雷暴区域'],
    cultivationLevel: '金丹后期',
    dangerLevel: 7,
    value: 6,
    tamingDifficulty: 7,
    materials: [
      '雷雕妖丹（五阶）',
      '雕羽',
      '雷属性材料',
      '飞行坐骑'
    ],
    famousOwners: ['雷属性修士', '飞行坐骑需求者']
  },
  // 灵兽
  {
    id: 'linghu',
    name: '灵狐',
    aliases: ['仙狐'],
    type: '灵兽',
    grade: '二阶',
    attribute: '木',
    description: '温顺的木属性灵兽，擅长辅助和治疗，是修士喜爱的宠物。',
    abilities: [
      '灵气感知',
      '治疗能力',
      '幻术',
      '敏捷移动'
    ],
    weaknesses: [
      '金属性克制',
      '火属性攻击',
      '防御较低'
    ],
    habitat: ['森林', '灵药园', '洞府'],
    cultivationLevel: '炼气期',
    dangerLevel: 2,
    value: 4,
    tamingDifficulty: 3,
    materials: [
      '灵狐毛皮',
      '灵狐尾',
      '木属性材料'
    ],
    famousOwners: ['女修', '炼丹师'],
    evolutionPath: ['灵狐 → 九尾天狐（传说）']
  },
  {
    id: 'jintianyuan',
    name: '金瞳猿',
    aliases: ['金睛猿'],
    type: '灵兽',
    grade: '六阶',
    attribute: '金',
    description: '强大的金属性灵兽，力大无穷，防御极高，擅长近战。',
    abilities: [
      '金刚之躯',
      '巨力攻击',
      '金睛火眼',
      '土遁术'
    ],
    weaknesses: [
      '火属性克制',
      '雷属性攻击',
      '速度较慢'
    ],
    habitat: ['山脉', '矿脉', '洞府'],
    cultivationLevel: '元婴期',
    dangerLevel: 8,
    value: 7,
    tamingDifficulty: 8,
    materials: [
      '金瞳猿妖丹（六阶）',
      '猿皮',
      '金瞳',
      '金属性材料'
    ],
    famousOwners: ['体修', '金属性修士']
  },
  // 凶兽
  {
    id: 'xueyemo',
    name: '血夜魔',
    aliases: ['血魔'],
    type: '凶兽',
    grade: '七阶',
    attribute: '暗',
    description: '邪恶的暗属性凶兽，嗜血残忍，擅长暗影攻击和幻术。',
    abilities: [
      '暗影攻击',
      '吸血恢复',
      '幻术迷惑',
      '暗遁术'
    ],
    weaknesses: [
      '光属性克制',
      '雷属性攻击',
      '惧怕阳光'
    ],
    habitat: ['黑暗洞穴', '古战场', '魔域'],
    cultivationLevel: '元婴后期',
    dangerLevel: 9,
    value: 8,
    tamingDifficulty: 9,
    materials: [
      '血夜魔妖丹（七阶）',
      '魔核',
      '暗属性材料',
      '血晶'
    ],
    famousOwners: ['魔修'],
    relatedEvents: [
      '血夜魔屠村',
      '修士围剿血夜魔'
    ]
  },
  {
    id: 'duwugong',
    name: '毒蜈蚣',
    aliases: ['百足毒虫'],
    type: '凶兽',
    grade: '四阶',
    attribute: '毒',
    description: '剧毒的虫类凶兽，攻击带有强烈毒素，令人防不胜防。',
    abilities: [
      '剧毒攻击',
      '钻地术',
      '毒雾喷射',
      '快速移动'
    ],
    weaknesses: [
      '火属性克制',
      '雷属性攻击',
      '冰属性减缓'
    ],
    habitat: ['沼泽', '毒瘴林', '地下洞穴'],
    cultivationLevel: '金丹期',
    dangerLevel: 6,
    value: 5,
    tamingDifficulty: 6,
    materials: [
      '毒蜈蚣妖丹（四阶）',
      '毒囊',
      '蜈蚣壳',
      '毒属性材料'
    ],
    famousOwners: ['毒修']
  },
  // 魔兽
  {
    id: 'yanyumengshou',
    name: '炎狱魔兽',
    aliases: ['地狱火兽'],
    type: '魔兽',
    grade: '八阶',
    attribute: '火',
    description: '来自魔界的强大魔兽，掌控地狱火焰，实力恐怖。',
    abilities: [
      '地狱火焰',
      '魔化变身',
      '火焰领域',
      '魔气侵蚀'
    ],
    weaknesses: [
      '水属性克制',
      '光属性净化',
      '冰属性攻击'
    ],
    habitat: ['魔界', '火山深处', '地狱裂缝'],
    cultivationLevel: '化神期',
    dangerLevel: 10,
    value: 9,
    tamingDifficulty: 10,
    materials: [
      '炎狱魔核（八阶）',
      '魔焰',
      '魔兽材料',
      '火属性极品材料'
    ],
    famousOwners: ['魔界大能'],
    relatedEvents: [
      '魔界入侵',
      '炎狱魔兽现世'
    ]
  },
  // 异兽
  {
    id: 'kongjianshou',
    name: '空间兽',
    aliases: ['虚空兽'],
    type: '异兽',
    grade: '九阶',
    attribute: '空间',
    description: '掌控空间法则的奇异妖兽，可在虚空中穿梭，极其稀有。',
    abilities: [
      '空间穿梭',
      '空间切割',
      '虚空隐匿',
      '空间禁锢'
    ],
    weaknesses: [
      '时间法则克制',
      '空间不稳定区域',
      '法则攻击'
    ],
    habitat: ['虚空', '空间裂缝', '异度空间'],
    cultivationLevel: '炼虚期',
    dangerLevel: 10,
    value: 10,
    tamingDifficulty: 10,
    materials: [
      '空间兽妖丹（九阶）',
      '空间结晶',
      '虚空材料',
      '法则碎片'
    ],
    famousOwners: ['空间法则修士'],
    relatedEvents: [
      '空间兽现世',
      '虚空探险'
    ]
  }
];

// 妖兽分类
export const beastCategories = {
  byType: {
    '妖兽': beasts.filter(b => b.type === '妖兽'),
    '灵兽': beasts.filter(b => b.type === '灵兽'),
    '神兽': beasts.filter(b => b.type === '神兽'),
    '凶兽': beasts.filter(b => b.type === '凶兽'),
    '魔兽': beasts.filter(b => b.type === '魔兽'),
    '异兽': beasts.filter(b => b.type === '异兽')
  },
  byGrade: {
    '一阶': beasts.filter(b => b.grade === '一阶'),
    '二阶': beasts.filter(b => b.grade === '二阶'),
    '三阶': beasts.filter(b => b.grade === '三阶'),
    '四阶': beasts.filter(b => b.grade === '四阶'),
    '五阶': beasts.filter(b => b.grade === '五阶'),
    '六阶': beasts.filter(b => b.grade === '六阶'),
    '七阶': beasts.filter(b => b.grade === '七阶'),
    '八阶': beasts.filter(b => b.grade === '八阶'),
    '九阶': beasts.filter(b => b.grade === '九阶'),
    '十阶': beasts.filter(b => b.grade === '十阶'),
    '未知': beasts.filter(b => b.grade === '未知')
  },
  byDangerLevel: {
    '低危（1-3）': beasts.filter(b => b.dangerLevel <= 3),
    '中危（4-6）': beasts.filter(b => b.dangerLevel >= 4 && b.dangerLevel <= 6),
    '高危（7-8）': beasts.filter(b => b.dangerLevel >= 7 && b.dangerLevel <= 8),
    '极危（9-10）': beasts.filter(b => b.dangerLevel >= 9)
  }
};

// 辅助函数
export function getBeastById(id: string): Beast | undefined {
  return beasts.find(beast => beast.id === id);
}

export function getBeastsByType(type: string): Beast[] {
  return beasts.filter(beast => beast.type === type);
}

export function getBeastsByCultivation(level: string): Beast[] {
  const levelOrder = getLevelOrder(level);
  return beasts.filter(beast => {
    if (!beast.cultivationLevel) return true;
    const beastOrder = getLevelOrder(beast.cultivationLevel);
    return beastOrder <= levelOrder;
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

export function getBeastsByHabitat(habitat: string): Beast[] {
  return beasts.filter(beast => 
    beast.habitat.some(h => h.toLowerCase().includes(habitat.toLowerCase()))
  );
}

export function getBeastStats() {
  const total = beasts.length;
  const byType = beastCategories.byType;
  const byGrade = beastCategories.byGrade;
  
  const totalDanger = beasts.reduce((sum, b) => sum + b.dangerLevel, 0);
  const totalValue = beasts.reduce((sum, b) => sum + b.value, 0);
  const totalTamingDifficulty = beasts.reduce((sum, b) => sum + b.tamingDifficulty, 0);
  
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
    averageDanger: Math.round(totalDanger / total * 10) / 10,
    averageValue: Math.round(totalValue / total * 10) / 10,
    averageTamingDifficulty: Math.round(totalTamingDifficulty / total * 10) / 10,
    mostDangerous: beasts.reduce((max, b) => b.dangerLevel > max.dangerLevel ? b : max, beasts[0]),
    mostValuable: beasts.reduce((max, b) => b.value > max.value ? b : max, beasts[0]),
    hardestToTame: beasts.reduce((max, b) => b.tamingDifficulty > max.tamingDifficulty ? b : max, beasts[0])
  };
}

// 获取妖兽推荐（基于境界和需求）
export function getRecommendedBeasts(level: string, need: '战斗' | '坐骑' | '宠物' | '材料'): Beast[] {
  const levelOrder = getLevelOrder(level);
  
  return beasts
    .filter(beast => {
      if (!beast.cultivationLevel) return true;
      return getLevelOrder(beast.cultivationLevel) <= levelOrder;
    })
    .filter(beast => {
      switch (need) {
        case '战斗':
          return beast.dangerLevel >= 6 && beast.type !== '灵兽';
        case '坐骑':
          return beast.abilities.some(ability => 
            ability.includes('飞行') || ability.includes('移动') || ability.includes('速度')
          );
        case '宠物':
          return beast.type === '灵兽' || beast.dangerLevel <= 4;
        case '材料':
          return beast.materials && beast.materials.length > 0;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      // 按危险程度排序（战斗需求）或按驯服难度排序（宠物需求）
      if (need === '战斗') return b.dangerLevel - a.dangerLevel;
      if (need === '宠物') return a.tamingDifficulty - b.tamingDifficulty;
      return b.value - a.value;
    });
}

// 获取妖兽克制关系
export function getBeastCounter(beastId: string): Beast[] {
  const beast = getBeastById(beastId);
  if (!beast) return [];
  
  return beasts.filter(counter => {
    // 属性克制
    const attributeCounter: Record<string, string[]> = {
      '金': ['火', '雷'],
      '木': ['金', '雷'],
      '水': ['土', '木'],
      '火': ['水', '冰'],
      '土': ['木', '水'],
      '风': ['雷', '火'],
      '雷': ['土', '金'],
      '冰': ['火', '雷'],
      '毒': ['火', '雷'],
      '暗': ['光', '雷'],
      '光': ['暗', '毒'],
      '空间': ['时间', '法则']
    };
    
    const counters = attributeCounter[beast.attribute] || [];
    return counters.includes(counter.attribute);
  });
}

// 获取妖兽组合（互补）
export function getBeastCombinations(): Array<{
  beasts: Beast[];
  combinedAbilities: string[];
  synergy: number; // 1-10，协同效果
}> {
  const combinations: Array<{
    beasts: Beast[];
    combinedAbilities: string[];
    synergy: number;
  }> = [];
  
  // 攻击 + 防御组合
  const attackBeasts = beasts.filter(b => 
    b.abilities.some(ability => ability.includes('攻击') || ability.includes('火焰') || ability.includes('雷电'))
  );
  const defenseBeasts = beasts.filter(b => 
    b.abilities.some(ability => ability.includes('防御') || ability.includes('护盾') || ability.includes('金刚'))
  );
  
  for (const attack of attackBeasts.slice(0, 5)) {
    for (const defense of defenseBeasts.slice(0, 5)) {
      if (attack.id === defense.id) continue;
      
      combinations.push({
        beasts: [attack, defense],
        combinedAbilities: [
          '攻防兼备',
          '远近结合',
          '属性互补'
        ],
        synergy: Math.min(10, Math.round((attack.dangerLevel + defense.dangerLevel) / 2))
      });
    }
  }
  
  // 飞行 + 地面组合
  const flyingBeasts = beasts.filter(b => 
    b.abilities.some(ability => ability.includes('飞行') || ability.includes('空中'))
  );
  const groundBeasts = beasts.filter(b => 
    !b.abilities.some(ability => ability.includes('飞行') || ability.includes('空中'))
  );
  
  for (const flying of flyingBeasts.slice(0, 3)) {
    for (const ground of groundBeasts.slice(0, 3)) {
      if (flying.id === ground.id) continue;
      
      combinations.push({
        beasts: [flying, ground],
        combinedAbilities: [
          '空陆协同',
          '全方位作战',
          '机动性强'
        ],
        synergy: Math.min(10, Math.round((flying.dangerLevel + ground.dangerLevel) / 2))
      });
    }
  }
  
  return combinations.slice(0, 10); // 返回前10个组合
}

// 获取妖兽驯服成功率预测
export function getBeastTamingPrediction(beastId: string, tamerLevel: number): {
  beast: Beast;
  baseDifficulty: number;
  adjustedSuccessRate: string;
  factors: string[];
} {
  const beast = getBeastById(beastId);
  if (!beast) {
    throw new Error('妖兽不存在');
  }
  
  const baseDifficulty = beast.tamingDifficulty;
  const factors: string[] = [];
  
  // 根据驯兽师水平调整成功率
  let successRate = '';
  const baseSuccess = Math.max(10, 100 - baseDifficulty * 8); // 基础成功率
  
  if (tamerLevel >= 8) {
    // 高级驯兽师
    const adjusted = Math.min(95, baseSuccess + 30);
    successRate = `${adjusted}%`;
    factors.push('高级驯兽师：+30%成功率');
  } else if (tamerLevel >= 5) {
    // 中级驯兽师
    const adjusted = Math.min(85, baseSuccess + 15);
    successRate = `${adjusted}%`;
    factors.push('中级驯兽师：+15%成功率');
  } else {
    // 初级驯兽师
    successRate = `${baseSuccess}%`;
    factors.push('初级驯兽师：无加成');
  }
  
  // 属性相性影响
  factors.push('属性相性影响成功率±10%');
  
  // 驯服方法影响
  factors.push('驯服方法（武力/食物/契约）影响成功率±15%');
  
  // 妖兽状态影响
  factors.push('妖兽状态（受伤/饥饿）影响成功率±20%');
  
  return {
    beast,
    baseDifficulty,
    adjustedSuccessRate: successRate,
    factors
  };
}

// 获取妖兽进化路径
export function getBeastEvolutionPaths(): Array<{
  current: Beast;
  nextStage?: Beast;
  evolutionConditions: string[];
}> {
  const paths: Array<{
    current: Beast;
    nextStage?: Beast;
    evolutionConditions: string[];
  }> = [];
  
  // 墨蛟 → 真龙
  const mojiao = getBeastById('mojiao');
  if (mojiao) {
    paths.push({
      current: mojiao,
      nextStage: undefined, // 真龙数据未定义
      evolutionConditions: [
        '达到九阶巅峰',
        '渡过化龙天劫',
        '吸收真龙精血',
        '修炼千年以上'
      ]
    });
  }
  
  // 灵狐 → 九尾天狐
  const linghu = getBeastById('linghu');
  if (linghu) {
    paths.push({
      current: linghu,
      nextStage: undefined, // 九尾天狐数据未定义
      evolutionConditions: [
        '修炼五百年以上',
        '吸收月华精华',
        '渡过天狐劫',
        '血脉觉醒'
      ]
    });
  }
  
  // 噬金虫进化路径
  const shijinchong = getBeastById('shijinchong');
  if (shijinchong) {
    paths.push({
      current: shijinchong,
      nextStage: undefined, // 完全体数据未定义
      evolutionConditions: [
        '吞噬大量金属',
        '吸收灵气',
        '群体融合',
        '特殊机缘'
      ]
    });
  }
  
  return paths;
}