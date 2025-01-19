import StatusLabel, { Status } from '@/app/components/status-label';

import AddCompanyButton from './components/add-company-button';
import MagiButton from './components/magic-button';
export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />

      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <br />
      <MagiButton />
    </main>
  );
}
