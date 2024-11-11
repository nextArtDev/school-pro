import { GraduationCap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/'} className="flex items-center space-x-2">
      <div className="bg-blue-500 rounded-full p-1">
        <span className="text-white font-bold text-xl">
          <GraduationCap />
        </span>
      </div>
      <span className="font-bold text-xl">
        School
        <span className="font-bold text-blue-500 text-xl">Pro</span>
      </span>
    </Link>
  )
}

export default Logo
