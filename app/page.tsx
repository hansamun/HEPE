import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Share2, Menu, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{
        backgroundImage: "url('/images/father-pepe-library.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/50 z-0"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6 bg-black/20 backdrop-blur-md shadow-lg border-b border-white/10">
        <div className="flex items-center">
          <Image
            src="/images/father-pepe-logo.png"
            alt="Father Pepe"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#about" className="text-white hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#how-to-buy" className="text-white hover:text-blue-400 transition-colors">
            How To Buy
          </Link>
          <Link href="#tokenomics" className="text-white hover:text-blue-400 transition-colors">
            Tokenomics
          </Link>
          <Link href="#memes-gallery" className="text-white hover:text-blue-400 transition-colors">
            Memes Gallery
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="sm" className="text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Buy Button */}
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base shadow-lg">
          Buy $FAPE
        </Button>
      </header>

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden sticky top-[82px] z-40 bg-black/80 backdrop-blur-sm shadow-lg">
        <nav className="flex flex-col space-y-4 p-4">
          <Link href="#about" className="text-white hover:text-blue-400 transition-colors text-center py-2">
            About
          </Link>
          <Link href="#how-to-buy" className="text-white hover:text-blue-400 transition-colors text-center py-2">
            How To Buy
          </Link>
          <Link href="#tokenomics" className="text-white hover:text-blue-400 transition-colors text-center py-2">
            Tokenomics
          </Link>
          <Link href="#memes-gallery" className="text-white hover:text-blue-400 transition-colors text-center py-2">
            Memes Gallery
          </Link>
        </nav>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 flex items-center justify-center px-4 py-12 md:px-6 md:py-20 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4">The wisdom of</h1>
          <h2 className="text-blue-300 text-4xl sm:text-5xl md:text-7xl font-bold mb-6">$FAPE</h2>
          <p className="text-white text-base md:text-lg mb-8 max-w-2xl mx-auto px-4">
            The most experienced and wise token in the crypto space. $FAPE brings decades of meme wisdom and market
            knowledge to guide the next generation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 md:px-8 md:py-3 rounded-full text-base md:text-lg">
              BUY $FAPE
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-6 py-3 md:px-8 md:py-3 rounded-full text-base md:text-lg bg-transparent"
            >
              CHART
            </Button>
          </div>

          {/* Scroll Down Animation */}
          <div className="mt-12 md:mt-16 flex flex-col items-center">
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white opacity-70" />
            </div>
            <p className="text-white text-sm mt-2 opacity-70">Scroll Down</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-blue-300 text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">About $FAPE</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">The Legend Behind the Token</h3>
              <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                $FAPE isn't just another meme coin - it's the embodiment of crypto wisdom and experience. With its
                thoughtful approach and mature perspective, $FAPE represents the knowledgeable side of the meme coin
                community.
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed">
                Born from the depths of internet culture and refined through years of market cycles, $FAPE has seen it
                all. From the early days of crypto to the modern DeFi revolution, it's been there, learning, adapting,
                and growing stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How To Buy Section */}
      <section id="how-to-buy" className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-blue-300 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
            How To Buy
          </h2>

          <div className="grid gap-4 md:gap-6">
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Create a wallet</h3>
                  <p className="text-white text-sm md:text-base">
                    Get Metamask or Coinbase wallet for free from the Android App Store or Google Play Store. If you're
                    using a desktop, you can download the Google Chrome extension by visiting metamask.io.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Get some $ETH on Base</h3>
                  <p className="text-white text-sm md:text-base">
                    Have $ETH in your wallet on Base network to switch to $FAPE. If you don't have any $ETH on Base,
                    bridge some from Ethereum mainnet or buy directly on Base.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Go to Ape Store</h3>
                  <p className="text-white text-sm md:text-base">
                    Go to ape.store and connect your wallet. Paste the $FAPE token contract address into Ape Store,
                    select $FAPE and confirm. $FAPE contract address on Base: COMING SOON
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Switch $ETH for $FAPE</h3>
                  <p className="text-white text-sm md:text-base">
                    Enter the amount of $ETH you want to swap for $FAPE. Hit the swap button. When your wallet prompts
                    you for a signature, sign and welcome Father Pepe's wisdom to your portfolio.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-blue-300 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
            Tokenomics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-6 border-b border-blue-500/30 pb-4">
                  Token Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-blue-300 font-bold text-base md:text-lg">Total Supply</span>
                    <p className="text-white text-sm md:text-base">1,000,000,000</p>
                    <p className="text-white text-xs md:text-sm opacity-80">Fixed supply on Base Network</p>
                  </div>
                  <div>
                    <span className="text-blue-300 font-bold text-base md:text-lg">Network</span>
                    <p className="text-white text-sm md:text-base">BASE</p>
                    <p className="text-white text-xs md:text-sm opacity-80">Built on Base for speed & efficiency</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-6 border-b border-blue-500/30 pb-4">
                  Security & Features
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-blue-300 font-bold text-base md:text-lg">Liquidity</span>
                    <p className="text-white text-sm md:text-base">BURNED</p>
                    <p className="text-white text-xs md:text-sm opacity-80">LP tokens permanently burned</p>
                  </div>
                  <div>
                    <span className="text-blue-300 font-bold text-base md:text-lg">Tax</span>
                    <p className="text-white text-sm md:text-base">0%</p>
                    <p className="text-white text-xs md:text-sm opacity-80">No buy/sell taxes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Memes Gallery Section */}
      <section id="memes-gallery" className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-blue-300 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
            Memes Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Meme Card 1 - Autumn Park */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-autumn.jpeg"
                    alt="Father Pepe Autumn Park"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Autumn Wisdom</h3>
                <p className="text-white text-xs md:text-sm mb-4">Father Pepe enjoying peaceful moments</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 2 - Beach Sunset */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-beach-sunset.jpeg"
                    alt="Father Pepe Beach Sunset"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Beach Wisdom</h3>
                <p className="text-white text-xs md:text-sm mb-4">Father Pepe enjoying sunset vibes</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 3 - Loyal Reactors */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-loyal.jpeg"
                    alt="Father Pepe Loyal Reactors"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Loyal Reactors</h3>
                <p className="text-white text-xs md:text-sm mb-4">Appreciation for the community</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 4 - Portrait */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-portrait.jpeg"
                    alt="Father Pepe Portrait"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Distinguished Portrait</h3>
                <p className="text-white text-xs md:text-sm mb-4">Father Pepe in formal attire</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 5 - Smoothie */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-smoothie.jpeg"
                    alt="Father Pepe 100x Smoothie"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">100x Smoothie</h3>
                <p className="text-white text-xs md:text-sm mb-4">When friends ask what you got</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 6 - Trading */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-trading.jpeg"
                    alt="Father Pepe Trading"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Trading Master</h3>
                <p className="text-white text-xs md:text-sm mb-4">Rocket riding through the charts</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 7 - Money */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-money.jpeg"
                    alt="Father Pepe Money"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Stack Master</h3>
                <p className="text-white text-xs md:text-sm mb-4">When FAPE hits different</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 8 - Jedi */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-jedi.jpeg"
                    alt="Father Pepe Jedi"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Jedi Master</h3>
                <p className="text-white text-xs md:text-sm mb-4">The force is strong with this one</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 9 - Marketing */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-marketing.jpeg"
                    alt="Father Pepe Marketing"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Marketing Guru</h3>
                <p className="text-white text-xs md:text-sm mb-4">25 and feeling great!</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 10 - Coloring */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-coloring.jpeg"
                    alt="Father Pepe Coloring"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Coloring Book</h3>
                <p className="text-white text-xs md:text-sm mb-4">Simple and clean Father Pepe</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 11 - Mystical Powers */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-mystical.jpeg"
                    alt="Father Pepe Mystical Powers"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Mystical Powers</h3>
                <p className="text-white text-xs md:text-sm mb-4">Father Pepe's wisdom transcends reality</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meme Card 12 - Bull Rider */}
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm group hover:scale-105 transition-transform">
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/images/memes/hepe-bull-rider.jpeg"
                    alt="Father Pepe Bull Rider"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Bull Market Rider</h3>
                <p className="text-white text-xs md:text-sm mb-4">Father Pepe riding the bull market</p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                    <Download className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs"
                  >
                    <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">JOIN</h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold mb-8">COMMUNITY</h3>

          <div className="flex justify-center space-x-4 md:space-x-6">
            <Button
              size="lg"
              className="bg-blue-400 hover:bg-blue-500 text-white rounded-full w-12 h-12 md:w-16 md:h-16 p-0 flex items-center justify-center"
            >
              <Image
                src="/images/x-icon.png"
                alt="X (Twitter)"
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
            </Button>
            <Button
              size="lg"
              className="bg-blue-400 hover:bg-blue-500 text-white rounded-full w-12 h-12 md:w-16 md:h-16 p-0 flex items-center justify-center"
            >
              <Image
                src="/images/telegram-icon.png"
                alt="Telegram"
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
