'use client';
import validateForm from '@/utils/formValidation';
import {useState} from 'react';
import {auth} from '@/firebase/config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {toast} from 'react-toastify';
import {useRouter} from 'next/navigation';
import {useTranslations} from 'next-intl';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const router = useRouter();
  const t = useTranslations('register');

  const handleChange = event => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: validateForm(name, value, formData),
    }));
  };

  const registerHandler = event => {
    event.preventDefault();

    const errors = {};

    Object.keys(formData).forEach(fieldName => {
      const fieldValue = formData[fieldName];
      const fieldError = validateForm(fieldName, fieldValue, formData);
      if (fieldError) {
        errors[fieldName] = fieldError;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(userCredential => {
          const user = userCredential.user;
          toast.success('Registration was successful');
          router.push('/');
        })
        .catch(error => {
          toast.error(error.message);
        });
    }
  };

  return (
    <div className="auth">
      <div
        className="container
     d-flex justify-content-center"
      >
        <div className="row">
          <div>
            <form
              className="mt-5 p-5 shadow p-4 rounded-3 text-white bg-dark col-xs-12"
              onSubmit={registerHandler}
              noValidate
            >
              <div
                className="container scrollbar"
                style={{
                  maxHeight: '450px',
                  overflowY: 'auto',
                  maxWidth: '450px',
                }}
              >
                <div className="row ">
                  <h2 className="d-flex justify-content-center mb-4">
                    {t('title')}
                  </h2>
                </div>

                <div className="row">
                  <div className="mb-3 col-sm-6">
                    <label for="exampleInputFirstName1" className="form-label">
                      {t('first-name')}
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputFirstName1"
                      aria-describedby="firstNameHelp"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {formErrors.firstName && (
                      <div
                        id="exampleInputFirstName1"
                        className="text-danger"
                        style={{fontSize: '10px'}}
                      >
                        {formErrors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label for="exampleInputLastName1" className="form-label">
                      {t('last-name')}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputLastName1"
                      aria-describedby="lastNameHelp"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {formErrors.lastName && (
                      <div className="text-danger" style={{fontSize: '10px'}}>
                        {formErrors.lastName}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-sm-6">
                    <label for="exampleInputEmail1" className="form-label">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <div className="text-danger" style={{fontSize: '10px'}}>
                        {formErrors.email}
                      </div>
                    )}
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label for="examplePhoneNumber1" className="form-label">
                      {t('phone-number')}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="examplePhoneNumber1"
                      aria-describedby="phoneNumberHelp"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {formErrors.phoneNumber && (
                      <div className="text-danger" style={{fontSize: '10px'}}>
                        {formErrors.phoneNumber}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-sm-6">
                    <label for="exampleInputPassword1" className="form-label">
                      {t('password')}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {formErrors.password && (
                      <div className="text-danger" style={{fontSize: '10px'}}>
                        {formErrors.password}
                      </div>
                    )}
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label for="exampleInputPassword2" className="form-label">
                      {t('confirm-password')}
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {formErrors.confirmPassword && (
                      <div className="text-danger" style={{fontSize: '10px'}}>
                        {formErrors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 w-100"
                    >
                      {t('register-button')}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
