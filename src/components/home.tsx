import { Mail } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-blue-500 rounded-full opacity-80"></div>
            <div className="absolute inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 rounded-full opacity-60"></div>
          </div>
          <span className="text-xl font-semibold text-gray-800">Euphoria World</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
            About
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
            Our Brands
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
            What We Do
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
            Team
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
            Careers
          </a>
        </nav>

        {/* Mail Icon */}
        <div className="bg-orange-500 p-3 rounded-lg">
          <Mail className="w-6 h-6 text-white" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
        {/* Dotted Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-32 left-40 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-16 left-60 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute top-40 left-80 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-24 right-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-36 right-40 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-20 right-60 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute top-44 right-80 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-52 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-16 right-32 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-28 right-52 w-1 h-1 bg-white rounded-full"></div>
        </div>

        <div className="relative px-6 py-24 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Where <span className="text-orange-500">Vision</span> Becomes Venture
          </h1>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Euphoria World builds and nurtures independent brands that do more than compete they connect, inspire, and
            redefine the emotional and cultural fabric of everyday life
          </p>
          <button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
            Discover Our Vision
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="bg-orange-500 text-white px-4 py-2 rounded-md inline-block text-sm font-medium mb-6">
                What We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Not a Product. Not a Platform. <span className="text-orange-500">A Philosophy</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Euphoria World is the invisible architecture behind transformative brand cultivating ideas, people, and
                systems that create meaningful impact across diverse industries. From wellness to culture, from
                technology to aesthetics we operate at the intersection of feeling and future
              </p>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="flex items-center justify-center">
                {/* Person Illustration */}
                <div className="relative">
                  {/* Person */}
                  <div className="relative z-10">
                    {/* Head */}
                    <div className="w-16 h-16 bg-orange-200 rounded-full mb-2 mx-auto relative">
                      <div className="absolute top-2 left-4 w-2 h-2 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-2 right-4 w-2 h-2 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-600 rounded-full"></div>
                      {/* Hair */}
                      <div className="absolute -top-2 left-2 right-2 h-6 bg-gray-800 rounded-t-full"></div>
                    </div>

                    {/* Body */}
                    <div className="w-20 h-24 bg-purple-500 rounded-lg mx-auto relative">
                      {/* Shirt */}
                      <div className="absolute top-4 left-2 right-2 h-16 bg-white rounded"></div>
                      {/* Arm pointing */}
                      <div className="absolute -right-8 top-8 w-12 h-4 bg-orange-200 rounded-full transform rotate-12"></div>
                      <div className="absolute -right-12 top-6 w-6 h-6 bg-orange-200 rounded-full"></div>
                    </div>

                    {/* Legs */}
                    <div className="w-20 h-16 mx-auto relative">
                      <div className="absolute left-2 top-0 w-6 h-16 bg-gray-800 rounded-b-lg"></div>
                      <div className="absolute right-2 top-0 w-6 h-16 bg-gray-800 rounded-b-lg"></div>
                    </div>
                  </div>

                  {/* Rocket */}
                  <div className="absolute -right-16 -top-8">
                    <div className="relative">
                      {/* Rocket body */}
                      <div className="w-12 h-20 bg-gray-200 rounded-t-full relative">
                        <div className="absolute top-2 left-2 right-2 h-4 bg-orange-500 rounded-t-full"></div>
                        <div className="absolute top-8 left-1 right-1 h-8 bg-white rounded border-2 border-gray-300">
                          <div className="absolute top-1 left-1 right-1 h-1 bg-gray-300 rounded"></div>
                          <div className="absolute top-3 left-1 right-1 h-1 bg-gray-300 rounded"></div>
                          <div className="absolute top-5 left-1 right-1 h-1 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                      {/* Rocket fins */}
                      <div className="absolute -bottom-2 -left-1 w-3 h-4 bg-orange-500 transform -skew-x-12"></div>
                      <div className="absolute -bottom-2 -right-1 w-3 h-4 bg-orange-500 transform skew-x-12"></div>
                    </div>
                  </div>

                  {/* Bar Charts */}
                  <div className="absolute -right-32 top-12 flex items-end gap-1">
                    <div className="w-4 h-8 bg-purple-600 rounded-t"></div>
                    <div className="w-4 h-12 bg-purple-600 rounded-t"></div>
                    <div className="w-4 h-16 bg-purple-600 rounded-t"></div>
                    <div className="w-4 h-20 bg-purple-600 rounded-t"></div>
                    <div className="w-4 h-24 bg-purple-600 rounded-t"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
