import { emailValidationRules } from '@/lib/utils/auth'
import { IAuthInput } from '@/types/authPopup'
import styles from '@/styles/auth-popup/index.module.scss'

const EmailInput = ({ register, errors }: IAuthInput) => (
  <div className='form__block'>
    <input
      type='email'
      className='form__block__input'
      placeholder='Email'
      {...register(
        'email',
        emailValidationRules('Неправвильный email!', 'Введите email!')
      )}
    />
    {errors.email && (
      <span className={styles.error_alert}>{errors.email?.message}</span>
    )}
  </div>
)

export default EmailInput
