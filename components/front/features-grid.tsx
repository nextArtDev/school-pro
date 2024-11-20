import {
  Users,
  GraduationCap,
  MessageSquare,
  DollarSign,
  ClipboardList,
  Bus,
  BarChart2,
  BookOpen,
  CalendarDays,
  FileText,
  Bell,
  Shield,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import featuredImage from '@/public/dashboard-preview.jpg'

const features = [
  {
    icon: Users,
    title: 'Student Management',
    description:
      'Comprehensive student information system for managing enrollments, profiles, and academic records with ease',
    href: '/features/student-management',
  },
  {
    icon: GraduationCap,
    title: 'Academic Management',
    description:
      'Streamline curriculum planning, examinations, grading, and report card generation in one unified system',
    href: '/features/academic-management',
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description:
      'Integrated messaging system with multi-channel notifications for seamless school-wide communication',
    href: '/features/communication',
  },
  {
    icon: DollarSign,
    title: 'Financial Management',
    description:
      'Complete fee management system with online payments, invoicing, and comprehensive financial reporting',
    href: '/features/finance',
  },
  {
    icon: ClipboardList,
    title: 'Staff Management',
    description:
      'Efficient tools for managing staff records, attendance, performance evaluation, and payroll processing',
    href: '/features/staff-management',
  },
  {
    icon: Bus,
    title: 'Transport Management',
    description:
      'Real-time transport tracking, route management, and automated notifications for safe student transportation',
    href: '/features/transport',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reports',
    description:
      'Powerful analytics tools for data-driven decisions with customizable reporting and insights',
    href: '/features/analytics',
  },
  {
    icon: BookOpen,
    title: 'Resource Management',
    description:
      'Digital library system, inventory tracking, and facility scheduling in one integrated platform',
    href: '/features/resources',
  },
  {
    icon: CalendarDays,
    title: 'Attendance System',
    description:
      'Automated attendance tracking for students and staff with instant notification capabilities',
    href: '/features/attendance',
  },
  {
    icon: FileText,
    title: 'Examination Portal',
    description:
      'Complete examination management system from scheduling to result publication with secure access',
    href: '/features/examinations',
  },
  {
    icon: Bell,
    title: 'Notice Board',
    description:
      'Digital notice board for announcements, events, and important updates with targeted distribution',
    href: '/features/announcements',
  },
  {
    icon: Shield,
    title: 'Security & Access',
    description:
      'Role-based access control with data encryption and secure backups for complete peace of mind',
    href: '/features/security',
  },
]

function FeaturedGrid() {
  return (
    <section className="w-full h-full flex flex-col">
      <article className="mx-auto  w-full h-full flex flex-col gap-4 items-center justify-center max-w-md lg:max-w-lg text-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          ✨Features{' '}
        </div>
        <h1 className="font-bold text-4xl md:text-4xl">
          All-in-one School Management Platform
        </h1>
        <h3 className="font-semibold opacity-70 text-lg md:text-xl">
          Streamline your entire school operations with our comprehensive suite
          of integrated modules designed specifically for modern educational
          institutions.
        </h3>
      </article>
      <article className="py-8 w-full h-[600px] grid grid-cols-5 grid-rows-8 gap-x-2 gap-y-4 items-stretch justify-items-stretch place-content-center place-items-center ">
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-3 row-span-3">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[0].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[0].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[0].title}
            </h3>
            <p className="text-center max-w-md ">{features[0].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-2 row-span-3">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[1].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[1].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[1].title}
            </h3>
            <p className="text-center max-w-md ">{features[1].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-2 row-span-2">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[2].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[2].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[2].title}
            </h3>
            <p className="text-center max-w-md ">{features[2].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-3 row-span-2">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[3].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[3].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[3].title}
            </h3>
            <p className="text-center max-w-md ">{features[3].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-3 row-span-3">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[4].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[4].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[4].title}
            </h3>
            <p className="text-center max-w-md ">{features[4].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-2 row-span-3">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[5].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[1].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[5].title}
            </h3>
            <p className="text-center max-w-md ">{features[5].description}</p>
          </Link>
        </div>
      </article>
      <article className="py-8 w-full h-[600px] grid grid-cols-5 grid-rows-8 gap-x-2 gap-y-4 items-stretch justify-items-stretch place-content-center place-items-center ">
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-3 row-span-3">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[6].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[6].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[6].title}
            </h3>
            <p className="text-center max-w-md ">{features[6].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-2 row-span-3">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[7].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[7].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[7].title}
            </h3>
            <p className="text-center max-w-md ">{features[7].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-2 row-span-2">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[8].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[8].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[8].title}
            </h3>
            <p className="text-center max-w-md ">{features[8].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-3 row-span-2">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[9].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[9].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[9].title}
            </h3>
            <p className="text-center max-w-md ">{features[9].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-3 row-span-3">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[10].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[10].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[10].title}
            </h3>
            <p className="text-center max-w-md ">{features[10].description}</p>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-md backdrop-blur-3xl p-2 bg-foreground/10 col-span-2 row-span-3">
          <Image
            src={featuredImage}
            alt="features"
            fill
            className="-z-10 opacity-15 object-cover"
          />
          <Link
            href={features[11].href}
            className="flex flex-col w-full h-full items-center justify-center gap-1.5 p-3"
          >
            {/* <span>{features[1].icon}</span> */}
            <h3 className="text-center font-semibold text-base md:text-lg lg:text-xl">
              {features[11].title}
            </h3>
            <p className="text-center max-w-md ">{features[11].description}</p>
          </Link>
        </div>
      </article>
    </section>
  )
}

export default FeaturedGrid
