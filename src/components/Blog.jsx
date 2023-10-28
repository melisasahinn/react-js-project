import React from "react";
import image from "../assets/image1.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
    const blogs = [
        {id:1, title: "Ergen Psikolojisi", image: image},
        {id:2, title: "Aile ve Çift Terapisi", image: image},
        {id:3, title: "Yetişkin Psikolojisi", image: image},
        {id:4, title: "Ergen Psikolojisi", image: image},
        {id:5, title: "Aile ve Çift Terapisi", image: image},
        {id:6, title: "Yetişkin Psikolojisi", image: image}
       
    ];
    return (
       
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
            <div className="text-center md:w-1/2 mx-auto">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">Uzmanlık Kategorileri</h2>
                <p className="md:w-3/4 text-sm text-neutralGrey mb-8">Hangi konuda uzmanlaşmış bir psikologla görüşmek senin için daha iyi
olur?​</p>
            </div>
                <div className="sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
                <Slider {...settings}>
                    {
                        blogs.map(blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
                            <img src={blog.image} alt="" className="hover:scale-95 transition-all duration-300" />
                            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                                <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                            </div>
                        </div>)
                    }
                </Slider>
                </div>
            
        </div>
        
    )
}

export default Blog;

// grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1