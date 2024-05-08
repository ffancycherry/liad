import { handleSignUp, singUpFx } from '@/context/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useAuthForm } from '@/hooks/useAuthForm'
import AuthPopupClose from './AuthPopupClose'
import { IAuthSideProps, IInputs } from '@/types/authPopup'
import NameInput from './NameInput'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'

const AuthPopupRegistration = ({ toggleAuth }: IAuthSideProps) => {
  const { spinner, register, errors, handleSubmit } = useAuthForm(
    singUpFx.pending
  )
  const submitForm = (data: IInputs) =>
    handleSignUp({
      name: data.name,
      email: data.email,
      password: data.password,
    })

  return (
    <div className='card-front'>
      <AuthPopupClose />
      <div className='card-body wow-bg'>
        <h3 className='card-body__title'>Регистрация</h3>
        <p className='card-body__description'>Создать аккаунт</p>
        <form onSubmit={handleSubmit(submitForm)}>
          <NameInput register={register} errors={errors} />
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <div className='card-body__inner'>
            <div className='inner__top'>
              <button className='inner__btn' type='submit' disabled={spinner}>
                {spinner ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  'Создать'
                )}
              </button>
            </div>
            <div className='inner__bottom'>
              <span className='inner__bottom__text'>Уже есть аккаунт?</span>
              <button
                type='button'
                className='btn-reset inner__switch'
                onClick={toggleAuth}
              >
                Войти!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthPopupRegistration
