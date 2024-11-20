import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
// import { features } from './features-grid'
import { ChartAreaIcon, DollarSign, GraduationCap, Users } from 'lucide-react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import featuredImage from '@/public/dashboard-preview.jpg'

const features = [
  {
    id: 'Students',
    icon: Users,
    title: 'Student',
    imageSrc: featuredImage,
    header: 'Student Management',
    subHeader:
      'Comprehensive student information system for managing enrollments, profiles, and academic records with ease',
    cases: [
      'Digital student profiles with complete academic history',
      'Automated enrollment and registration process',
      'Parent portal access with real-time updates',
      'Student performance tracking and analytics',
      'Digital document management for student records',
      'Custom fields for additional student information',
      'Bulk student data import/export capabilities',
      'Student behavior and disciplinary record tracking',
    ],
  },
  {
    id: 'Academics',
    icon: GraduationCap,
    title: 'Academics',
    imageSrc: featuredImage,
    header: 'Academic Management',
    subHeader:
      'Streamline curriculum planning, examinations, grading, and report card generation in one unified system',
    cases: [
      'Dynamic curriculum and syllabus management',
      'Automated grade calculation and GPA tracking',
      'Custom report card generation',
      'Assignment and homework management',
      'Online examination system with multiple question types',
      'Academic calendar management',
      'Course and class scheduling',
      'Learning resource distribution',
    ],
  },
  {
    id: 'Finance',
    icon: DollarSign,
    title: 'Finance',
    imageSrc: featuredImage,
    header: 'Financial Management',
    subHeader:
      'Complete fee management system with online payments, invoicing, and comprehensive financial reporting',
    cases: [
      'Online fee payment gateway integration',
      'Automated invoice generation',
      'Payment reminder system',
      'Financial reporting and analytics',
      'Salary and payroll management',
      'Expense tracking and budgeting',
      'Scholarship management',
      'Multiple payment method support',
    ],
  },
  {
    id: 'Analytics',
    icon: ChartAreaIcon,
    title: 'Analytics',
    imageSrc: featuredImage,
    header: 'Analytics & Reports',
    subHeader:
      'Powerful analytics tools for data-driven decisions with customizable reporting and insights',
    cases: [
      'Customizable dashboard with key metrics',
      'Performance trend analysis',
      'Attendance and enrollment statistics',
      'Financial insights and projections',
      'Student progress tracking',
      'Staff performance analytics',
      'Custom report generation',
      'Data export in multiple formats',
    ],
  },
]
function TabbedFeatures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Tabs defaultValue={features[0].title} className="space-y-8  mx-auto">
        <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0 ">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <TabsTrigger
                key={feature.id}
                value={feature.title}
                className="flex gap-1 items-center justify-center"
              >
                <Icon />
                {feature.title}
              </TabsTrigger>
            )
          })}
        </TabsList>
        {features.map((feature) => {
          return (
            <TabsContent
              key={feature.id}
              className="flex-start mt-auto  flex flex-col space-y-4"
              value={feature.title}
            >
              <h2 className="text-base md:text-xl font-semibold">
                {feature.header}
              </h2>
              <p className="text-sm md:text-md">{feature.subHeader}</p>
              <article className="w-full h-full grid gap-4 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                <div className="  space-y-4 text-base md:text-lg">
                  {feature.cases.map((r, i) => (
                    <div key={i} className="flex items-center   gap-1.5">
                      <Badge className="font-thin bg-blue-400/40 text-base text-blue-800">
                        {i + 1}
                      </Badge>
                      <p>{r}</p>
                    </div>
                  ))}
                </div>
                <figure className="  relative">
                  <Image
                    fill
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                  />
                </figure>
              </article>
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

export default TabbedFeatures
