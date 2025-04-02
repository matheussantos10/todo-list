
import * as React from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Links } from './components/Links';
import { Footer } from './components/Footer';

export const Box = () => {

    return (
        <main className="bg-[#232323] flex flex-col h-[75vh] w-[50vw] rounded-xl">
            <Links />

            <Header />

            <Content />

            <Footer />
        </main>
    )
}
