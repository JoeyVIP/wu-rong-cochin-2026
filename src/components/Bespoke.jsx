export default function Bespoke() {
  const services = [
    {
      title: '企業藝術牆',
      description: '為企業總部、高端會所打造大型藝術壁堵，展現品牌的文化底蘊與空間氣勢。',
      examples: ['齊天大聖大型壁堵', '九龍壁', '鳳凰來儀']
    },
    {
      title: '高端贈禮',
      description: '為政商界、外交場合訂製專屬贈禮，每件作品都是獨一無二的文化象徵。',
      examples: ['國禮訂製', '企業紀念品', '收藏級禮品']
    },
    {
      title: '私人收藏',
      description: '針對藏家需求，創作限量或單件作品，提供完整的收藏證書與保養指導。',
      examples: ['限量典藏', '單件委託', '系列收藏']
    },
  ]

  return (
    <section id="bespoke" className="min-h-screen bg-ink-black text-paper-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heavy Block - 標題與私人定製承諾 */}
        <div className="fade-in mb-20">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">私人定製</h2>
          <p className="font-serif text-xl md:text-2xl text-paper-white/90 leading-relaxed max-w-3xl">
            針對高淨值藏家（HNWIs）與企業客戶，我們提供從概念設計到完成交付的全程定製服務。
            每一件作品都是空間與文化的完美結合。
          </p>
        </div>

        {/* Empty Block - 視覺焦點 */}
        <div className="fade-in mb-20 py-32 text-center">
          <div className="art-placeholder w-full h-[500px] rounded-lg mb-8"></div>
          <p className="font-serif text-2xl md:text-3xl text-crimson-red italic">
            "從構思到燒製，每一步都是藝術"
          </p>
        </div>

        {/* Heavy Block - 服務項目 */}
        <div className="fade-in mb-32">
          <h3 className="font-serif text-3xl md:text-4xl mb-12">定製服務</h3>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="fade-in border-l-4 border-crimson-red pl-8 py-6" style={{ transitionDelay: `${index * 150}ms` }}>
                <h4 className="font-serif text-2xl md:text-3xl text-paper-white mb-4">{service.title}</h4>
                <p className="text-base md:text-lg text-paper-white/80 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  {service.examples.map((ex, i) => (
                    <span key={i} className="px-4 py-2 bg-imperial-gold/20 text-imperial-gold rounded-full text-sm md:text-base">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heavy Block - 工作室參訪 */}
        <div className="fade-in mb-32">
          <h3 className="font-serif text-3xl md:text-4xl mb-8">藝術朝聖地</h3>
          <div className="bg-paper-white/10 p-8 md:p-12 rounded-lg backdrop-blur-sm">
            <p className="text-lg md:text-xl text-paper-white/90 leading-relaxed mb-6">
              嘉義新港工作室採預約制開放，藏家可親臨現場感受交趾陶的創作過程，
              與吳榮大師面對面交流，深入理解每件作品背後的故事與工藝。
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h5 className="font-serif text-xl md:text-2xl text-crimson-red mb-3">參訪內容</h5>
                <ul className="space-y-2 text-base md:text-lg text-paper-white/80">
                  <li>• 工作室導覽</li>
                  <li>• 創作過程解說</li>
                  <li>• 大師面對面交流</li>
                  <li>• 作品鑑賞指導</li>
                </ul>
              </div>
              <div>
                <h5 className="font-serif text-xl md:text-2xl text-crimson-red mb-3">預約資訊</h5>
                <p className="text-base md:text-lg text-paper-white/80 mb-2">地點：嘉義縣新港鄉</p>
                <p className="text-base md:text-lg text-paper-white/80 mb-2">時間：預約制（需提前 7 天預約）</p>
                <p className="text-base md:text-lg text-paper-white/80">人數：每場限 6 人以內</p>
              </div>
            </div>
          </div>
        </div>

        {/* Heavy Block - 收藏證明 */}
        <div className="fade-in">
          <h3 className="font-serif text-3xl md:text-4xl mb-8">收藏保證</h3>
          <div className="bg-paper-white/10 p-8 md:p-12 rounded-lg backdrop-blur-sm">
            <p className="text-lg md:text-xl text-paper-white/90 leading-relaxed mb-6">
              每一件作品都附有吳榮大師親筆簽名的頂級象牙卡保證書，
              記錄作品的創作年份、釉色配方、尺寸規格等詳細資訊，賦予每件作品獨一無二的數位身分證明。
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h5 className="font-serif text-xl md:text-2xl text-imperial-gold mb-3">保證內容</h5>
                <ul className="space-y-2 text-base md:text-lg text-paper-white/80">
                  <li>✓ 大師親筆簽名</li>
                  <li>✓ 作品編號與創作日期</li>
                  <li>✓ 釉色配方記錄</li>
                  <li>✓ 尺寸與重量資訊</li>
                  <li>✓ 永久保養指導</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="art-placeholder w-full h-64 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
