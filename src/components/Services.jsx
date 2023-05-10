import React from 'react'

const Services = () => {


    return (
        <div className='flex flex-col items-center justify-center py-16'>
            <h1 className='text-2xl md:text-4xl font-bold'>Surgeries we Provide </h1>

            <div className='text-sm md:text-2xl flex flex-col md:flex-row md:py-24 gap-10'>
                <div className='w-64 p-5 flex flex-col items-center justify-center '>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_7L0VOQcAa2VzVj-EF-RgEv4U0wmnPMYL9ET7EzivMukKBKV6" alt="" width={145} />
                    <h1 className='text-center text-4xl'>Fissure</h1>
                    <p className='text-sm text-center mt-5 text-slate-500'>An anal fissure is a small tear
                        in the thin, moist tissue
                        (mucosa) that lines the anus.</p>
                </div>

                <div className='w-64 p-5 flex flex-col items-center justify-center '>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_7L0VOQcAa2VzVj-EF-RgEv4U0wmnPMYL9ET7EzivMukKBKV6" alt="" width={145} />
                    <h1 className='text-center text-4xl'>Hernia</h1>
                    <p className='text-sm text-center mt-5 text-slate-500'>A hernia occurs when an
                        internal organ or other body
                        part protrudes through the
                        wall of muscle or tissue that
                        normally contains it.</p>
                </div>


                <div className=' w-64 md:scale-125 p-5 flex flex-col items-center justify-center bg-pink-50 '>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_7L0VOQcAa2VzVj-EF-RgEv4U0wmnPMYL9ET7EzivMukKBKV6" alt="" width={155} />
                    <h1 className='text-center text-4xl'>Piles</h1>
                    <p className='text-sm text-center mt-5 text-slate-500'>Piles is common in the case
                        of both men and women. If
                        global medical reports are to
                        be believed, one out of every
                        four adults suffers from piles
                        or hemorrhoids at some or
                        other point in their life.</p>
                </div>


                <div className='w-64 p-5 flex flex-col items-center justify-center '>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_7L0VOQcAa2VzVj-EF-RgEv4U0wmnPMYL9ET7EzivMukKBKV6" alt="" width={145} />
                    <h1 className='text-center text-4xl'>Fissure</h1>
                    <p className='text-sm text-center mt-5 text-slate-500'>An anal fissure is a small tear
                        in the thin, moist tissue
                        (mucosa) that lines the anus.</p>
                </div>



                <div className='w-64  flex flex-col items-center justify-center '>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_7L0VOQcAa2VzVj-EF-RgEv4U0wmnPMYL9ET7EzivMukKBKV6" alt="" width={145} />
                    <h1 className='text-center text-4xl'>Fissure</h1>
                    <p className='text-sm text-center mt-5 text-slate-500'>An anal fissure is a small tear
                        in the thin, moist tissue
                        (mucosa) that lines the anus.</p>
                </div>

            </div>


            <button className='rounded-full py-2 px-24 bg-transparent text-slate-700 border-slate-700 border'>View all</button>

        </div>
    )
}

export default Services