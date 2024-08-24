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

type Clase = {
  materia: string
  profesor: string
  aula: string
  horaInicio: string
  horaFin: string
}

type HorarioDiario = {
  [key: string]: Clase[]
}

const horarioSemanal: HorarioDiario = {
  Lunes: [
    {
      materia: 'Matemáticas',
      profesor: 'Dr. García',
      aula: 'A101',
      horaInicio: '08:00',
      horaFin: '10:00'
    },
    {
      materia: 'Física',
      profesor: 'Dra. Martínez',
      aula: 'B203',
      horaInicio: '10:30',
      horaFin: '12:30'
    }
  ],
  Martes: [
    {
      materia: 'Programación',
      profesor: 'Ing. López',
      aula: 'Lab 1',
      horaInicio: '09:00',
      horaFin: '11:00'
    },
    {
      materia: 'Inglés',
      profesor: 'Lic. Smith',
      aula: 'C105',
      horaInicio: '11:30',
      horaFin: '13:30'
    }
  ],
  Miércoles: [
    {
      materia: 'Química',
      profesor: 'Dr. Rodríguez',
      aula: 'Lab 2',
      horaInicio: '08:00',
      horaFin: '10:00'
    },
    {
      materia: 'Historia',
      profesor: 'Mtro. Sánchez',
      aula: 'D302',
      horaInicio: '10:30',
      horaFin: '12:30'
    }
  ],
  Jueves: [
    {
      materia: 'Matemáticas',
      profesor: 'Dr. García',
      aula: 'A101',
      horaInicio: '09:00',
      horaFin: '11:00'
    },
    {
      materia: 'Física',
      profesor: 'Dra. Martínez',
      aula: 'B203',
      horaInicio: '11:30',
      horaFin: '13:30'
    }
  ],
  Viernes: [
    {
      materia: 'Programación',
      profesor: 'Ing. López',
      aula: 'Lab 1',
      horaInicio: '08:00',
      horaFin: '10:00'
    },
    {
      materia: 'Inglés',
      profesor: 'Lic. Smith',
      aula: 'C105',
      horaInicio: '10:30',
      horaFin: '12:30'
    }
  ]
}

export default function HorarioPage () {
  const diasSemana = Object.keys(horarioSemanal)

  return (
    <div className='container mx-auto px-4 py-8'>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Horario Semanal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-center'>Hora</TableHead>
                  {diasSemana.map(dia => (
                    <TableHead key={dia} className='text-center'>
                      {dia}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 6 }, (_, i) => i + 8).map(hora => (
                  <TableRow key={hora}>
                    <TableCell className='font-medium text-center'>
                      {`${hora.toString().padStart(2, '0')}:00`}
                    </TableCell>
                    {diasSemana.map(dia => {
                      const clase = horarioSemanal[dia].find(
                        c =>
                          parseInt(c.horaInicio) <= hora &&
                          parseInt(c.horaFin) > hora
                      )
                      return (
                        <TableCell
                          key={`${dia}-${hora}`}
                          className='text-center'
                        >
                          {clase && (
                            <div className='bg-accent/10 p-2 rounded-md'>
                              <p className='font-semibold accent-text'>
                                {clase.materia}
                              </p>
                              <p className='text-sm'>{clase.profesor}</p>
                              <Badge variant='outline' className='mt-1'>
                                {clase.aula}
                              </Badge>
                              <p className='text-xs mt-1'>
                                {`${clase.horaInicio} - ${clase.horaFin}`}
                              </p>
                            </div>
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
