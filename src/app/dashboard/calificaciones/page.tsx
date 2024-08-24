import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

type Calificacion = {
  materia: string
  profesor: string
  parcial1: number
  parcial2: number
  parcial3: number
  promedio: number
}

const calificaciones: Calificacion[] = [
  {
    materia: 'Matemáticas',
    profesor: 'Dr. García',
    parcial1: 8.5,
    parcial2: 9.0,
    parcial3: 8.7,
    promedio: 8.7
  },
  {
    materia: 'Física',
    profesor: 'Dra. Martínez',
    parcial1: 7.8,
    parcial2: 8.5,
    parcial3: 9.2,
    promedio: 8.5
  },
  {
    materia: 'Programación',
    profesor: 'Ing. López',
    parcial1: 9.5,
    parcial2: 9.8,
    parcial3: 9.7,
    promedio: 9.7
  },
  {
    materia: 'Química',
    profesor: 'Dr. Rodríguez',
    parcial1: 8.0,
    parcial2: 8.3,
    parcial3: 8.7,
    promedio: 8.3
  },
  {
    materia: 'Inglés',
    profesor: 'Lic. Smith',
    parcial1: 9.0,
    parcial2: 8.7,
    parcial3: 9.5,
    promedio: 9.1
  }
]

const getCalificacionColor = (calificacion: number) => {
  if (calificacion >= 9) return 'text-green-600 dark:text-green-400'
  if (calificacion >= 8) return 'text-blue-600 dark:text-blue-400'
  if (calificacion >= 7) return 'text-yellow-600 dark:text-yellow-400'
  return 'text-red-600 dark:text-red-400'
}

const getPromedioGeneral = (calificaciones: Calificacion[]) => {
  const suma = calificaciones.reduce((acc, cal) => acc + cal.promedio, 0)
  return (suma / calificaciones.length).toFixed(2)
}

export default function CalificacionesPage () {
  const promedioGeneral = getPromedioGeneral(calificaciones)
  return (
    <div className='container mx-auto px-4 py-8'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Calificaciones Parciales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-center mb-4'>
            <h2 className='text-xl font-semibold mb-2'>Promedio General</h2>
            <div className='text-4xl font-bold accent-text'>
              {promedioGeneral}
            </div>
            <Progress
              value={parseFloat(promedioGeneral) * 10}
              className='w-full max-w-md mx-auto mt-2 accent-bg'
            />
          </div>
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[200px]'>Materia</TableHead>
                  <TableHead>Profesor</TableHead>
                  <TableHead className='text-center'>Parcial 1</TableHead>
                  <TableHead className='text-center'>Parcial 2</TableHead>
                  <TableHead className='text-center'>Parcial 3</TableHead>
                  <TableHead className='text-center'>Promedio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {calificaciones.map((cal, index) => (
                  <TableRow key={index}>
                    <TableCell className='font-medium'>{cal.materia}</TableCell>
                    <TableCell>{cal.profesor}</TableCell>
                    <TableCell className='text-center'>
                      <Badge
                        variant='outline'
                        className={getCalificacionColor(cal.parcial1)}
                      >
                        {cal.parcial1.toFixed(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className='text-center'>
                      <Badge
                        variant='outline'
                        className={getCalificacionColor(cal.parcial2)}
                      >
                        {cal.parcial2.toFixed(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className='text-center'>
                      <Badge
                        variant='outline'
                        className={getCalificacionColor(cal.parcial3)}
                      >
                        {cal.parcial3.toFixed(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className='text-center'>
                      <Badge
                        variant='default'
                        className={`font-bold ${getCalificacionColor(
                          cal.promedio
                        )}`}
                      >
                        {cal.promedio.toFixed(1)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className='text-xl font-bold'>
            Leyenda de Calificaciones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='flex items-center'>
              <Badge
                variant='outline'
                className='text-green-600 dark:text-green-400 mr-2'
              >
                9.0 - 10.0
              </Badge>
              <span>Excelente</span>
            </div>
            <div className='flex items-center'>
              <Badge
                variant='outline'
                className='text-blue-600 dark:text-blue-400 mr-2'
              >
                8.0 - 8.9
              </Badge>
              <span>Bueno</span>
            </div>
            <div className='flex items-center'>
              <Badge
                variant='outline'
                className='text-yellow-600 dark:text-yellow-400 mr-2'
              >
                7.0 - 7.9
              </Badge>
              <span>Regular</span>
            </div>
            <div className='flex items-center'>
              <Badge
                variant='outline'
                className='text-red-600 dark:text-red-400 mr-2'
              >
                0.0 - 6.9
              </Badge>
              <span>Insuficiente</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
