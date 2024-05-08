import { createEffect } from 'effector'
import api from './apiInstance'

export const getProjectsFx = createEffect(async () => {
  const { data } = await api.get('/api/projects')
  return data
})
