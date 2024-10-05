<<<<<<< HEAD
import CardWrapper  from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};
=======
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
>>>>>>> e44af159ce14d1e2c710eb8ee5694267456158d4

import { Suspense } from 'react';
import { RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
 } from '@/app/ui/skeletons';
 
export default async function Page() {
<<<<<<< HEAD
    return (
=======
    
  return (
>>>>>>> e44af159ce14d1e2c710eb8ee5694267456158d4
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
<<<<<<< HEAD
        <Suspense fallback={<RevenueChartSkeleton />}>
=======
      <Suspense fallback={<RevenueChartSkeleton />}>
>>>>>>> e44af159ce14d1e2c710eb8ee5694267456158d4
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>        
      </div>
    </main>
    );
}