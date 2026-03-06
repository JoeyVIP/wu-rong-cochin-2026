import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-paper-white font-serif text-2xl md:text-3xl cursor-pointer" onClick={() => scrollToSection('hero')}>
            吳榮交趾陶
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('lineage')} className="text-paper-white hover:text-crimson-red transition-colors duration-300">
              宗師系譜
            </button>
            <button onClick={() => scrollToSection('alchemy')} className="text-paper-white hover:text-crimson-red transition-colors duration-300">
              煉金術工藝
            </button>
            <button onClick={() => scrollToSection('collections')} className="text-paper-white hover:text-crimson-red transition-colors duration-300">
              系列典藏
            </button>
            <button onClick={() => scrollToSection('bespoke')} className="text-paper-white hover:text-crimson-red transition-colors duration-300">
              私人定製
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-paper-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button onClick={() => scrollToSection('lineage')} className="block text-paper-white hover:text-crimson-red transition-colors duration-300 w-full text-left">
              宗師系譜
            </button>
            <button onClick={() => scrollToSection('alchemy')} className="block text-paper-white hover:text-crimson-red transition-colors duration-300 w-full text-left">
              煉金術工藝
            </button>
            <button onClick={() => scrollToSection('collections')} className="block text-paper-white hover:text-crimson-red transition-colors duration-300 w-full text-left">
              系列典藏
            </button>
            <button onClick={() => scrollToSection('bespoke')} className="block text-paper-white hover:text-crimson-red transition-colors duration-300 w-full text-left">
              私人定製
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
