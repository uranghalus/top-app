'use server';
interface RegisterProps {
  name: string;
  password: string;
  email: string;
}

export async function RegisterService(userdata: RegisterProps) {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdata),
    });
    const data = await response.json();

    if (!response.ok) {
      return {
        error: 'Registrasi Gagal',
        message: data.error,
      };
    }
    return data;
  } catch (error: any) {
    console.error('Registration Service Error:', error);

    return {
      error: 'Registrasi Gagal',
      message: error.message,
    };
  }
}
