import { loginCheck } from '@/context/user'
import { closeAuthPopup, openAuthPopup, setIsAuth } from '@/context/auth'

export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.remove('overflow-hidden')
}

export const addOverflowHiddenToBody = (paddingRight = '') => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.add('overflow-hidden')
  paddingRight && (body.style.paddingRight = paddingRight)
}

export const shuffle = <T>(array: T[]) => {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

export const handleOpenAuthPopup = () => {
  addOverflowHiddenToBody()
  openAuthPopup()
}

export const handleCloseAuthPopup = () => {
  removeOverflowHiddenFromBody()
  closeAuthPopup()
}

export const closeAuthPopupWhenSomeModalOpened = (
  showQuickViewModal: boolean,
  showSizeTable: boolean
) => {
  if (showQuickViewModal || showSizeTable) {
    closeAuthPopup()
    return
  }

  handleCloseAuthPopup()
}

export const isUserAuth = () => {
  const auth = JSON.parse(localStorage.getItem('auth') as string)

  if (!auth?.accessToken) {
    setIsAuth(false)
    return false
  }

  return true
}

export const triggerLoginCheck = () => {
  if (!isUserAuth()) {
    return
  }

  const auth = JSON.parse(localStorage.getItem('auth') as string)

  loginCheck({ jwt: auth.accessToken })
}
