export default function Alchemy() {
  const innovations = [
    {
      title: '寶石釉',
      description: '融合西方琺瑯的剔透與東方氣韻，超過 100 種釉色的研發能力，每一種都是獨一無二的化學配方。',
      icon: '💎'
    },
    {
      title: '無鉛釉藥',
      description: '率先實現無鉛釉藥與高溫燒製的化學突破，既保護環境，又提升作品的永久保存性。',
      icon: '🌿'
    },
    {
      title: '奈米黏土',
      description: '創新應用奈米黏土賦予作品極致強度，實現《齊天大聖》、《雲童》等作品中突破重力限制的動態張力。',
      icon: '⚡'
    },
  ]

  return (
    <section id="alchemy" className="min-h-screen bg-ink-black text-paper-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heavy Block - 標題與科學化敘事 */}
        <div className="fade-in mb-20">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">煉金術工藝</h2>
          <p className="font-serif text-xl md:text-2xl text-paper-white/90 leading-relaxed max-w-3xl">
            這不是傳統工藝，而是火與礦物的化學實驗。吳榮將交趾陶提升為一門精確的科學，
            每一次燒製都是對溫度、時間、材料的極致掌控。
          </p>
        </div>

        {/* Empty Block - 留白與視覺焦點 */}
        <div className="fade-in mb-20 py-32 text-center">
          <div className="art-placeholder w-full h-96 rounded-lg mb-8"></div>
          <p className="font-serif text-2xl md:text-3xl text-crimson-red italic">
            "1300°C 高溫下的完美控制"
          </p>
        </div>

        {/* Heavy Block - 材料創新 */}
        <div className="fade-in mb-20">
          <h3 className="font-serif text-3xl md:text-4xl mb-12">技術護城河</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((item, index) => (
              <div key={index} className="fade-in bg-paper-white/10 p-8 rounded-lg backdrop-blur-sm" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="text-6xl mb-4">{item.icon}</div>
                <h4 className="font-serif text-2xl md:text-3xl text-crimson-red mb-4">{item.title}</h4>
                <p className="text-base md:text-lg text-paper-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Empty Block */}
        <div className="py-20"></div>

        {/* Heavy Block - 工藝細節 */}
        <div className="fade-in">
          <h3 className="font-serif text-3xl md:text-4xl mb-8">燒製流程</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-imperial-gold pl-8 py-4">
              <h4 className="font-serif text-xl md:text-2xl mb-2">1. 雕塑成型</h4>
              <p className="text-base md:text-lg text-paper-white/80">精密的手工雕塑，每一個細節都經過反覆推敲。</p>
            </div>
            <div className="border-l-4 border-imperial-gold pl-8 py-4">
              <h4 className="font-serif text-xl md:text-2xl mb-2">2. 釉藥調配</h4>
              <p className="text-base md:text-lg text-paper-white/80">根據作品需求，調配獨特的寶石釉配方。</p>
            </div>
            <div className="border-l-4 border-imperial-gold pl-8 py-4">
              <h4 className="font-serif text-xl md:text-2xl mb-2">3. 高溫燒製</h4>
              <p className="text-base md:text-lg text-paper-white/80">1300°C 高溫窯燒，嚴格控制溫度曲線與氧化還原氣氛。</p>
            </div>
            <div className="border-l-4 border-imperial-gold pl-8 py-4">
              <h4 className="font-serif text-xl md:text-2xl mb-2">4. 冷卻定型</h4>
              <p className="text-base md:text-lg text-paper-white/80">緩慢冷卻，確保釉色穩定與結構完整。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
