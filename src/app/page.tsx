import StatusLabel, { Status } from '@/app/components/status-label';
import { headers } from 'next/headers';
import Button from './components/button';
export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <Button>Add company</Button>

      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
