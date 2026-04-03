// 《凡人修仙传》百科全书 - 完整数据体系
// 涵盖小说中出现的所有人物、事件、功法、剧情、宗门等

// ==================== 基础接口定义 ====================

export interface BaseEntity {
  id: string;
  name: string;
  aliases?: string[];
  description: string;
  era: '人界篇' | '灵界篇' | '仙界篇' | '全篇';
  importance: number; // 1-10，重要性评分
  tags: string[];
  relatedCharacters?: string[]; // 相关人物ID
  relatedEvents?: string[]; // 相关事件ID
  relatedSects?: string[]; // 相关宗门ID
  relatedTechniques?: string[]; // 相关功法ID
  relatedTreasures?: string[]; // 相关法宝ID
}

// ==================== 人物体系 ====================

export interface Character extends BaseEntity {
  type: '主角' | '重要配角' | '配角' | '龙套' | '反派' | '中立';
  gender: '男' | '女' | '未知';
  age?: string;
  appearance?: string;
  personality?: string;
  cultivationLevel: string;
  cultivationPath?: string;
  sects: string[]; // 所属宗门
  positions?: string[]; // 职位/身份
  birthPlace?: string;
  deathTime?: string;
  cultivationAchievements?: string[];
  keyDecisions?: string[];
  relationships: CharacterRelationship[];
  techniques: string[]; // 掌握的功法
  treasures: string[]; // 拥有的法宝
  pets?: string[]; // 灵宠
  nicknames?: string[];
  famousQuotes?: string[];
}

export interface CharacterRelationship {
  targetId: string;
  type: '道侣' | '师徒' | '好友' | '敌人' | '同门' | '前辈' | '后辈' | '盟友' | '主仆' | '同辈' | '复杂关系' | '血亲' | '恩人' | '仇人' | '竞争对手';
  description: string;
  strength: number; // 1-10，关系强度
  timeline?: string; // 关系发展时间
  keyEvents?: string[]; // 关系关键事件
}

// ==================== 宗门体系 ====================

export interface Sect extends BaseEntity {
  type: '正道' | '魔道' | '妖族' | '中立' | '散修联盟' | '商会' | '家族';
  region: string;
  headquarters?: string;
  strength: number; // 1-10
  influence: number; // 1-10
  foundingTime?: string;
  founder?: string;
  currentLeader?: string;
  notableMembers: string[];
  speciality: string;
  cultivationTechniques: string[];
  treasures: string[];
  keyEvents: string[];
  relationships: SectRelationship[];
  hierarchy?: string; // 宗门等级结构
  territory?: string[]; // 势力范围
  economicActivities?: string[]; // 经济活动
}

export interface SectRelationship {
  targetId: string;
  type: '盟友' | '敌对' | '附属' | '竞争' | '合作' | '中立' | '复杂';
  description: string;
  strength: number; // 1-10
  timeline?: string;
}

// ==================== 功法体系 ====================

export interface CultivationTechnique extends BaseEntity {
  type: '功法' | '秘术' | '神通' | '阵法' | '丹方' | '符箓' | '禁制' | '炼器术';
  level: string; // 适用境界
  attribute: '金' | '木' | '水' | '火' | '土' | '雷' | '风' | '冰' | '阴阳' | '五行' | '时间' | '空间' | '灵魂' | '体修' | '综合';
  difficulty: number; // 1-10，修炼难度
  power: number; // 1-10，威力
  creator?: string;
  origin?: string;
  requirements?: string; // 修炼要求
  effects: string[]; // 功法效果
  weaknesses?: string[]; // 弱点/限制
  knownPractitioners: string[]; // 已知修炼者
  relatedTechniques?: string[]; // 相关功法
  cultivationStages?: string[]; // 修炼阶段
  famousBattles?: string[]; // 著名战斗
}

// ==================== 法宝体系 ====================

export interface Treasure extends BaseEntity {
  type: '攻击型' | '防御型' | '辅助型' | '飞行型' | '空间型' | '特殊型' | '套装';
  grade: '法器' | '灵器' | '法宝' | '古宝' | '通天灵宝' | '玄天之宝' | '仙器' | '道器';
  materials?: string[]; // 炼制材料
  creator?: string;
  creationTime?: string;
  owners: string[]; // 历任拥有者
  abilities: string[]; // 能力/神通
  restrictions?: string[]; // 使用限制
  appearance?: string; // 外观描述
  size?: string; // 大小
  weight?: string; // 重量
  specialFeatures?: string[]; // 特殊特性
  famousBattles?: string[]; // 著名战斗
  currentLocation?: string; // 当前所在
}

// ==================== 事件体系 ====================

export interface Event extends BaseEntity {
  type: '战斗' | '秘境探险' | '宗门大战' | '个人突破' | '重要会议' | '交易' | '阴谋' | '奇遇' | '死亡' | '诞生' | '结盟' | '背叛' | '飞升' | '传承';
  time: string;
  location?: string;
  participants: string[]; // 参与者
  causes?: string[]; // 起因
  process: string[]; // 过程
  results: string[]; // 结果
  impact: number; // 1-10，影响力
  casualties?: string[]; // 伤亡
  treasuresInvolved?: string[]; // 涉及法宝
  techniquesInvolved?: string[]; // 涉及功法
  aftermath?: string[]; // 后续影响
  witnesses?: string[]; // 目击者
}

// ==================== 地点体系 ====================

export interface Location extends BaseEntity {
  type: '宗门' | '城市' | '秘境' | '山脉' | '森林' | '海洋' | '岛屿' | '洞府' | '遗迹' | '禁地' | '战场' | '交易市场';
  region: string;
  coordinates?: string;
  size?: string;
  climate?: string;
  resources?: string[]; // 资源
  dangers?: string[]; // 危险
  inhabitants?: string[]; // 居民/守护者
  history?: string[]; // 历史
  famousEvents?: string[]; // 著名事件
  accessConditions?: string; // 进入条件
  specialFeatures?: string[]; // 特殊特性
  cultivationResources?: string[]; // 修炼资源
}

// ==================== 材料体系 ====================

export interface Material extends BaseEntity {
  type: '灵草' | '灵药' | '矿石' | '妖兽材料' | '特殊材料' | '丹药' | '符箓材料';
  grade: '低阶' | '中阶' | '高阶' | '顶级' | '仙级';
  rarity: number; // 1-10，稀有度
  uses: string[]; // 用途
  growthLocation?: string[]; // 生长/产地
  harvestTime?: string; // 采集时间
  processingMethod?: string; // 处理方法
  substitutes?: string[]; // 替代品
  relatedRecipes?: string[]; // 相关配方
  marketValue?: string; // 市场价值
  specialProperties?: string[]; // 特殊属性
}

// ==================== 境界体系 ====================

export interface CultivationLevel extends BaseEntity {
  realm: '凡人' | '炼气' | '筑基' | '金丹' | '元婴' | '化神' | '炼虚' | '合体' | '大乘' | '渡劫' | '真仙' | '金仙' | '太乙' | '大罗' | '道祖';
  subLevel?: string; // 小境界
  lifespan: string;
  powerDescription: string;
  keyAbilities: string[];
  breakthroughRequirements?: string[];
  commonTechniques?: string[];
  famousPractitioners?: string[];
  nextLevel?: string;
  previousLevel?: string;
  cultivationTime?: string; // 通常修炼时间
  difficulty: number; // 1-10，突破难度
  specialFeatures?: string[]; // 特殊特征
}

// ==================== 妖兽体系 ====================

export interface Monster extends BaseEntity {
  type: '妖兽' | '灵兽' | '凶兽' | '神兽' | '魔兽' | '变异兽';
  grade: string; // 等级
  appearance: string;
  abilities: string[];
  weaknesses?: string[];
  habitat: string[]; // 栖息地
  behavior?: string;
  materials: string[]; // 可获取材料
  dangerLevel: number; // 1-10，危险等级
  knownIndividuals?: string[]; // 已知个体
  relatedCharacters?: string[]; // 相关人物
  famousBattles?: string[]; // 著名战斗
  specialFeatures?: string[]; // 特殊特性
}

// ==================== 丹药体系 ====================

export interface Pill extends BaseEntity {
  type: '修炼丹药' | '疗伤丹药' | '突破丹药' | '毒药' | '特殊丹药';
  grade: string;
  effects: string[];
  sideEffects?: string[];
  ingredients: string[];
  alchemist?: string; // 炼丹师
  difficulty: number; // 1-10，炼制难度
  successRate?: string; // 成功率
  storageConditions?: string; // 存储条件
  shelfLife?: string; // 保质期
  famousUsers?: string[]; // 著名使用者
  relatedRecipes?: string[]; // 相关丹方
  marketValue?: string; // 市场价值
}

// ==================== 组织体系 ====================

export interface Organization extends BaseEntity {
  type: '商会' | '情报组织' | '杀手组织' | '散修联盟' | '家族' | '研究机构' | '交易市场';
  structure?: string; // 组织结构
  leader?: string;
  members?: string[];
  activities: string[]; // 活动内容
  influence: number; // 1-10，影响力
  territory?: string[]; // 势力范围
  relationships?: OrganizationRelationship[];
  famousTransactions?: string[]; // 著名交易
  specialResources?: string[]; // 特殊资源
}

export interface OrganizationRelationship {
  targetId: string;
  type: '合作' | '竞争' | '敌对' | '附属' | '客户' | '供应商';
  description: string;
}

// ==================== 传承体系 ====================

export interface Inheritance extends BaseEntity {
  type: '功法传承' | '法宝传承' | '知识传承' | '血脉传承' | '宗门传承';
  source?: string; // 来源
  inheritors: string[]; // 继承者
  inheritanceTime?: string;
  inheritanceConditions?: string; // 继承条件
  content: string[]; // 传承内容
  significance: number; // 1-10，重要性
  relatedEvents?: string[]; // 相关事件
  currentStatus?: string; // 当前状态
}

// ==================== 数据统计接口 ====================

export interface EncyclopediaStats {
  totalCharacters: number;
  totalSects: number;
  totalTechniques: number;
  totalTreasures: number;
  totalEvents: number;
  totalLocations: number;
  totalMaterials: number;
  totalMonsters: number;
  totalPills: number;
  totalOrganizations: number;
  totalInheritances: number;
  byEra: {
    humanRealm: number;
    spiritRealm: number;
    immortalRealm: number;
  };
  byImportance: {
    critical: number; // 重要性9-10
    important: number; // 重要性7-8
    normal: number; // 重要性4-6
    minor: number; // 重要性1-3
  };
}

// ==================== 搜索接口 ====================

export interface SearchOptions {
  query: string;
  types?: ('character' | 'sect' | 'technique' | 'treasure' | 'event' | 'location' | 'material' | 'monster' | 'pill' | 'organization' | 'inheritance')[];
  era?: ('人界篇' | '灵界篇' | '仙界篇' | '全篇')[];
  minImportance?: number;
  maxImportance?: number;
  tags?: string[];
  limit?: number;
  offset?: number;
}

export interface SearchResult {
  id: string;
  type: string;
  name: string;
  description: string;
  relevance: number; // 0-100
  importance: number; // 1-10
  era: string;
  tags: string[];
}

// ==================== 数据导出 ====================

// 注意：以下数据仅为示例结构，实际需要填充完整数据
// 这里先导出接口定义，实际数据将在单独的文件中实现

export type {
  Character,
  Sect,
  CultivationTechnique,
  Treasure,
  Event,
  Location,
  Material,
  CultivationLevel,
  Monster,
  Pill,
  Organization,
  Inheritance,
  EncyclopediaStats,
  SearchOptions,
  SearchResult
};