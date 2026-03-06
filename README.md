# 吳榮交趾陶 Wu Rong Cochin Ceramics

頂級交趾陶藝術品牌官方網站

## 專案概述

本網站對標國際頂級工藝品牌（如 MEISSEN），透過策展式敘事展現吳榮大師的交趾陶藝術成就。

### 核心價值

**以心相交、以火交心**

### 四大敘事主軸

1. **宗師系譜（The Lineage）** - 從葉王到吳榮的歷史傳承
2. **煉金術工藝（The Alchemy）** - 寶石釉的科學與藝術
3. **系列典藏（Collections）** - 學術化的藝術分類
4. **私人定製（Bespoke）** - 針對高端藏家的定製服務

## 技術棧

- **前端框架**: React 18
- **CSS 框架**: Tailwind CSS + @tailwindcss/postcss
- **建置工具**: Vite 7
- **部署平台**: Render

## 設計特色

### 視覺節奏（Editorial Layout）

- **Heavy Block（重）**: 高密度文案論述結合微距細節攝影
- **Empty Block（輕）**: 大量留白與單句藝術引言

### 動畫效果

- **Scroll Reveal**: 1000ms 緩慢淡入動畫
- 模擬博物館級的沉浸式觀賞體驗

### 色彩系統

- **胭脂紅** (#A83E3E) - 主視覺錨點
- **墨黑** (#2D2D2D) - 深度與權威
- **宣紙白** (#FAFAF9) - 留白與呼吸感
- **帝王黃** (#B8860B) - 點綴與尊貴
- **翡翠綠** (#065F46) - 輔助色

### 字體規範

- **標題**: Noto Serif TC（思源宋體）
- **內文**: Noto Sans TC（思源黑體）

## 本地開發

### 安裝依賴

```bash
npm install
```

### 開發伺服器

```bash
npm run dev
```

### 建置生產版本

```bash
npm run build
```

### 預覽生產建置

```bash
npm run preview
```

## 部署

本專案使用 Render 進行靜態網站部署。

### Render 設定

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18+

## 專案結構

```
wu-rong-cochin/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # 導航列
│   │   ├── Hero.jsx          # Hero Section
│   │   ├── Lineage.jsx       # 宗師系譜
│   │   ├── Alchemy.jsx       # 煉金術工藝
│   │   ├── Collections.jsx   # 系列典藏
│   │   └── Bespoke.jsx       # 私人定製
│   ├── App.jsx               # 主應用
│   ├── App.css               # 全域樣式
│   ├── index.css             # Tailwind 入口
│   └── main.jsx              # React 入口
├── public/                   # 靜態資源
├── dist/                     # 建置輸出
└── README.md
```

## 響應式設計

網站完全支援桌面版和手機版：

- **手機版**: 漢堡選單、單欄佈局
- **平板版**: 雙欄佈局
- **桌面版**: 多欄佈局、水平導航

### 斷點

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 授權

© 2026 吳榮交趾陶 Wu Rong Cochin Ceramics. All Rights Reserved.
