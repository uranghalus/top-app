'use client';
import React, { useEffect } from 'react';
import Buttons from '@/components/Buttons';
import InputComps from '@/components/InputComps';
import LabelInput from '@/components/LabelInput';

import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginForm } from '@/types/form-auth';
import { LoginSchema } from '@/lib/schema/auth-schema';
import { loginServices } from '@/lib/services/auth-services';
import { toast } from 'sonner';
import { z } from 'zod';
const SigninForm = () => {
  const { data: session } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  let callbackUrl = params.get('callbackUrl') || '/';
  useEffect(() => {
    if (session && session.user) {
      if (session?.user?.role === 'HRD') {
        router.push('/admin');
      } else {
        router.push(callbackUrl);
      }
    }
  }, [callbackUrl, params, router, session]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const formSubmit = async (form: z.infer<typeof LoginSchema>) => {
    const response = await loginServices(form);
    if (response?.error) {
      return toast.error('Login Gagal!', {
        description: response.message,
      });
    } else {
      toast.success('Yeay!', {
        description: 'Login Berhasil',
      });
      setTimeout(() => {
        if (session?.user.role === 'HRD') {
          router.push('/admin');
        } else {
          router.push(callbackUrl);
        }
      }, 2000);
    }
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="grid gap-y-4">
        <div className="form-control w-full">
          <LabelInput label="Email" altText={''} />
          <InputComps
            error={errors.email}
            {...register('email')}
            icons={RiMailFill}
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
            error={errors.password}
            {...register('password')}
            icons={RiLockPasswordFill}
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
        <Buttons variant="primary" type="submit" disabled={isSubmitting}>
          Login
        </Buttons>
      </div>
    </form>
  );
};

export default SigninForm;
