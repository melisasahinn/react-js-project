
import Navbar from "../components/Navbar";

function PsikologPage(){

    return(
        <div>
             <Navbar></Navbar>
             <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ">
                <div className="mt-[300px]">
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Doğru Psikoloğu Bulmak İlk Adımdır</h1>
                    <p className='text-neutralGrey text-base mb-8'>Sana en uygun, alanında uzman klinik psikoloğu bulmak için hazırladığımız testi şimdi çöz.</p>
                </div>      
            </div>

            <div>
            <h1 className='text-2xl text-center font-semibold mb-4 text-neutralDGrey mt-8 leading-snug'>KATEGORİLER</h1>
            <div className="border" >
                <h1>xxx</h1>
            </div>
            
            </div>
        </div>
       
      
    )
}

export default PsikologPage