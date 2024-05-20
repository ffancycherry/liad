import Logo from '@/components/elements/Logo/Logo'
import { handleOpenAuthPopup, triggerLoginCheck } from '@/lib/utils/common'
import Link from 'next/link'
import HeaderProfile from './HeaderProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUnit } from 'effector-react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { $user } from '@/context/user'
import { $isAuth } from '@/context/auth'
import { loginCheckFx } from '@/api/auth'

const Header = () => {
  const isAuth = useUnit($isAuth)
  const loginCheckSpinner = useUnit(loginCheckFx.pending)
  const user = useUnit($user)
  console.log(user)

  useEffect(() => {
    triggerLoginCheck()
  }, [])

  return (
    <header className='header'>
      <div className='container header__container'>
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <Link
              href='/projects'
              className='header__links__item__btn header__links__item__btn--projects'
            >
              ПРОЕКТЫ
            </Link>
          </li>
          <li className='header__links__item'>
            <Link
              href='/scientific-work'
              className='header__links__item__btn header__links__item__btn--scientific__work'
            >
              НАУЧНАЯ РАБОТА
            </Link>
          </li>
          <li className='header__links__item'>
            <Link
              href='/project-competition/current'
              className='header__links__item__btn header__links__item__btn--project__competition'
            >
              КОНКУРС ПРОЕКТОВ
            </Link>
          </li>
          <li className='header__links__item'>
            <Link
              href='/events'
              className='header__links__item__btn header__links__item__btn--events'
            >
              МЕРОПРИЯТИЯ
            </Link>
          </li>
          <li className='header__links__item'>
            <Link
              href='/dev-team'
              className='header__links__item__btn header__links__item__btn--dev__team'
            >
              КОМАНДА РАЗРАБОТЧИКОВ
            </Link>
          </li>
          <li className='header__links__item'>
            {isAuth ? (
              <HeaderProfile />
            ) : loginCheckSpinner ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <button
                className='btn-reset header__links__item__btn header__links__item__btn--profile'
                onClick={handleOpenAuthPopup}
              />
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
