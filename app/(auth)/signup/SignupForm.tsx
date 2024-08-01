'use client';
import React from 'react';
import Buttons from '@/components/Buttons';
import InputComps from '@/components/InputComps';
import LabelInput from '@/components/LabelInput';
import { RiLockPasswordFill, RiMailFill, RiUser2Fill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { RegisterForm } from '@/types/FormProps';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/lib/schema/register-schema';
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
import { json } from 'stream/consumers';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Nama Tidak Boleh 1 karakter.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(8, {
    message: 'Password minimal 8 karakter.',
  }),
});

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast.error('Oops!', {
      description: 'data?.error',
      // action: {
      //   label: 'Undo',
      //   onClick: () => console.log('Undo'),
      // },
    });
    // try {
    //   // const response = await fetch('/api/register', {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json',
    //   //   },
    //   //   body: JSON.stringify(values),
    //   // });
    //   // const data = await response.json();
    //   // if (!response.ok) {
    //   //   toast.error('Oops!', {
    //   //     description: data?.error,
    //   //     // action: {
    //   //     //   label: 'Undo',
    //   //     //   onClick: () => console.log('Undo'),
    //   //     // },
    //   //   });
    //   // }
    // } catch (error) {
    //   console.error('Error', error);
    // }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
  );
};

export default SignupForm;