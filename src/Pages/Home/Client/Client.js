import React from 'react';
import Marquee from "react-fast-marquee";
import airCanadaImg from '../../../assets/client_logos/air-canada.svg';
import mastercardImg from '../../../assets/client_logos/mastercard.svg';
import ayreImg from '../../../assets/client_logos/ayre.svg';
import britishCouncilImg from '../../../assets/client_logos/british-council.svg';
import cheetosImg from '../../../assets/client_logos/cheetos.svg';
import crocsImg from '../../../assets/client_logos/crocs.svg';
import etihadImg from '../../../assets/client_logos/etihad.svg';
import nikeImg from '../../../assets/client_logos/nike.svg';
import starbucksImg from '../../../assets/client_logos/starbucks.svg';
import pepsiImg from '../../../assets/client_logos/pepsi.svg';
import uniliverImg from '../../../assets/client_logos/uniliver.svg';
import ziggoImg from '../../../assets/client_logos/ziggo.svg';

const Client = () => {
 
    const logosArr1 = [
        {
            name: 'air canada',
            image: airCanadaImg
        },
        {
            name: 'mastercard',
            image: mastercardImg
        },
        {
            name: 'ayre',
            image: ayreImg
        },
        {
            name: 'brtish council',
            image: britishCouncilImg
        },
        {
            name: 'cheetos',
            image: cheetosImg
        },
        {
            name: 'crocs',
            image: crocsImg
        },
    ]

    const logosArr2 = [
        {
            name: 'etihad',
            image: etihadImg
        },
        {
            name: 'nike',
            image: nikeImg
        },
        {
            name: 'pepsi',
            image: pepsiImg
        },
        {
            name: 'ziggo',
            image: ziggoImg
        },
        {
            name: 'starbucks',
            image: starbucksImg
        },
        {
            name: 'uniliver',
            image: uniliverImg
        },
    ]


    return (
        <section className='my-10'>
        <Marquee direction='right' speed={50} pauseOnHover>
            {
                logosArr1.map(logo => 
                    <div className='w-60'>
                        <img className='w-4/6' src={logo.image} alt="" />
                    </div>)
            }
        </Marquee>

        <Marquee direction='left' speed={50} pauseOnHover>
            {
                logosArr2.map(logo => 
                    <div className='w-60'>
                        <img className='w-4/6' src={logo.image} alt="" />
                    </div>)
            }
        </Marquee>
        </section>
    );
};

export default Client;