export default function Lineage() {
  const timeline = [
    { year: '清代', title: '葉王', description: '台灣交趾陶藝術奠基者，首件私人國寶持有者' },
    { year: '1981', title: '師從林添木', description: '延續寶石釉命脈，承傳葉王絕學' },
    { year: '1993', title: '獲民族工藝獎', description: '作品《東海龍王》確立藝術界地位' },
    { year: '1995', title: '康乃爾大學獻禮', description: '《九龍如意》獲選為李登輝總統訪美禮品' },
    { year: '2017', title: '文化部登錄保存者', description: '傳統藝術（交趾陶）國家級認證' },
    { year: '2024', title: '史懷哲藝術與科學獎章', description: '國際認證工藝科學與藝術卓越貢獻' },
  ]

  return (
    <section id="lineage" className="min-h-screen bg-paper-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heavy Block - 標題與論述 */}
        <div className="fade-in mb-20">
          <h2 className="font-serif text-5xl md:text-7xl text-ink-black mb-8">宗師系譜</h2>
          <p className="font-serif text-xl md:text-2xl text-ink-black/80 leading-relaxed max-w-3xl">
            從葉王到吳榮，這不僅是技藝的傳承，更是台灣交趾陶文化的歷史護城河。
            三代匠師的學術權威，將寶石釉的煉金術延續至當代，成就國際認可的工藝高峰。
          </p>
        </div>

        {/* Empty Block - 留白與引言 */}
        <div className="fade-in mb-20 py-32 text-center">
          <p className="font-serif text-3xl md:text-5xl text-crimson-red italic">
            "承襲葉王國寶之魂，燒出當代台灣之光"
          </p>
        </div>

        {/* Heavy Block - 博物館年表 */}
        <div className="fade-in">
          <h3 className="font-serif text-3xl md:text-4xl text-ink-black mb-12">歷史年表</h3>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="border-l-4 border-crimson-red pl-8 py-4 fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="font-serif text-2xl md:text-3xl text-imperial-gold mb-2">{event.year}</div>
                <h4 className="font-serif text-xl md:text-2xl text-ink-black mb-2">{event.title}</h4>
                <p className="text-base md:text-lg text-ink-black/70">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Empty Block - 大量留白 */}
        <div className="py-32"></div>

        {/* Heavy Block - 學術背書 */}
        <div className="fade-in bg-ink-black/5 p-8 md:p-12 rounded-lg">
          <h3 className="font-serif text-2xl md:text-3xl text-ink-black mb-4">學術權威</h3>
          <p className="text-lg md:text-xl text-ink-black/80 leading-relaxed">
            大師碩士論文《吳榮交趾陶匠藝研究》系統性地記錄並分析了這門古老技藝的當代變革，
            成為交趾陶研究的重要學術文獻，確立了吳榮「學者型工藝家」的國際地位。
          </p>
        </div>
      </div>
    </section>
  )
}
