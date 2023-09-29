'use client';
import Link from 'next/link';
import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '@/firebase/config';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import {SET_ACTIVE_USER} from '@/redux/slice/authSlice';
import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie';
import {useTranslations} from 'next-intl';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const t = useTranslations('login');

  const loginHandler = event => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        Cookies.set('isLoggedIn', 'true');
        dispatchEvent(new Event('storage'));

        dispatch(
          SET_ACTIVE_USER({
            email: email,
          })
        );

        router.push('/home');
        toast.success('Login Successful!');

        setEmail('');
        setPassword('');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  return (
    <div className="auth">
      <div
        className="container
     d-flex justify-content-center"
      >
        <div className="row">
          <div className="col">
            <form
              className="mt-5 p-5 shadow p-4 rounded-3 text-white bg-dark "
              onSubmit={loginHandler}
            >
              <div className="container">
                <h2 className="ms-5 mb-5">{t('title')}</h2>
                <div className="row">
                  <div className="mb-3 col">
                    <label for="exampleInputEmail1" className="form-label">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={event => setEmail(event?.target?.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col">
                    <label for="exampleInputPassword1" className="form-label">
                      {t('password')}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={event => setPassword(event?.target?.value)}
                    />
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <Link href="/register" className="form-label mb-3 fs-6">
                    {t('create-account')}
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    {t('login-button')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
