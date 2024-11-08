import MantineHeader from '@/components/side-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Management System',
  description: 'Generated by create next app',
}

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <div className="px-4 max-w-7xl mx-auto">
        <MantineHeader />
      </div>
      {children}
    </section>
  )
}
