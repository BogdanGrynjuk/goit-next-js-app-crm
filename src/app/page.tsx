'use client';

import { useRouter } from 'next/navigation';
import Button from './components/button';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center gap-4 h-screen">
      <h1 className="text-xl text-center font-bold max-w-7xl ">
        This application is the administrative part of a CRM system. It allows
        managers or administrators to manage companies, marketing promotions,
        and other data
      </h1>
      <Button type="button" onClick={() => router.push('/dashboard')}>
        Navigate to the interface
      </Button>
    </main>
  );
}
