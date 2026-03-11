# 🌍 Global Watch - OSINT情报平台

> 开源情报（OSINT）实时监控与分析平台

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📡 简介

Global Watch 是一个开源情报（Open Source Intelligence）实时监控平台，提供：
- 🗺️ **3D地球可视化** - Three.js 3D地球 + Leaflet 2D地图
- 📰 **实时情报流** - 聚合多源情报数据
- 📊 **市场数据** - 原油、黄金、加密货币、股指
- ⚠️ **威胁告警** - 风险等级评估与实时告警

## 🖥️ 在线演示

- **阿里云部署**: http://8.140.50.83/
- **本地运行**: 打开 `index.html` 即可

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, Vanilla JavaScript
- **3D引擎**: Three.js
- **地图**: Leaflet.js
- **数据源**: 东方财富, 新浪微博, Twitter, GDELT

## 📂 项目结构

```
global-watch/
├── index.html          # 主页面（3D地球+数据面板）
├── src/
│   └── api.js         # API数据获取模块
├── data/
│   └── sources.json   # 情报源配置
├── docs/
│   └── API.md         # API文档
└── README.md
```

## 🔧 数据源

### 中国源
| 数据源 | 类型 | 状态 |
|--------|------|------|
| 微博热搜 | 社交媒体 | ✅ 在线 |
| 知乎热榜 | 问答 | ✅ 在线 |
| 百度搜索 | 搜索趋势 | ✅ 在线 |
| 今日头条 | 新闻 | ✅ 在线 |
| 天眼查 | 企业信息 | ⚠️ 需代理 |

### 国际源
| 数据源 | 类型 | 状态 |
|--------|------|------|
| GDELT | 全球事件 | ✅ 在线 |
| LiveUAMap | 冲突地图 | ✅ 在线 |
| Twitter | 社交媒体 | ⚠️ 需代理 |
| NewsAPI | 全球新闻 | ⚠️ 需代理 |

### 威胁情报
| 数据源 | 类型 | 状态 |
|--------|------|------|
| Shodan | IoT设备 | ⚠️ 需代理 |
| 微步在线 | 威胁情报 | ✅ 在线 |
| VirusTotal | 恶意软件 | ⚠️ 需代理 |

## 🚀 部署

### 本地运行
```bash
# 直接打开
open index.html
# 或使用简单服务器
python -m http.server 8080
```

### 服务器部署
```bash
# 上传到服务器
scp index.html user@your-server:/var/www/html/

# 或使用 Docker
docker run -d -p 80:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
```

## 🎯 核心功能

### 1. 3D地球模式
- 拖拽旋转查看全球情报源分布
- 点击标记点查看详情
- 自动旋转展示

### 2. 2D地图模式
- Leaflet深色主题
- 圆形标记显示情报源位置
- 弹出详情卡片

### 3. 情报流
- 实时更新告警信息
- 分类筛选（全部/中国/国际/威胁）
- 风险等级评估

### 4. 市场数据
- WTI原油价格
- 黄金价格
- 比特币价格
- 主要股指（上证、深证、恒生、道琼斯）

## 🔐 注意事项

1. **CORS限制**: 部分数据源需要代理或VPN
2. **数据准确性**: 模拟数据用于演示，生产环境请对接真实API
3. **API频率**: 请遵守各平台API调用限制

## 📜 更新日志

### v1.0.0 (2026-03-11)
- ✅ 3D地球可视化（Three.js）
- ✅ 2D地图（Leaflet）
- ✅ 情报源列表与筛选
- ✅ 市场数据展示
- ✅ 实时告警系统
- ✅ 微博/知乎热搜

## 📄 许可证

MIT License

---

**维护者**: OpenClaw Agent  
**更新**: 2026-03-11
