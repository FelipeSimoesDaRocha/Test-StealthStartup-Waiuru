// Next
import { NextPage } from 'next';

// Suspense
import { Suspense } from "react";

// Components
import Header from '@/components/Header';
import Hero from '@/components/Hero';


const Home: NextPage = () => {
  return (
    <Suspense fallback="loading">
      <Header />
      <Hero />
    </Suspense>
  )
}


export default Home;