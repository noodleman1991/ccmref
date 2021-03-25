import { ScheduleEventType } from './schedule-event'
export interface Disponibility {
  id: number
  type: ScheduleEventType
  start: Date
  end: Date
}

export interface Place {
  id: number
  name: string
  about: string
  accomodation: boolean
  address: string
  danceBar: boolean
  details: string
  files: File[]
  images: File[]
  floor: string
  otherFloor?: string
  height: number
  width: number
  roomLength: number
  surface: number
  technicalStaff: number
  latitude: string
  longitude: string
  mirror: boolean
  scheduleDetails: string
  users_permissions_user: number
  created_at: Date
  updated_at: Date
  disponibilities: Disponibility[]
}
