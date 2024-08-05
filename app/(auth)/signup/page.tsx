import Link from 'next/link';
import React from 'react';
import SignupForm from './SignupForm';

const SignUp = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <div className="block text-2xl font-bold text-gray-800 dark:text-white">
            Sign Up
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Sudah punya akun?
            <Link
              className="ml-2 text-primary-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-primary-500"
              href={'/signin'}
            >
              Masuk Disini
            </Link>
          </p>
        </div>
        <div className="mt-5">
          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
            Or
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
