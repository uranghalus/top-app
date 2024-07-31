import FormInput from '@/components/FormInput';
import InputComps from '@/components/InputComps';
import LabelInput from '@/components/LabelInput';
import Link from 'next/link';
import React from 'react';
import { RiLockPasswordLine, RiMailLine } from 'react-icons/ri';

const SignIn = () => {
  return (
    <div className="card bg-white w-96 shadow-lg">
      <div className="card-body">
        <div className="flex flex-col justify-center items-center">
          <div className="card-title text-2xl">Sign In</div>
          <p className="mt-2 flex gap-1 text-sm text-gray-600 dark:text-neutral-400">
            Belum Punya Akun?
            <Link
              className="link link-primary font-bold no-underline"
              href={'/signup'}
            >
              Daftar Disini
            </Link>
          </p>
        </div>
        <div className="mt-5">
          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
            Or
          </div>
          <form>
            <div className="grid gap-y-4">
              <div className="form-control w-full">
                <LabelInput label="Email" altText={''} />
                <InputComps
                  error={undefined}
                  icons={RiMailLine}
                  type="email"
                  placeholder="Masukkan email anda"
                />
              </div>
              <div className="form-control w-full">
                <LabelInput
                  label="Password"
                  isShown={true}
                  altText={'Forgot Password?'}
                  href={'/forgot-password'}
                />
                <InputComps
                  error={undefined}
                  icons={RiLockPasswordLine}
                  type="password"
                  placeholder="Masukkan password anda"
                />
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;