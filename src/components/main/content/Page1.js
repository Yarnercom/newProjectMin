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
                    <div className='firstPage__content'>
                        <h2 className='firstPage__content-title'>Портал Выпускников</h2>
                        <h2 className='firstPage__content-subtitle'>
                            Наше будущее в наших руках
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page1;