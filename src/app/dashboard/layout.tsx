import { Button } from '@/components/ui/button'
import {
  LayoutDashboard,
  Calendar,
  GraduationCap,
  Bell,
  Menu,
  User
} from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard | Sistema Integral de Información',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex h-screen bg-gray-100 dark:bg-gray-900'>
      {/* Sidebar */}
      <aside className='hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700'>
        <div className='flex items-center justify-center h-16 border-b dark:border-gray-700'>
          <span className='text-2xl font-semibold text-gray-800 dark:text-white'>
            NeoSIIT
          </span>
        </div>
        <nav className='flex-grow'>
          <ul className='space-y-2 py-4'>
            <li>
              <Link
                href='/dashboard'
                className='flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              >
                <LayoutDashboard className='mr-3 h-5 w-5' />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/horario'
                className='flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              >
                <Calendar className='mr-3 h-5 w-5' />
                Horario
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/calificaciones'
                className='flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              >
                <GraduationCap className='mr-3 h-5 w-5' />
                Calificaciones
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <header className='flex items-center max-h-16 justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700'>
          <div className='flex items-center'>
            <Button variant='ghost' size='icon' className='md:hidden mr-2'>
              <Menu className='h-6 w-6' />
            </Button>
            <h1 className='text-2xl font-semibold text-gray-800 dark:text-white'>
              Dashboard
            </h1>
          </div>
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon'>
              <Bell className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon'>
              <User className='h-5 w-5' />
            </Button>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}
