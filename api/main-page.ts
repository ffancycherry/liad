import { createEffect } from 'effector'
import api from './apiInstance'

export const getProjectsFx = createEffect(async () => {
  const { data } = await api.get('/api/projects/main-projects')
  return data
})

export const getEventsFx = createEffect(async () => {
  const { data } = await api.get('/api/events/main-events')
  return data
})

export const getScientificWorksFx = createEffect(async () => {
  const { data } = await api.get('/api/scientific-work/main-scientific')
  return data
})
