import React from 'react';
import Header from './components/Header.js';

import './style.css'


export default function Home(){
    return(
    <div>
        <Header />
        <main className='main'>
            <div className='navbar'></div>
            <div className='feed'></div>
        </main>
    </div>
    )
}