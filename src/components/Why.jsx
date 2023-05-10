import React from 'react'

const Why = () => {

    let data = [
        {
            question:"1.Prior safe for COVID 19",
            answer:"We are providing the service where our doctors and staff are all tested of COVID 19 and following the social distancing, our clinics are sanitized on daily basis, sterilized surgicalequipment, and mandatory PPE kits during surgery."
        },
        {
            question:"2.Prime surgery experience",
            answer:"A greedy medical coordinator helps you throughout the surgery outing from insurance paperwork, to free commute from home to hospital & back and admission-discharge process at the hospital with convenience.",
        },
        {
            question:"3.Medical expertise with best technology",
            answer:"Our surgeons spend a lot of time with you to diagnose your condition. You are assisted in all pre-surgery medical diagnostics. We offer advanced laser and laparoscopic surgical treatments.",
        },
        {
            question:"4.After the surgery done",
            answer:"We take care of regular follow-ups post-surgery to take care of your health our experts guide you about your diets and excercise.",
        }
       

    ]
    return (
        <div className='flex items-center justify-center p-5'>

            <div className='p-5 flex flex-col justify-center border-2 rounded-lg md:p-16 border-red-800 '>
                <h1 className='text-sm md:text-4xl font-bold mb-5'>Why BurlyCare?</h1>
              

             <div className=' flex flex-col md:flex-row'>
               <div className='flex flex-col'>

                {data.map((x) => {
                    return (
                        <div className='flex flex-col md:w-[600px] my-3'>
                            <h1 className='font-bold md:text-xl mb-2'>{x.question}</h1>
                            <p>{x.answer}</p>
                        </div>
                    )
                })}
               </div>
                   <img src="https://img.freepik.com/premium-vector/young-woman-secretary-working-computer-office_276875-648.jpg?w=1060" alt="" width={590} />
                   </div>
              

           


            </div>

        </div>
    )
}

export default Why