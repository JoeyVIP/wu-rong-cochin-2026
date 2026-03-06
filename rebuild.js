const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

console.log('🔄 開始重建網站...\n');

// 讀取 CMS 資料
const data = JSON.parse(fs.readFileSync('cms-data.json', 'utf-8'));
console.log('✅ 已讀取 CMS 資料');

// 掃描 templates/ 目錄
const templatesDir = path.join(__dirname, 'templates');
const templates = fs.readdirSync(templatesDir)
  .filter(f => f.endsWith('.mustache'));

console.log(`📁 找到 ${templates.length} 個模板檔案\n`);

templates.forEach(templateFile => {
  const template = fs.readFileSync(
    path.join(templatesDir, templateFile), 'utf-8'
  );

  // 渲染 Mustache 模板
  const html = Mustache.render(template, data);

  // 去掉 .mustache 後綴
  const outputFile = templateFile.replace('.mustache', '');
  fs.writeFileSync(outputFile, html, 'utf-8');
  console.log(`✅ 已重建: ${outputFile}`);
});

console.log('\n🎉 重建完成！');
