
import Footers from "../components/Footer";
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

            {/* <div>
                <h1 className="text-center text-neutralDGrey text-3xl mt-[50px]">Kategoriler</h1>
            </div> */}
            <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
                <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <div className="w-70 p-2 bg-gray-200 rounded-2xl mb-2">
                        <a className="font-bold text-blsck text-lg flex justify-center ">Uzman Psikolog</a>
                    </div>
                    <div className=" flex justify-center">
                        <img className="h-40 w-40 object-cover rounded-3xl"  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    </div>
                    <div className="p-2">
                        <div>
                            <h2 className=" text-center font-bold text-lg mb-2 ">Melisa Melisa</h2>
                        </div>
                        <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>   
                    </div>
                    <div className="m-2 flex gap-4 justify-between">
                        <div className="text-center text-neutralGrey ">
                            <a>En Yakın Tarih</a>
                            <div className="border"></div>
                            <a>09.11.2023 13:00</a>
                        </div>
                        <a role='button' href='#' className="text-white bg-purple-600 px-3 py-3 mx-auto rounded-md hover:bg-purple-700 ">Randevu Al</a>
                    </div>
                </div>
                <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <div className="w-70 p-2 bg-gray-200 rounded-2xl mb-2">
                        <a className="font-bold text-blsck text-lg flex justify-center ">Uzman Psikolog</a>
                    </div>
                    <div className=" flex justify-center">
                        <img className="h-40 w-40 object-cover rounded-3xl"  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    </div>
                    <div className="p-2">
                        <div>
                            <h2 className=" text-center font-bold text-lg mb-2 ">Melisa Melisa</h2>
                        </div>
                        <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>   
                    </div>
                    <div className="m-2 flex gap-4 justify-between">
                        <div className="text-center text-neutralGrey ">
                            <a>En Yakın Tarih</a>
                            <div className="border"></div>
                            <a>09.11.2023 13:00</a>
                        </div>
                        <a role='button' href='#' className="text-white bg-purple-600 px-3 py-3 mx-auto rounded-md hover:bg-purple-700 ">Randevu Al</a>
                    </div>
                </div>
                <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <div className="w-70 p-2 bg-gray-200 rounded-2xl mb-2">
                        <a className="font-bold text-blsck text-lg flex justify-center ">Uzman Psikolog</a>
                    </div>
                    <div className=" flex justify-center">
                        <img className="h-40 w-40 object-cover rounded-3xl"  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    </div>
                    <div className="p-2">
                        <div>
                            <h2 className=" text-center font-bold text-lg mb-2 ">Melisa Melisa</h2>
                        </div>
                        <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>   
                    </div>
                    <div className="m-2 flex gap-4 justify-between">
                        <div className="text-center text-neutralGrey ">
                            <a>En Yakın Tarih</a>
                            <div className="border"></div>
                            <a>09.11.2023 13:00</a>
                        </div>
                        <a role='button' href='#' className="text-white bg-purple-600 px-3 py-3 mx-auto rounded-md hover:bg-purple-700 ">Randevu Al</a>
                    </div>
                </div>
                <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <div className="w-70 p-2 bg-gray-200 rounded-2xl mb-2">
                        <a className="font-bold text-blsck text-lg flex justify-center ">Uzman Psikolog</a>
                    </div>
                    <div className=" flex justify-center">
                        <img className="h-40 w-40 object-cover rounded-3xl"  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    </div>
                    <div className="p-2">
                        <div>
                            <h2 className=" text-center font-bold text-lg mb-2 ">Melisa Melisa</h2>
                        </div>
                        <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>   
                    </div>
                    <div className="m-2 flex gap-4 justify-between">
                        <div className="text-center text-neutralGrey ">
                            <a>En Yakın Tarih</a>
                            <div className="border"></div>
                            <a>09.11.2023 13:00</a>
                        </div>
                        <a role='button' href='#' className="text-white bg-purple-600 px-3 py-3 mx-auto rounded-md hover:bg-purple-700 ">Randevu Al</a>
                    </div>
                </div>
                <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <div className="w-70 p-2 bg-gray-200 rounded-2xl mb-2">
                        <a className="font-bold text-blsck text-lg flex justify-center ">Uzman Psikolog</a>
                    </div>
                    <div className=" flex justify-center">
                        <img className="h-40 w-40 object-cover rounded-3xl"  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    </div>
                    <div className="p-2">
                        <div>
                            <h2 className=" text-center font-bold text-lg mb-2 ">Melisa Melisa</h2>
                        </div>
                        <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>   
                    </div>
                    <div className="m-2 flex gap-4 justify-between">
                        <div className="text-center text-neutralGrey ">
                            <a>En Yakın Tarih</a>
                            <div className="border"></div>
                            <a>09.11.2023 13:00</a>
                        </div>
                        <a role='button' href='#' className="text-white bg-purple-600 px-3 py-3 mx-auto rounded-md hover:bg-purple-700 ">Randevu Al</a>
                    </div>
                </div>
                <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <div className="w-70 p-2 bg-gray-200 rounded-2xl mb-2">
                        <a className="font-bold text-blsck text-lg flex justify-center ">Uzman Psikolog</a>
                    </div>
                    <div className=" flex justify-center">
                        <img className="h-40 w-40 object-cover rounded-3xl"  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    </div>
                    <div className="p-2">
                        <div>
                            <h2 className=" text-center font-bold text-lg mb-2 ">Melisa Melisa</h2>
                        </div>
                        <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>   
                    </div>
                    <div className="m-2 flex gap-4 justify-between">
                        <div className="text-center text-neutralGrey ">
                            <a>En Yakın Tarih</a>
                            <div className="border"></div>
                            <a>09.11.2023 13:00</a>
                        </div>
                        <a role='button' href='#' className="text-white bg-purple-600 px-3 py-3 mx-auto rounded-md hover:bg-purple-700 ">Randevu Al</a>
                    </div>
                </div>
                <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <div className="w-70 p-2 bg-gray-200 rounded-2xl mb-2">
                        <a className="font-bold text-blsck text-lg flex justify-center ">Uzman Psikolog</a>
                    </div>
                    <div className=" flex justify-center">
                        <img className="h-40 w-40 object-cover rounded-3xl"  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    </div>
                    <div className="p-2">
                        <div>
                            <h2 className=" text-center font-bold text-lg mb-2 ">Melisa Melisa</h2>
                        </div>
                        <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>   
                    </div>
                    <div className="m-2 flex gap-4 justify-between">
                        <div className="text-center text-neutralGrey ">
                            <a>En Yakın Tarih</a>
                            <div className="border"></div>
                            <a>09.11.2023 13:00</a>
                        </div>
                        <a role='button' href='#' className="text-white bg-purple-600 px-3 py-3 mx-auto rounded-md hover:bg-purple-700 ">Randevu Al</a>
                    </div>
                </div>
                <div className="w-80 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <div className="w-70 p-2 bg-gray-200 rounded-2xl mb-2">
                        <a className="font-bold text-blsck text-lg flex justify-center ">Uzman Psikolog</a>
                    </div>
                    <div className=" flex justify-center">
                        <img className="h-40 w-40 object-cover rounded-3xl"  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                    </div>
                    <div className="p-2">
                        <div>
                            <h2 className=" text-center font-bold text-lg mb-2 ">Melisa Melisa</h2>
                        </div>
                        <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>   
                    </div>
                    <div className="m-2 flex gap-4 justify-between">
                        <div className="text-center text-neutralGrey ">
                            <a>En Yakın Tarih</a>
                            <div className="border"></div>
                            <a>09.11.2023 13:00</a>
                        </div>
                        <a role='button' href='#' className="text-white bg-purple-600 px-3 py-3 mx-auto rounded-md hover:bg-purple-700 ">Randevu Al</a>
                    </div>
                </div>
            </div>
          <Footers></Footers>  
        </div>
       
      
    )
}

export default PsikologPage