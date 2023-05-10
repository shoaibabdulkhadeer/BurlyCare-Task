import React from 'react'

const Numbers = () => {

  let datas = [
    {
         image:"https://lh3.googleusercontent.com/zi3VAkTsX2891P3a6fSdP5Mg5VZVlpKOyjC0T_yvJVxs2fgl7LlO4fZoxZUpHhUxVYj5GdIQ3es8yJd3XGX15gzzTezBRYlfjdf5IxwS",
         numbers:"300+",
         para:"Happy Patients"
    },
    {
        image:"https://lh3.googleusercontent.com/BLmq7xXQbEki4l4lNDtMAtHH6JKSkFKiS76xJkYcoXoRQdgECftCM0sRM0vb9zoJiqV_lE_WfpmOA5H6fItcm7-3GHuqhqDX4S4Banyy",
        numbers:"100+",
        para:"Hospitals" 
    },
    {
        image:"https://lh3.googleusercontent.com/XUP6GoBQ4ivDjv1yTZwhQgM091i0ljAjdz0qiggVnEJmU0QPa88IcWsxsrGru_SVSUSWIZXs62qpFlLrCtYgAePyFqPaOo16m1V4ZKgY",
        numbers:"200+",
        para:"Docters" 
    },
    {
        image:"https://lh3.googleusercontent.com/NaK3DHq27oxePyNQgW0fZrXauRrjGfNFvO2ZwxL3LyrRzMH24h6GwO7NheUhp4kdIHt8cL-GfoN7O-U0kSZXgZEIrdittCfgAT1GrybyGg",
        numbers:"3+",
        para:"Cities" 
    },
    
    

  ]

    return (
        <div className='bg-[#fde7e7] p-3 flex flex-col items-center justify-center mt-10 py-20 px-5'>

            <h1 className='text-2xl md:text-4xl font-bold mb-5'>BurlyCare in Numbers</h1>

            <p className='md:w-[600px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi</p>

            <div className='md:flex my-16'>
              {datas.map((x,index) => {
                return (
                    <div key={index} className='my-6 shadow-box-shadow px-16 py-5 bg-white md:px-28 md:py-10 mx-5 flex flex-col items-center  justify-center' >
                        <img src={x.image} alt="" />
                        <h1 className='text-4xl font-bold'>{x.numbers}</h1>
                        <p>{x.para}</p>
                    </div>
                )
              })}
              </div>

        </div>
    )
}

export default Numbers