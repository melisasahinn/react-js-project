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
        <section className='bg-neutralSilver h-screen grid place-items-center'>
          <div className='px-[40px] max-w-[800px]'>
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

