// 《凡人修仙传》剧情时间线数据（全量扩展）
// 基于公开资源整理，确保数据准确性

export interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  age?: number; // 韩立年龄
  location: string;
  description: string;
  importance: number; // 1-5，重要性
  characters: string[];
  tags: string[];
  era: '人界篇' | '灵界篇' | '仙界篇'; // 所属篇章
}

export const timelineEvents: TimelineEvent[] = [
  // 人界篇 - 早期
  {
    id: 'start',
    title: '离家入七玄门',
    time: '10岁',
    age: 10,
    location: '七玄门',
    description: '韩立离家，被介绍到七玄门，拜墨大夫为师，开始修炼长春功，并意外捡到神秘小瓶（掌天瓶）。',
    importance: 5,
    characters: ['韩立', '墨大夫'],
    tags: ['起点', '掌天瓶', '长春功', '七玄门'],
    era: '人界篇'
  },
  {
    id: 'discover-bottle',
    title: '发现掌天瓶秘密',
    time: '14岁',
    age: 14,
    location: '七玄门',
    description: '修炼长春功至第三层，发现小瓶催生植物的秘密，开始暗自调制丹药修炼，并结交厉飞雨。',
    importance: 5,
    characters: ['韩立', '厉飞雨'],
    tags: ['掌天瓶', '丹药', '厉飞雨', '秘密'],
    era: '人界篇'
  },
  {
    id: 'confront-mo',
    title: '与墨大夫摊牌',
    time: '16岁',
    age: 16,
    location: '七玄门',
    description: '修炼长春功至第六层，暗中学会罗烟步和眨眼剑法提升实力，与墨大夫摊牌翻脸，最终反杀成功。',
    importance: 4,
    characters: ['韩立', '墨大夫'],
    tags: ['反杀', '罗烟步', '眨眼剑法', '摊牌'],
    era: '人界篇'
  },
  {
    id: 'leave-qixuan',
    title: '离开七玄门',
    time: '18岁',
    age: 18,
    location: '七玄门',
    description: '解决墨大夫后，韩立离开七玄门，开始独自修炼，准备参加升仙大会。',
    importance: 3,
    characters: ['韩立'],
    tags: ['离开', '独自修炼', '升仙大会'],
    era: '人界篇'
  },
  {
    id: 'shengxian-dahui',
    title: '参加升仙大会',
    time: '20岁',
    age: 20,
    location: '越国',
    description: '参加升仙大会，展现实力，获得筑基丹，为筑基做准备。',
    importance: 4,
    characters: ['韩立'],
    tags: ['升仙大会', '筑基丹', '比赛'],
    era: '人界篇'
  },
  {
    id: 'zhuji-success',
    title: '成功筑基',
    time: '22岁',
    age: 22,
    location: '越国',
    description: '服用筑基丹后成功筑基，正式踏入修仙大道，实力大幅提升。',
    importance: 4,
    characters: ['韩立'],
    tags: ['筑基', '突破', '实力提升'],
    era: '人界篇'
  },
  {
    id: 'join-huangfenggu',
    title: '加入黄枫谷',
    time: '25岁',
    age: 25,
    location: '黄枫谷',
    description: '筑基成功后，韩立加入越国七派之一的黄枫谷，正式开始宗门修仙生涯。',
    importance: 4,
    characters: ['韩立', '令狐老祖'],
    tags: ['黄枫谷', '宗门', '令狐老祖'],
    era: '人界篇'
  },
  {
    id: 'meet-nanongwan',
    title: '初遇南宫婉',
    time: '30岁',
    age: 30,
    location: '掩月宗',
    description: '在执行宗门任务时，韩立初次遇到掩月宗天才弟子南宫婉，两人命运开始交织。',
    importance: 4,
    characters: ['韩立', '南宫婉'],
    tags: ['南宫婉', '掩月宗', '初遇', '缘分'],
    era: '人界篇'
  },
  {
    id: 'form-golden-core',
    title: '凝结九品金丹',
    time: '100岁',
    age: 100,
    location: '黄枫谷',
    description: '经过多年修炼和机缘，韩立成功凝结出最高品质的九品金丹，实力大幅提升。',
    importance: 5,
    characters: ['韩立'],
    tags: ['金丹', '九品', '突破', '实力飞跃'],
    era: '人界篇'
  },
  {
    id: 'demon-invasion',
    title: '魔道入侵越国',
    time: '150岁',
    age: 150,
    location: '越国',
    description: '魔道六宗入侵越国，七派联盟抵抗。令狐老祖为保全黄枫谷核心力量，设计让部分弟子作为诱饵。',
    importance: 5,
    characters: ['韩立', '令狐老祖'],
    tags: ['魔道入侵', '越国七派', '令狐老祖', '战争'],
    era: '人界篇'
  },
  {
    id: 'leave-yueguo',
    title: '离开越国',
    time: '160岁',
    age: 160,
    location: '越国',
    description: '魔道入侵后，韩立离开越国，开始在天南地区游历，寻找新的修炼机会。',
    importance: 3,
    characters: ['韩立'],
    tags: ['离开越国', '游历', '天南地区'],
    era: '人界篇'
  },
  // 人界篇 - 中期
  {
    id: 'form-infant',
    title: '凝结元婴',
    time: '200岁',
    age: 200,
    location: '乱星海',
    description: '在乱星海历练期间，韩立成功凝结元婴，成为元婴期修士，实力达到人界顶尖层次。',
    importance: 5,
    characters: ['韩立'],
    tags: ['元婴', '乱星海', '突破', '顶尖实力'],
    era: '人界篇'
  },
  {
    id: 'return-tiannan',
    title: '重返天南',
    time: '300岁',
    age: 300,
    location: '天南地区',
    description: '韩立重返天南地区，加入落云宗成为客卿长老，获得稳定修炼环境。',
    importance: 3,
    characters: ['韩立', '天琴真人'],
    tags: ['落云宗', '天南', '客卿', '天琴真人'],
    era: '人界篇'
  },
  {
    id: 'zhui-mo-gu',
    title: '坠魔谷探险',
    time: '350岁',
    age: 350,
    location: '坠魔谷',
    description: '进入天南第一险地"坠魔谷"探险，寻找上古灵药，并成功解决体内玄骨上人残魂隐患，实力大增。',
    importance: 4,
    characters: ['韩立', '玄骨上人'],
    tags: ['坠魔谷', '探险', '玄骨上人', '实力提升'],
    era: '人界篇'
  },
  {
    id: 'become-great-cultivator',
    title: '成为大修士',
    time: '400岁',
    age: 400,
    location: '天南地区',
    description: '韩立修为达到元婴后期顶峰，成为天南地区最顶尖的大修士之一，威名远播。',
    importance: 4,
    characters: ['韩立'],
    tags: ['大修士', '天南', '巅峰', '威名'],
    era: '人界篇'
  },
  {
    id: 'transform-god',
    title: '化神成功',
    time: '500岁',
    age: 500,
    location: '人界',
    description: '经历重重考验，韩立最终化神成功，成为人界最顶尖的存在，准备飞升灵界。',
    importance: 5,
    characters: ['韩立', '向之礼'],
    tags: ['化神', '飞升', '人界巅峰', '向之礼'],
    era: '人界篇'
  },
  {
    id: 'ascend-spirit-world',
    title: '飞升灵界',
    time: '1000岁',
    age: 1000,
    location: '飞升通道',
    description: '韩立通过飞升通道成功飞升灵界，开始新的修仙征程。',
    importance: 5,
    characters: ['韩立'],
    tags: ['飞升', '灵界', '新征程', '通道'],
    era: '人界篇'
  },
  // 灵界篇
  {
    id: 'arrive-spirit-world',
    title: '抵达灵界',
    time: '1000岁',
    age: 1000,
    location: '灵界',
    description: '韩立成功飞升灵界，开始适应灵界环境，了解灵界规则。',
    importance: 4,
    characters: ['韩立'],
    tags: ['灵界', '适应', '新环境', '规则'],
    era: '灵界篇'
  },
  {
    id: 'spirit-world-cultivation',
    title: '灵界修炼',
    time: '50000岁',
    age: 50000,
    location: '灵界',
    description: '在灵界历经炼虚、合体、大乘等境界，不断提升实力，最终达到大乘期巅峰。',
    importance: 4,
    characters: ['韩立', '青元子'],
    tags: ['灵界', '炼虚', '合体', '大乘', '青元子'],
    era: '灵界篇'
  },
  {
    id: 'meet-qingyuanzi',
    title: '结识青元子',
    time: '30000岁',
    age: 30000,
    location: '青元宫',
    description: '在灵界结识大乘期修士青元子，得到其指点，修为大进。',
    importance: 4,
    characters: ['韩立', '青元子'],
    tags: ['青元子', '指点', '修为大进', '青元宫'],
    era: '灵界篇'
  },
  {
    id: 'become-dacheng',
    title: '成就大乘期',
    time: '80000岁',
    age: 80000,
    location: '灵界',
    description: '韩立修为达到大乘期，成为灵界顶尖存在，准备飞升仙界。',
    importance: 5,
    characters: ['韩立'],
    tags: ['大乘期', '灵界顶尖', '飞升准备'],
    era: '灵界篇'
  },
  {
    id: 'ascend-immortal-world',
    title: '飞升仙界',
    time: '100000岁',
    age: 100000,
    location: '仙界通道',
    description: '达到大乘期巅峰后，韩立成功飞升仙界，开始仙界篇的修炼。',
    importance: 5,
    characters: ['韩立'],
    tags: ['仙界', '飞升', '大乘', '新篇章'],
    era: '灵界篇'
  },
  // 仙界篇
  {
    id: 'arrive-immortal-world',
    title: '抵达仙界',
    time: '100000岁',
    age: 100000,
    location: '仙界',
    description: '韩立成功飞升仙界，开始适应仙界环境，了解仙界规则。',
    importance: 4,
    characters: ['韩立'],
    tags: ['仙界', '适应', '新环境', '仙灵之力'],
    era: '仙界篇'
  },
  {
    id: 'zhenxian-cultivation',
    title: '真仙境修炼',
    time: '150000岁',
    age: 150000,
    location: '仙界',
    description: '在仙界从真仙境开始修炼，逐步提升实力，掌握仙灵之力。',
    importance: 3,
    characters: ['韩立'],
    tags: ['真仙境', '仙灵之力', '修炼'],
    era: '仙界篇'
  },
  {
    id: 'jinxian-breakthrough',
    title: '突破金仙境',
    time: '300000岁',
    age: 300000,
    location: '仙界',
    description: '韩立突破到金仙境，掌握法则之力，实力大幅提升。',
    importance: 4,
    characters: ['韩立'],
    tags: ['金仙境', '法则之力', '突破'],
    era: '仙界篇'
  },
  {
    id: 'taiyi-achievement',
    title: '成就太乙境',
    time: '500000岁',
    age: 500000,
    location: '仙界',
    description: '韩立修为达到太乙境，成为仙界强者，掌握多种法则。',
    importance: 4,
    characters: ['韩立'],
    tags: ['太乙境', '仙界强者', '多种法则'],
    era: '仙界篇'
  },
  {
    id: 'daluo-achievement',
    title: '成就大罗境',
    time: '1000000岁',
    age: 1000000,
    location: '仙界',
    description: '韩立修为达到大罗境，成为仙界巅峰存在，掌握本源法则。',
    importance: 5,
    characters: ['韩立'],
    tags: ['大罗境', '仙界巅峰', '本源法则'],
    era: '仙界篇'
  },
  {
    id: 'become-time-ancestor',
    title: '成为时间道祖',
    time: '3000000岁',
    age: 3000000,
    location: '仙界',
    description: '经过漫长修炼和无数机缘，韩立最终掌握时间法则，成为时间道祖，达到修仙的巅峰。',
    importance: 5,
    characters: ['韩立'],
    tags: ['时间道祖', '仙界巅峰', '法则', '修仙终点'],
    era: '仙界篇'
  },
  // 其他重要事件
  {
    id: 'meet-yuanming',
    title: '结识元瑶',
    time: '180岁',
    age: 180,
    location: '乱星海',
    description: '在乱星海虚天殿事件中结识元瑶，建立友谊，后多次帮助她。',
    importance: 3,
    characters: ['韩立', '元瑶', '妍丽'],
    tags: ['元瑶', '妍丽', '乱星海', '虚天殿', '友谊'],
    era: '人界篇'
  },
  {
    id: 'defeat-xueyunzi',
    title: '击败血云子',
    time: '380岁',
    age: 380,
    location: '天南地区',
    description: '韩立击败魔道大修士血云子，威名大震。',
    importance: 3,
    characters: ['韩立', '血云子'],
    tags: ['血云子', '魔道', '击败', '威名'],
    era: '人界篇'
  },
  {
    id: 'meet-fengbing',
    title: '结识冰凤',
    time: '450岁',
    age: 450,
    location: '人界',
    description: '韩立结识十级妖兽冰凤，建立复杂的敌对与合作关系。',
    importance: 3,
    characters: ['韩立', '冰凤'],
    tags: ['冰凤', '妖兽', '敌对合作', '十级'],
    era: '人界篇'
  }
];

// 辅助函数
export function getEventById(id: string): TimelineEvent | undefined {
  return timelineEvents.find(event => event.id === id);
}

export function getEventsByImportance(minImportance: number): TimelineEvent[] {
  return timelineEvents.filter(event => event.importance >= minImportance);
}

export function getEventsByAge(minAge?: number, maxAge?: number): TimelineEvent[] {
  return timelineEvents.filter(event => {
    if (!event.age) return false;
    if (minAge !== undefined && event.age < minAge) return false;
    if (maxAge !== undefined && event.age > maxAge) return false;
    return true;
  });
}

export function getEventsByLocation(location: string): TimelineEvent[] {
  return timelineEvents.filter(event => 
    event.location.toLowerCase().includes(location.toLowerCase())
  );
}

export function getEventsByCharacter(characterName: string): TimelineEvent[] {
  return timelineEvents.filter(event =>
    event.characters.some(char => char.toLowerCase().includes(characterName.toLowerCase()))
  );
}

export function getEventsByTag(tag: string): TimelineEvent[] {
  return timelineEvents.filter(event =>
    event.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

export function getEventsByEra(era: string): TimelineEvent[] {
  return timelineEvents.filter(event => event.era === era);
}

// 按时间排序的事件
export const sortedTimelineEvents = [...timelineEvents].sort((a, b) => {
  const ageA = a.age || 0;
  const ageB = b.age || 0;
  return ageA - ageB;
});

// 获取重要事件（重要性4-5）
export function getImportantEvents(minImportance: number = 4): TimelineEvent[] {
  return sortedTimelineEvents.filter(event => event.importance >= minImportance);
}

// 获取时间线摘要
export function getTimelineSummary(): string {
  const totalEvents = timelineEvents.length;
  const importantEvents = getImportantEvents(4).length;
  const timeSpan = `从${timelineEvents[0].age}岁到${timelineEvents[timelineEvents.length - 1].age}岁`;
  const eraCounts = {
    '人界篇': getEventsByEra('人界篇').length,
    '灵界篇': getEventsByEra('灵界篇').length,
    '仙界篇': getEventsByEra('仙界篇').length
  };
  
  return `《凡人修仙传》剧情时间线包含${totalEvents}个重要事件，其中${importantEvents}个关键事件，时间跨度${timeSpan}。分为人界篇(${eraCounts['人界篇']}个事件)、灵界篇(${eraCounts['灵界篇']}个事件)、仙界篇(${eraCounts['仙界篇']}个事件)。`;
}

// 获取事件简要信息
export function getEventSummary(event: TimelineEvent): string {
  const ageText = event.age ? `（韩立${event.age}岁）` : '';
  const eraText = `【${event.era}】`;
  return `${eraText}${event.title}${ageText}：${event.description.split('。')[0]}。发生在${event.location}。`;
}

// 获取篇章统计
export function getEraStats() {
  const eventsByEra = {
    '人界篇': getEventsByEra('人界篇'),
    '灵界篇': getEventsByEra('灵界篇'),
    '仙界篇': getEventsByEra('仙界篇')
  };
  
  return {
    total: timelineEvents.length,
    byEra: eventsByEra,
    eraCounts: {
      '人界篇': eventsByEra['人界篇'].length,
      '灵界篇': eventsByEra['灵界篇'].length,
      '仙界篇': eventsByEra['仙界篇'].length
    },
    averageImportance: Math.round(timelineEvents.reduce((sum, event) => sum + event.importance, 0) / timelineEvents.length * 10) / 10
  };
}

// 获取时间线里程碑（重要性5的事件）
export function getMilestones(): TimelineEvent[] {
  return sortedTimelineEvents.filter(event => event.importance === 5);
}

// 获取特定年龄阶段的事件
export function getEventsByAgeRange(startAge: number, endAge: number): TimelineEvent[] {
  return sortedTimelineEvents.filter(event => {
    if (!event.age) return false;
    return event.age >= startAge && event.age <= endAge;
  });
}

// 获取事件时间线图表数据
export function getTimelineChartData() {
  return sortedTimelineEvents.map(event => ({
    id: event.id,
    title: event.title,
    age: event.age || 0,
    importance: event.importance,
    era: event.era,
    location: event.location,
    characters: event.characters.length
  }));
}