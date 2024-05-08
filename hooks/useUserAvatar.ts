import { $user } from '@/context/user'
import { useUnit } from 'effector-react'
import { useState, useEffect } from 'react'

export const useUserAvatar = () => {
  const user = useUnit($user)
  const [src, setSrc] = useState('')

  useEffect(() => {
    if (user.image) {
      setSrc(user.image)
      return
    }
  }, [user.image])

  return { src, alt: user.name }
}
