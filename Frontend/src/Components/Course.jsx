// import React from 'react'
// import Cards from './Cards'
// import list from  '../assets/list.json'
// const Course = () => {
//   return (
//     <>
//    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
//    <div className='mt-28 justify-center text-center'>
//     <h1 className='text-2xl font-semibold md:text-4xl '>We 're delighted to have you here !!!</h1>
//     <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iure soluta cum, quibusdam excepturi voluptas, accusantium et fugit neque assumenda aliquid cumque ipsum inventore facilis pariatur voluptate ducimus molestias voluptatibus.</p>
//     <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300 mt-6'>
//   Back
//     </button>
//    </div>
//    <div>
//     {
//      list.map((item)=>{
//       <Cards key={item.id} item={item}/>
//      })
//     }
//    </div>
//    </div>
//     </>
//   )
// }

// export default Course
import React from "react";
import Cards from "./Cards";
import list from "../assets/list.json";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Book from "../../../Backend/model/Book.model";
const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
      } catch {
        console.log(error);
      }
    };
    getbook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you here !!!
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iure
            soluta cum, quibusdam excepturi voluptas, accusantium et fugit neque
            assumenda aliquid cumque ipsum inventore facilis pariatur voluptate
            ducimus molestias voluptatibus.
          </p>
          <Link to="/">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12  grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
