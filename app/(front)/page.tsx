import DashboardPreview from '@/components/front/dashboard-preview'
import Hero from '@/components/front/hero'
import LogoCloud from '@/components/front/logo-cloud'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20  ">
      <Hero />

      <LogoCloud />
      <DashboardPreview />
    </div>
  )
}
