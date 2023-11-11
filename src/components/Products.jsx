import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <Slider {...settings}>
                <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                            <div className="md:w-1/3"></div>
                            
                            <div className="md:w-2/3 mx-auto ">
                            
                                <div className="bg-white p-2 rounded-lg">
                                    <p className="md:w-full text-sm text-neutralGrey mb-8 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut minus impedit accusantium veniam recusandae enim autem, saepe velit nisi sequi iste at provident numquam doloremque expedita eveniet modi libero asperiores sed, blanditiis ab? Excepturi harum maiores quibusdam perferendis tempora unde, nemo ipsum fuga aliquam molestiae similique ratione, quidem sit esse quaerat necessitatibus commodi accusamus numquam iusto. Veniam quaerat iusto quibusdam tenetur, unde dicta eligendi, inventore quod beatae nemo esse. Sit, illo! Maiores, eum eaque? Quia cupiditate distinctio ex quasi dolore unde veritatis quam soluta natus delectus, laudantium debitis ut nisi cum, dolorum minima doloribus optio facilis. Quisquam, nulla temporibus.</p>
                                    <h5 className="text-brandPurple text-xl font-semibold mb-2">Melisa</h5>
                                    <p className="text-base text-neutralGrey mb-8">Lorem</p>
                                </div>
                            </div>
                        
                        </div> 
                </div>
                <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                            <div className="md:w-1/3"></div>
                            
                            <div className="md:w-2/3 mx-auto ">
                            
                                <div className="bg-white p-2 rounded-lg">
                                    <p className="md:w-full text-sm text-neutralGrey mb-8 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut minus impedit accusantium veniam recusandae enim autem, saepe velit nisi sequi iste at provident numquam doloremque expedita eveniet modi libero asperiores sed, blanditiis ab? Excepturi harum maiores quibusdam perferendis tempora unde, nemo ipsum fuga aliquam molestiae similique ratione, quidem sit esse quaerat necessitatibus commodi accusamus numquam iusto. Veniam quaerat iusto quibusdam tenetur, unde dicta eligendi, inventore quod beatae nemo esse. Sit, illo! Maiores, eum eaque? Quia cupiditate distinctio ex quasi dolore unde veritatis quam soluta natus delectus, laudantium debitis ut nisi cum, dolorum minima doloribus optio facilis. Quisquam, nulla temporibus.</p>
                                    <h5 className="text-brandPurple text-xl font-semibold mb-2">Melisa</h5>
                                    <p className="text-base text-neutralGrey mb-8">Lorem</p>
                                </div>
                            </div>
                        
                        </div> 
                </div>
           </Slider>
        </div>
    )
}

export default Products;