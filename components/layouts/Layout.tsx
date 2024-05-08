'use client'
import { useUnit } from 'effector-react'
import { useRef, MutableRefObject } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../modules/Header/Header'
import { handleCloseAuthPopup } from '@/lib/utils/common'
import { $openAuthPopup } from '@/context/auth'
import AuthPopup from '../modules/AuthPopup/AuthPopup'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const openAuthPopup = useUnit($openAuthPopup)
  const authWrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleCloseAuthPopupByTarget = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as Element

    if (target === authWrapperRef.current) {
      handleCloseAuthPopup()
    }
  }

  return (
    <>
      <Header />
      {children}
      <AnimatePresence>
        {openAuthPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className='auth-popup-wrapper'
            onClick={handleCloseAuthPopupByTarget}
            ref={authWrapperRef}
          >
            <AuthPopup />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Layout
