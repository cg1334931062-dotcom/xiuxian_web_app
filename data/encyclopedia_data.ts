// 《凡人修仙传》百科全书 - 完整数据
// 涵盖小说中出现的所有人物、事件、功法、剧情、宗门等

import {
  Character, Sect, CultivationTechnique, Treasure, Event, Location,
  Material, CultivationLevel, Monster, Pill, Organization, Inheritance
} from './encyclopedia';

// ==================== 人物数据 ====================

export const characters: Character[] = [
  // ========== 主角 ==========
  {
    id: 'hanli',
    name: '韩立',
    aliases: ['韩跑跑', '韩老魔', '厉飞雨（化名）', '韩道友', '韩前辈', '韩天尊'],
    description: '《凡人修仙传》主角，资质平庸的山村少年，依靠自身努力、合理算计及神秘小瓶（掌天瓶）的辅助，从人界底层逐步修炼，最终飞升仙界并成为时间道祖。性格谨慎、果断、重情义。',
    era: '全篇',
    importance: 10,
    tags: ['主角', '时间道祖', '掌天瓶', '黄枫谷', '青元宫'],
    type: '主角',
    gender: '男',
    age: '约数万岁（最终）',
    appearance: '普通青年相貌，眼神锐利，气质沉稳',
    personality: '谨慎小心，杀伐果断，重情重义，善于算计，不轻易相信他人',
    cultivationLevel: '道祖境（最终）',
    cultivationPath: '五行功法 → 青元剑诀 → 梵圣真魔功 → 时间法则',
    sects: ['黄枫谷', '落云宗', '青元宫'],
    positions: ['黄枫谷弟子', '落云宗长老', '青元宫宫主', '时间道祖'],
    birthPlace: '越国七玄门附近山村',
    cultivationAchievements: [
      '九品金丹',
      '元婴后期大修士',
      '化神成功飞升灵界',
      '炼虚期修士',
      '合体期修士',
      '大乘期修士',
      '飞升仙界',
      '成就时间道祖'
    ],
    keyDecisions: [
      '选择修炼长春功',
      '与墨大夫摊牌',
      '离开黄枫谷',
      '加入落云宗',
      '飞升灵界',
      '建立青元宫',
      '争夺时间道祖之位'
    ],
    relationships: [
      { targetId: 'mofu', type: '师徒', description: '墨大夫是其启蒙老师，但关系复杂', strength: 7 },
      { targetId: 'nangongwan', type: '道侣', description: '南宫婉是其道侣，感情深厚', strength: 10 },
      { targetId: 'xiangzhili', type: '前辈', description: '向之礼是其前辈，多次帮助', strength: 8 },
      { targetId: 'weiwuyang', type: '敌人', description: '魏无涯是其重要敌人', strength: 9 },
      { targetId: 'yuanming', type: '师徒', description: '元瑶是其弟子', strength: 6 }
    ],
    techniques: ['长春功', '青元剑诀', '梵圣真魔功', '大衍决', '惊神刺', '时间法则'],
    treasures: ['掌天瓶', '青竹蜂云剑', '虚天鼎', '风雷翅', '玄天斩灵剑'],
    pets: ['噬金虫', '啼魂兽', '豹麟兽'],
    nicknames: ['韩老魔', '韩跑跑'],
    famousQuotes: [
      '修仙之路，不进则退',
      '人不犯我，我不犯人；人若犯我，我必犯人',
      '小心驶得万年船'
    ]
  },
  
  {
    id: 'nangongwan',
    name: '南宫婉',
    aliases: ['南宫仙子', '南宫师叔'],
    description: '掩月宗天才女修，韩立的道侣。容貌绝美，资质出众，性格外冷内热。',
    era: '全篇',
    importance: 9,
    tags: ['道侣', '掩月宗', '天才', '美女'],
    type: '重要配角',
    gender: '女',
    cultivationLevel: '大乘期（最终）',
    cultivationPath: '掩月宗功法 → 冰属性功法',
    sects: ['掩月宗'],
    positions: ['掩月宗长老', '韩立道侣'],
    personality: '外冷内热，重情重义，性格坚韧',
    relationships: [
      { targetId: 'hanli', type: '道侣', description: '韩立是其道侣', strength: 10 },
      { targetId: 'yanzhi', type: '同门', description: '燕如嫣是其同门', strength: 6 }
    ],
    techniques: ['掩月宗功法', '冰属性神通'],
    treasures: ['冰属性法宝']
  },
  
  // ========== 重要配角 ==========
  {
    id: 'mofu',
    name: '墨大夫',
    aliases: ['墨老', '墨师'],
    description: '七玄门医师，韩立的启蒙老师。实际是修仙者，因受伤修为跌落。性格阴险狡诈，企图夺舍韩立。',
    era: '人界篇',
    importance: 8,
    tags: ['启蒙老师', '反派', '夺舍', '七玄门'],
    type: '反派',
    gender: '男',
    cultivationLevel: '筑基期（受伤前）',
    sects: ['七玄门'],
    positions: ['七玄门医师'],
    deathTime: '人界篇早期',
    relationships: [
      { targetId: 'hanli', type: '师徒', description: '企图夺舍韩立', strength: 7 },
      { targetId: 'zhangtie', type: '师徒', description: '张铁是其弟子', strength: 5 }
    ],
    techniques: ['长春功', '夺舍秘术'],
    treasures: ['神秘小瓶（掌天瓶）']
  },
  
  {
    id: 'xiangzhili',
    name: '向之礼',
    aliases: ['向师兄', '向老'],
    description: '黄枫谷化神期修士，韩立的前辈。性格和善，多次帮助韩立。',
    era: '人界篇',
    importance: 7,
    tags: ['化神期', '前辈', '黄枫谷', '和善'],
    type: '重要配角',
    gender: '男',
    cultivationLevel: '化神期',
    sects: ['黄枫谷'],
    positions: ['黄枫谷太上长老'],
    personality: '和善可亲，乐于助人，深藏不露',
    relationships: [
      { targetId: 'hanli', type: '前辈', description: '多次帮助韩立', strength: 8 },
      { targetId: 'linghu', type: '同辈', description: '令狐老祖是其同辈', strength: 6 }
    ]
  },
  
  {
    id: 'weiwuyang',
    name: '魏无涯',
    aliases: ['魏老魔'],
    description: '魔道巨枭，韩立的重要敌人。实力强大，心狠手辣。',
    era: '人界篇',
    importance: 8,
    tags: ['魔道', '反派', '强大', '敌人'],
    type: '反派',
    gender: '男',
    cultivationLevel: '元婴后期',
    sects: ['魔道六宗'],
    positions: ['魔道领袖'],
    personality: '心狠手辣，野心勃勃，实力强大',
    relationships: [
      { targetId: 'hanli', type: '敌人', description: '韩立的重要敌人', strength: 9 }
    ]
  },
  
  // ========== 其他重要人物 ==========
  {
    id: 'linghu',
    name: '令狐老祖',
    aliases: ['令狐师兄'],
    description: '黄枫谷元婴期修士，宗门领袖。',
    era: '人界篇',
    importance: 6,
    tags: ['元婴期', '黄枫谷', '宗门领袖'],
    type: '配角',
    gender: '男',
    cultivationLevel: '元婴期',
    sects: ['黄枫谷'],
    positions: ['黄枫谷掌门']
  },
  
  {
    id: 'yanzhi',
    name: '燕如嫣',
    aliases: ['燕师姐'],
    description: '掩月宗女修，南宫婉的师姐。',
    era: '人界篇',
    importance: 5,
    tags: ['掩月宗', '女修', '师姐'],
    type: '配角',
    gender: '女',
    cultivationLevel: '金丹期',
    sects: ['掩月宗']
  },
  
  {
    id: 'yuanming',
    name: '元瑶',
    aliases: [],
    description: '韩立的弟子，资质出众。',
    era: '人界篇',
    importance: 5,
    tags: ['弟子', '资质出众'],
    type: '配角',
    gender: '女',
    cultivationLevel: '金丹期',
    sects: ['黄枫谷'],
    positions: ['韩立弟子']
  },
  
  {
    id: 'zhangtie',
    name: '张铁',
    aliases: [],
    description: '韩立的同门，墨大夫的另一弟子。',
    era: '人界篇',
    importance: 4,
    tags: ['同门', '墨大夫弟子'],
    type: '龙套',
    gender: '男',
    cultivationLevel: '炼气期',
    sects: ['七玄门']
  },
  
  // ========== 灵界篇人物 ==========
  {
    id: 'jinyuanzi',
    name: '金元子',
    aliases: [],
    description: '灵界大乘期修士，韩立的盟友。',
    era: '灵界篇',
    importance: 7,
    tags: ['大乘期', '灵界', '盟友'],
    type: '重要配角',
    gender: '男',
    cultivationLevel: '大乘期',
    sects: ['灵界某宗门']
  },
  
  {
    id: 'modaozu',
    name: '魔道祖',
    aliases: [],
    description: '魔界道祖，韩立的敌人。',
    era: '灵界篇',
    importance: 9,
    tags: ['道祖', '魔界', '敌人'],
    type: '反派',
    gender: '男',
    cultivationLevel: '道祖境'
  },
  
  // ========== 仙界篇人物 ==========
  {
    id: 'shijiandaozu',
    name: '时间道祖',
    aliases: ['前任时间道祖'],
    description: '前任时间道祖，韩立的前任。',
    era: '仙界篇',
    importance: 9,
    tags: ['道祖', '时间法则', '前任'],
    type: '重要配角',
    gender: '男',
    cultivationLevel: '道祖境'
  },
  
  {
    id: 'kongjiandaozu',
    name: '空间道祖',
    aliases: [],
    description: '空间道祖，掌握空间法则。',
    era: '仙界篇',
    importance: 8,
    tags: ['道祖', '空间法则'],
    type: '重要配角',
    gender: '男',
    cultivationLevel: '道祖境'
  }
];

// ==================== 宗门数据 ====================

export const sects: Sect[] = [
  {
    id: 'huangfenggu',
    name: '黄枫谷',
    aliases: ['黄枫谷派'],
    description: '越国七派之一，韩立加入的第一个修仙宗门。以炼丹和阵法闻名。',
    era: '人界篇',
    importance: 8,
    tags: ['越国七派', '炼丹', '阵法', '韩立第一宗门'],
    type: '正道',
    region: '越国',
    headquarters: '黄枫谷',
    strength: 7,
    influence: 7,
    foundingTime: '数千年前',
    founder: '黄枫真人',
    currentLeader: '令狐老祖',
    notableMembers: ['韩立', '向之礼', '令狐老祖', '元瑶'],
    speciality: '炼丹术、阵法',
    cultivationTechniques: ['黄枫谷基础功法', '炼丹术', '阵法'],
    treasures: ['黄枫谷镇派之宝'],
    keyEvents: ['韩立加入', '魔道入侵', '宗门迁移'],
    relationships: [
      { targetId: 'yanyuezong', type: '盟友', description: '越国七派盟友', strength: 6 },
      { targetId: 'modaoliuzong', type: '敌对', description: '与魔道六宗敌对', strength: 9 }
    ],
    hierarchy: '掌门 → 长老 → 核心弟子 → 内门弟子 → 外门弟子',
    territory: ['越国黄枫谷及周边区域'],
    economicActivities: ['炼丹交易', '阵法布置', '灵草种植']
  },
  
  {
    id: 'yanyuezong',
    name: '掩月宗',
    aliases: [],
    description: '越国七派之一，以女修为主，功法以阴柔为主。南宫婉所在宗门。',
    era: '人界篇',
    importance: 7,
    tags: ['越国七派', '女修为主', '阴柔功法'],
    type: '正道',
    region: '越国',
    strength: 7,
    influence: 6,
    notableMembers: ['南宫婉', '燕如嫣'],
    speciality: '阴柔功法、幻术',
    cultivationTechniques: ['掩月宗功法', '幻术'],
    keyEvents: ['南宫婉加入', '越国七派联盟']
  },
  
  {
    id: 'modaoliuzong',
    name: '魔道六宗',
    aliases: ['魔道联盟'],
    description: '人界魔道六大宗门联盟，与正道七派敌对。',
    era: '人界篇',
    importance: 8,
    tags: ['魔道', '联盟', '反派'],
    type: '魔道',
    region: '人界各地',
    strength: 8,
    influence: 8,
    currentLeader: '魏无涯',
    speciality: '魔道功法、杀戮之术',
    cultivationTechniques: ['各种魔道功法'],
    keyEvents: ['入侵越国', '与正道大战'],
    relationships: [
      { targetId: 'huangfenggu', type: '敌对', description: '与正道七派敌对', strength: 9 }
    ]
  },
  
  {
    id: 'luoyunzong',
    name: '落云宗',
    aliases: [],
    description: '韩立在人界后期加入的宗门，提供庇护和资源。',
    era: '人界篇',
    importance: 6,
    tags: ['韩立后期宗门', '庇护'],
    type: '正道',
    region: '人界',
    strength: 6,
    influence: 5,
    notableMembers: ['韩立'],
    speciality: '综合型宗门'
  },
  
  {
    id: 'qingyuangong',
    name: '青元宫',
    aliases: [],
    description: '韩立在灵界建立的宗门，成为一方霸主。',
    era: '灵界篇',
    importance: 8,
    tags: ['韩立建立', '灵界', '霸主'],
    type: '正道',
    region: '灵界',
    strength: 9,
    influence: 9,
    founder: '韩立',
    currentLeader: '韩立',
    notableMembers: ['韩立', '南宫婉'],
    speciality: '剑修、时间法则',
    cultivationTechniques: ['青元剑诀', '时间法则相关功法'],
    treasures: ['青竹蜂云剑', '虚天鼎'],
    keyEvents: ['建立青元宫', '成为灵界霸主']
  }
];

// ==================== 功法数据 ====================

export const techniques: CultivationTechnique[] = [
  {
    id: 'changchungong',
    name: '长春功',
    aliases: ['基础功法'],
    description: '基础的木属性功法，韩立最初修炼的功法。',
    era: '人界篇',
    importance: 7,
    tags: ['基础功法', '木属性', '韩立最初功法'],
    type: '功法',
    level: '炼气期-筑基期',
    attribute: '木',
    difficulty: 3,
    power: 2,
    creator: '未知',
    origin: '常见基础功法',
    requirements: '木属性灵根',
    effects: ['提升修为', '延年益寿', '基础木属性法术'],
    knownPractitioners: ['韩立', '墨大夫', '张铁'],
    cultivationStages: ['炼气期九层', '筑基期']
  },
  
  {
    id: 'qingyuanjianjue',
    name: '青元剑诀',
    aliases: ['青元功法'],
    description: '强大的剑修功法，韩立主要修炼的功法之一。',
    era: '全篇',
    importance: 9,
    tags: ['剑修', '主要功法', '韩立'],
    type: '功法',
    level: '筑基期-大乘期',
    attribute: '金',
    difficulty: 8,
    power: 9,
    creator: '青元子',
    origin: '青元宫传承',
    requirements: '金属性灵根或剑修资质',
    effects: ['强大攻击力', '剑意修炼', '剑阵布置'],
    knownPractitioners: ['韩立', '青元子'],
    cultivationStages: ['筑基期', '金丹期', '元婴期', '化神期', '炼虚期', '合体期', '大乘期'],
    famousBattles: ['韩立使用青元剑诀的多次战斗']
  },
  
  {
    id: 'fanshengzhenmogong',
    name: '梵圣真魔功',
    aliases: ['真魔功'],
    description: '强大的魔道炼体功法，韩立兼修的功法。',
    era: '全篇',
    importance: 8,
    tags: ['炼体', '魔道', '兼修功法'],
    type: '功法',
    level: '元婴期-大乘期',
    attribute: '体修',
    difficulty: 9,
    power: 9,
    creator: '魔道大能',
    origin: '魔道传承',
    requirements: '强大肉身基础',
    effects: ['强化肉身', '提升力量', '魔道神通'],
    weaknesses: ['容易走火入魔', '需要魔气辅助'],
    knownPractitioners: ['韩立', '魔道修士'],
    famousBattles: ['韩立使用梵圣真魔功的战斗']
  },
  
  {
    id: 'dayanjue',
    name: '大衍决',
    aliases: ['神识功法'],
    description: '修炼神识的功法，能大幅提升神识强度和范围。',
    era: '人界篇',
    importance: 7,
    tags: ['神识', '辅助功法'],
    type: '功法',
    level: '筑基期-元婴期',
    attribute: '灵魂',
    difficulty: 7,
    power: 6,
    effects: ['提升神识强度', '扩大神识范围', '神识攻击'],
    knownPractitioners: ['韩立']
  },
  
  {
    id: 'jingshenci',
    name: '惊神刺',
    aliases: ['神识攻击'],
    description: '神识攻击秘术，能直接攻击敌人神魂。',
    era: '全篇',
    importance: 7,
    tags: ['神识攻击', '秘术'],
    type: '秘术',
    level: '金丹期以上',
    attribute: '灵魂',
    difficulty: 8,
    power: 8,
    effects: ['直接攻击神魂', '造成神魂伤害', '打断施法'],
    knownPractitioners: ['韩立']
  },
  
  {
    id: 'shijianfaze',
    name: '时间法则',
    aliases: ['时间之道'],
    description: '至高法则之一，掌握时间流动。韩立最终成就时间道祖。',
    era: '仙界篇',
    importance: 10,
    tags: ['至高法则', '时间', '道祖'],
    type: '神通',
    level: '道祖境',
    attribute: '时间',
    difficulty: 10,
    power: 10,
    creator: '天地法则',
    effects: ['操控时间', '加速/减速时间', '时间回溯', '时间停止'],
    knownPractitioners: ['韩立', '时间道祖']
  }
];

// ==================== 法宝数据 ====================

export const treasures: Treasure[] = [
  {
    id: 'zhangtianping',
    name: '掌天瓶',
    aliases: ['神秘小瓶', '绿液瓶'],
    description: '韩立最重要的法宝，能产生绿液催熟灵草。来历神秘，与时间法则有关。',
    era: '全篇',
    importance: 10,
    tags: ['最重要法宝', '催熟灵草', '时间相关', '神秘'],
    type: '特殊型',
    grade: '道器',
    materials: ['未知神秘材料'],
    creator: '未知',
    creationTime: '天地初开',
    owners: ['韩立'],
    abilities: ['产生绿液催熟灵草', '与时间法则共鸣', '神秘空间'],
    restrictions: ['需要灵力激活', '绿液产生有限'],
    appearance: '绿色小瓶，古朴神秘',
    size: '手掌大小',
    specialFeatures: ['能进入瓶内空间', '与韩立神魂绑定'],
    famousBattles: ['韩立所有重要战斗'],
    currentLocation: '韩立身上'
  },
  
  {
    id: 'qingzhufengyunjian',
    name: '青竹蜂云剑',
    aliases: ['蜂云剑'],
    description: '韩立的本命法宝，七十二口飞剑组成的剑阵。',
    era: '全篇',
    importance: 9,
    tags: ['本命法宝', '剑阵', '七十二口'],
    type: '攻击型',
    grade: '通天灵宝',
    materials: ['青竹', '金精', '其他珍稀材料'],
    creator: '韩立',
    creationTime: '韩立结丹后',
    owners: ['韩立'],
    abilities: ['剑阵攻击', '分化剑光', '组合变化'],
    appearance: '青色飞剑，剑身有蜂纹',
    size: '正常飞剑大小',
    specialFeatures: ['七十二口成套', '可组成各种剑阵'],
    famousBattles: ['韩立所有重要战斗']
  },
  
  {
    id: 'xutianding',
    name: '虚天鼎',
    aliases: ['虚天殿之宝'],
    description: '虚天殿中的古宝，能收取敌人法宝和神魂。',
    era: '人界篇',
    importance: 8,
    tags: ['古宝', '虚天殿', '收取法宝'],
    type: '特殊型',
    grade: '古宝',
    materials: ['未知古材料'],
    creator: '上古修士',
    owners: ['韩立'],
    abilities: ['收取敌人法宝', '困住敌人神魂', '防御'],
    famousBattles: ['虚天殿争夺战', '韩立多次使用']
  },
  
  {
    id: 'fengleichi',
    name: '风雷翅',
    aliases: ['飞行法宝'],
    description: '飞行法宝，速度极快，能施展风雷遁术。',
    era: '全篇',
    importance: 7,
    tags: ['飞行法宝', '风雷遁术', '速度快'],
    type: '飞行型',
    grade: '法宝',
    abilities: ['极速飞行', '风雷遁术', '短距离瞬移'],
    owners: ['韩立']
  },
  
  {
    id: 'xuantianzhanlingjian',
    name: '玄天斩灵剑',
    aliases: ['玄天之宝'],
    description: '玄天之宝，威力巨大，能斩断法则。',
    era: '灵界篇-仙界篇',
    importance: 9,
    tags: ['玄天之宝', '斩断法则', '威力巨大'],
    type: '攻击型',
    grade: '玄天之宝',
    abilities: ['斩断法则', '无视防御', '空间切割'],
    owners: ['韩立']
  }
];

// ==================== 事件数据 ====================

export const events: Event[] = [
  {
    id: 'hanli_ruxiumen',
    name: '韩立入七玄门',
    aliases: ['拜师墨大夫'],
    description: '韩立10岁时离开山村，拜入七玄门，成为墨大夫弟子。',
    era: '人界篇',
    importance: 8,
    tags: ['起点', '拜师', '七玄门'],
    type: '个人突破',
    time: '韩立10岁',
    location: '七玄门',
    participants: ['韩立', '墨大夫', '张铁'],
    causes: ['韩立想修仙', '墨大夫需要弟子'],
    process: [
      '韩立离开山村',
      '拜入七玄门',
      '成为墨大夫弟子',
      '开始修炼长春功'
    ],
    results: [
      '韩立开始修仙之路',
      '获得掌天瓶',
      '奠定修仙基础'
    ],
    impact: 9,
    aftermath: ['韩立正式踏上修仙之路']
  },
  
  {
    id: 'duoshe_zhi_zhan',
    name: '夺舍之战',
    aliases: ['与墨大夫摊牌'],
    description: '墨大夫企图夺舍韩立，被韩立反杀。',
    era: '人界篇',
    importance: 9,
    tags: ['夺舍', '反杀', '转折点'],
    type: '战斗',
    time: '韩立16岁',
    location: '七玄门密室',
    participants: ['韩立', '墨大夫'],
    causes: ['墨大夫寿元将尽', '企图夺舍韩立身体'],
    process: [
      '墨大夫布置夺舍阵法',
      '韩立早有准备',
      '两人神魂交战',
      '韩立凭借强大意志反杀'
    ],
    results: [
      '墨大夫死亡',
      '韩立获得墨大夫遗产',
      '正式掌握掌天瓶'
    ],
    impact: 10,
    casualties: ['墨大夫'],
    treasuresInvolved: ['掌天瓶'],
    aftermath: ['韩立独自踏上修仙之路']
  },
  
  {
    id: 'jiaru_huangfenggu',
    name: '加入黄枫谷',
    aliases: ['进入修仙宗门'],
    description: '韩立筑基成功后，加入越国七派之一的黄枫谷。',
    era: '人界篇',
    importance: 7,
    tags: ['加入宗门', '黄枫谷', '新起点'],
    type: '个人突破',
    time: '韩立筑基后',
    location: '黄枫谷',
    participants: ['韩立', '令狐老祖', '向之礼'],
    process: [
      '韩立展示筑基期修为',
      '通过黄枫谷考核',
      '成为黄枫谷弟子',
      '获得宗门资源'
    ],
    results: [
      '韩立正式加入修仙宗门',
      '获得系统修炼指导',
      '接触更高层次修仙界'
    ],
    impact: 8
  },
  
  {
    id: 'xutiandian_zhengduo',
    name: '虚天殿争夺战',
    aliases: ['虚天殿探险'],
    description: '众多修士进入虚天殿争夺宝物，韩立获得虚天鼎。',
    era: '人界篇',
    importance: 8,
    tags: ['秘境探险', '虚天殿', '虚天鼎'],
    type: '秘境探险',
    time: '韩立结丹期',
    location: '虚天殿',
    participants: ['韩立', '众多元婴期修士'],
    process: [
      '虚天殿开启',
      '众多修士进入',
      '经历重重考验',
      '争夺虚天鼎',
      '韩立最终得手'
    ],
    results: [
      '韩立获得虚天鼎',
      '结识重要人物',
      '修为有所提升'
    ],
    impact: 7,
    treasuresInvolved: ['虚天鼎']
  },
  
  {
    id: 'feisheng_lingjie',
    name: '飞升灵界',
    aliases: ['化神飞升'],
    description: '韩立化神成功后，通过空间节点飞升灵界。',
    era: '人界篇-灵界篇',
    importance: 9,
    tags: ['飞升', '灵界', '新篇章'],
    type: '飞升',
    time: '韩立化神后',
    location: '人界空间节点',
    participants: ['韩立'],
    process: [
      '韩立化神成功',
      '寻找空间节点',
      '准备飞升',
      '通过空间节点',
      '到达灵界'
    ],
    results: [
      '韩立进入更广阔世界',
      '开始灵界篇故事',
      '修为重新开始'
    ],
    impact: 9
  },
  
  {
    id: 'jianli_qingyuangong',
    name: '建立青元宫',
    aliases: ['开宗立派'],
    description: '韩立在灵界建立自己的宗门青元宫，成为一方霸主。',
    era: '灵界篇',
    importance: 8,
    tags: ['建立宗门', '青元宫', '霸主'],
    type: '重要会议',
    time: '韩立大乘期',
    location: '灵界',
    participants: ['韩立', '南宫婉', '追随者'],
    process: [
      '韩立修为达到大乘期',
      '选择合适地点',
      '建立青元宫',
      '招收弟子',
      '确立宗门规则'
    ],
    results: [
      '青元宫建立',
      '韩立成为宫主',
      '势力范围确立',
      '获得稳定资源'
    ],
    impact: 8
  },
  
  {
    id: 'chengjiu_shijiandaozu',
    name: '成就时间道祖',
    aliases: ['成为道祖'],
    description: '韩立最终成就时间道祖，掌握时间法则。',
    era: '仙界篇',
    importance: 10,
    tags: ['道祖', '时间法则', '最终成就'],
    type: '个人突破',
    time: '仙界篇后期',
    location: '仙界',
    participants: ['韩立', '其他道祖'],
    process: [
      '韩立参悟时间法则',
      '与前任时间道祖争夺',
      '最终掌握时间法则',
      '成就时间道祖'
    ],
    results: [
      '韩立成为时间道祖',
      '掌握时间法则',
      '站在修仙界巅峰'
    ],
    impact: 10,
    techniquesInvolved: ['时间法则']
  }
];

// ==================== 地点数据 ====================

export const locations: Location[] = [
  {
    id: 'qixuanmen',
    name: '七玄门',
    aliases: ['韩立起点'],
    description: '韩立最初拜入的武林门派，在这里开始修仙之路。',
    era: '人界篇',
    importance: 7,
    tags: ['起点', '武林门派', '墨大夫'],
    type: '宗门',
    region: '越国',
    size: '中等武林门派',
    inhabitants: ['墨大夫', '张铁', '其他武林人士'],
    history: ['建立数百年', '韩立在此开始修仙'],
    famousEvents: ['韩立入七玄门', '夺舍之战'],
    accessConditions: '通过考核或推荐'
  },
  
  {
    id: 'huangfenggu_location',
    name: '黄枫谷',
    aliases: [],
    description: '越国七派之一的黄枫谷所在地，灵气充沛。',
    era: '人界篇',
    importance: 7,
    tags: ['修仙宗门', '灵气充沛', '越国'],
    type: '宗门',
    region: '越国',
    climate: '四季如春',
    resources: ['灵草', '灵矿', '灵脉'],
    inhabitants: ['黄枫谷修士'],
    famousEvents: ['韩立加入', '魔道入侵']
  },
  
  {
    id: 'xutiandian',
    name: '虚天殿',
    aliases: ['上古遗迹'],
    description: '上古修士留下的遗迹，内有众多宝物和考验。',
    era: '人界篇',
    importance: 8,
    tags: ['上古遗迹', '秘境', '虚天鼎'],
    type: '秘境',
    region: '人界某处',
    size: '巨大宫殿',
    dangers: ['阵法陷阱', '守护妖兽', '其他修士'],
    resources: ['古宝', '功法', '灵草'],
    accessConditions: '特定时间开启，需要信物',
    specialFeatures: ['空间折叠', '时间流速不同']
  },
  
  {
    id: 'lingjie',
    name: '灵界',
    aliases: ['上界'],
    description: '比人界更高级的世界，灵气更浓郁，修士更强大。',
    era: '灵界篇',
    importance: 9,
    tags: ['上界', '更高级世界', '灵气浓郁'],
    type: '区域',
    region: '灵界',
    size: '广阔无边',
    climate: '多样',
    resources: ['高级灵草', '珍稀材料', '浓郁灵气'],
    inhabitants: ['灵界各族修士'],
    famousEvents: ['韩立飞升', '建立青元宫']
  },
  
  {
    id: 'xianjie',
    name: '仙界',
    aliases: ['最高界'],
    description: '最高级的世界，道祖所在，法则完善。',
    era: '仙界篇',
    importance: 10,
    tags: ['最高界', '道祖', '法则完善'],
    type: '区域',
    region: '仙界',
    size: '无限广阔',
    cultivationResources: ['仙气', '法则碎片', '先天宝物'],
    specialFeatures: ['法则完善', '时间空间稳定', '道祖存在']
  }
];

// ==================== 材料数据 ====================

export const materials: Material[] = [
  {
    id: 'lingcao',
    name: '灵草',
    aliases: ['草药'],
    description: '蕴含灵气的植物，用于炼丹和修炼。',
    era: '全篇',
    importance: 6,
    tags: ['植物', '炼丹材料', '修炼资源'],
    type: '灵草',
    grade: '低阶-仙级',
    rarity: 1,
    uses: ['炼丹', '直接服用', '布置阵法'],
    growthLocation: ['灵气充沛之地', '秘境', '药园']
  },
  
  {
    id: 'lingkuang',
    name: '灵矿',
    aliases: ['矿石'],
    description: '蕴含灵气的矿石，用于炼器和布阵。',
    era: '全篇',
    importance: 6,
    tags: ['矿石', '炼器材料', '布阵材料'],
    type: '矿石',
    grade: '低阶-顶级