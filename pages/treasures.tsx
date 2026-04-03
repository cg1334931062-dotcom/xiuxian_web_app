import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  treasures, 
  treasureCategories,
  getTreasureById,
  getTreasuresByOwner,
  getTreasureStats,
  compareTreasures,
  getRecommendedTreasures,
  getCounterTreasures,
  Treasure 
} from '../data/treasures';

const TreasuresPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('全部');
  const [selectedGrade, setSelectedGrade] = useState<string>('全部');
  const [selectedAttribute, setSelectedAttribute] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTreasure, setSelectedTreasure] = useState<Treasure | null>(null);
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [compareTreasure1, setCompareTreasure1] = useState<string>('');
  const [compareTreasure2, setCompareTreasure2] = useState<string>('');
  const [comparisonResult, setComparisonResult] = useState<any>(null);
  const [counterTreasures, setCounterTreasures] = useState<Treasure[]>([]);

  // 获取统计数据
  const stats = getTreasureStats();

  // 筛选法宝
  const filteredTreasures = treasures.filter(treasure => {
    // 类型筛选
    if (selectedType !== '全部' && treasure.type !== selectedType) {
      return false;
    }
    
    // 品质筛选
    if (selectedGrade !== '全部' && treasure.grade !== selectedGrade) {
      return false;
    }
    
    // 属性筛选
    if (selectedAttribute !== '全部' && treasure.attribute !== selectedAttribute) {
      return false;
    }
    
    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        treasure.name.toLowerCase().includes(query) ||
        treasure.aliases.some(alias => alias.toLowerCase().includes(query)) ||
        treasure.description.toLowerCase().includes(query) ||
        treasure.abilities.some(ability => ability.toLowerCase().includes(query)) ||
        treasure.owner.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

  // 处理法宝选择
  const handleTreasureSelect = (treasureId: string) => {
    const treasure = getTreasureById(treasureId);
    setSelectedTreasure(treasure || null);
    setCompareMode(false);
    
    // 获取克制法宝
    if (treasure) {
      const counters = getCounterTreasures(treasure.attribute);
      setCounterTreasures(counters);
    }
  };

  // 处理比较
  const handleCompare = () => {
    if (compareTreasure1 && compareTreasure2) {
      try {
        const result = compareTreasures(compareTreasure1, compareTreasure2);
        setComparisonResult(result);
      } catch (error) {
        console.error('比较失败:', error);
      }
    }
  };

  // 获取类型颜色
  const getTypeColor = (type: string): string => {
    const colorMap: Record<string, string> = {
      '法器': '#3B82F6', // 蓝色
      '法宝': '#8B5CF6', // 紫色
      '灵宝': '#DC2626', // 红色
      '通天灵宝': '#059669', // 绿色
      '仙器': '#7C3AED', // 深紫色
      '混沌至宝': '#D97706', // 琥珀色
      '特殊宝物': '#10B981' // 翠绿色
    };
    return colorMap[type] || '#6B7280';
  };

  // 获取品质颜色
  const getGradeColor = (grade: string): string => {
    const colorMap: Record<string, string> = {
      '下品': '#6B7280', // 灰色
      '中品': '#10B981', // 绿色
      '上品': '#3B82F6', // 蓝色
      '极品': '#8B5CF6', // 紫色
      '未知': '#EF4444' // 红色
    };
    return colorMap[grade] || '#6B7280';
  };

  // 获取属性颜色
  const getAttributeColor = (attribute: string): string => {
    const colorMap: Record<string, string> = {
      '金': '#FFD700', // 金色
      '木': '#32CD32', // 绿色
      '水': '#1E90FF', // 蓝色
      '火': '#FF4500', // 红色
      '土': '#CD853F', // 土色
      '雷': '#9370DB', // 紫色
      '风': '#87CEEB', // 天蓝色
      '冰': '#ADD8E6', // 浅蓝色
      '时间': '#8A2BE2', // 蓝紫色
      '空间': '#4B0082', // 靛蓝色
      '混合': '#808080', // 灰色
      '无': '#A0AEC0', // 浅灰色
      '光': '#FFD700' // 金色
    };
    return colorMap[attribute] || '#6B7280';
  };

  // 获取威力颜色
  const getPowerColor = (power: number): string => {
    if (power <= 3) return '#10B981'; // 低 - 绿色
    if (power <= 6) return '#F59E0B'; // 中 - 黄色
    if (power <= 8) return '#EF4444'; // 高 - 红色
    return '#7C3AED'; // 极高 - 紫色
  };

  // 获取价值颜色
  const getValueColor = (value: number): string => {
    if (value <= 3) return '#6B7280'; // 低 - 灰色
    if (value <= 6) return '#3B82F6'; // 中 - 蓝色
    if (value <= 8) return '#8B5CF6'; // 高 - 紫色
    return '#DC2626'; // 极高 - 红色
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-immortal-light to-immortal-lighter">
      <Head>
        <title>法宝法器 - 《凡人修仙传》修仙百科</title>
        <meta name="description" content="《凡人修仙传》完整法宝体系，包含掌天瓶、青竹蜂云剑、虚天鼎等法宝详细数据" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-immortal-dark mb-4">
            法宝法器
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            收录《凡人修仙传》中所有重要法宝法器，从普通法器到混沌至宝，详细分析威力、珍贵程度、炼制方法
          </p>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-immortal-primary">{stats.total}</div>
            <div className="text-gray-600">总法宝数</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.byType['法宝'] || 0}</div>
            <div className="text-gray-600">法宝数量</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{stats.averagePower}</div>
            <div className="text-gray-600">平均威力</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600">{stats.averageValue}</div>
            <div className="text-gray-600">平均价值</div>
          </div>
        </div>

        {/* 最强大法宝 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">顶级法宝</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">最强大法宝</h3>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  威力 {stats.mostPowerful.power}/10
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                  ⚔️
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{stats.mostPowerful.name}</h4>
                  <p className="text-gray-600 text-sm">{stats.mostPowerful.type} · {stats.mostPowerful.owner}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">最珍贵法宝</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  价值 {stats.mostValuable.value}/10
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                  💎
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{stats.mostValuable.name}</h4>
                  <p className="text-gray-600 text-sm">{stats.mostValuable.type} · {stats.mostValuable.owner}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 筛选和搜索区域 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* 类型筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                类型筛选
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="全部">全部类型</option>
                {Object.keys(treasureCategories.byType).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* 品质筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                品质筛选
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
              >
                <option value="全部">全部品质</option>
                {Object.keys(treasureCategories.byGrade).map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>

            {/* 属性筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                属性筛选
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                value={selectedAttribute}
                onChange={(e) => setSelectedAttribute(e.target.value)}
              >
                <option value="全部">全部属性</option>
                {Object.keys(treasureCategories.byAttribute).map(attr => (
                  <option key={attr} value={attr}>{attr}</option>
                ))}
              </select>
            </div>

            {/* 搜索 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                搜索法宝
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                placeholder="输入法宝名称或持有者..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 比较功能 */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">法宝比较</h3>
              <button
                className={`px-4 py-2 rounded-lg ${compareMode ? 'bg-immortal-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setCompareMode(!compareMode)}
              >
                {compareMode ? '取消比较' : '比较法宝'}
              </button>
            </div>

            {compareMode && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  value={compareTreasure1}
                  onChange={(e) => setCompareTreasure1(e.target.value)}
                >
                  <option value="">选择第一个法宝</option>
                  {treasures.map(treasure => (
                    <option key={treasure.id} value={treasure.id}>{treasure.name}</option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  value={compareTreasure2}
                  onChange={(e) => setCompareTreasure2(e.target.value)}
                >
                  <option value="">选择第二个法宝</option>
                  {treasures.map(treasure => (
                    <option key={treasure.id} value={treasure.id}>{treasure.name}</option>
                  ))}
                </select>

                <button
                  className="px-4 py-2 bg-immortal-primary text-white rounded-lg hover:bg-immortal-dark transition-colors"
                  onClick={handleCompare}
                  disabled={!compareTreasure1 || !compareTreasure2}
                >
                  开始比较
                </button>
              </div>
            )}

            {comparisonResult && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">比较结果</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">{comparisonResult.treasure1.name}</h5>
                    <div className="space-y-2">
                      <div><span className="font-medium">类型：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getTypeColor(comparisonResult.treasure1.type) }}>
                          {comparisonResult.treasure1.type}
                        </span>
                      </div>
                      <div><span className="font-medium">威力：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getPowerColor(comparisonResult.treasure1.power) }}>
                          {comparisonResult.treasure1.power}/10
                        </span>
                      </div>
                      <div><span className="font-medium">持有者：</span>{comparisonResult.treasure1.owner}</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">{comparisonResult.treasure2.name}</h5>
                    <div className="space-y-2">
                      <div><span className="font-medium">类型：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getTypeColor(comparisonResult.treasure2.type) }}>
                          {comparisonResult.treasure2.type}
                        </span>
                      </div>
                      <div><span className="font-medium">威力：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getPowerColor(comparisonResult.treasure2.power) }}>
                          {comparisonResult.treasure2.power}/10
                        </span>
                      </div>
                      <div><span className="font-medium">持有者：</span>{comparisonResult.treasure2.owner}</div>
                    </div>
                  </div>
                </div>
                
                {comparisonResult.similarities.length > 0 && (
                  <div className="mt-4">
                    <h6 className="font-medium text-green-600">相似点：</h6>
                    <ul className="list-disc pl-5 mt-1">
                      {comparisonResult.similarities.map((sim: string, index: number) => (
                        <li key={index} className="text-gray-700">{sim}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {comparisonResult.differences.length > 0 && (
                  <div className="mt-4">
                    <h6 className="font-medium text-red-600">不同点：</h6>
                    <ul className="list-disc pl-5 mt-1">
                      {comparisonResult.differences.map((diff: string, index: number) => (
                        <li key={index} className="text-gray-700">{diff}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {comparisonResult.recommendation && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-700">建议：</span>
                    <span className="ml-2 text-blue-600">{comparisonResult.recommendation}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 法宝列表 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  法宝列表 ({filteredTreasures.length})
                </h2>
              </div>
              
              <div className="divide-y">
                {filteredTreasures.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    没有找到符合条件的法宝
                  </div>
                ) : (
                  filteredTreasures.map(treasure => (
                    <div 
                      key={treasure.id}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${selectedTreasure?.id === treasure.id ? 'bg-blue-50' : ''}`}
                      onClick={() => handleTreasureSelect(treasure.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{treasure.name}</h3>
                          {treasure.aliases.length > 0 && (
                            <p className="text-gray-600 text-sm mt-1">
                              别名：{treasure.aliases.join('、')}
                            </p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <span 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: getTypeColor(treasure.type) }}
                          >
                            {treasure.type}
                          </span>
                          <span 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: getGradeColor(treasure.grade) }}
                          >
                            {treasure.grade}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mt-3">{treasure.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">持有者：</span>
                          <span className="font-medium">{treasure.owner}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">属性：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded text-white text-sm"
                            style={{ backgroundColor: getAttributeColor(treasure.attribute) }}
                          >
                            {treasure.attribute}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">威力：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: getPowerColor(treasure.power) + '20',
                              color: getPowerColor(treasure.power)
                            }}
                          >
                            {treasure.power}/10
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">价值：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: getValueColor(treasure.value) + '20',
                              color: getValueColor(treasure.value)
                            }}
                          >
                            {treasure.value}/10
                          </span>
                        </div>
                      </div>
                      
                      {treasure.abilities.length > 0 && (
                        <div className="mt-4">
                          <span className="text-gray-600">能力：</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {treasure.abilities.slice(0, 3).map((ability, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-immortal-light text-immortal-dark rounded-full text-sm"
                              >
                                {ability}
                              </span>
                            ))}
                            {treasure.abilities.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                +{treasure.abilities.length - 3}更多
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* 法宝详情 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedTreasure ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedTreasure.name} 详情
                  </h2>
                  
                  <div className="space-y-6">
                    {/* 基本信息 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">基本信息</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-gray-600 text-sm">类型</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded text-white text-sm"
                              style={{ backgroundColor: getTypeColor(selectedTreasure.type) }}
                            >
                              {selectedTreasure.type}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">品质</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded text-white text-sm"
                              style={{ backgroundColor: getGradeColor(selectedTreasure.grade) }}
                            >
                              {selectedTreasure.grade}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">属性</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded text-white text-sm"
                              style={{ backgroundColor: getAttributeColor(selectedTreasure.attribute) }}
                            >
                              {selectedTreasure.attribute}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">持有者</div>
                          <div className="font-medium">{selectedTreasure.owner}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">威力</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: getPowerColor(selectedTreasure.power) + '20',
                                color: getPowerColor(selectedTreasure.power)
                              }}
                            >
                              {selectedTreasure.power}/10
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">价值</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: getValueColor(selectedTreasure.value) + '20',
                                color: getValueColor(selectedTreasure.value)
                              }}
                            >
                              {selectedTreasure.value}/10
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 法宝描述 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">法宝描述</h3>
                      <p className="text-gray-700">{selectedTreasure.description}</p>
                      {selectedTreasure.creator && (
                        <p className="text-gray-600 text-sm mt-2">
                          炼制者：{selectedTreasure.creator}
                        </p>
                      )}
                      {selectedTreasure.origin && (
                        <p className="text-gray-600 text-sm mt-1">
                          来源：{selectedTreasure.origin}
                        </p>
                      )}
                    </div>

                    {/* 能力 */}
                    {selectedTreasure.abilities.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">能力</h3>
                        <div className="space-y-2">
                          {selectedTreasure.abilities.map((ability, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-immortal-primary rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{ability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 特殊特性 */}
                    {selectedTreasure.specialFeatures.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">特殊特性</h3>
                        <div className="space-y-2">
                          {selectedTreasure.specialFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 弱点 */}
                    {selectedTreasure.weaknesses && selectedTreasure.weaknesses.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">弱点</h3>
                        <div className="space-y-2">
                          {selectedTreasure.weaknesses.map((weakness, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{weakness}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 克制法宝 */}
                    {counterTreasures.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">克制法宝</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          以下法宝可能克制{selectedTreasure.name}（{selectedTreasure.attribute}属性）：
                        </p>
                        <div className="space-y-3">
                          {counterTreasures.slice(0, 3).map(treasure => (
                            <div 
                              key={treasure.id}
                              className="p-3 border border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors"
                              onClick={() => handleTreasureSelect(treasure.id)}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-800">{treasure.name}</span>
                                <span 
                                  className="px-2 py-1 rounded text-white text-xs"
                                  style={{ backgroundColor: getAttributeColor(treasure.attribute) }}
                                >
                                  {treasure.attribute}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{treasure.type} · {treasure.owner}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 著名战斗 */}
                    {selectedTreasure.famousBattles && selectedTreasure.famousBattles.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">著名战斗</h3>
                        <div className="space-y-2">
                          {selectedTreasure.famousBattles.map((battle, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{battle}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="text-5xl mb-4">⚔️</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">选择法宝查看详情</h3>
                  <p className="text-gray-600">
                    点击左侧列表中的法宝，查看详细信息、能力和克制关系
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 类型分布 */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">法宝类型分布</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {Object.entries(treasureCategories.byType).map(([type, treasures]) => {
                if (treasures.length === 0) return null;
                
                return (
                  <div 
                    key={type}
                    className="p-4 rounded-lg text-center"
                    style={{ backgroundColor: getTypeColor(type) + '20' }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white"
                      style={{ backgroundColor: getTypeColor(type) }}
                    >
                      {type === '法器' ? '🔨' : 
                       type === '法宝' ? '⚔️' : 
                       type === '灵宝' ? '✨' : 
                       type === '通天灵宝' ? '🌟' : 
                       type === '仙器' ? '👑' : 
                       type === '混沌至宝' ? '🌀' : '💎'}
                    </div>
                    <div className="font-bold text-lg" style={{ color: getTypeColor(type) }}>
                      {type}
                    </div>
                    <div className="text-gray-600">{treasures.length}件</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 导航链接 */}
        <div className="mt-12 flex justify-center space-x-4">
          <Link href="/techniques">
            <a className="px-6 py-3 bg-immortal-primary text-white rounded-lg hover:bg-immortal-dark transition-colors">
              查看功法体系
            </a>
          </Link>
          <Link href="/characters">
            <a className="px-6 py-3 bg-white text-immortal-primary border border-immortal-primary rounded-lg hover:bg-immortal-light transition-colors">
              查看人物数据
            </a>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TreasuresPage;