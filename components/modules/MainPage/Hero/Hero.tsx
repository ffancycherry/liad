import styles from '@/styles/main-page/index.module.scss'
import Image from 'next/image'
import img2 from '@/public/img/bnr2.png'

const Hero = () => (
  <section className={styles.hero}>
    <div className={'container ${styles.hero__container}'}>
      <div className={styles.hero__title}>
        <span className={styles.hero__title__text} />
      </div>
      <div className={styles.hero__banner}>
        <Image src={img2} alt={'Banner'} />
      </div>
    </div>
  </section>
)

export default Hero
