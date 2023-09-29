'use client';
import {REMOVE_ACTIVE_USER} from '@/redux/slice/authSlice';
import {signOut} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {auth} from '@/firebase/config';
import {useEffect, useState} from 'react';
import Cookie from 'js-cookie';
import Link from 'next-intl/link';

const Header = ({home}) => {
  const dispatch = useDispatch();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState('');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsUserLoggedIn(Cookie.get('isLoggedIn'));
    };

    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isUserLoggedIn]);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        Cookie.remove('isLoggedIn');
        window.dispatchEvent(new Event('storage'));
        dispatch(REMOVE_ACTIVE_USER());
        toast.success('Logout successfully!');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <div>
          <Link
            href="#"
            className="navbar-brand mb-0 h1 fst-italic text-warning fw-bolder"
            style={{fontSize: '1.5rem'}}
          >
            Cinemania
          </Link>
        </div>

        <div className="d-flex">
          {isUserLoggedIn ? (
            <>
              <div>
                <Link
                  href="/"
                  style={{marginRight: '1rem'}}
                  onClick={logoutHandler}
                >
                  Log out
                </Link>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="d-flex">
            <div style={{marginRight: '0.5rem'}}>
              <Link className="text-white" href="/" locale="en">
                ENG
              </Link>
            </div>
            <div>
              <Link className="text-white" href="/" locale="mk">
                MKD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
