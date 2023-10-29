import React from "react"
import about from "../assets/about.png"
const About = () => {
    return (
       <div>
           <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12" id="about">
                   <div>
                    <img src={about} alt="" />
                   </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">Hakkımızda</h2>
                        <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
Terapiyi herkes için 7/24 ulaşılabilir kılmak, kişinin ihtiyacına uygun terapi hizmeti sunmak, katma değerli sistemle kullanıcı odaklı bir yapı oluşturmak, pozitif psikoloji ve mental iyi oluşu sürdürülebilirlik çerçevesinde yaygınlaştırmak.</p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
           </div>
           <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">Misyonumuz</h2>
                        <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
Terapiye karşı önyargıları kırıp global ölçekte terapi hizmeti sunmak, yenilikçi bir anlayışla terapiyi teknolojiyle bütünleştirirken geleneksel terapiye ulaşma imkanı olmayanlar için güçlü bir alternatif sunmak ve bireysel ruh sağlığına verilen önemi geliştirmek.</p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                    <div>
                        <img src={about} alt="" />
                    </div>
                </div>
           </div>
        
       </div> 
    )
} 
export default About; 