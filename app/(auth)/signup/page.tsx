import Link from 'next/link';
import React from 'react';
import SignupForm from './SignupForm';

const SignUp = () => {
  return (
    <div className="card bg-white w-96 shadow-lg">
      <div className="card-body">
        <div className="flex flex-col justify-center items-center">
          <div className="card-title text-2xl text-gray-700">Sign Up</div>
          <p className="mt-2 flex gap-1 text-sm text-gray-600 dark:text-neutral-400">
            Sugah punya akun?
            <Link
              className="link link-primary font-bold no-underline"
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