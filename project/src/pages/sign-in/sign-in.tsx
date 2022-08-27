import {useForm, SubmitHandler} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import Logo from '../../components/logo/logo';
import VisuallyHidden from '../../components/visually-hidden/visually-hidden';
import Footer from '../../components/footer/footer';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import {AppRoute} from '../../components/const';

function SignIn (): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthData>({
    criteriaMode: 'all'
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthData> = (authData: AuthData) => {
    dispatch(loginAction(authData));
    navigate(AppRoute.Main);
  };

  return (
    <body>

      <VisuallyHidden />

      <div className="user-page">
        <header className="page-header user-page__head">

          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action=" "
            className="sign-in__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  {...register('email', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i })}
                  className="sign-in__input"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  {...register('password',
                    {
                      required: 'This input is required.',
                      pattern: {
                        value: /(?=.*[0-9])(?=.*[A-Za-z])[0-9a-zA-Z]{2,}/i,
                        message: 'Пароль должен содержать, как минимум, 1 цифру и 1 букву'
                      },

                    })
                  }
                  className="sign-in__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ messages }) => messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                    : null}
                />
                <label className="sign-in__label visually-hidden" htmlFor="password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <Footer />

      </div>
    </body>
  );
}

export default SignIn;
