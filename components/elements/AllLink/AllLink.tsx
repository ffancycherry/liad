'use client'
import Link from 'next/link'

import styles from '@/styles/main-page/index.module.scss'

const AllLink = () => (
  <Link href='/projects' className={styles.all}>
    <span />
    Все
  </Link>
)

export default AllLink
