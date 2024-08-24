import React from 'react'
import {
  Bell,
  Calendar,
  GraduationCap,
  LayoutDashboard,
  Menu,
  User
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function Dashb () {
  return (
    <div>
      {/* Content */}
      <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900'>
        <div className='container mx-auto px-6 py-8'>
          <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3'>
            {/* Horario Card */}
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Próxima Clase
                </CardTitle>
                <Calendar className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>Matemáticas</div>
                <p className='text-xs text-muted-foreground'>
                  Hoy, 10:00 AM - Aula 201
                </p>
              </CardContent>
            </Card>

            {/* Calificaciones Card */}
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Promedio General
                </CardTitle>
                <GraduationCap className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>8.7</div>
              </CardContent>
            </Card>

            {/* Avance Reticular Card */}
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Avance de Carrera
                </CardTitle>
                <LayoutDashboard className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>65%</div>
                <Progress value={65} className='mt-2' />
              </CardContent>
            </Card>
          </div>

          {/* Tabla de Materias */}
          <Card className='mt-8'>
            <CardHeader>
              <CardTitle>Materias del Semestre</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Materia
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Profesor
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Calificación
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        Matemáticas
                      </th>
                      <td className='px-6 py-4'>Dr. García</td>
                      <td className='px-6 py-4'>9.0</td>
                    </tr>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        Física
                      </th>
                      <td className='px-6 py-4'>Dra. Martínez</td>
                      <td className='px-6 py-4'>8.5</td>
                    </tr>
                    <tr className='bg-white dark:bg-gray-800'>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        Programación
                      </th>
                      <td className='px-6 py-4'>Ing. López</td>
                      <td className='px-6 py-4'>9.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
