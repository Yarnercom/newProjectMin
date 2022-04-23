import React from 'react';
import './Page2.css'

const Page2 = () => {
    return (
        <section className='secondPage'>
            <div className='container'>
                <div className='secondPage__container'>
                    <h2 className='secondPage__title'>Наши Стартапы</h2>
                    <div className='secondPage__row'>
                        <div className='secondPage__col'>
                            <div className='secondPage__col-descr'>
                                <p>Project</p>
                            </div>
                        </div>
                        <div className='secondPage__col'>
                            <div className='secondPage__col-descr'>
                                <p>Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page2;