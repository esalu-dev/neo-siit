import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle2, Clock, XCircle } from 'lucide-react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type Materia = {
  id: string
  nombre: string
  creditos: number
  estado: 'cursada' | 'cursando' | 'pendiente'
  calificacion?: number
  semestre: number
}

const materias: Materia[] = [
  {
    id: 'MAT101',
    nombre: 'Cálculo I',
    creditos: 8,
    semestre: 1,
    estado: 'cursada',
    calificacion: 8.5
  },
  {
    id: 'FIS101',
    nombre: 'Física I',
    creditos: 8,
    semestre: 1,
    estado: 'cursada',
    calificacion: 9.0
  },
  {
    id: 'PROG101',
    nombre: 'Programación I',
    creditos: 8,
    semestre: 1,
    estado: 'cursada',
    calificacion: 9.5
  },
  {
    id: 'MAT201',
    nombre: 'Cálculo II',
    creditos: 8,
    semestre: 2,
    estado: 'cursada',
    calificacion: 8.0
  },
  {
    id: 'FIS201',
    nombre: 'Física II',
    creditos: 8,
    semestre: 2,
    estado: 'cursada',
    calificacion: 8.5
  },
  {
    id: 'PROG201',
    nombre: 'Programación II',
    creditos: 8,
    semestre: 2,
    estado: 'cursando'
  },
  {
    id: 'MAT301',
    nombre: 'Ecuaciones Diferenciales',
    creditos: 8,
    semestre: 3,
    estado: 'cursando'
  },
  {
    id: 'FIS301',
    nombre: 'Física III',
    creditos: 8,
    semestre: 3,
    estado: 'cursando'
  },
  {
    id: 'PROG301',
    nombre: 'Estructuras de Datos',
    creditos: 8,
    semestre: 3,
    estado: 'pendiente'
  },
  {
    id: 'MAT401',
    nombre: 'Análisis Numérico',
    creditos: 8,
    semestre: 4,
    estado: 'pendiente'
  },
  {
    id: 'ING401',
    nombre: 'Ingeniería de Software',
    creditos: 8,
    semestre: 4,
    estado: 'pendiente'
  },
  {
    id: 'BD401',
    nombre: 'Bases de Datos',
    creditos: 8,
    semestre: 4,
    estado: 'pendiente'
  }
]

const totalCreditos = materias.reduce(
  (sum, materia) => sum + materia.creditos,
  0
)
const creditosCursados = materias
  .filter(m => m.estado === 'cursada')
  .reduce((sum, materia) => sum + materia.creditos, 0)
const creditosCursando = materias
  .filter(m => m.estado === 'cursando')
  .reduce((sum, materia) => sum + materia.creditos, 0)

export default function AvanceReticularPage () {
  const progresoTotal = (creditosCursados / totalCreditos) * 100
  const semestresTotales = Math.max(...materias.map(m => m.semestre))

  return (
    <div className='container mx-auto px-4 py-8'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>Resumen de Avance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-3'>
            <div>
              <p className='text-sm font-medium'>Progreso Total</p>
              <div className='text-2xl font-bold accent-text'>
                {progresoTotal.toFixed(1)}%
              </div>
              <Progress value={progresoTotal} className='mt-2 accent-bg' />
            </div>
            <div>
              <p className='text-sm font-medium'>Créditos Cursados</p>
              <div className='text-2xl font-bold'>
                {creditosCursados} / {totalCreditos}
              </div>
            </div>
            <div>
              <p className='text-sm font-medium'>Créditos Cursando</p>
              <div className='text-2xl font-bold'>{creditosCursando}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Materias por Semestre</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue='1' className='w-full'>
            <ScrollArea className='w-full whitespace-nowrap rounded-md border flex flex-col gap-2'>
              <TabsList className='flex w-max gap-2'>
                {Array.from({ length: semestresTotales }, (_, i) => (
                  <TabsTrigger key={i + 1} value={(i + 1).toString()}>
                    <span className=''>Semestre {i + 1}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
            {Array.from({ length: semestresTotales }, (_, i) => (
              <TabsContent key={i + 1} value={(i + 1).toString()}>
                <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                  {materias
                    .filter(materia => materia.semestre === i + 1)
                    .map(materia => (
                      <Card key={materia.id} className='overflow-hidden'>
                        <CardHeader className='p-4'>
                          <CardTitle className='text-lg'>
                            {materia.nombre}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className='p-4 pt-0'>
                          <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                            Créditos: {materia.creditos}
                          </p>
                          <div className='flex items-center justify-between'>
                            <Badge
                              variant={
                                materia.estado === 'cursada'
                                  ? 'default'
                                  : materia.estado === 'cursando'
                                  ? 'secondary'
                                  : 'outline'
                              }
                              className='capitalize'
                            >
                              {materia.estado}
                            </Badge>
                            {materia.estado === 'cursada' && (
                              <div className='flex items-center'>
                                <CheckCircle2 className='w-4 h-4 text-green-500 mr-1' />
                                <span className='font-semibold'>
                                  {materia.calificacion}
                                </span>
                              </div>
                            )}
                            {materia.estado === 'cursando' && (
                              <Clock className='w-4 h-4 text-yellow-500' />
                            )}
                            {materia.estado === 'pendiente' && (
                              <XCircle className='w-4 h-4 text-gray-400' />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
