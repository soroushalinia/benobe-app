'use client';

import { useState } from 'react';
import Image from 'next/image';
import BackIcon from './images/back.svg';
import PhoneIcon from './images/phone.svg';
import PasswordIcon from './images/password.svg';
import VisibleIcon from './images/visible.svg';

const Login: React.FC = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && (
        <div className="flex w-[500px] flex-col items-center justify-center gap-3 rounded-2xl bg-white px-20 py-10">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <p className="text-[#707070]">ورود کاربر</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <p className="text-primary">بازگشت</p>
              <Image src={BackIcon} alt="Back Icon"></Image>
            </div>
          </div>
          <br />
          <br />
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row items-center">
              <Image src={PhoneIcon} alt="Phone Icon"></Image>
              <p className="text-[#707070]">شماره موبایل</p>
            </div>
            <input
              dir="ltr"
              className="h-[50px] w-full rounded-2xl px-6 py-2 shadow-[6px_6px_12px_rgba(0,0,0,0.25)]"
              type="text"
              placeholder="+900000000000"
            />
          </div>
          <br />
          <button
            onClick={() => {
              setStep(2);
            }}
          >
            <p className="w-[330px] rounded-2xl bg-gradient-to-r from-[#2E86C1] to-[#84CAF9] py-2 text-xl text-white">
              ادامه
            </p>
          </button>
          <div className="flex w-full flex-row items-center gap-2 px-4">
            <input type="checkbox"></input>
            <p>
              <a className="text-primary" href="#">
                شرایط و قوانین{' '}
              </a>
              را خوانده ام و پذیرفته ام
            </p>
          </div>
          <br />
        </div>
      )}
      {step === 2 && (
        <div className="flex w-[500px] flex-col items-center justify-center gap-3 rounded-2xl bg-white px-20 py-10">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <p className="text-[#707070]">ورود کاربر جدید</p>
            </div>
            <div
              className="flex flex-row items-center justify-center gap-2"
              onClick={() => {
                setStep(1);
              }}
            >
              <p className="text-primary">بازگشت</p>
              <Image src={BackIcon} alt="Back Icon"></Image>
            </div>
          </div>
          <br />
          <br />
          <div className="flex w-full flex-row items-center justify-between">
            <input type="text" className="h-16 w-16 rounded-2xl border border-black/80" />
            <input type="text" className="h-16 w-16 rounded-2xl border border-black/80" />
            <input type="text" className="h-16 w-16 rounded-2xl border border-black/80" />
            <input type="text" className="h-16 w-16 rounded-2xl border border-black/80" />
          </div>
          <br />
          <button
            onClick={() => {
              setStep(3);
            }}
          >
            <p className="w-[330px] rounded-2xl bg-gradient-to-r from-[#2E86C1] to-[#84CAF9] py-2 text-xl text-white">
              ادامه
            </p>
          </button>
          <div className="flex w-full flex-row items-center gap-2 px-4">
            <p className="text-primary">ارسال مجدد کد</p>
            <p>02:00</p>
          </div>
          <br />
        </div>
      )}
      {step === 3 && (
        <div className="flex w-[500px] flex-col items-center justify-center gap-3 rounded-2xl bg-white px-20 py-10">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <p className="text-[#707070]">ورود کاربر جدید</p>
            </div>
            <div
              className="flex flex-row items-center justify-center gap-2"
              onClick={() => {
                setStep(2);
              }}
            >
              <p className="text-primary">بازگشت</p>
              <Image src={BackIcon} alt="Back Icon"></Image>
            </div>
          </div>
          <br />
          <br />
          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row items-center">
              <Image src={PasswordIcon} alt="Password Icon"></Image>
              <p className="text-[#707070]">رمز عبور </p>
            </div>
            <div className="flex w-full flex-row items-center justify-between rounded-2xl px-6 py-2 shadow-[6px_6px_12px_rgba(0,0,0,0.25)]">
              <input className="h-[50px] w-full py-1 focus:outline-none" type="text" />
              <Image src={VisibleIcon} alt="Visible Icon" className="h-4 w-4"></Image>
            </div>
          </div>
          <br />
          <button>
            <p className="w-[330px] rounded-2xl bg-gradient-to-r from-[#2E86C1] to-[#84CAF9] py-2 text-xl text-white">
              ورود
            </p>
          </button>
          <div className="flex w-full flex-row items-center gap-2 px-4 text-primary">
            <p>ورود با کد یک بار مصرف</p>
          </div>
          <br />
        </div>
      )}
    </div>
  );
};

export default Login;
