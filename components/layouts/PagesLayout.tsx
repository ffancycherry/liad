'use client'
import { useUnit } from 'effector-react'
import { Toaster } from 'react-hot-toast'
import { Next13ProgressBar } from 'next13-progressbar'
import { $openAuthPopup } from '@/context/auth'
import { handleCloseAuthPopup } from '@/lib/utils/common'
import Layout from './Layout'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const openAuthPopup = useUnit($openAuthPopup)

  return (
    <html>
      <body>
        <Next13ProgressBar height='4px' color='#05193B' showOnShallow />
        <Layout>{children}</Layout>
        <div
          className={`auth-overlay ${openAuthPopup ? 'overlay-active' : ''}`}
          onClick={handleCloseAuthPopup}
        />
        <Toaster position='top-center' reverseOrder={false} />
      </body>
    </html>
  )
}

export default PagesLayout
