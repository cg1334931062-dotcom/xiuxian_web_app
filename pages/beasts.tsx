import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  beasts, 
  beastCategories,
  getBeastById,
  getBeastsByType,
  getBeastStats,
  getBeastCounter,
  getRecommendedBeasts,
  getBeastCombinations,
  getBeastTamingPrediction,
  getBeastEvolutionPaths,
  Beast 
} from '../data/beasts';

const BeastsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('全部');
  const [selectedGrade, setSelectedGrade] = useState<string>('全部');
  const [selectedDanger, setSelectedDanger] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBeast, setSelectedBeast] = useState<Beast | null>(null);
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [compareBeast1, setCompareBeast1] = useState<string>('');
  const [compareBeast2, setCompareBeast2] = useState<string>('');
  const [comparisonResult, setComparisonResult] = useState<any>(null);
  const [beastCombinations, setBeastCombinations] = useState<any[]>([]);
  const [tamerLevel, setTamerLevel] = useState<number>(5);
  const [tamingPrediction, setTamingPrediction] = useState<any>(null);
  const [counterBeasts, setCounterBeasts] = useState<Beast[]>([]);
  const [evolutionPaths, setEvolutionPaths] = useState<any[]>([]);

  // 获取统计数据
  const stats = getBeastStats();

  // 筛选妖兽
  const filteredBeasts = beasts.filter(beast => {
    // 类型筛选
    if (selectedType !== '全部' && beast.type !== selectedType) {
      return false;
    }
    
    // 等阶筛选
    if (selectedGrade !== '全部' && beast.grade !== selectedGrade) {
      return false;
    }
    
    // 危险程度筛选
    if (selectedDanger !== '全部') {
      const dangerRange = selectedDanger.split('（')[1].split('）')[0];
      const [min, max] = dangerRange.split('-').map(Number);
      if (beast.dangerLevel < min || beast.dangerLevel > max) {
        return false;
      }
    }
    
    // 搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        beast.name.toLowerCase().includes(query) ||
        beast.aliases.some(alias => alias.toLowerCase().includes(query)) ||
        beast.description.toLowerCase().includes(query) ||
        beast.abilities.some(ability => ability.toLowerCase().includes(query)) ||
        beast.habitat.some(habitat => habitat.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  // 处理妖兽选择
  const handleBeastSelect = (beastId: string) => {
    const beast = getBeastById(beastId);
    setSelectedBeast(beast || null);
    setCompareMode(false);
    
    // 获取妖兽组合
    const combinations = getBeastCombinations();
    const relatedCombinations = combinations.filter(combo => 
      combo.beasts.some(b => b.id === beastId)
    );
    setBeastCombinations(relatedCombinations.slice(0, 3));
    
    // 获取驯服成功率预测
    if (beast) {
      const prediction = getBeastTamingPrediction(beastId, tamerLevel);
      setTamingPrediction(prediction);
      
      // 获取克制妖兽
      const counters = getBeastCounter(beastId);
      setCounterBeasts(counters);
      
      // 获取进化路径
      const paths = getBeastEvolutionPaths();
      const beastPaths = paths.filter(path => path.current.id === beastId);
      setEvolutionPaths(beastPaths);
    }
  };

  // 获取类型颜色
  const getTypeColor = (type: string): string => {
    const colorMap: Record<string, string> = {
      '妖兽': '#3B82F6', // 蓝色
      '灵兽': '#10B981', // 绿色
      '神兽': '#8B5CF6', // 紫色
      '凶兽': '#EF4444', // 红色
      '魔兽': '#7C3AED', // 深紫色
      '异兽': '#F59E0B' // 黄色
    };
    return colorMap[type] || '#6B7280';
  };

  // 获取等阶颜色
  const getGradeColor = (grade: string): string => {
    const colorMap: Record<string, string> = {
      '一阶': '#6B7280', // 灰色
      '二阶': '#10B981', // 绿色
      '三阶': '#3B82F6', // 蓝色
      '四阶': '#8B5CF6', // 紫色
      '五阶': '#F59E0B', // 黄色
      '六阶': '#EF4444', // 红色
      '七阶': '#DC2626', // 深红
      '八阶': '#7C3AED', // 深紫
      '九阶': '#059669', // 翠绿
      '十阶': '#000000', // 黑色
      '未知': '#6B7280' // 灰色
    };
    return colorMap[grade] || '#6B7280';
  };

  // 获取危险程度颜色
  const getDangerColor = (danger: number): string => {
    if (danger <= 3) return '#10B981'; // 低危 - 绿色
    if (danger <= 6) return '#F59E0B'; // 中危 - 黄色
    if (danger <= 8) return '#EF4444'; // 高危 - 红色
    return '#7C3AED'; // 极危 - 紫色
  };

  // 获取价值颜色
  const getValueColor = (value: number): string => {
    if (value <= 3) return '#6B7280'; // 低 - 灰色
    if (value <= 6) return '#3B82F6'; // 中 - 蓝色
    if (value <= 8) return '#8B5CF6'; // 高 - 紫色
    return '#DC2626'; // 极高 - 红色
  };

  // 获取驯服难度颜色
  const getTamingColor = (difficulty: number): string => {
    if (difficulty <= 3) return '#10B981'; // 简单 - 绿色
    if (difficulty <= 6) return '#F59E0B'; // 中等 - 黄色
    if (difficulty <= 8) return '#EF4444'; // 困难 - 红色
    return '#7C3AED'; // 极难 - 紫色
  };

  // 处理驯兽师等级变化
  const handleTamerLevelChange = (level: number) => {
    setTamerLevel(level);
    if (selectedBeast) {
      const prediction = getBeastTamingPrediction(selectedBeast.id, level);
      setTamingPrediction(prediction);
    }
  };

  // 简单比较函数（简化版）
  const handleCompare = () => {
    if (compareBeast1 && compareBeast2) {
      const beast1 = getBeastById(compareBeast1);
      const beast2 = getBeastById(compareBeast2);
      
      if (!beast1 || !beast2) return;
      
      const similarities: string[] = [];
      const differences: string[] = [];
      
      if (beast1.type === beast2.type) {
        similarities.push(`同为${beast1.type}`);
      } else {
        differences.push(`类型不同：${beast1.type} vs ${beast2.type}`);
      }
      
      if (beast1.grade === beast2.grade) {
        similarities.push(`同为${beast1.grade}`);
      } else {
        differences.push(`等阶不同：${beast1.grade} vs ${beast2.grade}`);
      }
      
      setComparisonResult({
        beast1,
        beast2,
        similarities,
        differences
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-immortal-light to-immortal-lighter">
      <Head>
        <title>妖兽灵兽 - 《凡人修仙传》修仙百科</title>
        <meta name="description" content="《凡人修仙传》完整妖兽体系，包含墨蛟、冰凤、噬金虫等妖兽详细数据" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-immortal-dark mb-4">
            妖兽灵兽
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            收录《凡人修仙传》中所有重要妖兽灵兽，从低阶妖兽到顶级神兽，详细分析能力、栖息地、驯服难度
          </p>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-immortal-primary">{stats.total}</div>
            <div className="text-gray-600">总妖兽数</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600">{stats.averageDanger}</div>
            <div className="text-gray-600">平均危险度</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{stats.averageValue}</div>
            <div className="text-gray-600">平均价值</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">{stats.averageTamingDifficulty}</div>
            <div className="text-gray-600">平均驯服难度</div>
          </div>
        </div>

        {/* 顶级妖兽 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">顶级妖兽</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">最危险</h3>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  危险 {stats.mostDangerous.dangerLevel}/10
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                  ⚠️
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{stats.mostDangerous.name}</h4>
                  <p className="text-gray-600 text-sm">{stats.mostDangerous.type} · {stats.mostDangerous.grade}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">最珍贵</h3>
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
                  <p className="text-gray-600 text-sm">{stats.mostValuable.type} · {stats.mostValuable.grade}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">最难驯服</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                  难度 {stats.hardestToTame.tamingDifficulty}/10
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                  🔒
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{stats.hardestToTame.name}</h4>
                  <p className="text-gray-600 text-sm">{stats.hardestToTame.type} · {stats.hardestToTame.grade}</p>
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
                {Object.keys(beastCategories.byType).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* 等阶筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                等阶筛选
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
              >
                <option value="全部">全部等阶</option>
                {Object.keys(beastCategories.byGrade).map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>

            {/* 危险程度筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                危险程度
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                value={selectedDanger}
                onChange={(e) => setSelectedDanger(e.target.value)}
              >
                <option value="全部">全部危险度</option>
                {Object.keys(beastCategories.byDangerLevel).map(danger => (
                  <option key={danger} value={danger}>{danger}</option>
                ))}
              </select>
            </div>

            {/* 搜索 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                搜索妖兽
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-immortal-primary focus:border-transparent"
                placeholder="输入妖兽名称或能力..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 比较功能 */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">妖兽比较</h3>
              <button
                className={`px-4 py-2 rounded-lg ${compareMode ? 'bg-immortal-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setCompareMode(!compareMode)}
              >
                {compareMode ? '取消比较' : '比较妖兽'}
              </button>
            </div>

            {compareMode && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  value={compareBeast1}
                  onChange={(e) => setCompareBeast1(e.target.value)}
                >
                  <option value="">选择第一个妖兽</option>
                  {beasts.map(beast => (
                    <option key={beast.id} value={beast.id}>{beast.name}</option>
                  ))}
                </select>

                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  value={compareBeast2}
                  onChange={(e) => setCompareBeast2(e.target.value)}
                >
                  <option value="">选择第二个妖兽</option>
                  {beasts.map(beast => (
                    <option key={beast.id} value={beast.id}>{beast.name}</option>
                  ))}
                </select>

                <button
                  className="px-4 py-2 bg-immortal-primary text-white rounded-lg hover:bg-immortal-dark transition-colors"
                  onClick={handleCompare}
                  disabled={!compareBeast1 || !compareBeast2}
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
                    <h5 className="font-medium mb-2">{comparisonResult.beast1.name}</h5>
                    <div className="space-y-2">
                      <div><span className="font-medium">类型：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getTypeColor(comparisonResult.beast1.type) }}>
                          {comparisonResult.beast1.type}
                        </span>
                      </div>
                      <div><span className="font-medium">危险度：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getDangerColor(comparisonResult.beast1.dangerLevel) }}>
                          {comparisonResult.beast1.dangerLevel}/10
                        </span>
                      </div>
                      <div><span className="font-medium">价值：</span>{comparisonResult.beast1.value}/10</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">{comparisonResult.beast2.name}</h5>
                    <div className="space-y-2">
                      <div><span className="font-medium">类型：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getTypeColor(comparisonResult.beast2.type) }}>
                          {comparisonResult.beast2.type}
                        </span>
                      </div>
                      <div><span className="font-medium">危险度：</span>
                        <span className="px-2 py-1 rounded text-white text-sm ml-2" style={{ backgroundColor: getDangerColor(comparisonResult.beast2.dangerLevel) }}>
                          {comparisonResult.beast2.dangerLevel}/10
                        </span>
                      </div>
                      <div><span className="font-medium">价值：</span>{comparisonResult.beast2.value}/10</div>
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
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 妖兽列表 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  妖兽列表 ({filteredBeasts.length})
                </h2>
              </div>
              
              <div className="divide-y">
                {filteredBeasts.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    没有找到符合条件的妖兽
                  </div>
                ) : (
                  filteredBeasts.map(beast => (
                    <div 
                      key={beast.id}
                      className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${selectedBeast?.id === beast.id ? 'bg-blue-50' : ''}`}
                      onClick={() => handleBeastSelect(beast.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{beast.name}</h3>
                          {beast.aliases.length > 0 && (
                            <p className="text-gray-600 text-sm mt-1">
                              别名：{beast.aliases.join('、')}
                            </p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <span 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: getTypeColor(beast.type) }}
                          >
                            {beast.type}
                          </span>
                          <span 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: getGradeColor(beast.grade) }}
                          >
                            {beast.grade}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mt-3">{beast.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">对应境界：</span>
                          <span className="font-medium">{beast.cultivationLevel || '未知'}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">危险程度：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: getDangerColor(beast.dangerLevel) + '20',
                              color: getDangerColor(beast.dangerLevel)
                            }}
                          >
                            {beast.dangerLevel}/10
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">驯服难度：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: getTamingColor(beast.tamingDifficulty) + '20',
                              color: getTamingColor(beast.tamingDifficulty)
                            }}
                          >
                            {beast.tamingDifficulty}/10
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 mr-2">价值：</span>
                          <span 
                            className="font-medium px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: getValueColor(beast.value) + '20',
                              color: getValueColor(beast.value)
                            }}
                          >
                            {beast.value}/10
                          </span>
                        </div>
                      </div>
                      
                      {beast.abilities.length > 0 && (
                        <div className="mt-4">
                          <span className="text-gray-600">能力：</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {beast.abilities.slice(0, 3).map((ability, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-immortal-light text-immortal-dark rounded-full text-sm"
                              >
                                {ability}
                              </span>
                            ))}
                            {beast.abilities.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                +{beast.abilities.length - 3}更多
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {beast.habitat.length > 0 && (
                        <div className="mt-4">
                          <span className="text-gray-600">栖息地：</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {beast.habitat.slice(0, 3).map((habitat, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                              >
                                {habitat}
                              </span>
                            ))}
                            {beast.habitat.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                +{beast.habitat.length - 3}处
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

          {/* 妖兽详情 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedBeast ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedBeast.name} 详情
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
                              style={{ backgroundColor: getTypeColor(selectedBeast.type) }}
                            >
                              {selectedBeast.type}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">等阶</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded text-white text-sm"
                              style={{ backgroundColor: getGradeColor(selectedBeast.grade) }}
                            >
                              {selectedBeast.grade}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">属性</div>
                          <div className="font-medium">{selectedBeast.attribute}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">对应境界</div>
                          <div className="font-medium">{selectedBeast.cultivationLevel || '未知'}</div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">危险程度</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: getDangerColor(selectedBeast.dangerLevel) + '20',
                                color: getDangerColor(selectedBeast.dangerLevel)
                              }}
                            >
                              {selectedBeast.dangerLevel}/10
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">价值</div>
                          <div className="font-medium">
                            <span 
                              className="px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: getValueColor(selectedBeast.value) + '20',
                                color: getValueColor(selectedBeast.value)
                              }}
                            >
                              {selectedBeast.value}/10
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 妖兽描述 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">妖兽描述</h3>
                      <p className="text-gray-700">{selectedBeast.description}</p>
                    </div>

                    {/* 能力 */}
                    {selectedBeast.abilities.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">能力</h3>
                        <div className="space-y-2">
                          {selectedBeast.abilities.map((ability, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{ability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 弱点 */}
                    {selectedBeast.weaknesses && selectedBeast.weaknesses.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">弱点</h3>
                        <div className="space-y-2">
                          {selectedBeast.weaknesses.map((weakness, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{weakness}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 栖息地 */}
                    {selectedBeast.habitat.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">栖息地</h3>
                        <div className="space-y-2">
                          {selectedBeast.habitat.map((habitat, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{habitat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 驯服成功率预测 */}
                    {tamingPrediction && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">驯服成功率预测</h3>
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">驯兽师等级：</span>
                            <div className="flex space-x-2">
                              {[1, 3, 5, 7, 9].map(level => (
                                <button
                                  key={level}
                                  className={`px-3 py-1 rounded ${tamerLevel === level ? 'bg-immortal-primary text-white' : 'bg-gray-100 text-gray-700'}`}
                                  onClick={() => handleTamerLevelChange(level)}
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
                                <div className="text-gray-600 text-sm">基础驯服难度</div>
                                <div className="font-medium">{tamingPrediction.baseDifficulty}/10</div>
                              </div>
                              <div className="text-2xl">→</div>
                              <div>
                                <div className="text-gray-600 text-sm">预计成功率</div>
                                <div className="font-medium text-blue-700">{tamingPrediction.adjustedSuccessRate}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm mb-2">影响因素：</div>
                          <ul className="space-y-1">
                            {tamingPrediction.factors.map((factor: string, index: number) => (
                              <li key={index} className="text-gray-700 text-sm">• {factor}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* 克制妖兽 */}
                    {counterBeasts.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">克制妖兽</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          以下妖兽可能克制{selectedBeast.name}（{selectedBeast.attribute}属性）：
                        </p>
                        <div className="space-y-3">
                          {counterBeasts.slice(0, 3).map(beast => (
                            <div 
                              key={beast.id}
                              className="p-3 border border-gray-200 rounded-lg hover:border-red-500 cursor-pointer transition-colors"
                              onClick={() => handleBeastSelect(beast.id)}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-800">{beast.name}</span>
                                <span className="text-gray-600 text-sm">{beast.type}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{beast.grade} · 危险度{beast.dangerLevel}/10</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 妖兽组合 */}
                    {beastCombinations.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">推荐组合</h3>
                        <div className="space-y-3">
                          {beastCombinations.map((combo, index) => (
                            <div key={index} className="p-3 border border-gray-200 rounded-lg">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {combo.beasts
                                  .filter(b => b.id !== selectedBeast.id)
                                  .map(beast => (
                                    <span 
                                      key={beast.id}
                                      className="px-3 py-1 bg-immortal-light text-immortal-dark rounded-full text-sm cursor-pointer hover:bg-immortal-primary hover:text-white"
                                      onClick={() => handleBeastSelect(beast.id)}
                                    >
                                      {beast.name}
                                    </span>
                                  ))
                                }
                              </div>
                              <div className="space-y-2">
                                {combo.combinedAbilities.map((ability: string, idx: number) => (
                                  <div key={idx} className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                                    <span className="text-gray-700 text-sm">{ability}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-3 flex justify-between items-center">
                                <span className="text-sm text-gray-600">协同效果：</span>
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                  {combo.synergy}/10
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 进化路径 */}
                    {evolutionPaths.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">进化路径</h3>
                        <div className="space-y-3">
                          {evolutionPaths.map((path, index) => (
                            <div key={index} className="p-3 border border-gray-200 rounded-lg">
                              <div className="mb-3">
                                <div className="flex items-center">
                                  <span className="font-medium">{path.current.name}</span>
                                  <span className="mx-2 text-gray-400">→</span>
                                  <span className="font-medium text-purple-600">
                                    {path.nextStage?.name || '下一阶段'}
                                  </span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {path.evolutionConditions.map((condition: string, idx: number) => (
                                  <div key={idx} className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                                    <span className="text-gray-700 text-sm">{condition}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 可获取材料 */}
                    {selectedBeast.materials && selectedBeast.materials.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">可获取材料</h3>
                        <div className="space-y-2">
                          {selectedBeast.materials.map((material, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{material}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 相关事件 */}
                    {selectedBeast.relatedEvents && selectedBeast.relatedEvents.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">相关事件</h3>
                        <div className="space-y-2">
                          {selectedBeast.relatedEvents.map((event, index) => (
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
                  <div className="text-5xl mb-4">🐉</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">选择妖兽查看详情</h3>
                  <p className="text-gray-600">
                    点击左侧列表中的妖兽，查看详细信息、能力和驯服成功率
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 类型分布 */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">妖兽类型分布</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(beastCategories.byType).map(([type, beastsList]) => {
                if (beastsList.length === 0) return null;
                
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
                      {type === '妖兽' ? '🐺' : 
                       type === '灵兽' ? '🦊' : 
                       type === '神兽' ? '🐉' : 
                       type === '凶兽' ? '👹' : 
                       type === '魔兽' ? '😈' : '🦄'}
                    </div>
                    <div className="font-bold text-lg" style={{ color: getTypeColor(type) }}>
                      {type}
                    </div>
                    <div className="text-gray-600">{beastsList.length}种妖兽</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 导航链接 */}
        <div className="mt-12 flex justify-center space-x-4">
          <Link href="/pills">
            <a className="px-6 py-3 bg-immortal-primary text-white rounded-lg hover:bg-immortal-dark transition-colors">
              查看丹药灵药
            </a>
          </Link>
          <Link href="/techniques">
            <a className="px-6 py-3 bg-white text-immortal-primary border border-immortal-primary rounded-lg hover:bg-immortal-light transition-colors">
              查看功法体系
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

export default BeastsPage;