import { handleSignIn, singInFx } from '@/context/auth'
import { useAuthForm } from '@/hooks/useAuthForm'
import { IAuthSideProps, IInputs } from '@/types/authPopup'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthPopupClose from './AuthPopupClose'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'

const AuthPopupLogin = ({ toggleAuth }: IAuthSideProps) => {
  const { spinner, register, errors, handleSubmit } = useAuthForm(
    singInFx.pending
  )

  const submitForm = (data: IInputs) =>
    handleSignIn({
      email: data.email,
      password: data.password,
    })

  return (
    <div className='card-back'>
      <AuthPopupClose />
      <div className='card-body wow-bg'>
        <h3 className='card-body__title'>Войти</h3>
        <p className='card-body__description'>Войти в свой аккант</p>
        <form onSubmit={handleSubmit(submitForm)}>
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <div className='card-body__inner'>
            <div className='inner__top'>
              <button className='inner__btn' type='submit' disabled={spinner}>
                {spinner ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Войти'}
              </button>
            </div>
            <div className='inner__bottom'>
              <span className='inner__bottom__text'>Уже есть аккаунт?</span>
              <button
                type='button'
                className='btn-reset inner__switch'
                onClick={toggleAuth}
              >
                Зарегистрироваться!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthPopupLogin
