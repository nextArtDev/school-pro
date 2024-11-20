import DashboardPreview from '@/components/front/dashboard-preview'
import FeaturedGrid from '@/components/front/features-grid'
import Hero from '@/components/front/hero'
import LogoCloud from '@/components/front/logo-cloud'
import Pricing from '@/components/front/pricing'
import TabbedFeatures from '@/components/front/tabbed-features'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20  ">
      <Hero />

      <LogoCloud />
      <DashboardPreview />
      <FeaturedGrid />
      <TabbedFeatures />
      <Pricing />
    </div>
  )
}
