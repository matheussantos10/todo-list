import * as React from 'react';

import { Links } from './components/Links';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

export const Box = () => {
    return (
        <main className="bg-[#161616] flex flex-col h-[75vh] w-[50vw] rounded-xl">
            <Links />
            <Header />
            <Content />
            <Footer />
        </main>
    )
}
