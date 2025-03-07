import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../Components/Cards';
import axios from "axios";
import list from "../assets/list.json";

const api_url = import.meta.env.VITE_REACT_API_URL;

const Freebook = () => {
  const [book, setBook] = useState([]);

  // useEffect(() => {
  //   const getbook = async () => {
  //     try {
  //       const res = await axios.get(api_url);
  //       console.log(res.data);
  //       const data = res.data.filter((data) => data.category === "Free");
  //       setBook(data);
  //     } catch (error) { // Pass error as parameter here
  //       console.log(error);
  //     }
  //   };
  //   getbook();
  // }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam
          laboriosam optio numquam sit ratione vitae, dignissimos nisi
          excepturi voluptatem minus minima quam nam molestias ad earum
          deleniti fugit?
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
