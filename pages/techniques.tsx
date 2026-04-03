import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  cultivationTechniques, 
  techniqueCategories,
  getTechniqueById,
  getTechniquesByAttribute,
  getTechniqueStats,
  compareTechniques,
  getRecommendedTechniques,
  CultivationTechnique 
} from '../data/cultivationTechniques';

const TechniquesPage: React.FC = () => {
  const [selectedAttribute, setSelectedAttribute] = useState<string>('全部');
  const [selectedType, setSelectedType] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTechnique, setSelectedTechnique] = useState<CultivationTechnique | null>(null);
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [compareTech1, setCompareTech1] = useState<string>('');
  const [compareTech2, setCompareTech2] = useState<string>('');
  const [comparisonResult, setComparisonResult] = useState<any>(null);

  // 获取统计数据
  const stats = getTechniqueStats();

  // 筛选功法
  const filteredTechniques = cultivationTechniques.filter(tech => {
    // 属性筛选
    if (selectedAttribute !== '全部' && tech.attribute !== selectedAttribute) {
      return false;
    }
    
    // 类型筛选
    if (selectedType !== '全部' && tech.type !== selectedType) {
      return false;
    }
    
    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        tech.name.toLowerCase().includes(query) ||
        tech.aliases.some(alias => alias.toLowerCase().includes(query)) ||
        tech.description.toLowerCase().includes(query) ||
        tech.specialAbilities.some(ability => ability.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  // 处理功法选择
  const handleTechniqueSelect = (techId: string) => {
    const tech = getTechniqueById(techId);
    setSelectedTechnique(tech || null);
    setCompareMode(false);
  };

  // 处理比较
  const handleCompare = () => {
    if (compareTech1 && compareTech2) {
      try {
        const result = compareTechniques(compareTech1, compareTech2);
        setComparisonResult(result);
      } catch (error) {
        console.error('比较失败:', error);
      }
    }
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
      '魔': '#8B0000', // 暗红色
      '佛': '#FFD700', // 金色
      '混合': '#808080' // 灰色
    };
    return colorMap[attribute] || '#6B7280';
  };

  // 获取难度颜色
  const getDifficultyColor = (difficulty: number): string => {
    if (difficulty <= 3) return '#10B981'; // 简单 - 绿色
    if (difficulty <= 6) return '#F59E0B'; // 中等 - 黄色
    if (difficulty <= 8) return '#EF4444'; // 困难 - 红色
    return '#7C3AED'; // 极难 - 紫色
  };

  // 获取类型颜色
  const getTypeColor = (type: string): string => {
    const colorMap: Record<string, string> = {
      '基础功法': '#3B82F6', // 蓝色
      '进阶功法': '#8B5CF6', // 紫色
      '顶级功法': '#DC2626', // 红色
      '秘术': '#059669', // 绿色
      '禁术': '#7C3AED' // 深紫色
    };
    return colorMap[type] || '#6B7280';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-immortal-light to-immortal-lighter">
      <Head>
        <title>功法体系 - 《凡人修仙传》修仙百科</title>
        <meta name="description" content="《凡人修仙传》完整功法体系，包含长春功、青元剑诀、梵圣真魔功等功法详细数据" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-immortal-dark mb-4">
            功法体系
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            收录《凡人修仙传》中所有重要功法，从基础功法到顶级秘术，详细分析属性、难度、兼容性
          </p>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-immortal-primary">{stats.total}</div>
            <div className="text-gray-600">总功法数</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600">{stats.byType['基础功法'] || 0}</div>
            <div className="text-gray-600">基础功法</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.byType['顶级功法'] || 0}</div>
            <div className="text-gray-600">顶级功法</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{Math.round(stats.averageDifficulty * 10) / 10}</div>
            <div className="text-gray-600">平均难度</div>
          </div>
        </div>

        {/* 筛选和搜索区域 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
                {Object.keys(techniqueCategories.byAttribute).map(attr => (
                  <option key={attr} value={attr}>{attr}</option>
                ))}
              </select>
            </div>

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
                {Object.keys(techniqueCategories.byType).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* 搜索 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                搜索功法
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                placeholder="输入功法名称或关键词..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 比较功能 */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">功法比较</h3>
              <button
                className={`px-4 py-2 rounded-lg ${compareMode ? 'bg-immortal-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setCompareMode(!compareMode)}
              >
                {compareMode ? '取消比较' : '比较功法'}
              </button>
            </div>

            {compareMode && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  value={compareTech1}
                  onChange={(e) => setCompareTech1(e.target.value)}
                >
                  <option value="">选择第一个功法</option>
                  {cultivationTechniques.map(tech => (
                    <option key={tech.id} value={tech.id}>{tech.name}</option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  value={compareTech2}
                  onChange={(e) => setCompareTech2(e.target.value)}
                >
                  <option value="">选择第二个功法</option>
                  {cultivationTechniques.map(tech => (
                    <option key={tech.id} value={tech.id}>{tech.name}</option>
                  ))}
                </select>

                <button
                  className="px-4 py-2 bg-immortal-primary text-white rounded-lg hover:bg-immortal-dark transition-colors"
                  onClick={handleCompare}
                  disabled={!compareTech1 || !compareTech2}
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
                    <h5 className="font-medium mb-2">{comparisonResult.tech1.name}</h5>
                    <div className="space-y-2">
                      <div><span className="font-medium">属性：</span>
                        <span className="px-2 py-1 rounded text-white" style={{ backgroundColor: getAttributeColor(comparisonResult.tech1.attribute) }}>
                          {comparisonResult.tech1.attribute}
                        </span>
                      </div>
                      <div><span className="font-medium">类型：</span>{comparisonResult.tech1.type}</div>
                      <div><span className="font-medium">难度：</span>{comparisonResult.tech1.difficulty}/10</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">{comparisonResult.tech2.name}</h5>
                    <div className="space-y-2">
                      <div><span className="font-medium">属性：</span>
                        <span className="px-2 py-1 rounded text-white" style={{ backgroundColor: getAttributeColor(comparisonResult.tech2.attribute) }}>
                          {comparisonResult.tech2.attribute}
                        </span>
                      </div>
                      <div><span className="font-medium">类型：</span>{comparisonResult.tech2.type}</div>
                      <div><span className="font-medium">难度：</span>{comparisonResult.tech2.difficulty}/10</div>
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
          {/* 功法列表 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  功法列表 ({filteredTechniques.length})
                </h2>
              </div>
              
              <div className="divide-y">
                {filteredTechniques.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    没有找到符合条件的功法
                  </div>
                ) : (
                  filteredTechniques.map(tech => (
                    <div 
                      key={tech.id}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${selectedTechnique?.id === tech.id ? 'bg-blue-50' : ''}`}
                      onClick={() => handleTechniqueSelect(tech.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{tech.name}</h3>
                          {tech.aliases.length > 0 && (
                            <p className="text-gray-600 text-sm mt-1">
                              别名：{tech.aliases.join('、')}
                            </p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <span 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: getAttributeColor(tech.attribute) }}
                          >
                            {tech.attribute}
                          </span>
                          <span 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: getTypeColor(tech.type) }}
                          >
                            {tech.type}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mt-3">{tech.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">境界要求：</span>
                          <span className="font-medium">{tech.levelRequirement}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">难度：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: getDifficultyColor(tech.difficulty) + '20',
                              color: getDifficultyColor(tech.difficulty)
                            }}
                          >
                            {tech.difficulty}/10
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">层数：</span>
                          <span className="font-medium">{tech.layers}层</span>
                        </div>
                      </div>
                      
                      {tech.specialAbilities.length > 0 && (
                        <div className="mt-4">
                          <span className="text-gray-600">特殊能力：</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {tech.specialAbilities.map((ability, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-immortal-light text-immortal-dark rounded-full text-sm"
                              >
                                {ability}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* 功法详情 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedTechnique ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedTechnique.name} 详情
                  </h2>
                  
                  <div className="space-y-6">
                    {/* 基本信息 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">基本信息</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-gray-600 text-sm">属性</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded text-white text-sm"
                              style={{ backgroundColor: getAttributeColor(selectedTechnique.attribute) }}
                            >
                              {selectedTechnique.attribute}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">类型</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded text-white text-sm"
                              style={{ backgroundColor: getTypeColor(selectedTechnique.type) }}
                            >
                              {selectedTechnique.type}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">境界要求</div>
                          <div className="font-medium">{selectedTechnique.levelRequirement}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">修炼难度</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: getDifficultyColor(selectedTechnique.difficulty) + '20',
                                color: getDifficultyColor(selectedTechnique.difficulty)
                              }}
                            >
                              {selectedTechnique.difficulty}/10
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">功法层数</div>
                          <div className="font-medium">{selectedTechnique.layers}层</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">修炼时间</div>
                          <div className="font-medium">{selectedTechnique.cultivationTime}</div>
                        </div>
                      </div>
                    </div>

                    {/* 功法描述 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">功法描述</h3>
                      <p className="text-gray-700">{selectedTechnique.description}</p>
                      {selectedTechnique.creator && (
                        <p className="text-gray-600 text-sm mt-2">
                          创造者：{selectedTechnique.creator}
                        </p>
                      )}
                      {selectedTechnique.origin && (
                        <p className="text-gray-600 text-sm mt-1">
                          来源：{selectedTechnique.origin}
                        </p>
                      )}
                    </div>

                    {/* 特殊能力 */}
                    {selectedTechnique.specialAbilities.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">特殊能力</h3>
                        <div className="space-y-2">
                          {selectedTechnique.specialAbilities.map((ability, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-immortal-primary rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{ability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 优势劣势 */}
                    <div className="grid grid-cols-2 gap-4">
                      {selectedTechnique.advantages.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-700 mb-3">优势</h3>
                          <div className="space-y-2">
                            {selectedTechnique.advantages.map((adv, index) => (
                              <div key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                                <span className="text-gray-700">{adv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {selectedTechnique.disadvantages.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-700 mb-3">劣势</h3>
                          <div className="space-y-2">
                            {selectedTechnique.disadvantages.map((dis, index) => (
                              <div key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                                <span className="text-gray-700">{dis}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 兼容性 */}
                    {(selectedTechnique.compatibility.length > 0 || selectedTechnique.incompatible.length > 0) && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">兼容性</h3>
                        {selectedTechnique.compatibility.length > 0 && (
                          <div className="mb-4">
                            <div className="text-gray-600 text-sm mb-2">兼容功法：</div>
                            <div className="flex flex-wrap gap-2">
                              {selectedTechnique.compatibility.map(techId => {
                                const tech = getTechniqueById(techId);
                                return tech ? (
                                  <span 
                                    key={techId}
                                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm cursor-pointer hover:bg-green-200"
                                    onClick={() => handleTechniqueSelect(techId)}
                                  >
                                    {tech.name}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}
                        
                        {selectedTechnique.incompatible.length > 0 && (
                          <div>
                            <div className="text-gray-600 text-sm mb-2">不兼容功法：</div>
                            <div className="flex flex-wrap gap-2">
                              {selectedTechnique.incompatible.map(techId => {
                                const tech = getTechniqueById(techId);
                                return tech ? (
                                  <span 
                                    key={techId}
                                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm cursor-pointer hover:bg-red-200"
                                    onClick={() => handleTechniqueSelect(techId)}
                                  >
                                    {tech.name}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 著名修炼者 */}
                    {selectedTechnique.famousPractitioners.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">著名修炼者</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedTechnique.famousPractitioners.map((practitioner, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                            >
                              {practitioner}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 推荐功法 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">推荐功法</h3>
                      <div className="space-y-3">
                        {getRecommendedTechniques(selectedTechnique.attribute, selectedTechnique.levelRequirement)
                          .filter(tech => tech.id !== selectedTechnique.id)
                          .slice(0, 3)
                          .map(tech => (
                            <div 
                              key={tech.id}
                              className="p-3 border border-gray-200 rounded-lg hover:border-immortal-primary cursor-pointer transition-colors"
                              onClick={() => handleTechniqueSelect(tech.id)}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-800">{tech.name}</span>
                                <span className="text-sm text-gray-600">{tech.type}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{tech.description}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="text-5xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">选择功法查看详情</h3>
                  <p className="text-gray-600">
                    点击左侧列表中的功法，查看详细信息和兼容性分析
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 属性分布 */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">功法属性分布</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {Object.entries(techniqueCategories.byAttribute).map(([attr, techs]) => {
                if (techs.length === 0) return null;
                
                return (
                  <div 
                    key={attr}
                    className="p-4 rounded-lg text-center"
                    style={{ backgroundColor: getAttributeColor(attr) + '20' }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white"
                      style={{ backgroundColor: getAttributeColor(attr) }}
                    >
                      {attr.charAt(0)}
                    </div>
                    <div className="font-bold text-lg" style={{ color: getAttributeColor(attr) }}>
                      {attr}
                    </div>
                    <div className="text-gray-600">{techs.length}种功法</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 导航链接 */}
        <div className="mt-12 flex justify-center space-x-4">
          <Link href="/worldview">
            <a className="px-6 py-3 bg-immortal-primary text-white rounded-lg hover:bg-immortal-dark transition-colors">
              查看修仙境界
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

export default TechniquesPage;