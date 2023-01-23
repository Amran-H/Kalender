import React from 'react';
import { FaCheck, FaRegTimesCircle } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div>
            <div className='my-32'>
                <h1 className='md:text-4xl text-2xl font-bold text-center'>Effective & Affordable</h1>
                <p className='text-center mt-6 text-lg'>Free trial of one month no credit card needed.</p>
                <p className='text-center text-lg'>You will be charged in a yearly basis, so you can cancel anytime.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 place-items-end ml-72'>
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

            {/* Table */}

            <div className='my-6'>
                <h1 className='font-bold text-2xl'>Features</h1>
            </div>

            <div className='flex flex-row gap-10  '>
                <div className='mr-20 md:w-80'><h1 className='text-xl font-semibold'>Booking pages</h1><p>Number of landing pages to show availability</p></div>
                <div className='flex flex-row md:gap-56  '>
                    <div className='text-xl'>2</div>
                    <div className='text-xl' >4</div>
                    <div className='text-xl'>8</div>
                    <div className='text-xl'> custom</div>
                </div>
            </div>
            <hr className='my-6' />
            <div className='flex flex-row gap-10  '>
                <div className='mr-20 md:w-80'><h1 className='text-xl font-semibold'>Bookings per month
                </h1><p>Maximum number of bookings per month</p></div>
                <div className='flex flex-row md:gap-48  '>
                    <div className='text-xl'>500</div>
                    <div className='text-xl' >5,000</div>
                    <div className='text-xl'>10,000</div>
                    <div className='text-xl'> custom</div>
                </div>
            </div>
            <hr className='my-6' />
            <div className='flex flex-row gap-10  '>
                <div className='mr-20 md:w-80'><h1 className='text-xl font-semibold'>Integrations
                </h1><p>Zoom, Google Meet, Slack, Zapier, etc.</p></div>
                <div className='flex flex-row md:gap-56  '>
                    <div className='text-xl'>4</div>
                    <div className='text-xl' >6</div>
                    <div className='text-xl'>12</div>
                    <div className='text-xl'> custom</div>
                </div>
            </div>
            <hr className='my-6' />
            <div className='flex flex-row gap-10  '>
                <div className='mr-20 md:w-80'><h1 className='text-xl font-semibold'>One-on-one meetings
                </h1><p>Good for sales execs, realtors, HR consultants.</p></div>
                <div className='flex flex-row md:gap-56  '>
                    <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                    <div className='text-xl' ><FaCheck className='text-emerald-600' /> </div>
                    <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                    <div className='text-xl'> <FaCheck className='text-emerald-600' /> </div>
                </div>
            </div>
            <hr className='my-6' />
            <div className='flex flex-row gap-10  '>
                <div className='mr-20 md:w-80'><h1 className='text-xl font-semibold'>Group meetings
                </h1><p>
                        Good for yoga classes, virtual events</p></div>
                <div className='flex flex-row md:gap-56  '>
                    <div className='text-xl'><FaRegTimesCircle className='text-red-600' /></div>
                    <div className='text-xl' ><FaCheck className='text-emerald-600' /> </div>
                    <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                    <div className='text-xl'> <FaCheck className='text-emerald-600' /> </div>
                </div>
            </div>
            <hr className='my-6' />
            <div className='flex flex-row gap-10  '>
                <div className='mr-20 md:w-80'><h1 className='text-xl font-semibold'>Team meetings
                </h1><p>
                        Round-robin or directory listing</p></div>
                <div className='flex flex-row md:gap-56  '>
                    <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                    <div className='text-xl' ><FaCheck className='text-emerald-600' /> </div>
                    <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                    <div className='text-xl'> <FaCheck className='text-emerald-600' /> </div>
                </div>
            </div>
            <hr className='my-6' />

        </div>
    );
};

export default Pricing;