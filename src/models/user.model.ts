export interface User {
  _id?: string;
  phoneNumber: string;
  otp?: string;
  otpExpires?: Date;
}
