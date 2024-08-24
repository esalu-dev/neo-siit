'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
  const [diaActual, setDiaActual] = useState(0)

  const cambiarDia = (direccion: number) => {
    setDiaActual(prevDia => {
      let nuevoDia = prevDia + direccion
      if (nuevoDia < 0) nuevoDia = diasSemana.length - 1
      if (nuevoDia >= diasSemana.length) nuevoDia = 0
      return nuevoDia
    })
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <Card className='mb-6'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <Button variant='outline' size='icon' onClick={() => cambiarDia(-1)}>
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <CardTitle className='text-xl'>{diasSemana[diaActual]}</CardTitle>
          <Button variant='outline' size='icon' onClick={() => cambiarDia(1)}>
            <ChevronRight className='h-4 w-4' />
          </Button>
        </CardHeader>
        <CardContent>
          {horarioSemanal[diasSemana[diaActual]].map((clase, index) => (
            <Card
              key={index}
              className='mb-4 last:mb-0 border-l-4 accent-border'
            >
              <CardContent className='p-4'>
                <h3 className='font-bold text-lg mb-2 accent-text'>
                  {clase.materia}
                </h3>
                <p className='text-sm mb-1'>Profesor: {clase.profesor}</p>
                <p className='text-sm mb-1'>Aula: {clase.aula}</p>
                <p className='text-sm mb-2'>
                  Horario: {clase.horaInicio} - {clase.horaFin}
                </p>
                <Badge variant='outline' className='accent-text'>
                  {clase.horaInicio} - {clase.horaFin}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className='text-lg'>Vista Semanal</CardTitle>
        </CardHeader>
        <CardContent className='overflow-x-auto'>
          <div className='min-w-[640px]'>
            <div className='grid grid-cols-5 gap-2'>
              {diasSemana.map((dia, index) => (
                <div key={index} className='text-center'>
                  <h3 className='font-semibold mb-2'>{dia}</h3>
                  {horarioSemanal[dia].map((clase, claseIndex) => (
                    <div
                      key={claseIndex}
                      className='bg-accent/10 p-2 rounded-md mb-2 text-xs'
                    >
                      <p className='font-semibold accent-text'>
                        {clase.materia}
                      </p>
                      <p>
                        {clase.horaInicio} - {clase.horaFin}
                      </p>
                      <p>{clase.aula}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
