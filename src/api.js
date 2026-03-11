/**
 * Global Watch API 模块
 * 负责获取各类实时数据
 */

const API = {
  // 东方财富行情API
  EASTMONEY: {
    // 股票行情
    quote: (code) => `https://push2.eastmoney.com/api/qt/stock/get?ut=fa5fd1943c7b386f172d6893dbfba10b&invt=2&fltt=2&fields=f43,f44,f45,f46,f47,f48,f49,f50,f51,f52,f57,f58,f59,f60&secid=${code}`,
    
    // 大宗商品
    commodity: () => 'https://push2ex.eastmoney.com/getTopicZDFenBu?ut=7eea3edcaed734bea9cbfc24409ed302&dession=01&mession=01',
    
    // 黄金
    gold: () => 'https://push2ex.eastmoney.com/getTopicZDFenBu?ut=7eea3edcaed734bea9cbfc24409ed302&dession=03&mession=03',
    
    // 外汇
    forex: () => 'https://push2ex.eastmoney.com/getTopicZDFenBu?ut=7eea3edcaed734bea9cbfc24409ed302&dession=02&mession=02',
  },
  
  // 指数API
  INDEX: {
    SH: '0.000001',   // 上证指数
    SZ: '0.399001',   // 深证成指
    HK: '0.139901',   // 恒生指数
    DJ: '0.139006',   // 道琼斯
    NDX: '0.139941',  // 纳斯达克
  },
  
  // 加密货币API (Binance)
  CRYPTO: {
    btc: 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT',
    eth: 'https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT',
  }
};

/**
 * 获取股票实时行情
 */
async function getStockQuote(code) {
  try {
    const secid = code.startsWith('6') ? `1.${code}` : `0.${code}`;
    const resp = await fetch(API.EASTMONEY.quote(secid));
    const data = await resp.json();
    
    if (data.data) {
      return {
        code: data.data.f57,
        name: data.data.f58,
        price: data.data.f43,
        change: data.data.f44,
        changePct: data.data.f45,
        volume: data.data.f46,
        amount: data.data.f47,
        high: data.data.f49,
        low: data.data.f50,
        open: data.data.f51,
        prevClose: data.data.f52,
      };
    }
    return null;
  } catch (e) {
    console.error('获取股票行情失败:', e);
    return null;
  }
}

/**
 * 获取市场数据
 */
async function getMarketData() {
  try {
    // 并行获取多个数据源
    const [oilRes, goldRes] = await Promise.all([
      fetch(API.EASTMONEY.commodity()),
      fetch(API.EASTMONEY.gold())
    ]);
    
    const oilData = await oilRes.json();
    const goldData = await goldRes.json();
    
    return {
      oil: oilData.data?.[0]?.zdf || 0,
      gold: goldData.data?.[0]?.zdf || 0,
      timestamp: new Date().toISOString(),
    };
  } catch (e) {
    console.error('获取市场数据失败:', e);
    return null;
  }
}

/**
 * 获取美伊冲突情报
 */
async function getIranConflictIntel() {
  // 这里可以接入真实的情报API
  // 目前返回模拟数据
  return {
    threatLevel: 5,
    probability: 95,
    lastUpdate: new Date().toISOString(),
    events: [
      { time: '2026-03-11', event: '霍尔木兹海峡航运量下降70%' },
      { time: '2026-03-10', event: '伊朗再次试射导弹' },
      { time: '2026-03-09', event: '美军增兵中东' },
    ]
  };
}

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { API, getStockQuote, getMarketData, getIranConflictIntel };
}
