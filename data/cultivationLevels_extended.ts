// 《凡人修仙传》修仙境界体系数据（全量扩展）
// 基于公开资源整理，确保数据准确性

export interface CultivationLevel {
  id: string;
  name: string;
  order: number;
  description: string;
  lifespan: string;
  abilities: string[];
  keyFeatures: string[];
  examples: string[];
  nextLevel?: string;
  difficulty: number; // 1-10，突破难度
  typicalTime: string; // 典型修炼时间
}

export const cultivationLevels: CultivationLevel[] = [
  // 人界境界
  {
    id: 'lianqi',
    name: '炼气期',
    order: 1,
    description: '修仙的入门阶段，吸收天地灵气转化为自身法力，为后续修炼打下基础。分为1-13层，每层法力递增。',
    lifespan: '约100-150岁',
    abilities: [
      '初步感知和吸收灵气',
      '使用基础法术',
      '御使低阶法器',
      '施展轻身术等基础神通',
      '制作简单符箓',
      '布置基础阵法'
    ],
    keyFeatures: [
      '分为1-13层，每层法力递增',
      '需要灵根资质',
      '可服用丹药辅助修炼',
      '寿元比凡人略长',
      '可学习基础修仙技艺'
    ],
    examples: [
      '韩立：10岁开始修炼长春功，16岁达到炼气六层',
      '普通宗门弟子：大多停留在炼气期',
      '墨大夫：炼气期顶峰，因资质限制无法筑基'
    ],
    nextLevel: '筑基期',
    difficulty: 3,
    typicalTime: '10-30年'
  },
  {
    id: 'zhuji',
    name: '筑基期',
    order: 2,
    description: '在丹田处凝聚液态真元，法力质量和数量大幅提升，是修仙路上的重要门槛。成功筑基后正式踏入修仙大道。',
    lifespan: '约200余岁',
    abilities: [
      '真元液化，法力倍增',
      '御器飞行',
      '施展中级法术',
      '神识外放探查',
      '炼制中阶法器',
      '布置中级阵法'
    ],
    keyFeatures: [
      '需要筑基丹辅助突破',
      '成功概率较低',
      '可担任宗门执事',
      '寿元大幅增加',
      '可收徒传道'
    ],
    examples: [
      '韩立：服用筑基丹后成功筑基',
      '南宫婉：掩月宗天才，轻松筑基',
      '陈巧倩：黄枫谷筑基期女修'
    ],
    nextLevel: '金丹期',
    difficulty: 5,
    typicalTime: '50-100年'
  },
  {
    id: 'jindan',
    name: '金丹期',
    order: 3,
    description: '在丹田凝聚固态金丹，法力产生质变，可初步沟通天地元气，是一派长老级存在。金丹分九品，品质决定潜力。',
    lifespan: '约500余岁',
    abilities: [
      '金丹护体，防御大增',
      '施展高级法术',
      '炼制本命法宝',
      '短距离瞬移',
      '神识覆盖百里',
      '初步掌握法则'
    ],
    keyFeatures: [
      '金丹分九品，品质决定潜力',
      '需要度过心魔劫',
      '可开宗立派',
      '在中型宗门担任长老',
      '可炼制本命法宝'
    ],
    examples: [
      '韩立：凝结九品金丹',
      '令狐老祖：黄枫谷金丹长老',
      '天琴真人：落云宗金丹修士'
    ],
    nextLevel: '元婴期',
    difficulty: 7,
    typicalTime: '200-500年'
  },
  {
    id: 'yuanying',
    name: '元婴期',
    order: 4,
    description: '金丹破碎化为元婴，可元婴出窍，初步掌握空间法则，是一派老祖级存在。元婴分初期、中期、后期。',
    lifespan: '约1000-1500岁',
    abilities: [
      '元婴出窍，瞬息千里',
      '初步掌握空间法则',
      '炼制通天灵宝',
      '夺舍重生',
      '神识覆盖千里',
      '施展大神通'
    ],
    keyFeatures: [
      '需要度过元婴天劫',
      '元婴分初期、中期、后期',
      '实力远超金丹期',
      '可建立大型宗门',
      '在人界是顶尖存在'
    ],
    examples: [
      '韩立：后期达到元婴后期大修士',
      '令狐老祖：黄枫谷元婴老祖',
      '南宫婉：掩月宗元婴修士',
      '龙晗：正道盟元婴后期大修士'
    ],
    nextLevel: '化神期',
    difficulty: 9,
    typicalTime: '500-1000年'
  },
  {
    id: 'huashen',
    name: '化神期',
    order: 5,
    description: '初步沟通天地元气，肉身不灭五行合一，是下境界的最高阶段，可飞升灵界。在人界几乎无敌。',
    lifespan: '约2000余岁',
    abilities: [
      '沟通天地元气',
      '肉身不灭',
      '掌握法则之力',
      '破碎虚空',
      '神识覆盖万里',
      '施展禁术'
    ],
    keyFeatures: [
      '需要度过化神天劫',
      '五行合一',
      '可飞升上界',
      '在人界几乎无敌',
      '寿命大幅延长'
    ],
    examples: [
      '韩立：最终化神成功飞升灵界',
      '向之礼：人界化神修士',
      '冰凤：妖兽化神期'
    ],
    nextLevel: '炼虚期（灵界）',
    difficulty: 10,
    typicalTime: '1000-2000年'
  },
  // 灵界境界
  {
    id: 'lianxu',
    name: '炼虚期',
    order: 6,
    description: '灵界修炼阶段，炼化虚空之力，初步掌握空间法则。实力远超化神期，是灵界的中坚力量。',
    lifespan: '约5000余岁',
    abilities: [
      '炼化虚空之力',
      '掌握空间法则',
      '炼制灵宝',
      '空间穿梭',
      '神识覆盖十万里'
    ],
    keyFeatures: [
      '需要炼化虚空之力',
      '初步掌握空间法则',
      '可担任灵界宗门长老',
      '实力远超化神期'
    ],
    examples: [
      '韩立：灵界炼虚期修士',
      '灵界普通修士'
    ],
    nextLevel: '合体期',
    difficulty: 8,
    typicalTime: '2000-5000年'
  },
  {
    id: 'heti',
    name: '合体期',
    order: 7,
    description: '元婴与肉身完全合一，法力无边，可初步掌握时间法则。是灵界的强者，可建立大型势力。',
    lifespan: '约10000余岁',
    abilities: [
      '元婴肉身合一',
      '初步掌握时间法则',
      '炼制通天灵宝',
      '时间加速/减速',
      '神识覆盖百万里'
    ],
    keyFeatures: [
      '元婴与肉身完全合一',
      '初步掌握时间法则',
      '可建立大型势力',
      '是灵界的强者'
    ],
    examples: [
      '韩立：灵界合体期修士',
      '灵界大宗门长老'
    ],
    nextLevel: '大乘期',
    difficulty: 9,
    typicalTime: '5000-10000年'
  },
  {
    id: 'dacheng',
    name: '大乘期',
    order: 8,
    description: '灵界巅峰，准备飞升仙界。掌握完整的法则之力，实力通天，是灵界最顶尖的存在。',
    lifespan: '约30000余岁',
    abilities: [
      '掌握完整法则',
      '炼制仙器',
      '破碎虚空飞升',
      '时间停止',
      '神识覆盖千万里'
    ],
    keyFeatures: [
      '灵界巅峰境界',
      '掌握完整法则之力',
      '可飞升仙界',
      '是灵界最顶尖存在'
    ],
    examples: [
      '韩立：灵界大乘期修士',
      '青元子：灵界大乘期修士'
    ],
    nextLevel: '真仙境（仙界）',
    difficulty: 10,
    typicalTime: '10000-30000年'
  },
  // 仙界境界
  {
    id: 'zhenxian',
    name: '真仙境',
    order: 9,
    description: '仙界基础境界，初步掌握仙灵之力。实力远超灵界大乘期，是仙界的入门阶段。',
    lifespan: '约10万岁',
    abilities: [
      '掌握仙灵之力',
      '炼制仙器',
      '施展仙术',
      '空间创造',
      '神识覆盖亿万里'
    ],
    keyFeatures: [
      '仙界基础境界',
      '初步掌握仙灵之力',
      '实力远超灵界大乘期',
      '仙界的入门阶段'
    ],
    examples: [
      '韩立：仙界真仙境修士',
      '仙界普通仙人'
    ],
    nextLevel: '金仙境',
    difficulty: 7,
    typicalTime: '30000-100000年'
  },
  {
    id: 'jinxian',
    name: '金仙境',
    order: 10,
    description: '掌握法则之力，可初步创造小世界。是仙界的中坚力量，实力强大。',
    lifespan: '约50万岁',
    abilities: [
      '掌握法则之力',
      '创造小世界',
      '炼制后天灵宝',
      '法则攻击',
      '神识覆盖星系'
    ],
    keyFeatures: [
      '掌握法则之力',
      '可初步创造小世界',
      '仙界的中坚力量',
      '实力强大'
    ],
    examples: [
      '韩立：仙界金仙境修士',
      '仙界宗门长老'
    ],
    nextLevel: '太乙境',
    difficulty: 8,
    typicalTime: '100000-500000年'
  },
  {
    id: 'taiyi',
    name: '太乙境',
    order: 11,
    description: '仙界强者，掌握多种法则，可创造中型世界。实力通天，是仙界的顶尖存在之一。',
    lifespan: '约100万岁',
    abilities: [
      '掌握多种法则',
      '创造中型世界',
      '炼制先天灵宝',
      '法则融合',
      '神识覆盖星域'
    ],
    keyFeatures: [
      '仙界强者',
      '掌握多种法则',
      '可创造中型世界',
      '仙界的顶尖存在之一'
    ],
    examples: [
      '韩立：仙界太乙境修士',
      '仙界大宗门宗主'
    ],
    nextLevel: '大罗境',
    difficulty: 9,
    typicalTime: '500000-1000000年'
  },
  {
    id: 'daluo',
    name: '大罗境',
    order: 12,
    description: '仙界巅峰，掌握本源法则，可创造大型世界。实力接近道祖，是仙界的巅峰存在。',
    lifespan: '约300万岁',
    abilities: [
      '掌握本源法则',
      '创造大型世界',
      '炼制混沌灵宝',
      '本源攻击',
      '神识覆盖宇宙'
    ],
    keyFeatures: [
      '仙界巅峰',
      '掌握本源法则',
      '可创造大型世界',
      '实力接近道祖'
    ],
    examples: [
      '韩立：仙界大罗境修士',
      '仙界最顶尖存在'
    ],
    nextLevel: '道祖境',
    difficulty: 10,
    typicalTime: '1000000-3000000年'
  },
  {
    id: 'daozu',
    name: '道祖境',
    order: 13,
    description: '修仙的终极境界，掌握一道法则本源，与天地同寿。是修仙的巅峰，可创造完整宇宙。',
    lifespan: '与天地同寿',
    abilities: [
      '掌握法则本源',
      '创造完整宇宙',
      '炼制混沌至宝',
      '本源掌控',
      '神识覆盖多元宇宙'
    ],
    keyFeatures: [
      '修仙的终极境界',
      '掌握一道法则本源',
      '与天地同寿',
      '可创造完整宇宙',
      '修仙的巅峰'
    ],
    examples: [
      '韩立：最终成为时间道祖',
      '其他法则道祖'
    ],
    difficulty: 10,
    typicalTime: '3000000年以上'
  }
];

// 灵界境界（简要）
export const spiritWorldLevels = [
  {
    name: '炼虚期',
    description: '灵界修炼阶段，炼化虚空之力'
  },
  {
    name: '合体期',
    description: '元婴与肉身完全合一'
  },
  {
    name: '大乘期',
    description: '灵界巅峰，准备飞升仙界'
  }
];

// 仙界境界（简要）
export const immortalWorldLevels = [
  {
    name: '真仙境',
    description: '仙界基础境界'
  },
  {
    name: '金仙境',
    description: '掌握法则之力'
  },
  {
    name: '太乙境',
    description: '仙界强者'
  },
  {
    name: '大罗境',
    description: '仙界巅峰'
  },
  {
    name: '道祖境',
    description: '掌握一道法则本源'
  }
];

// 辅助函数
export function getLevelById(id: string): CultivationLevel | undefined {
  return cultivationLevels.find(level => level.id === id);
}

export function getNextLevel(currentLevel: CultivationLevel): CultivationLevel | undefined {
  if (!currentLevel.nextLevel) return undefined;
  return cultivationLevels.find(level => level.id === currentLevel.nextLevel);
}

export function getLevelProgress(level: CultivationLevel): number {
  // 简单计算进度：按顺序计算
  return (level.order / cultivationLevels.length) * 100;
}

// 获取所有境界名称
export function getAllLevelNames(): string[] {
  return cultivationLevels.map(level => level.name);
}

// 获取境界描述摘要
export function getLevelSummary(level: CultivationLevel): string {
  return `${level.name}：${level.description.split('。')[0]}。寿元约${level.lifespan}，突破难度：${level.difficulty}/10，典型修炼时间：${level.typicalTime}。`;
}

// 按难度筛选境界
export function getLevelsByDifficulty(minDifficulty: number, maxDifficulty: number): CultivationLevel[] {
  return cultivationLevels.filter(level => 
    level.difficulty >= minDifficulty && level.difficulty <= maxDifficulty
  );
}

// 获取人界境界
export function getMortalWorldLevels(): CultivationLevel[] {
  return cultivationLevels.filter(level => level.order <= 5);
}

// 获取灵界境界
export function getSpiritWorldLevels(): CultivationLevel[] {
  return cultivationLevels.filter(level => level.order >= 6 && level.order <= 8);
}

// 获取仙界境界
export function getImmortalWorldLevels(): CultivationLevel[] {
  return cultivationLevels.filter(level => level.order >= 9);
}

// 获取境界统计
export function getLevelStats() {
  const total = cultivationLevels.length;
  const mortal = getMortalWorldLevels().length;
  const spirit = getSpiritWorldLevels().length;
  const immortal = getImmortalWorldLevels().length;
  
  return {
    total,
    mortal,
    spirit,
    immortal,
    averageDifficulty: Math.round(cultivationLevels.reduce((sum, level) => sum + level.difficulty, 0) / total * 10) / 10
  };
}

// 获取境界树（包含前后关系）
export function getLevelTree(): Array<{
  level: CultivationLevel;
  prev?: CultivationLevel;
  next?: CultivationLevel;
}> {
  return cultivationLevels.map(level => ({
    level,
    prev: cultivationLevels.find(l => l.nextLevel === level.id),
    next: level.nextLevel ? cultivationLevels.find(l => l.id === level.nextLevel) : undefined
  }));
}