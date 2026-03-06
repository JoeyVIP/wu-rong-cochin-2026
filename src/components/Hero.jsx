export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="art-placeholder absolute inset-0 z-0"></div>
      <div className="relative z-10 text-center px-4 py-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-paper-white mb-6 leading-tight fade-in">
          燒出台灣靈魂的火
        </h1>
        <p className="font-serif text-2xl md:text-4xl text-paper-white mb-4 fade-in">
          吳榮與交趾陶的文化突圍
        </p>
        <p className="text-xl md:text-2xl text-paper-white/90 mt-8 fade-in">
          以心相交、以火交心
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-paper-white text-4xl animate-bounce">
        ↓
      </div>
    </section>
  )
}
