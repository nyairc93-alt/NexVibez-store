import CountdownTimer from './components/CountdownTimer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            NexVibez
          </div>
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base">
            Shop Now
          </button>
        </nav>
      </header>

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-accent-500/30">
              LIMITED TIME FLASH SALE
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Elevate Your Style
              <br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Premium Collection
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover exclusive sneakers and luxury watches crafted for those who demand excellence. Limited quantities available.
            </p>

            <div className="mb-8 sm:mb-12 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-2xl p-6 sm:p-8 border border-accent-500/30">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Sale Ends In</h3>
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-accent-600 to-accent-500 text-white rounded-xl font-bold text-base sm:text-lg hover:from-accent-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-accent-500/50">
                Buy Now - 40% Off
              </button>
              <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white/10 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-8 sm:mb-16">
            Featured Collections
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-primary-500 transition-all duration-500">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Premium Sneakers</h3>
                  <span className="px-3 py-1 bg-accent-500 text-white rounded-full text-xs sm:text-sm font-bold">
                    40% OFF
                  </span>
                </div>
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  Handcrafted Italian leather sneakers designed for comfort and style. Limited edition colorways available exclusively at NexVibez.
                </p>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium Italian leather construction
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Memory foam insole technology
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Limited edition exclusive designs
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl font-bold text-white">$179</span>
                  <span className="text-xl sm:text-2xl text-gray-500 line-through">$299</span>
                </div>
                <button className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold text-sm sm:text-base hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/50">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-primary-500 transition-all duration-500">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Luxury Watches</h3>
                  <span className="px-3 py-1 bg-accent-500 text-white rounded-full text-xs sm:text-sm font-bold">
                    40% OFF
                  </span>
                </div>
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  Swiss-engineered timepieces featuring automatic movements and sapphire crystal. Each watch comes with a lifetime warranty.
                </p>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Swiss automatic movement
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Scratch-resistant sapphire crystal
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Lifetime warranty included
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl font-bold text-white">$899</span>
                  <span className="text-xl sm:text-2xl text-gray-500 line-through">$1,499</span>
                </div>
                <button className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold text-sm sm:text-base hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/50">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">
            Why Choose NexVibez?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Secure Payments</h3>
              <p className="text-sm sm:text-base text-gray-400">Industry-leading encryption for all transactions</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Free Shipping</h3>
              <p className="text-sm sm:text-base text-gray-400">Complimentary worldwide express delivery</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Authenticity Guaranteed</h3>
              <p className="text-sm sm:text-base text-gray-400">100% genuine products with certificate</p>
            </div>
          </div>
          <button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-accent-600 to-accent-500 text-white rounded-xl font-bold text-base sm:text-lg hover:from-accent-700 hover:to-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-accent-500/50">
            Shop the Sale Now
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">NexVibez</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Premium sneakers and luxury watches for the discerning individual.
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 NexVibez. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
