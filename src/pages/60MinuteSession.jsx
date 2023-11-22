import { Datepicker } from 'flowbite-react';
import { Button } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const OneSession = ({ closeModal }) => {
  
  return (
    <form className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md">
      <div className="seansContainer max-sm:max-w-sm">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }} 
          >
            X
          </button>
        </div>
        <div>
            <h1 className="font-semibold mt-[-26px] text-3xl"> Ödeme</h1>
            <div className="border"></div>
            <div className="mt-2 rounded-3xl flex ">
                <div className="border border-sky-500 rounded-full w-[150px] h-[150px] "></div>
                <div className="m-8">
                    <h1 className="font-semibold text-xl"> UZMAN PSIKILOG</h1>
                    <p className="text-l"> MELISA MELISA</p>
                </div>
            </div>
            <div className='m-4'> 
                <Datepicker />
            </div>
            <p className="text-l text-left mb-2"> <span className='text-blue'>Not : </span>Lutfen ilk seans tarihinizi seciniz Sonraki seanslar icin sizinle iletisime gecilecektir</p>
            <div className="border border-sky-500 bg-[#ADD8E6] rounded-3xl ">
                <h1 className='m-4 text-center text-blue'>Odeme Yontemi</h1>
                <div className='flex gap-2'>
                    <p className="text-l pl-3 text-blue'">3 SEANS</p>
                    <p className="text-l pl-[310px] mb-2 text-blue'">1851€</p>
                </div>
            </div>
            <Button className="mt-6 bg-blue w-full"
            type="submit" href="/payment">
           Odeme Yap
         
          </Button>
        </div>
        
      </div>
    </form>
  );
};

export default OneSession;

