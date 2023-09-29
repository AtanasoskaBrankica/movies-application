export const NAME = /^[a-zA-Z]+$/;
export const EMAIL = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
export const PHONE_NUMBER = /^\d{9}$/;
export const PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
