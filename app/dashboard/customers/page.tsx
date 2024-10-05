<<<<<<< HEAD
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};
 

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
    return (
    <main>
      <CustomersTable customers={customers} />
    </main>
    );
}
=======
export default function Page() {
    return <p>Customers Page</p>;
  }
>>>>>>> e44af159ce14d1e2c710eb8ee5694267456158d4
