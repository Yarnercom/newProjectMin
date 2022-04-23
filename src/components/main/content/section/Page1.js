import React from 'react';
import './FirstPage.css'
import {Link} from 'react-router-dom'
import Inst from './../../../../assets/icon/inst.svg'
import Massage from './../../../../assets/icon/message.svg'
import Face from './../../../../assets/icon/face.svg'
import Youtube from './../../../../assets/icon/youtube.svg'


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
                        <div className='firstPage__link'>
                            <div className='firstPage__link-item'>
                                <img src={Inst} alt="Inst"/>
                            </div>
                            <div className='firstPage__link-item'>
                                <img src={Massage} alt="Massage"/>
                            </div>
                            <div className='firstPage__link-item'>
                                <img src={Face} alt="Face"/>
                            </div>
                            <div className='firstPage__link-item'>
                                <img src={Youtube} alt="Youtube"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page1;