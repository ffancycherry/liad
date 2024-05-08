'use client'
import { createDomain, createEffect, sample } from 'effector'
import toast from 'react-hot-toast'
import { ISignUpFx } from '@/types/authPopup'
import api from '../api/apiInstance'
import { onAuthSuccess } from '@/lib/utils/auth'

export const singUpFx = createEffect(
  async ({ name, password, email }: ISignUpFx) => {
    const { data } = await api.post('/api/users/signup', {
      name,
      password,
      email,
    })

    if (data.warningMessage) {
      toast.error(data.warningMessage)
      return
    }

    onAuthSuccess('Регистрация прошла успешно!', data)

    return data
  }
)

export const singInFx = createEffect(async ({ email, password }: ISignUpFx) => {
  const { data } = await api.post('/api/users/login', { email, password })

  if (data.warningMessage) {
    toast.error(data.warningMessage)
    return
  }

  onAuthSuccess('Вход выполнен!', data)

  return data
})

const auth = createDomain()

export const user = createDomain()

export const openAuthPopup = auth.createEvent()
export const closeAuthPopup = auth.createEvent()
export const handleSignUp = auth.createEvent<ISignUpFx>()
export const handleSignIn = auth.createEvent<ISignUpFx>()
export const setIsAuth = auth.createEvent<boolean>()

export const $openAuthPopup = auth
  .createStore<boolean>(false)
  .on(openAuthPopup, () => true)
  .on(closeAuthPopup, () => false)

export const $isAuth = auth
  .createStore(false)
  .on(setIsAuth, (_, isAuth) => isAuth)

export const $auth = auth
  .createStore({})
  .on(singUpFx.done, (_, { result }) => result)
  .on(singUpFx.fail, (_, { error }) => {
    toast.error(error.message)
  })
  .on(singInFx.done, (_, { result }) => result)
  .on(singInFx.fail, (_, { error }) => {
    toast.error(error.message)
  })

sample({
  clock: handleSignUp,
  source: $auth,
  fn: (_, { name, email, password }) => ({
    name,
    password,
    email,
  }),
  target: singUpFx,
})

sample({
  clock: handleSignIn,
  source: $auth,
  fn: (_, { email, password, name }) => ({
    email,
    password,
    name,
  }),
  target: singInFx,
})
