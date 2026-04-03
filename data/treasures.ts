// 《凡人修仙传》法宝/法器数据
// 基于公开资源整理，确保数据准确性

export interface Treasure {
  id: string;
  name: string;
  aliases: string[];
  type: '法器' | '法宝' | '灵宝' | '通天灵宝' | '仙器' | '混沌至宝' | '特殊宝物';
  grade: '下品' | '中品' | '上品' | '极品' | '未知';
  attribute: '金' | '木' | '水' | '火' | '土' | '雷' | '风' | '冰' | '时间' | '空间' | '混合' | '无';
  owner: string; // 当前或主要持有者
  creator?: string; // 炼制者
  origin?: string; // 来源
  description: string;
  abilities: string[]; // 能力/神通
  materials?: string[]; // 炼制材料
  cultivationRequirement?: string; // 使用所需境界
  specialFeatures: string[]; // 特殊特性
  weaknesses?: string[]; // 弱点
  relatedTechniques?: string[]; // 相关功法
  famousBattles?: string[]; // 著名战斗
  value: number; // 1-10，珍贵程度
  power: number; // 1-10，威力
}

export const treasures: Treasure[] = [
  // 主角核心宝物
  {
    id: 'zhangtianping',
    name: '掌天瓶',
    aliases: ['小绿瓶', '神秘小瓶'],
    type: '特殊宝物',
    grade: '未知',
    attribute: '时间',
    owner: '韩立',
    creator: '未知（疑似仙界至宝）',
    origin: '仙界',
    description: '韩立最重要的宝物，可催熟灵药，加速时间流逝。最初只是绿色小瓶，后逐渐展现更多能力，最终揭示为时间法则至宝。',
    abilities: [
      '催熟灵药',
      '加速时间流逝',
      '时间法则掌控',
      '空间存储',
      '灵气聚集'
    ],
    materials: ['未知仙界材料'],
    cultivationRequirement: '无（但需要时间法则理解）',
    specialFeatures: [
      '可成长性',
      '认主后无法被他人使用',
      '随时间解锁新能力',
      '与时间法则深度绑定'
    ],
    weaknesses: [
      '初期功能有限',
      '需要大量灵气',
      '可能引起强者觊觎'
    ],
    relatedTechniques: ['时间法则'],
    famousBattles: [
      '韩立依靠掌天瓶催熟灵药快速提升修为',
      '在仙界展现完整时间法则能力'
    ],
    value: 10,
    power: 10
  },
  {
    id: 'qingzhufengyunjian',
    name: '青竹蜂云剑',
    aliases: ['青竹剑', '蜂云剑阵'],
    type: '本命法宝',
    grade: '极品',
    attribute: '木',
    owner: '韩立',
    creator: '韩立',
    origin: '韩立自行炼制',
    description: '韩立用万年金雷竹炼制的本命飞剑，共七十二口。可组成大庚剑阵，威力无穷。随着韩立修为提升不断重炼升级。',
    abilities: [
      '飞剑攻击',
      '大庚剑阵',
      '金雷之力',
      '破魔除邪',
      '剑光分化'
    ],
    materials: ['万年金雷竹', '庚精', '其他珍稀材料'],
    cultivationRequirement: '金丹期',
    specialFeatures: [
      '本命法宝，与心神相连',
      '可随主人修为成长',
      '蕴含金雷之力克制魔功',
      '七十二口飞剑可组成剑阵'
    ],
    weaknesses: [
      '炼制材料极其稀有',
      '需要大量时间温养',
      '剑阵消耗法力巨大'
    ],
    relatedTechniques: ['青元剑诀'],
    famousBattles: [
      '韩立用大庚剑阵斩杀强敌',
      '在灵界重炼升级'
    ],
    value: 9,
    power: 9
  },
  // 重要法宝
  {
    id: 'xutianding',
    name: '虚天鼎',
    aliases: ['虚天殿之宝'],
    type: '通天灵宝',
    grade: '极品',
    attribute: '空间',
    owner: '韩立（曾持有）',
    creator: '上古修士',
    origin: '虚天殿',
    description: '虚天殿核心宝物，蕴含空间法则，可镇压、炼化万物。是乱星海最著名的宝物之一。',
    abilities: [
      '空间镇压',
      '炼化万物',
      '防御无敌',
      '空间穿梭',
      '法则攻击'
    ],
    materials: ['未知上古材料'],
    cultivationRequirement: '元婴期',
    specialFeatures: [
      '蕴含空间法则',
      '防御力极强',
      '可炼化敌人',
      '需要特殊法诀操控'
    ],
    weaknesses: [
      '消耗法力巨大',
      '需要空间法则理解',
      '操控困难'
    ],
    relatedTechniques: ['空间法则'],
    famousBattles: [
      '虚天殿夺宝大战',
      '韩立用虚天鼎对抗强敌'
    ],
    value: 9,
    power: 9
  },
  {
    id: 'bazhemian',
    name: '八咫镜',
    aliases: ['八咫神镜'],
    type: '灵宝',
    grade: '上品',
    attribute: '光',
    owner: '南宫婉',
    creator: '上古修士',
    origin: '掩月宗传承',
    description: '掩月宗传承灵宝，可发出神光攻击，防御力强大，是南宫婉的主要法宝。',
    abilities: [
      '神光攻击',
      '防御护罩',
      '幻术制造',
      '净化魔气',
      '追踪锁定'
    ],
    materials: ['太阳精金', '月光石'],
    cultivationRequirement: '元婴期',
    specialFeatures: [
      '攻防一体',
      '克制魔道功法',
      '可制造幻境',
      '与月光有关'
    ],
    weaknesses: [
      '夜间威力更强',
      '需要光属性法力'
    ],
    relatedTechniques: ['掩月宗功法'],
    famousBattles: [
      '南宫婉用八咫镜对抗魔道'
    ],
    value: 7,
    power: 8
  },
  // 著名法器
  {
    id: 'tianlei',
    name: '天雷子',
    aliases: ['雷珠'],
    type: '法器',
    grade: '上品',
    attribute: '雷',
    owner: '韩立（曾使用）',
    creator: '雷属性修士',
    origin: '坊市购买/炼制',
    description: '一次性雷属性攻击法器，威力巨大，可重伤甚至击杀同阶修士。韩立初期的重要保命手段。',
    abilities: [
      '雷暴攻击',
      '范围伤害',
      '破防效果',
      '震慑敌人'
    ],
    materials: ['雷属性材料', '灵石'],
    cultivationRequirement: '筑基期',
    specialFeatures: [
      '一次性使用',
      '威力巨大',
      '制作困难',
      '价格昂贵'
    ],
    weaknesses: [
      '一次性消耗品',
      '制作成功率低',
      '可能误伤自己'
    ],
    famousBattles: [
      '韩立用天雷子击杀强敌',
      '筑基期重要保命手段'
    ],
    value: 6,
    power: 8
  },
  {
    id: 'huoyanshan',
    name: '火焰山',
    aliases: ['火山印'],
    type: '法宝',
    grade: '中品',
    attribute: '火',
    owner: '韩立（曾使用）',
    creator: '火属性修士',
    origin: '战利品',
    description: '火属性攻击法宝，可化为小山镇压敌人，附带火焰伤害。',
    abilities: [
      '镇压攻击',
      '火焰灼烧',
      '范围攻击',
      '持续伤害'
    ],
    materials: ['火山精铁', '火灵石'],
    cultivationRequirement: '金丹期',
    specialFeatures: [
      '物理和法术双重伤害',
      '可大可小',
      '镇压效果'
    ],
    weaknesses: [
      '被水属性克制',
      '消耗法力较多'
    ],
    value: 5,
    power: 6
  },
  // 特殊宝物
  {
    id: 'jinleizhu',
    name: '金雷竹',
    aliases: ['辟邪神竹'],
    type: '特殊宝物',
    grade: '极品',
    attribute: '木/雷',
    owner: '韩立',
    creator: '天地孕育',
    origin: '天地灵物',
    description: '蕴含金雷之力的灵竹，可炼制辟邪法宝，克制魔功。韩立用其炼制青竹蜂云剑。',
    abilities: [
      '辟邪神雷',
      '克制魔功',
      '灵气充沛',
      '可炼制法宝'
    ],
    materials: ['天地灵气', '金雷之力'],
    cultivationRequirement: '无',
    specialFeatures: [
      '天地灵物',
      '蕴含金雷之力',
      '可成长',
      '极其稀有'
    ],
    weaknesses: [
      '生长缓慢',
      '需要特殊环境',
      '易被觊觎'
    ],
    relatedTechniques: ['青元剑诀'],
    value: 8,
    power: 7
  },
  {
    id: 'wannianxuanbing',
    name: '万年玄冰',
    aliases: ['玄冰玉'],
    type: '特殊宝物',
    grade: '上品',
    attribute: '冰',
    owner: '冰凤',
    creator: '天地孕育',
    origin: '极寒之地',
    description: '万年形成的玄冰，蕴含极寒之力，可炼制冰属性法宝或辅助修炼冰属性功法。',
    abilities: [
      '极寒之力',
      '辅助修炼',
      '炼制材料',
      '镇压心魔'
    ],
    materials: ['天地寒气', '冰灵气'],
    cultivationRequirement: '无',
    specialFeatures: [
      '极寒属性',
      '可辅助冰属性功法',
      '稀有材料',
      '长期保存'
    ],
    weaknesses: [
      '被火属性克制',
      '需要特殊保存'
    ],
    value: 7,
    power: 6
  }
];

// 法宝分类
export const treasureCategories = {
  byType: {
    '法器': treasures.filter(t => t.type === '法器'),
    '法宝': treasures.filter(t => t.type === '法宝'),
    '灵宝': treasures.filter(t => t.type === '灵宝'),
    '通天灵宝': treasures.filter(t => t.type === '通天灵宝'),
    '仙器': treasures.filter(t => t.type === '仙器'),
    '混沌至宝': treasures.filter(t => t.type === '混沌至宝'),
    '特殊宝物': treasures.filter(t => t.type === '特殊宝物')
  },
  byGrade: {
    '下品': treasures.filter(t => t.grade === '下品'),
    '中品': treasures.filter(t => t.grade === '中品'),
    '上品': treasures.filter(t => t.grade === '上品'),
    '极品': treasures.filter(t => t.grade === '极品'),
    '未知': treasures.filter(t => t.grade === '未知')
  },
  byAttribute: {
    '金': treasures.filter(t => t.attribute === '金'),
    '木': treasures.filter(t => t.attribute === '木'),
    '水': treasures.filter(t => t.attribute === '水'),
    '火': treasures.filter(t => t.attribute === '火'),
    '土': treasures.filter(t => t.attribute === '土'),
    '雷': treasures.filter(t => t.attribute === '雷'),
    '风': treasures.filter(t => t.attribute === '风'),
    '冰': treasures.filter(t => t.attribute === '冰'),
    '时间': treasures.filter(t => t.attribute === '时间'),
    '空间': treasures.filter(t => t.attribute === '空间'),
    '混合': treasures.filter(t => t.attribute === '混合'),
    '无': treasures.filter(t => t.attribute === '无'),
    '光': treasures.filter(t => t.attribute === '光')
  }
};

// 辅助函数
export function getTreasureById(id: string): Treasure | undefined {
  return treasures.find(treasure => treasure.id === id);
}

export function getTreasuresByOwner(owner: string): Treasure[] {
  return treasures.filter(treasure => treasure.owner.includes(owner));
}

export function getTreasuresByPower(minPower: number, maxPower: number = 10): Treasure[] {
  return treasures.filter(treasure => 
    treasure.power >= minPower && treasure.power <= maxPower
  );
}

export function getTreasuresByValue(minValue: number, maxValue: number = 10): Treasure[] {
  return treasures.filter(treasure => 
    treasure.value >= minValue && treasure.value <= maxValue
  );
}

export function getTreasuresByCultivation(level: string): Treasure[] {
  const levelOrder = getLevelOrder(level);
  return treasures.filter(treasure => {
    if (!treasure.cultivationRequirement) return true;
    const reqOrder = getLevelOrder(treasure.cultivationRequirement);
    return reqOrder <= levelOrder;
  });
}

// 获取境界的顺序值（复用功法中的函数）
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

export function getTreasureStats() {
  const total = treasures.length;
  const byType = treasureCategories.byType;
  const byGrade = treasureCategories.byGrade;
  
  const totalPower = treasures.reduce((sum, t) => sum + t.power, 0);
  const totalValue = treasures.reduce((sum, t) => sum + t.value, 0);
  
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
    averagePower: Math.round(totalPower / total * 10) / 10,
    averageValue: Math.round(totalValue / total * 10) / 10,
    mostPowerful: treasures.reduce((max, t) => t.power > max.power ? t : max, treasures[0]),
    mostValuable: treasures.reduce((max, t) => t.value > max.value ? t : max, treasures[0])
  };
}

// 获取法宝推荐（基于属性和境界）
export function getRecommendedTreasures(attribute: string, level: string): Treasure[] {
  const levelOrder = getLevelOrder(level);
  
  return treasures
    .filter(treasure => treasure.attribute === attribute || treasure.attribute === '混合' || treasure.attribute === '无')
    .filter(treasure => {
      if (!treasure.cultivationRequirement) return true;
      return getLevelOrder(treasure.cultivationRequirement) <= levelOrder;
    })
    .sort((a, b) => {
      // 先按威力排序，再按珍贵程度
      if (b.power !== a.power) return b.power - a.power;
      return b.value - a.value;
    });
}

// 获取法宝组合（兼容的法宝组合）
export function getTreasureCombinations(maxTreasures: number = 3): Array<Treasure[]> {
  const combinations: Array<Treasure[]> = [];
  
  // 简单的组合：同属性或互补属性
  for (let i = 0; i < treasures.length; i++) {
    const t1 = treasures[i];
    
    for (let j = i + 1; j < treasures.length && j < i + 5; j++) {
      const t2 = treasures[j];
      
      // 检查兼容性：同属性或互补属性
      const isCompatible = 
        t1.attribute === t2.attribute ||
        (t1.attribute === '木' && t2.attribute === '水') || // 木水相生
        (t1.attribute === '火' && t2.attribute === '木') || // 火木相生
        (t1.attribute === '土' && t2.attribute === '火') || // 土火相生
        (t1.attribute === '金' && t2.attribute === '土') || // 金土相生
        (t1.attribute === '水' && t2.attribute === '金');   // 水金相生
      
      if (isCompatible) {
        combinations.push([t1, t2]);
        
        // 尝试找第三个兼容的法宝
        if (maxTreasures >= 3) {
          for (let k = j + 1; k < treasures.length && k < j + 5; k++) {
            const t3 = treasures[k];
            const compatibleWithT1 = 
              t1.attribute === t3.attribute ||
              (t1.attribute === '木' && t3.attribute === '水') ||
              (t1.attribute === '火' && t3.attribute === '木') ||
              (t1.attribute === '土' && t3.attribute === '火') ||
              (t1.attribute === '金' && t3.attribute === '土') ||
              (t1.attribute === '水' && t3.attribute === '金');
            
            const compatibleWithT2 = 
              t2.attribute === t3.attribute ||
              (t2.attribute === '木' && t3.attribute === '水') ||
              (t2.attribute === '火' && t3.attribute === '木') ||
              (t2.attribute === '土' && t3.attribute === '火') ||
              (t2.attribute === '金' && t3.attribute === '土') ||
              (t2.attribute === '水' && t3.attribute === '金');
            
            if (compatibleWithT1 && compatibleWithT2) {
              combinations.push([t1, t2, t3]);
            }
          }
        }
      }
    }
  }
  
  return combinations.slice(0, 15); // 返回前15个组合
}

// 获取法宝对比
export function compareTreasures(treasureId1: string, treasureId2: string): {
  treasure1: Treasure;
  treasure2: Treasure;
  similarities: string[];
  differences: string[];
  recommendation?: string;
} {
  const treasure1 = getTreasureById(treasureId1);
  const treasure2 = getTreasureById(treasureId2);
  
  if (!treasure1 || !treasure2) {
    throw new Error('法宝不存在');
  }
  
  const similarities: string[] = [];
  const differences: string[] = [];
  
  // 检查相似性
  if (treasure1.type === treasure2.type) {
    similarities.push(`同为${treasure1.type}`);
  } else {
    differences.push(`类型不同：${treasure1.type} vs ${treasure2.type}`);
  }
  
  if (treasure1.attribute === treasure2.attribute) {
    similarities.push(`同属${treasure1.attribute}属性`);
  } else {
    differences.push(`属性不同：${treasure1.attribute} vs ${treasure2.attribute}`);
  }
  
  if (treasure1.grade === treasure2.grade) {
    similarities.push(`同为${treasure1.grade}品质`);
  } else {
    differences.push(`品质不同：${treasure1.grade} vs ${treasure2.grade}`);
  }
  
  if (Math.abs(treasure1.power - treasure2.power) <= 2) {
    similarities.push('威力相近');
  } else {
    differences.push(`威力差异：${treasure1.power}/10 vs ${treasure2.power}/10`);
  }
  
  // 生成推荐
  let recommendation: string | undefined;
  if (treasure1.power > treasure2.power && treasure1.value <= treasure2.value) {
    recommendation = `${treasure1.name}性价比更高`;
  } else if (treasure2.power > treasure1.power && treasure2.value <= treasure1.value) {
    recommendation = `${treasure2.name}性价比更高`;
  }
  
  if (treasure1.owner === treasure2.owner) {
    recommendation = `两者都曾被${treasure1.owner}使用`;
  }
  
  return {
    treasure1,
    treasure2,
    similarities,
    differences,
    recommendation
  };
}

// 获取法宝炼制路线
export function getTreasureCraftingPath(material: string): Treasure[] {
  return treasures.filter(treasure => 
    treasure.materials?.some(mat => mat.toLowerCase().includes(material.toLowerCase()))
  );
}

// 获取克制关系
export function getCounterTreasures(attribute: string): Treasure[] {
  const counterMap: Record<string, string[]> = {
    '金': ['火'], // 火克金
    '木': ['金'], // 金克木
    '水': ['土'], // 土克水
    '火': ['水'], // 水克火
    '土': ['木'], // 木克土
    '雷': ['土'], // 土克雷（特殊）
    '冰': ['火'], // 火克冰
    '魔': ['佛', '雷'], // 佛、雷克魔
    '佛': ['魔'] // 魔克佛（相克）
  };
  
  const counterAttributes = counterMap[attribute] || [];
  return treasures.filter(treasure => 
    counterAttributes.includes(treasure.attribute)
  );
}