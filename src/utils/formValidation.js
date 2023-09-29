import {
  NAME,
  EMAIL,
  PHONE_NUMBER,
  PASSWORD,
} from '@/constants/validationRegexConstants';
import {
  FIRST_NAME_REQUIRED,
  FIRST_NAME_INVALID,
  LAST_NAME_REQUIRED,
  LAST_NAME_INVALID,
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  PHONE_NUMBER_REQUIRED,
  PHONE_NUMBER_INVALID,
  PASSWORD_INVALID,
  PASSWORD_REQUIRED,
  CONFIRM_PASSWORD_INVALID,
  CONFIRM_PASSWORD_REQUIRED,
} from '@/constants/messages';

const validateForm = (fieldName, value, formData) => {
  switch (fieldName) {
    case 'firstName':
      if (!value.trim()) {
        return FIRST_NAME_REQUIRED;
      } else if (!NAME.test(value)) {
        return FIRST_NAME_INVALID;
      }
      break;
    case 'lastName':
      if (!value.trim()) {
        return LAST_NAME_REQUIRED;
      } else if (!NAME.test(value)) {
        return LAST_NAME_INVALID;
      }
      break;
    case 'email':
      if (!value.trim()) {
        return EMAIL_REQUIRED;
      } else if (!EMAIL.test(value)) {
        return EMAIL_INVALID;
      }
      break;
    case 'phoneNumber':
      if (!value.trim()) {
        return PHONE_NUMBER_REQUIRED;
      } else if (!PHONE_NUMBER.test(value)) {
        return PHONE_NUMBER_INVALID;
      }
      break;
    case 'password':
      if (!value.trim()) {
        return PASSWORD_REQUIRED;
      } else if (!PASSWORD.test(value)) {
        return PASSWORD_INVALID;
      }
      break;
    case 'confirmPassword':
      if (!value.trim()) {
        return CONFIRM_PASSWORD_REQUIRED;
      } else if (value !== formData.password) {
        return CONFIRM_PASSWORD_INVALID;
      }
      break;
    default:
      return '';
  }
  return '';
};

export default validateForm;
