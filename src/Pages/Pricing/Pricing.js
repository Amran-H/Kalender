import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className='my-32'>
                <h1 className='text-4xl font-bold text-center'>Effective & Affordable</h1>
                <p className='text-center mt-6 text-lg'>Free trial of one month no credit card needed.</p>
                <p className='text-center text-lg'>You will be charged in a yearly basis, so you can cancel anytime.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 place-items-center'>
                <div>
                    <p className='text-2xl font-bold '>Basic</p>
                    <p className='my-4 text-lg'> <span className='text-lg font-bold'>$9</span> per month</p>
                    <button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600'>Sign Up</button>
                </div>
                <div>
                    <p className='text-2xl font-bold '>Professional</p>
                    <p className='my-4 text-lg'> <span className='text-lg font-bold'>$19</span> per month</p>
                    <button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600'>Sign Up</button>
                </div>
                <div>
                    <p className='text-2xl font-bold '>Business</p>
                    <p className='my-4 text-lg'> <span className='text-lg font-bold'>$49</span> per month</p>
                    <button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600'>Sign Up</button>
                </div>
                <div>
                    <p className='text-2xl font-bold '>Enterprise</p>
                    <p className='my-4 text-lg'> <span className='text-lg font-bold'>$9</span> per month</p>
                    <button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;