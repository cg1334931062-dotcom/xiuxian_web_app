// 《凡人修仙传》全量人物数据
// 基于公开资源整理，确保数据准确性

export interface CharacterRelationship {
  characterId: string;
  type: '道侣' | '师徒' | '好友' | '敌人' | '同门' | '前辈' | '后辈' | '盟友' | '主仆' | '同辈' | '复杂关系';
  description: string;
  strength: number; // 1-10，关系强度
}

export interface Character {
  id: string;
  name: string;
  aliases: string[];
  cultivationLevel: string;
  sect: string;
  description: string;
  importantEvents: string[];
  treasures: string[];
  relationships: CharacterRelationship[];
}

export interface Sect {
  id: string;
  name: string;
  region: string;
  strength: number; // 1-10
  description: string;
  leader?: string;
  foundingTime?: string;
  speciality?: string;
}

// 主要人物数据（全量扩展）
export const characters: Character[] = [
  // 核心主角
  {
    id: 'hanli',
    name: '韩立',
    aliases: ['韩跑跑', '韩老魔', '厉飞雨（化名）', '韩道友'],
    cultivationLevel: '道祖境（最终）',
    sect: '黄枫谷（起始）→ 落云宗 → 青元宫',
    description: '《凡人修仙传》主角，资质平庸的山村少年，依靠自身努力、合理算计及神秘小瓶（掌天瓶）的辅助，从人界底层逐步修炼，最终飞升仙界并成为时间道祖。性格谨慎、果断、重情义。',
    importantEvents: [
      '10岁离家，拜入七玄门',
      '16岁与墨大夫摊牌，获得掌天瓶',
      '筑基成功后加入黄枫谷',
      '凝结九品金丹',
      '元婴后期大修士',
      '化神成功飞升灵界',
      '最终成为时间道祖'
    ],
    treasures: [
      '掌天瓶（神秘小瓶）',
      '青竹蜂云剑',
      '风雷翅',
      '虚天鼎',
      '玄天斩灵剑',
      '元合五极山',
      '噬金虫'
    ],
    relationships: [
      { characterId: 'nanongwan', type: '道侣', description: '相伴八千年，最终结为道侣', strength: 10 },
      { characterId: 'lifeiyu', type: '好友', description: '七玄门时期好友，凡人时期的真挚友情', strength: 9 },
      { characterId: 'linghulaozu', type: '师徒', description: '黄枫谷老祖，对韩立有指点之恩', strength: 7 },
      { characterId: 'mofuren', type: '师徒', description: '七玄门师父，初期教导但心怀不轨', strength: 3 },
      { characterId: 'xiangzhili', type: '前辈', description: '化神期前辈，最终一同飞升', strength: 6 },
      { characterId: 'yuanming', type: '好友', description: '乱星海结识的好友，多次得到韩立帮助', strength: 7 },
      { characterId: 'tianqin', type: '前辈', description: '落云宗前辈，对韩立颇为赏识', strength: 7 },
      { characterId: 'qingyuanzi', type: '前辈', description: '灵界前辈，对韩立有指点之恩', strength: 8 }
    ]
  },
  {
    id: 'nanongwan',
    name: '南宫婉',
    aliases: ['南宫仙子', '掩月宗长老', '婉儿'],
    cultivationLevel: '元婴期',
    sect: '掩月宗',
    description: '掩月宗天才女修，韩立的道侣。早期清冷高贵，后逐渐温和活泼，对韩立不离不弃，是其修仙路上的重要精神支柱。修炼素女轮回功，本命法宝为朱雀环。',
    importantEvents: [
      '掩月宗天才弟子',
      '与韩立初次相遇',
      '凝结元婴成功',
      '与韩立结为道侣',
      '相伴韩立八千年'
    ],
    treasures: [
      '朱雀环',
      '素女轮回功传承',
      '冰属性法宝'
    ],
    relationships: [
      { characterId: 'hanli', type: '道侣', description: '相伴八千年，最终结为道侣', strength: 10 },
      { characterId: 'yanuezong', type: '同门', description: '掩月宗核心弟子', strength: 8 }
    ]
  },
  {
    id: 'lifeiyu',
    name: '厉飞雨',
    aliases: ['厉师兄'],
    cultivationLevel: '凡人',
    sect: '七玄门',
    description: '韩立在七玄门时期的好友，非修仙者。两人为早年底层相识，情谊深厚。韩立踏上修仙路后，曾为厉飞雨留下资源，助其改善生活。厉飞雨是韩立凡人时期情感的重要寄托。',
    importantEvents: [
      '七玄门底层弟子',
      '与韩立成为好友',
      '接受韩立帮助改善生活',
      '见证韩立踏上修仙路'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '好友', description: '七玄门时期好友，凡人时期的真挚友情', strength: 9 }
    ]
  },
  {
    id: 'linghulaozu',
    name: '令狐老祖',
    aliases: ['令狐老怪'],
    cultivationLevel: '元婴初期顶峰',
    sect: '黄枫谷',
    description: '黄枫谷元婴老祖，宗门支柱。在魔道入侵时，为保全宗门核心力量，设计让部分弟子作为诱饵，包括韩立。后韩立理解其苦衷，两人关系复杂。',
    importantEvents: [
      '黄枫谷元婴老祖',
      '魔道入侵时设计保全宗门',
      '带领黄枫谷残余弟子撤离越国',
      '最终陨落或飞升（不同版本有差异）'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '师徒', description: '黄枫谷老祖，对韩立有指点之恩', strength: 7 },
      { characterId: 'huangfenggu', type: '前辈', description: '黄枫谷支柱', strength: 10 }
    ]
  },
  // 新增重要人物
  {
    id: 'mofuren',
    name: '墨大夫',
    aliases: ['墨居仁', '墨师'],
    cultivationLevel: '炼气期顶峰',
    sect: '七玄门',
    description: '七玄门神医，韩立的第一个师父。表面传授医术和长春功，实则想夺舍韩立以延续寿命。最终被韩立反杀。',
    importantEvents: [
      '收韩立为徒',
      '传授长春功',
      '暗中准备夺舍',
      '被韩立反杀'
    ],
    treasures: [
      '长春功秘籍',
      '医术传承',
      '夺舍秘法',
      '罗烟步秘籍',
      '眨眼剑法秘籍'
    ],
    relationships: [
      { characterId: 'hanli', type: '师徒', description: '七玄门师父，初期教导但心怀不轨', strength: 3 }
    ]
  },
  {
    id: 'xiangzhili',
    name: '向之礼',
    aliases: ['向老怪', '向道友'],
    cultivationLevel: '化神期',
    sect: '无固定宗门',
    description: '人界化神期修士之一，表面疯疯癫癫，实则深藏不露。在人界各处寻找飞升灵界的方法，最终与韩立一同飞升。',
    importantEvents: [
      '人界化神修士',
      '寻找飞升方法',
      '与韩立结识',
      '一同飞升灵界'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '前辈', description: '化神期前辈，最终一同飞升', strength: 6 }
    ]
  },
  {
    id: 'yuanming',
    name: '元瑶',
    aliases: ['元姑娘', '元仙子'],
    cultivationLevel: '元婴期',
    sect: '乱星海散修',
    description: '乱星海女修，与妍丽是好友。性格活泼开朗，对韩立有好感。在虚天殿事件中与韩立结识，后多次得到韩立帮助。',
    importantEvents: [
      '虚天殿结识韩立',
      '乱星海修炼',
      '多次得到韩立帮助',
      '最终修为有成'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '好友', description: '乱星海结识的好友，多次得到韩立帮助', strength: 7 },
      { characterId: 'yanli', type: '好友', description: '好姐妹，一同修炼', strength: 9 }
    ]
  },
  {
    id: 'yanli',
    name: '妍丽',
    aliases: ['妍姑娘'],
    cultivationLevel: '元婴期',
    sect: '乱星海散修',
    description: '乱星海女修，元瑶的好友。性格温柔善良，与元瑶一同修炼，多次经历生死考验。',
    importantEvents: [
      '与元瑶一同修炼',
      '虚天殿事件',
      '乱星海历险',
      '最终修为有成'
    ],
    treasures: [],
    relationships: [
      { characterId: 'yuanming', type: '好友', description: '好姐妹，一同修炼', strength: 9 },
      { characterId: 'hanli', type: '好友', description: '通过元瑶结识，得到韩立帮助', strength: 6 }
    ]
  },
  {
    id: 'tianqin',
    name: '天琴真人',
    aliases: ['天琴老祖', '天琴前辈'],
    cultivationLevel: '元婴后期',
    sect: '落云宗',
    description: '落云宗元婴后期大修士，宗门支柱。对韩立颇为赏识，邀请韩立加入落云宗担任客卿长老。',
    importantEvents: [
      '落云宗大修士',
      '邀请韩立加入落云宗',
      '宗门支柱',
      '指导韩立修炼'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '前辈', description: '落云宗前辈，对韩立颇为赏识', strength: 7 }
    ]
  },
  {
    id: 'longhanyu',
    name: '龙晗',
    aliases: ['龙道友', '龙前辈'],
    cultivationLevel: '元婴后期',
    sect: '正道盟',
    description: '正道盟元婴后期大修士，实力强大，在天南地区有重要影响力。与韩立有过交集。',
    importantEvents: [
      '正道盟大修士',
      '天南地区重要人物',
      '与韩立有过交集'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '同辈', description: '元婴后期同辈修士', strength: 5 }
    ]
  },
  {
    id: 'fengbing',
    name: '冰凤',
    aliases: ['冰凤仙子', '冰凤前辈'],
    cultivationLevel: '化神期（妖兽）',
    sect: '妖族',
    description: '十级妖兽，冰属性凤凰后裔。实力强大，与韩立有过多次交集，既有争斗也有合作。',
    importantEvents: [
      '十级妖兽',
      '与韩立多次交集',
      '既有争斗也有合作',
      '最终飞升灵界'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '复杂关系', description: '复杂的敌对与合作关系', strength: 6 }
    ]
  },
  {
    id: 'xueyunzi',
    name: '血云子',
    aliases: ['血云老祖', '血云魔头'],
    cultivationLevel: '元婴后期',
    sect: '魔道',
    description: '魔道元婴后期大修士，心狠手辣，修炼血道功法。与韩立有过冲突，最终被韩立击败。',
    importantEvents: [
      '魔道大修士',
      '修炼血道功法',
      '与韩立冲突',
      '被韩立击败'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '敌人', description: '魔道敌人，被韩立击败', strength: 4 }
    ]
  },
  {
    id: 'qingyuanzi',
    name: '青元子',
    aliases: ['青元老祖', '青元前辈'],
    cultivationLevel: '大乘期',
    sect: '青元宫',
    description: '灵界大乘期修士，青元宫创始人。对韩立有指点之恩，是韩立在灵界的重要前辈。',
    importantEvents: [
      '灵界大乘期修士',
      '青元宫创始人',
      '对韩立有指点之恩',
      '灵界重要前辈'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '前辈', description: '灵界前辈，对韩立有指点之恩', strength: 8 }
    ]
  },
  {
    id: 'zhangtie',
    name: '张铁',
    aliases: ['张师兄'],
    cultivationLevel: '炼气期',
    sect: '七玄门',
    description: '韩立在七玄门时期的师兄，性格憨厚老实。与韩立一同拜入墨大夫门下，后因资质问题未能踏上修仙路。',
    importantEvents: [
      '七玄门弟子',
      '与韩立一同拜师',
      '因资质问题未能修仙',
      '留在七玄门'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '同门', description: '七玄门师兄，一同拜师', strength: 6 },
      { characterId: 'mofuren', type: '师徒', description: '墨大夫弟子', strength: 5 }
    ]
  },
  {
    id: 'xuanjingshangren',
    name: '玄骨上人',
    aliases: ['玄骨老魔'],
    cultivationLevel: '元婴后期（残魂）',
    sect: '魔道',
    description: '上古魔道修士，只剩残魂存在。曾试图夺舍韩立，后被韩立解决。掌握上古魔道秘法。',
    importantEvents: [
      '上古魔道修士',
      '只剩残魂存在',
      '试图夺舍韩立',
      '被韩立解决'
    ],
    treasures: [
      '上古魔道秘法',
      '魔道传承'
    ],
    relationships: [
      { characterId: 'hanli', type: '敌人', description: '试图夺舍韩立的魔道残魂', strength: 3 }
    ]
  },
  {
    id: 'jinwen',
    name: '金文',
    aliases: ['金道友'],
    cultivationLevel: '筑基期',
    sect: '黄枫谷',
    description: '黄枫谷筑基期弟子，韩立的同门。性格谨慎，与韩立有过合作。',
    importantEvents: [
      '黄枫谷筑基弟子',
      '与韩立有过合作',
      '宗门任务同伴'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '同门', description: '黄枫谷同门，有过合作', strength: 5 }
    ]
  },
  {
    id: 'chenqiaoqian',
    name: '陈巧倩',
    aliases: ['陈师姐'],
    cultivationLevel: '筑基期',
    sect: '黄枫谷',
    description: '黄枫谷女修，对韩立有好感。性格温柔善良，但最终未能与韩立在一起。',
    importantEvents: [
      '黄枫谷女修',
      '对韩立有好感',
      '最终未能在一起'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '同门', description: '黄枫谷师姐，对韩立有好感', strength: 6 }
    ]
  },
  {
    id: 'dongxuan',
    name: '董萱儿',
    aliases: ['董师妹'],
    cultivationLevel: '筑基期',
    sect: '黄枫谷',
    description: '黄枫谷女修，性格活泼开朗。与韩立有过交集，但关系不深。',
    importantEvents: [
      '黄枫谷女修',
      '与韩立有过交集',
      '性格活泼开朗'
    ],
    treasures: [],
    relationships: [
      { characterId: 'hanli', type: '同门', description: '黄枫谷师妹，有过交集', strength: 4 }
    ]
  }
];

// 门派势力数据（全量扩展）
export const sects: Sect[] = [
  {
    id: 'huangfenggu',
    name: '黄枫谷',
    region: '越国',
    strength: 5,
    description: '越国七派之一，韩立加入的首个修仙宗门。实力中等，约有上万修士，其中90%为炼气期，筑基期弟子较少。在魔道入侵时被迫撤离越国。',
    leader: '令狐老祖',
    foundingTime: '约3000年前',
    speciality: '炼丹、阵法'
  },
  {
    id: 'yanuezong',
    name: '掩月宗',
    region: '越国',
    strength: 8,
    description: '越国七派中实力最强，远超其他六派。以女修仙者为主，修炼素女轮回功。在南宫婉凝结元婴前，宗门已有元婴期修士坐镇，是七派的领袖力量。',
    leader: '南宫婉（后期）',
    foundingTime: '约5000年前',
    speciality: '素女轮回功、冰属性功法'
  },
  {
    id: 'lingshoushan',
    name: '灵兽山',
    region: '越国',
    strength: 4,
    description: '越国七派之一，擅长御兽之术。宗门弟子多驯养灵兽辅助战斗，实力中等偏下。',
    foundingTime: '约2500年前',
    speciality: '御兽术、灵兽培育'
  },
  {
    id: 'taizhenmen',
    name: '太真门',
    region: '正道盟',
    strength: 7,
    description: '正道盟核心宗门，实力强大，有元婴后期大修士坐镇。在人界修仙界有重要影响力。',
    leader: '太真老祖',
    foundingTime: '约4000年前',
    speciality: '正道功法、阵法'
  },
  {
    id: 'luoyunzong',
    name: '落云宗',
    region: '天南地区',
    strength: 6,
    description: '天南地区大宗门，韩立化神前加入的宗门。实力中等偏上，有天琴真人等元婴后期大修士坐镇。',
    leader: '天琴真人',
    foundingTime: '约3500年前',
    speciality: '音波功法、炼丹'
  },
  {
    id: 'qingyuangong',
    name: '青元宫',
    region: '灵界',
    strength: 9,
    description: '灵界大宗门，由青元子创立。实力强大，有大乘期修士坐镇，是灵界顶尖势力之一。',
    leader: '青元子',
    foundingTime: '约10万年前',
    speciality: '时间法则、空间法则'
  },
  {
    id: 'zhengyidao',
    name: '正道盟',
    region: '天南地区',
    strength: 8,
    description: '天南地区正道联盟，由多个正道宗门组成。实力强大，有龙晗等元婴后期大修士领导。',
    leader: '龙晗',
    speciality: '联盟组织、正道功法'
  },
  {
    id: 'modao',
    name: '魔道六宗',
    region: '天南地区',
    strength: 7,
    description: '天南地区魔道联盟，由六个魔道宗门组成。实力强大，与正道盟对立。',
    speciality: '魔道功法、血道功法'
  },
  {
    id: 'qixuanmen',
    name: '七玄门',
    region: '越国',
    strength: 1,
    description: '凡人武林门派，韩立修仙的起点。非修仙宗门，但在凡人界有一定影响力。',
    leader: '墨大夫（神医）',
    speciality: '医术、武功'
  },
  {
    id: 'yaozu',
    name: '妖族',
    region: '各地',
    strength: 8,
    description: '妖兽组成的势力，实力强大。有冰凤等十级妖兽领导，与人类修士既有争斗也有合作。',
    leader: '冰凤（代表）',
    speciality: '妖兽天赋、血脉传承'
  },
  {
    id: 'sanxiu',
    name: '散修',
    region: '各地',
    strength: 3,
    description: '无固定宗门的修仙者，数量众多但实力分散。部分散修实力强大，如向之礼等化神修士。',
    speciality: '自由修炼、多种功法'
  }
];

// 辅助函数
export function getCharacterById(id: string): Character | undefined {
  return characters.find(char => char.id === id);
}

export function getSectById(id: string): Sect | undefined {
  return sects.find(sect => sect.id === id);
}

export function getCharactersBySect(sectName: string): Character[] {
  return characters.filter(char => char.sect.includes(sectName));
}

export function getRelatedCharacters(characterId: string): Character[] {
  const character = getCharacterById(characterId);
  if (!character) return [];
  
  return character.relationships
    .map(rel => getCharacterById(rel.characterId))
    .filter((char): char is Character => char !== undefined);
}

export function getRelationshipStrength(char1Id: string, char2Id: string): number {
  const char1 = getCharacterById(char1Id);
  if (!char1) return 0;
  
  const relationship = char1.relationships.find(rel => rel.characterId === char2Id);
  return relationship ? relationship.strength : 0;
}

// 获取人物简要信息
export function getCharacterSummary(character: Character): string {
  return `${character.name}（${character.aliases[0] || '无别名'}），${character.cultivationLevel}，出身${character.sect.split('（')[0]}。${character.description.split('。')[0]}。`;
}

// 获取门派简要信息
export function getSectSummary(sect: Sect): string {
  const leaderText = sect.leader ? `，领袖：${sect.leader}` : '';
  const specialityText = sect.speciality ? `，擅长：${sect.speciality}` : '';
  return `${sect.name}（${sect.region}），实力评分：${sect.strength}/10${leaderText}${specialityText}。${sect.description.split('。')[0]}。`;
}

// 获取所有人物数量
export function getTotalCharacters(): number {
  return characters.length;
}

// 获取所有门派数量
export function getTotalSects(): number {
  return sects.length;
}

// 按境界筛选人物
export function getCharactersByLevel(level: string): Character[] {
  return characters.filter(char => char.cultivationLevel.includes(level));
}

// 按关系类型筛选
export function getCharactersByRelationshipType(characterId: string, type: string): Character[] {
  const character = getCharacterById(characterId);
  if (!character) return [];
  
  return character.relationships
    .filter(rel => rel.type === type)
    .map(rel => getCharacterById(rel.characterId))
    .filter((char): char is Character => char !== undefined);
}

// 获取实力最强的门派
export function getStrongestSects(limit: number = 5): Sect[] {
  return [...sects]
    .sort((a, b) => b.strength - a.strength)
    .slice(0, limit);
}

// 获取实力最强的人物
export function getStrongestCharacters(limit: number = 10): Character[] {
  // 简单按境界排序（实际应该更复杂）
  const levelOrder = {
    '道祖境': 10,
    '大乘期': 9,
    '合体期': 8,
    '炼虚期': 7,
    '化神期': 6,
    '元婴期': 5,
    '金丹期': 4,
    '筑基期': 3,
    '炼气期': 2,
    '凡人': 1
  };
  
  return [...characters]
    .sort((a, b) => {
      const aScore = levelOrder[a.cultivationLevel.split('（')[0].trim() as keyof typeof levelOrder] || 0;
      const bScore = levelOrder[b.cultivationLevel.split('（')[0].trim() as keyof typeof levelOrder] || 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}