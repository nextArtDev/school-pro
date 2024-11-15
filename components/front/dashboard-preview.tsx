'use client'
import prevImage from '@/public/dashboard-preview.jpg'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function DashboardPreview() {
  return (
    <Card className="mx-auto max-w-7xl shadow-inner  max-w-sm:aspect-[6/19] w-full h-[60vh] lg:h-screen overflow-auto">
      <CardContent className=" relative w-full h-full bg-foreground/10 backdrop-blur-xl ">
        <Image
          fill
          //   width={prevImage.blurWidth}
          //   height={prevImage.blurHeight}
          src={prevImage.src}
          alt="dashboard preview"
          className=" max-w-sm:object-contain object-cover p-2 rounded-md "
        />
      </CardContent>
    </Card>
  )
}
