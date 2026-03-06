export default function Collections() {
  const series = [
    {
      title: '經典神話',
      subtitle: 'Classic Mythology',
      description: '以《齊天大聖》為代表，融合戲曲「五法」（手、眼、身、步、法）的身段張力，捕捉神話人物的能量爆發瞬間。',
      works: ['齊天大聖', '東海龍王', '九龍如意']
    },
    {
      title: '當代微縮',
      subtitle: 'Modern Miniature',
      description: '《雲童》系列（春、夏、秋、冬）論述「虛與實」的哲學結合，呈現生命與時光流逝的輪迴循環。',
      works: ['雲童·春', '雲童·夏', '雲童·秋', '雲童·冬']
    },
    {
      title: '在地敘事',
      subtitle: 'Local Narrative',
      description: '《相親》、《出嫁》等作品轉譯台灣女性生命歷程，鳳袍紋樣的細緻度展現工藝的極致追求。',
      works: ['相親', '出嫁', '台灣女性生命圖像']
    },
  ]

  const patterns = [
    { name: '雲紋', meaning: '吉祥如意，步步高升', detail: '每一朵雲都經過手工雕刻，立體層次分明' },
    { name: '龍鱗', meaning: '權威尊貴，王者之氣', detail: '1mm 精度的鱗片排列，展現極致工藝' },
    { name: '鳳袍', meaning: '華貴優雅，女性力量', detail: '超過 50 種紋樣組合，每件獨一無二' },
  ]

  return (
    <section id="collections" className="min-h-screen bg-paper-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heavy Block - 標題與系列定義 */}
        <div className="fade-in mb-20">
          <h2 className="font-serif text-5xl md:text-7xl text-ink-black mb-8">系列典藏</h2>
          <p className="font-serif text-xl md:text-2xl text-ink-black/80 leading-relaxed max-w-3xl">
            每一件作品都是文化資產，承載著深刻的哲學思考與藝術表達。
            我們將單品提升至系列高度,透過學術化的藝術分類，賦予作品永恆的文化價值。
          </p>
        </div>

        {/* Heavy Block - 三大系列 */}
        <div className="space-y-32 mb-32">
          {series.map((s, index) => (
            <div key={index} className="fade-in" style={{ transitionDelay: `${index * 200}ms` }}>
              {/* Empty Block - 視覺圖片區 */}
              <div className="mb-8">
                <div className="art-placeholder w-full h-96 md:h-[500px] rounded-lg"></div>
              </div>

              {/* Heavy Block - 系列論述 */}
              <div className="bg-ink-black/5 p-8 md:p-12 rounded-lg">
                <h3 className="font-serif text-3xl md:text-5xl text-crimson-red mb-2">{s.title}</h3>
                <p className="font-sans text-lg md:text-xl text-ink-black/60 mb-6">{s.subtitle}</p>
                <p className="text-lg md:text-xl text-ink-black/80 leading-relaxed mb-6">{s.description}</p>
                <div className="flex flex-wrap gap-3">
                  {s.works.map((work, i) => (
                    <span key={i} className="font-serif px-4 py-2 bg-crimson-red/10 text-crimson-red rounded-full text-sm md:text-base">
                      {work}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Block */}
        <div className="py-32 text-center fade-in">
          <p className="font-serif text-3xl md:text-5xl text-ink-black italic">
            "每一個細節都是匠心"
          </p>
        </div>

        {/* Heavy Block - 紋樣學 */}
        <div className="fade-in">
          <h3 className="font-serif text-3xl md:text-4xl text-ink-black mb-12">紋樣學</h3>
          <p className="text-lg md:text-xl text-ink-black/70 mb-12 max-w-3xl">
            微距視角下的吉祥寓意與工藝複雜度
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {patterns.map((pattern, index) => (
              <div key={index} className="fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="art-placeholder w-full h-64 rounded-lg mb-4"></div>
                <h4 className="font-serif text-2xl md:text-3xl text-ink-black mb-2">{pattern.name}</h4>
                <p className="text-sm md:text-base text-imperial-gold mb-2">{pattern.meaning}</p>
                <p className="text-sm md:text-base text-ink-black/70">{pattern.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
