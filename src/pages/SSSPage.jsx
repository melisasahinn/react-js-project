import Navbar from '../components/Navbar'
import Footers from '../components/Footer'
import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function SSSPage () {

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if(open === index){
      return setOpen(null)
    }
    setOpen(index)
  }
  const accordionData = [ 
  {
    title:"test333",
    desc: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. ",
  },
  {
    title:"test333",
    desc: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. ",
  },
  {
    title:"test333",
    desc: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. ",
  },
  {
    title:"test333",
    desc: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. ",
  },
  {
    title:"test333",
    desc: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. ",
  },
  {
    title:"test333",
    desc: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. ",
  }];
  return (
    <div>
        <Navbar></Navbar>
        <div className="px-4 lg:px-14 max-w-screen- mx-auto w-full bg-neutralSilver py-16 ">
                <div className="mt-[300px]">
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Sıkça Sorulan Sorular</h1>
                    <p className='text-neutralGrey text-base mb-8'>Terappin ile ilgili sorabileceğin bazı soruları senin için cevapladık.</p>
                </div>      
        </div>
        <section className='bg-gray-100 grid place-items-center'>
          <div className='px-[40px] max-w-[800px] mt-[100px] mb-[150px]'>
            {accordionData.map((data,index) => {
              return (
              <AccordionItem 
                key={index}  
                open={index === open} 
                title={data.title} 
                desc={data.desc} 
                toggle={() => toggle(index)}
              />
            );
            })}
          </div>
        </section>
        <Footers></Footers>
    </div>
  )
}

