import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  BookOpen,
  Calendar,
  GraduationCap,
  LayoutDashboard,
  CheckCircle
} from 'lucide-react'

export default function LandingPage () {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <GraduationCap className='h-6 w-6 accent-text' />
          <span className='ml-2 text-2xl font-bold'>NeoSIIT</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#features'
          >
            Características
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#testimonials'
          >
            Testimonios
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#contact'
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 accent-bg'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground'>
                  Bienvenido a NeoSIIT
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-200'>
                  Tu plataforma integral para gestionar tu vida académica.
                  Organiza tu horario, revisa tus calificaciones y sigue tu
                  progreso con facilidad.
                </p>
              </div>
              <div className='space-x-4'>
                <Button variant='secondary' size='lg'>
                  Iniciar Sesión
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='bg-white text-accent-text hover:bg-gray-100'
                >
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id='features' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Características Principales
            </h2>
            <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
              <Card>
                <CardHeader>
                  <LayoutDashboard className='h-10 w-10 accent-text mb-2' />
                  <CardTitle>Dashboard Personalizado</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Visualiza toda tu información académica en un solo lugar.
                    Obtén una visión general de tu progreso y próximas
                    actividades.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className='h-10 w-10 accent-text mb-2' />
                  <CardTitle>Gestión de Horarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Organiza tu semana académica con nuestro sistema de horarios
                    intuitivo. Nunca más te perderás una clase.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className='h-10 w-10 accent-text mb-2' />
                  <CardTitle>Seguimiento de Calificaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Mantén un registro detallado de tus calificaciones por
                    materia y periodo. Identifica áreas de mejora y celebra tus
                    logros.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id='testimonials'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
              Lo que dicen nuestros usuarios
            </h2>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
              <Card>
                <CardContent className='pt-6'>
                  <p className='text-lg mb-4'>
                    &quot;EduDash ha revolucionado la forma en que organizo mis
                    estudios. ¡Es increíblemente fácil de usar y me ha ayudado a
                    mejorar mis calificaciones!&quot;
                  </p>
                  <p className='font-semibold'>
                    María G. - Estudiante de Ingeniería
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='pt-6'>
                  <p className='text-lg mb-4'>
                    &quot;Como profesor, aprecio cómo EduDash facilita la
                    comunicación con mis estudiantes. Es una herramienta
                    esencial para la educación moderna.&quot;
                  </p>
                  <p className='font-semibold'>
                    Dr. Javier R. - Profesor de Ciencias
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id='contact' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  ¿Listo para empezar?
                </h2>
                <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Únete a la comunidad de EduDash y lleva tu vida académica al
                  siguiente nivel.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <Button className='w-full accent-bg' size='lg'>
                  Registrarse Ahora
                </Button>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  Al registrarte, aceptas nuestros términos y condiciones.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2023 EduDash. Todos los derechos reservados.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Términos de Servicio
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
