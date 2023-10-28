import React from 'react'
import Company from '../assets/icons/company1.png'
const Services = () => {
    const services =[
        {id:1, title:'Doğru Psikoloğu Bulmak ', descroption:"Sana ve ihtiyaçlarına en uygun uzman psikolog ile eşleşebilmek için başlangıç testini tamamlayabilirsin. Cevapların doğrultusunda eşleştiğin klinik psikoloğunla güvenle terapi yolculuğuna başlayabilirsin.", image:"../assets/Vector.png" },
        {id:2, title:'Sen Nerede ve Ne Zaman İstersen Terappin Orada!', descroption:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod.", image:"../assets/Vector.png" },
        {id:3, title:'Terapi Seanslarının Dışında da Huzurlu Hisset!', descroption:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod.", image:"../assets/Vector.png" }
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'  id='service'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGrey'>We have worked with some of the best companies</p>

                <div className='flex justify-center'>
                    <img src={Company} alt='' />
                </div>
            </div> 
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Nasıl Çalışır?</h2>
                <p className='text-neutralGrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium magnam doloremque culpa aspernatur sed maxime mollitia? Aliquid eius itaque praesentium aperiam, earum ab hic magnam ratione fuga, nulla assumenda.</p>
            </div>
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div> <img src='{service.image}' alt='' /></div>
                            <h4 className='text-2xl text-neutralDGrey font-bold mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.descroption}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
    
}

export default Services;