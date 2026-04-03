import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  pills, 
  pillCategories,
  getPillById,
  getPillsByType,
  getPillStats,
  comparePills,
  getRecommendedPills,
  getPillCombinations,
  getPillSuccessPrediction,
  Pill 
} from '../data/pills';

const PillsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('全部');
  const [selectedGrade, setSelectedGrade] = useState<string>('全部');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPill, setSelectedPill] = useState<Pill | null>(null);
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [comparePill1, setComparePill1] = useState<string>('');
  const [comparePill2, setComparePill2] = useState<string>('');
  const [comparisonResult, setComparisonResult] = useState<any>(null);
  const [pillCombinations, setPillCombinations] = useState<any[]>([]);
  const [alchemistLevel, setAlchemistLevel] = useState<number>(5);
  const [successPrediction, setSuccessPrediction] = useState<any>(null);

  // 获取统计数据
  const stats = getPillStats();

  // 筛选丹药
  const filteredPills = pills.filter(pill => {
    // 类型筛选
    if (selectedType !== '全部' && pill.type !== selectedType) {
      return false;
    }
    
    // 品质筛选
    if (selectedGrade !== '全部' && pill.grade !== selectedGrade) {
      return false;
    }
    
    // 难度筛选
    if (selectedDifficulty !== '全部') {
      const difficultyRange = selectedDifficulty.split('（')[1].split('）')[0];
      const [min, max] = difficultyRange.split('-').map(Number);
      if (pill.difficulty < min || pill.difficulty > max) {
        return false;
      }
    }
    
    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        pill.name.toLowerCase().includes(query) ||
        pill.aliases.some(alias => alias.toLowerCase().includes(query)) ||
        pill.description.toLowerCase().includes(query) ||
        pill.effects.some(effect => effect.toLowerCase().includes(query)) ||
        pill.materials.some(material => material.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  // 处理丹药选择
  const handlePillSelect = (pillId: string) => {
    const pill = getPillById(pillId);
    setSelectedPill(pill || null);
    setCompareMode(false);
    
    // 获取丹药组合
    const combinations = getPillCombinations();
    const relatedCombinations = combinations.filter(combo => 
      combo.pills.some(p => p.id === pillId)
    );
    setPillCombinations(relatedCombinations.slice(0, 3));
    
    // 获取成功率预测
    if (pill) {
      const prediction = getPillSuccessPrediction(pillId, alchemistLevel);
      setSuccessPrediction(prediction);
    }
  };

  // 处理比较
  const handleCompare = () => {
    if (comparePill1 && comparePill2) {
      try {
        const result = comparePills(comparePill1, comparePill2);
        setComparisonResult(result);
      } catch (error) {
        console.error('比较失败:', error);
      }
    }
  };

  // 获取类型颜色
  const getTypeColor = (type: string): string => {
    const colorMap: Record<string, string> = {
      '修为丹药': '#3B82F6', // 蓝色
      '疗伤丹药': '#10B981', // 绿色
      '解毒丹药': '#8B5CF6', // 紫色
      '突破丹药': '#EF4444', // 红色
      '特殊丹药': '#F59E0B', // 黄色
      '灵药': '#059669' // 翠绿色
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

  // 获取难度颜色
  const getDifficultyColor = (difficulty: number): string => {
    if (difficulty <= 3) return '#10B981'; // 简单 - 绿色
    if (difficulty <= 6) return '#F59E0B'; // 中等 - 黄色
    if (difficulty <= 8) return '#EF4444'; // 困难 - 红色
    return '#7C3AED'; // 极难 - 紫色
  };

  // 获取价值颜色
  const getValueColor = (value: number): string => {
    if (value <= 3) return '#6B7280'; // 低 - 灰色
    if (value <= 6) return '#3B82F6'; // 中 - 蓝色
    if (value <= 8) return '#8B5CF6'; // 高 - 紫色
    return '#DC2626'; // 极高 - 红色
  };

  // 处理炼丹师等级变化
  const handleAlchemistLevelChange = (level: number) => {
    setAlchemistLevel(level);
    if (selectedPill) {
      const prediction = getPillSuccessPrediction(selectedPill.id, level);
      setSuccessPrediction(prediction);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-immortal-light to-immortal-lighter">
      <Head>
        <title>丹药灵药 - 《凡人修仙传》修仙百科</title>
        <meta name="description" content="《凡人修仙传》完整丹药体系，包含筑基丹、结金丹、元婴丹等丹药详细数据" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-immortal-dark mb-4">
            丹药灵药
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            收录《凡人修仙传》中所有重要丹药灵药，从基础丹药到极品灵丹，详细分析功效、炼制难度、材料配方
          </p>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-immortal-primary">{stats.total}</div>
            <div className="text-gray-600">总丹药数</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600">{stats.byType['突破丹药'] || 0}</div>
            <div className="text-gray-600">突破丹药</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{stats.averageDifficulty}</div>
            <div className="text-gray-600">平均难度</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{stats.averageValue}</div>
            <div className="text-gray-600">平均价值</div>
          </div>
        </div>

        {/* 最珍贵丹药 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">顶级丹药</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">最难炼制</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  难度 {stats.mostDifficult.difficulty}/10
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                  💊
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{stats.mostDifficult.name}</h4>
                  <p className="text-gray-600 text-sm">{stats.mostDifficult.type} · 成功率{stats.mostDifficult.successRate}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">最珍贵</h3>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  价值 {stats.mostValuable.value}/10
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                  💎
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{stats.mostValuable.name}</h4>
                  <p className="text-gray-600 text-sm">{stats.mostValuable.type} · {stats.mostValuable.grade}品质</p>
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
                {Object.keys(pillCategories.byType).map(type => (
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
                {Object.keys(pillCategories.byGrade).map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>

            {/* 难度筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                难度筛选
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="全部">全部难度</option>
                {Object.keys(pillCategories.byDifficulty).map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>

            {/* 搜索 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                搜索丹药
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                placeholder="输入丹药名称或材料..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 比较功能 */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">丹药比较</h3>
              <button
                className={`px-4 py-2 rounded-lg ${compareMode ? 'bg-immortal-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setCompareMode(!compareMode)}
              >
                {compareMode ? '取消比较' : '比较丹药'}
              </button>
            </div>

            {compareMode && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  value={comparePill1}
                  onChange={(e) => setComparePill1(e.target.value)}
                >
                  <option value="">选择第一个丹药</option>
                  {pills.map(pill => (
                    <option key={pill.id} value={pill.id}>{pill.name}</option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  value={comparePill2}
                  onChange={(e) => setComparePill2(e.target.value)}
                >
                  <option value="">选择第二个丹药</option>
                  {pills.map(pill => (
                    <option key={pill.id} value={pill.id}>{pill.name}</option>
                  ))}
                </select>

                <button
                  className="px-4 py-2 bg-immortal-primary text-white rounded-lg hover:bg-immortal-dark transition-colors"
                  onClick={handleCompare}
                  disabled={!comparePill1 || !comparePill2}
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
                    <h5 className="font-medium mb-2">{comparisonResult.pill1.name}</h5>
                    <div className="space-y-2">
                      <div><span className="font-medium">类型：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getTypeColor(comparisonResult.pill1.type) }}>
                          {comparisonResult.pill1.type}
                        </span>
                      </div>
                      <div><span className="font-medium">难度：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getDifficultyColor(comparisonResult.pill1.difficulty) }}>
                          {comparisonResult.pill1.difficulty}/10
                        </span>
                      </div>
                      <div><span className="font-medium">价值：</span>{comparisonResult.pill1.value}/10</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">{comparisonResult.pill2.name}</h5>
                    <div className="space-y-2">
                      <div><span className="font-medium">类型：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getTypeColor(comparisonResult.pill2.type) }}>
                          {comparisonResult.pill2.type}
                        </span>
                      </div>
                      <div><span className="font-medium">难度：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getDifficultyColor(comparisonResult.pill2.difficulty) }}>
                          {comparisonResult.pill2.difficulty}/10
                        </span>
                      </div>
                      <div><span className="font-medium">价值：</span>{comparisonResult.pill2.value}/10</div>
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
          {/* 丹药列表 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  丹药列表 ({filteredPills.length})
                </h2>
              </div>
              
              <div className="divide-y">
                {filteredPills.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    没有找到符合条件的丹药
                  </div>
                ) : (
                  filteredPills.map(pill => (
                    <div 
                      key={pill.id}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${selectedPill?.id === pill.id ? 'bg-blue-50' : ''}`}
                      onClick={() => handlePillSelect(pill.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{pill.name}</h3>
                          {pill.aliases.length > 0 && (
                            <p className="text-gray-600 text-sm mt-1">
                              别名：{pill.aliases.join('、')}
                            </p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <span 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: getTypeColor(pill.type) }}
                          >
                            {pill.type}
                          </span>
                          <span 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: getGradeColor(pill.grade) }}
                          >
                            {pill.grade}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mt-3">{pill.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">境界要求：</span>
                          <span className="font-medium">{pill.cultivationRequirement || '无'}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">炼制难度：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: getDifficultyColor(pill.difficulty) + '20',
                              color: getDifficultyColor(pill.difficulty)
                            }}
                          >
                            {pill.difficulty}/10
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">成功率：</span>
                          <span className="font-medium">{pill.successRate}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">价值：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: getValueColor(pill.value) + '20',
                              color: getValueColor(pill.value)
                            }}
                          >
                            {pill.value}/10
                          </span>
                        </div>
                      </div>
                      
                      {pill.effects.length > 0 && (
                        <div className="mt-4">
                          <span className="text-gray-600">功效：</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {pill.effects.slice(0, 3).map((effect, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                              >
                                {effect}
                              </span>
                            ))}
                            {pill.effects.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                +{pill.effects.length - 3}更多
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {pill.materials.length > 0 && (
                        <div className="mt-4">
                          <span className="text-gray-600">主要材料：</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {pill.materials.slice(0, 3).map((material, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-immortal-light text-immortal-dark rounded-full text-sm"
                              >
                                {material}
                              </span>
                            ))}
                            {pill.materials.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                +{pill.materials.length - 3}种
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

          {/* 丹药详情 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedPill ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedPill.name} 详情
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
                              style={{ backgroundColor: getTypeColor(selectedPill.type) }}
                            >
                              {selectedPill.type}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">品质</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded text-white text-sm"
                              style={{ backgroundColor: getGradeColor(selectedPill.grade) }}
                            >
                              {selectedPill.grade}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">境界要求</div>
                          <div className="font-medium">{selectedPill.cultivationRequirement || '无'}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">炼制难度</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: getDifficultyColor(selectedPill.difficulty) + '20',
                                color: getDifficultyColor(selectedPill.difficulty)
                              }}
                            >
                              {selectedPill.difficulty}/10
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">基础成功率</div>
                          <div className="font-medium">{selectedPill.successRate}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">价值</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: getValueColor(selectedPill.value) + '20',
                                color: getValueColor(selectedPill.value)
                              }}
                            >
                              {selectedPill.value}/10
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 丹药描述 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">丹药描述</h3>
                      <p className="text-gray-700">{selectedPill.description}</p>
                    </div>

                    {/* 功效 */}
                    {selectedPill.effects.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">功效</h3>
                        <div className="space-y-2">
                          {selectedPill.effects.map((effect, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{effect}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 副作用 */}
                    {selectedPill.sideEffects && selectedPill.sideEffects.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">副作用</h3>
                        <div className="space-y-2">
                          {selectedPill.sideEffects.map((sideEffect, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{sideEffect}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 炼制材料 */}
                    {selectedPill.materials.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">炼制材料</h3>
                        <div className="space-y-2">
                          {selectedPill.materials.map((material, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{material}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 成功率预测 */}
                    {successPrediction && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">成功率预测</h3>
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">炼丹师等级：</span>
                            <div className="flex space-x-2">
                              {[1, 3, 5, 7, 9].map(level => (
                                <button
                                  key={level}
                                  className={`px-3 py-1 rounded ${alchemistLevel === level ? 'bg-immortal-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                                  onClick={() => handleAlchemistLevelChange(level)}
                                >
                                  {level === 1 ? '初级' : 
                                   level === 3 ? '中级⁻' : 
                                   level === 5 ? '中级' : 
                                   level === 7 ? '高级⁻' : '高级'}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-gray-600 text-sm">基础成功率</div>
                                <div className="font-medium">{successPrediction.baseRate}</div>
                              </div>
                              <div className="text-2xl">→</div>
                              <div>
                                <div className="text-gray-600 text-sm">调整后成功率</div>
                                <div className="font-medium text-blue-700">{successPrediction.adjustedRate}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm mb-2">影响因素：</div>
                          <ul className="space-y-1">
                            {successPrediction.factors.map((factor: string, index: number) => (
                              <li key={index} className="text-gray-700 text-sm">• {factor}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* 丹药组合 */}
                    {pillCombinations.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">推荐组合</h3>
                        <div className="space-y-3">
                          {pillCombinations.map((combo, index) => (
                            <div key={index} className="p-3 border border-gray-200 rounded-lg">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {combo.pills
                                  .filter(p => p.id !== selectedPill.id)
                                  .map(pill => (
                                    <span 
                                      key={pill.id}
                                      className="px-3 py-1 bg-immortal-light text-immortal-dark rounded-full text-sm cursor-pointer hover:bg-immortal-primary hover:text-white"
                                      onClick={() => handlePillSelect(pill.id)}
                                    >
                                      {pill.name}
                                    </span>
                                  ))
                                }
                              </div>
                              <div className="space-y-2">
                                {combo.combinedEffects.map((effect: string, idx: number) => (
                                  <div key={idx} className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                                    <span className="text-gray-700 text-sm">{effect}</span>
                                  </div>
                                ))}
                              </div>
                              {combo.warnings && (
                                <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                                  <div className="text-yellow-700 text-sm">⚠️ {combo.warnings[0]}</div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 著名事件 */}
                    {selectedPill.famousEvents && selectedPill.famousEvents.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">著名事件</h3>
                        <div className="space-y-2">
                          {selectedPill.famousEvents.map((event, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{event}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="text-5xl mb-4">💊</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">选择丹药查看详情</h3>
                  <p className="text-gray-600">
                    点击左侧列表中的丹药，查看详细信息、功效和炼制成功率
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 类型分布 */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">丹药类型分布</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(pillCategories.byType).map(([type, pillsList]) => {
                if (pillsList.length === 0) return null;
                
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
                      {type === '修为丹药' ? '⚡' : 
                       type === '疗伤丹药' ? '❤️' : 
                       type === '解毒丹药' ? '🩹' : 
                       type === '突破丹药' ? '🚀' : 
                       type === '特殊丹药' ? '🌟' : '🌿'}
                    </div>
                    <div className="font-bold text-lg" style={{ color: getTypeColor(type) }}>
                      {type}
                    </div>
                    <div className="text-gray-600">{pillsList.length}种丹药</div>
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
          <Link href="/treasures">
            <a className="px-6 py-3 bg-white text-immortal-primary border border-immortal-primary rounded-lg hover:bg-immortal-light transition-colors">
              查看法宝法器
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

export default PillsPage;
