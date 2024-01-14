
import type { Metadata } from 'next';
import Landing from './page.components';

export const metadata: Metadata = {
  title: 'Lighter',
  description: 'Lighter documentation home page',
};

export default function Page() {
  return (
    <Landing></Landing>
  )
}