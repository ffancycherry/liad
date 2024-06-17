import { IProjectsItemProps } from '@/types/modules'
import Image from 'next/image'
import styles from '@/styles/projects-item/index.module.scss'

const ProjectsItem = ({ item }: IProjectsItemProps) => (
  <>
    <li className={styles.list__item}>
      <div className={styles.list__item__img}>
        <Image src={item.img.toString()} alt={item.name} fill />
      </div>
      <div className={styles.list__item__inner}>
        <h6 className={styles.list__item__title}>
          <a>{item.name}</a>
        </h6>
        <span className={styles.list__item__description}>
          {item.description}
        </span>
        <div className={styles.list__item__charact}>
          <span className={styles.list__item__charact__item}>
            Стек технологий:
            <br />
            {item.stack}
          </span>
          <span className={styles.list__item__charact__item}>
            Срок исполнения:
            <br />
            {item.date[0].slice(0, 10)} – {item.date[1].slice(0, 10)}
          </span>
          <span className={styles.list__item__charact__item}>
            Состав команды:
            <br />
            {item.team}
          </span>
        </div>
      </div>
    </li>
  </>
)

export default ProjectsItem
