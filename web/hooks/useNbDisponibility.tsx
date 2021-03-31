import { useMemo } from 'react'
import { DisponibilityStatus, Disponibility } from '~@types/disponibility.d'

const useNbDisponibility = (disponibilities: Disponibility[] = []) => {
  return useMemo(
    () =>
      disponibilities.reduce(
        (total, current) => {
          switch (current.status) {
            case DisponibilityStatus.AVAILABLE:
              total.available.push(current)
              break
            case DisponibilityStatus.PAST:
              total.past.push(current)
              break
            case DisponibilityStatus.BOOKED:
              total.booked.push(current)
              break
            case DisponibilityStatus.PENDING:
              total.pending.push(current)
              break
          }

          return total
        },
        {
          nbDispo: disponibilities.length || 0,
          available: [],
          booked: [],
          pending: [],
          past: [],
        },
      ),
    [disponibilities],
  )
}

export default useNbDisponibility
