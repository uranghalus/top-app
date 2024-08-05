'use client';
import React, { useEffect } from 'react';
import Buttons from '@/components/Buttons';
<<<<<<< HEAD
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/lib/schema/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { loginServices } from '@/lib/services/auth-services';
import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';

=======
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
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
const SigninForm = () => {
  const { data: session } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  let callbackUrl = params.get('callbackUrl') || '/';
<<<<<<< HEAD

=======
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
  useEffect(() => {
    if (session && session.user) {
      if (session?.user?.role === 'HRD') {
        router.push('/admin');
      } else {
        router.push(callbackUrl);
      }
    }
  }, [callbackUrl, params, router, session]);
<<<<<<< HEAD

  const form = useForm<z.infer<typeof LoginSchema>>({
=======
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
<<<<<<< HEAD
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const response = await loginServices(values);
=======

  const formSubmit = async (form: z.infer<typeof LoginSchema>) => {
    const response = await loginServices(form);
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
    if (response?.error) {
      return toast.error('Login Gagal!', {
        description: response.message,
      });
    } else {
      toast.success('Yeay!', {
        description: 'Login Berhasil',
      });
      setTimeout(() => {
<<<<<<< HEAD
        if (session?.user?.role === 'HRD') {
=======
        if (session?.user.role === 'HRD') {
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
          router.push('/admin');
        } else {
          router.push(callbackUrl);
        }
      }, 2000);
    }
  };
  return (
<<<<<<< HEAD
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan email"
                  icons={RiMailFill}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Password"
                  icons={RiLockPasswordFill}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Buttons type="submit" variant="primary">
          Submit
        </Buttons>
      </form>
    </Form>
=======
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
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
  );
};

export default SigninForm;
