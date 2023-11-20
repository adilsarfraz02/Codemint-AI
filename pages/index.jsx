'use client'
import { useSession } from 'next-auth/react';
import AboutSec from '../components/Hero2';
import Head from 'next/head';
import Admin from '../@admin/Admin'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
    
        return <div className='font-sans'>
            <Head>
                <title>Codemintai | The website of artifical intelligence</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <Header/>
            <AboutSec />
            <Footer />
    </div>
    
}

export default Index;