import bg from '/bg.png'
import { Mail } from 'lucide-react'
const Front = () => {
    return (
        <div style={{ fontFamily: '"Afacad", sans-serif' }} className='min-h-screen font-afacad'>
            <div className=''>
                <img src={bg} className=' 2xl:h-[672px] xl:h-[554px] h-[530px] w-full xl:object-fit object-cover object-bottom-right absolute -z-10 mt-[-5px] top-0' />

                <div className='flex items-center justify-between 2xl:mx-[53px] xl:mx-[40px] lg:mx-[32px] sm:mx-[24px] gap-7'>
                    <header className="bg-white 2xl:w-[1633.33px] xl:w-[1225px] w-full 2xl:h-[97px] xl:h-[73px] h-[71px] sm:px-8 px-2 flex items-center justify-between mt-[20px] sm:mt-[40px] xl:rounded-[12px] rounded-[4px] text-[18px] mx-4 sm:mx-0">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-blue-500 rounded-full opacity-80"></div>
                                <div className="absolute inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 rounded-full opacity-60"></div>
                            </div>
                            <span style={{ fontFamily: '"Bruno Ace", cursive' }} className='2xl:text-[25px] xl:text-[18px] md:text-[12px] text-[16px] font-black' >Euphoria World</span>

                        </div>


                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center 2xl:gap-8 xl:gap-6 lg:gap-4 2xl:text-[24px] xl:text-[18px] text-[14px] ">
                            <a
                                href="#"
                                className="text-gray-800 border-b-8 2xl:py-6 lg:border-b-8 lg:py-5 rounded-b-md mt-1.5  border-[#391F60] font-medium hover:text-orange-500 transition-colors text-md"
                            >
                                Home
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-md">
                                About
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-md">
                                Our Brands
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-md">
                                What We Do
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-md">
                                Team
                            </a>
                            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-md">
                                Careers
                            </a>
                        </nav>
                        <button className="lg:hidden  hover:bg-gray-100 rounded-lg transition-colors">
                            <svg className="w-8 h-8  text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </header>
                    {/* Mail Icon */}
                    <div className="bg-[#F36719] hidden sm:flex p-3 2xl:h-[97px] xl:h-[73px] h-[71px] 2xl:w-[123px] xl:w-[92px] lg:w-[80px] sm:w-[70px] w-[60px] justify-center items-center z-10 mt-[40px] xl:rounded-[12px] rounded-[4px]">
                        <Mail className="w-[42px] h-[42px] text-white" />
                    </div>
                </div>

                <div className="relative xl:pt-[82px] pt-[35px] text-center 2xl:max-w-[1135px] xl:max-w-6xl lg:max-w-4xl sm:max-w-3xl max-w-sm mx-auto">
                    <h1 className="2xl:text-[94px] xl:text-[70px] md:text-[42px] sm:text-[42px] text-[48px] font-bold text-white sm:mb-8 mb-4 leading-tight">
                        Where <span className="text-orange-500">Vision</span> Becomes Venture
                    </h1>
                    <p className="2xl:text-[24px] text-[18px] text-gray-200 2xl:mt-[12px] xl:mt-[8px] lg:mt-[6px]  2xl:mb-[64px] xl:mb-[48px] lg:mb-[40px] sm:mb-[32px] mb-[24px] 2xl:max-w-4xl xl:max-w-3xl md:max-w-lg max-w-11/12 mx-auto leading-relaxed responsive-body">
                        Euphoria World builds and nurtures independent brands that do more than compete they connect, inspire, and redefine the emotional and cultural fabric of everyday life
                    </p>
                    <button className="bg-white/20 2xl:w-[400px] xl:w-[320px] lg:w-[280px] sm:w-[240px] w-[308px] 2xl:h-[64px] xl:h-[55px] lg:h-[35px] sm:h-[45px] h-[45px] hover:bg-purple-600 border border-white text-white items-center justify-center rounded-full  font-medium transition-colors 2xl:text-[34px] text-[20px]">
                        Discover Our Vision
                    </button>
                </div>
            </div>

            <section className="bg-gray-50  md:px-6 py-12 sm:py-16 lg:py-20 2xl:mt-[95px] lg:mt-[80px] sm:mt-[56px] mt-[120px]">
                <div className="2xl:w-full xl:w-full lg:w-full sm:w-full w-full mx-auto">
                    <div className="flex lg:flex-row flex-col text-center lg:text-left justify-between 2xl:gap-12 xl:gap-10 lg:gap-8 sm:gap-6 gap-4 items-center">
                        {/* Left Content */}
                        <div className="bg-[#FFEDE4] border-t 2xl:px-[48px] xl:px-[40px] lg:px-[32px] sm:px-[24px] px-[16px] 2xl:pb-[60px] xl:pb-[48px] lg:pb-[40px] sm:pb-[32px] pb-[24px] 2xl:w-[1050px] xl:w-[800px] lg:w-[600px] sm:w-full w-full flex flex-col">
                            <div className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-md text-sm font-medium absolute 2xl:-mt-[23px] xl:-mt-[20px] lg:-mt-[18px] sm:-mt-[16px] -mt-[14px] 2xl:w-[200px] xl:w-[180px] lg:w-[160px] sm:w-[140px] w-[120px] 2xl:h-[46px] xl:h-[40px] lg:h-[36px] sm:h-[32px] h-[28px] 2xl:text-[24px] text-[18px] text-center flex items-center justify-center self-center md:self-start ">
                                What We Are
                            </div>
                            <h2 className="2xl:text-[48px] xl:text-[36px] lg:text-[32px] text-[24px] font-bold text-gray-900 2xl:mb-[32px] lg:mb-[28px] sm:mb-[10px] mb-2 leading-tight 2xl:mt-[55px] xl:mt-[48px] lg:mt-[42px] sm:mt-[36px] mt-[30px] responsive-h2 sm:max-w-5xl max-w-8/12 self-center lg:self-start text-center md:text-left">
                                Not a Product. Not a Platform. <span className="text-orange-500">A Philosophy</span>
                            </h2>
                            <p className="text-gray-600 2xl:text-[24px] text-[18px] leading-relaxed responsive-body">
                                Euphoria World is the invisible architecture behind transformative brand cultivating ideas, people, and
                                systems that create meaningful impact across diverse industries. From wellness to culture, from
                                technology to aesthetics we operate at the intersection of feeling and future
                            </p>
                        </div>

                        {/* Right Illustration */}
                        <div className="relative mt-8 lg:mt-0">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70c37d34b2d1a024e892e8edc5336f0bae3c3208?placeholderIfAbsent=true"
                                alt="Business illustration"
                                className="sm:w-[400px] xl:w-[660px] w-[260px] h-auto lg:max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>


    )

}

export default Front