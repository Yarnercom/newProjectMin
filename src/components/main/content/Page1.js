import React from 'react';
import './FirstPage.css'
import {Link} from 'react-router-dom'


const Page1 = () => {
    return (
        <section className='firstPage'>
            <div className='container'>
                <div className='firstPage__container'>
                    <div className='firstPage__lang'>
                        <Link className='firstPage__lang-item' to=''>Ru</Link>
                        <Link className='firstPage__lang-item' to=''>En</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page1;