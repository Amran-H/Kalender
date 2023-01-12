import React from 'react';
import Marquee from "react-fast-marquee";
import airCanadaImg from '../../../assets/client_logos/air-canada.svg';
import mastercardImg from '../../../assets/client_logos/mastercard.svg';
import ayreImg from '../../../assets/client_logos/ayre.svg';
import britishCouncilImg from '../../../assets/client_logos/british-council.svg';
import cheetosImg from '../../../assets/client_logos/cheetos.svg';
import crocsImg from '../../../assets/client_logos/crocs.svg';

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


    return (
        <section className='my-10'>
        <h3 className='text-4xl px-10 py-12 text-center lg:text-4xl text-cyan-900 font-bold  lg:w-3/5 mx-auto'>More than 10,000,000 users worldwide are using our platform for scheduling</h3>
        <Marquee direction='left' speed={50} pauseOnHover>
            {
                logosArr1.map(logo => 
                    <div className='w-60'>
                        <img className='w-4/6' src={logo.image} alt="" />
                    </div>)
            }
        </Marquee>

        <Marquee direction='right' speed={50} pauseOnHover>
            {
                logosArr1.map(logo => 
                    <div className='w-60'>
                        <img className='w-4/6' src={logo.image} alt="" />
                    </div>)
            }
        </Marquee>
        </section>
    );
};

export default Client;