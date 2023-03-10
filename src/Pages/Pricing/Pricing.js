import React from 'react';
import { FaCheck, FaRegTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div>
            <div className='md:my-32 my-20'>
                <h1 className='md:text-4xl text-2xl font-bold text-center'>Effective & Affordable</h1>
                <p className='text-center mt-6 text-lg'>Free trial of one month no credit card needed.</p>
                <p className='text-center text-lg'>You will be charged in a yearly basis, so you can cancel anytime.</p>
            </div>
            <div className='hidden md:grid md:grid-cols-4 place-items-end ml-72'>
                <div>
                    <p className='text-2xl font-bold '>Basic</p>
                    <p className='my-4 text-lg'> <span className='text-lg font-bold'>$9</span> per month</p>
                    <Link to="/buyNow">   <button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600'>Buy Now</button></Link>
                </div>
                <div>
                    <p className='text-2xl font-bold '>Professional</p>
                    <p className='my-4 text-lg'> <span className='text-lg font-bold'>$19</span> per month</p>
                    <Link to="/buyNow">   <button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600'>Buy Now</button></Link>
                </div>
                <div>
                    <p className='text-2xl font-bold '>Business</p>
                    <p className='my-4 text-lg'> <span className='text-lg font-bold'>$49</span> per month</p>
                    <Link to="/buyNow">   <button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600'>Buy Now</button></Link>
                </div>
                <div>
                    <p className='text-2xl font-bold '>Enterprise</p>
                    <p className='my-4 text-lg'> <span className='text-lg font-bold'>$9</span> per month</p>
                    <Link to="/buyNow">   <button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600'>Buy Now</button></Link>
                </div>
            </div>


            <div className='my-6 hidden md:block'>
                <h1 className='font-bold text-2xl'>Features</h1>
            </div>

            <div className='hidden md:block'>

                <div className='flex flex-row gap-10  '>
                    <div className='mr-20 lg:w-80 md:w-60'><h1 className='text-xl font-semibold'>Booking pages</h1><p>Number of landing pages to show availability</p></div>
                    <div className='flex flex-row lg:gap-56 md:gap-24 '>
                        <div className='text-xl'>2</div>
                        <div className='text-xl' >4</div>
                        <div className='text-xl'>8</div>
                        <div className='text-xl'> custom</div>
                    </div>
                </div>
                <hr className='my-6' />
                <div className='flex flex-row gap-10  '>
                    <div className='mr-20 lg:w-80 md:w-60'><h1 className='text-xl font-semibold'>Bookings per month
                    </h1><p>Maximum number of bookings per month</p></div>
                    <div className='flex flex-row lg:gap-48 md:gap-16 '>
                        <div className='text-xl'>500</div>
                        <div className='text-xl' >5,000</div>
                        <div className='text-xl'>10,000</div>
                        <div className='text-xl'> custom</div>
                    </div>
                </div>
                <hr className='my-6' />
                <div className='flex flex-row gap-10  '>
                    <div className='mr-20 lg:w-80 md:w-60'><h1 className='text-xl font-semibold'>Integrations
                    </h1><p>Zoom, Google Meet, Slack, Zapier, etc.</p></div>
                    <div className='flex flex-row lg:gap-56 md:gap-24 '>
                        <div className='text-xl'>4</div>
                        <div className='text-xl' >6</div>
                        <div className='text-xl'>12</div>
                        <div className='text-xl'> custom</div>
                    </div>
                </div>
                <hr className='my-6' />
                <div className='flex flex-row gap-10  '>
                    <div className='mr-20 lg:w-80 md:w-60'><h1 className='text-xl font-semibold'>One-on-one meetings
                    </h1><p>Good for sales execs, realtors, HR consultants.</p></div>
                    <div className='flex flex-row lg:gap-56 md:gap-24  '>
                        <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                        <div className='text-xl' ><FaCheck className='text-emerald-600' /> </div>
                        <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                        <div className='text-xl'> <FaCheck className='text-emerald-600' /> </div>
                    </div>
                </div>
                <hr className='my-6' />
                <div className='flex flex-row gap-10  '>
                    <div className='mr-20 lg:w-80 md:w-60'><h1 className='text-xl font-semibold'>Group meetings
                    </h1><p>
                            Good for yoga classes, virtual events</p></div>
                    <div className='flex flex-row lg:gap-56 md:gap-24  '>
                        <div className='text-xl'><FaRegTimesCircle className='text-red-600' /></div>
                        <div className='text-xl' ><FaCheck className='text-emerald-600' /> </div>
                        <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                        <div className='text-xl'> <FaCheck className='text-emerald-600' /> </div>
                    </div>
                </div>
                <hr className='my-6' />
                <div className='flex flex-row gap-10  '>
                    <div className='mr-20 lg:w-80 md:w-60'><h1 className='text-xl font-semibold'>Team meetings
                    </h1><p>
                            Round-robin or directory listing</p></div>
                    <div className='flex flex-row lg:gap-56 md:gap-24  '>
                        <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                        <div className='text-xl' ><FaCheck className='text-emerald-600' /> </div>
                        <div className='text-xl'><FaCheck className='text-emerald-600' /> </div>
                        <div className='text-xl'> <FaCheck className='text-emerald-600' /> </div>
                    </div>
                </div>
                <hr className='my-6' />

            </div>

            {/*----- For Mobile -----*/}

            <div className='md:hidden'>

                {/* Basic Plan Card */}
                <div className="card border-4 mx-2 pl-6 mb-8 py-6">
                    <div >
                        <h2 className="card-title text-2xl font-bold">Basic</h2>
                        <p className='my-4 text-lg'> <span className='text-lg font-bold'>$9</span> per month</p>
                    </div>

                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Booking pages</h1><p>Number of landing pages to show availability</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>2</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Bookings per month</h1><p>
                            Maximum number of bookings per month</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>500</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Integrations</h1><p>
                            Zoom, Google Meet, Slack, Zapier, etc.</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>4</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>One-on-one meetings</h1><p>
                            Good for sales execs, realtors, HR consultants.</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Group meetings</h1><p>
                            Good for yoga classes, virtual events</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaRegTimesCircle className='text-red-600' /></p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Team meetings</h1><p>
                            Round-robin or directory listing</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <div className='mr-6'>
                        <Link to="/buyNow"><button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600 w-full '>Buy Now</button></Link>
                    </div>

                </div>

                {/* Professional Plan Card */}
                <div className="card border-4 mx-2 pl-6 mb-8 py-6">
                    <div >
                        <h2 className="card-title text-2xl font-bold">Professional</h2>
                        <p className='my-4 text-lg'> <span className='text-lg font-bold'>$19</span> per month</p>
                    </div>

                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Booking pages</h1><p>Number of landing pages to show availability</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>4</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Bookings per month</h1><p>
                            Maximum number of bookings per month</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>5000</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Integrations</h1><p>
                            Zoom, Google Meet, Slack, Zapier, etc.</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>6</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>One-on-one meetings</h1><p>
                            Good for sales execs, realtors, HR consultants.</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Group meetings</h1><p>
                            Good for yoga classes, virtual events</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Team meetings</h1><p>
                            Round-robin or directory listing</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <div className='mr-6'>
                        <Link to="/buyNow"><button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600 w-full '>Buy Now</button></Link>
                    </div>
                </div>

                {/* Business Plan Card */}
                <div className="card border-4 mx-2 pl-6 mb-8 py-6">
                    <div >
                        <h2 className="card-title text-2xl font-bold">Business</h2>
                        <p className='my-4 text-lg'> <span className='text-lg font-bold'>$49</span> per month</p>
                    </div>

                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Booking pages</h1><p>Number of landing pages to show availability</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>8</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Bookings per month</h1><p>
                            Maximum number of bookings per month</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>10000</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Integrations</h1><p>
                            Zoom, Google Meet, Slack, Zapier, etc.</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>12</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>One-on-one meetings</h1><p>
                            Good for sales execs, realtors, HR consultants.</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Group meetings</h1><p>
                            Good for yoga classes, virtual events</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Team meetings</h1><p>
                            Round-robin or directory listing</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <div className='mr-6'>
                        <Link to="/buyNow"><button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600 w-full '>Buy Now</button></Link>
                    </div>
                </div>

                {/* Enterprise Plan Card */}
                <div className="card border-4 mx-2 pl-6 mb-8 py-6">
                    <div >
                        <h2 className="card-title text-2xl font-bold">Enterprise</h2>
                        <p className='my-4 text-lg'> <span className='text-lg font-bold'> </span> Let's talk</p>
                    </div>

                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Booking pages</h1><p>Number of landing pages to show availability</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>Custom</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Bookings per month</h1><p>
                            Maximum number of bookings per month</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>Custom</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Integrations</h1><p>
                            Zoom, Google Meet, Slack, Zapier, etc.</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p>Custom</p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>One-on-one meetings</h1><p>
                            Good for sales execs, realtors, HR consultants.</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Group meetings</h1><p>
                            Good for yoga classes, virtual events</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <hr />
                    <div className='flex flex-row mb-4'>
                        <div className='w-2/3'> <h1 className='text-xl font-semibold'>Team meetings</h1><p>
                            Round-robin or directory listing</p> </div>
                        <div className='flex justify-end pr-8 w-1/3 font-semibold items-center'><p><FaCheck className='text-emerald-600' /></p></div>
                    </div>
                    <div className='mr-6'>
                        <Link to="/buyNow"><button className='btn px-6 border-none bg-emerald-400 hover:bg-emerald-600 w-full '>Buy Now</button></Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Pricing;