'use client';
import React, { useState } from 'react';
import Buttons from '@/components/Buttons';
import { RiLockPasswordFill, RiMailFill, RiUser2Fill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/lib/schema/auth-schema';
import { z } from 'zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
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
import { RegisterService } from '@/lib/services/auth-services';

const SignupForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    try {
      const response = await RegisterService(values);
      if (response.error) {
        // Handle non-200 responses
        toast.error('Oops!', {
          description: response.message,
        });
      } else {
        toast.success('Yeay!', {
          description: 'Registrasi Berhasil',
        });
      }
    } catch (error: any) {
      console.error('Register Action Error:', error);
    }
  };
  return (
    <Form {...form}>
<<<<<<< HEAD
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
=======
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Nama"
                  icons={RiUser2Fill}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Buttons
          type="submit"
          variant="primary"
          className="mt-4"
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Buttons>
      </form>
    </Form>
  );
};

export default SignupForm;
