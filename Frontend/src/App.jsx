// import React from "react";
// import Home from "./Home/Home";
// import Course from "./Components/Course";
// import { Route, Routes } from "react-router-dom";
// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/course" element={<Course />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React from "react";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/Authprovider.jsx";
import Private from "./Components/Private.jsx";
const App = () => {
  const { authuser } = useAuth();
  console.log(authuser);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={
              <Private>
                <Courses />
              </Private>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
};

export default App;
// import React from "react";
// import Home from "./Home/Home";
// import Courses from './courses/Courses';
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Signup from "./Components/Signup";
// import  { Toaster } from 'react-hot-toast';
// import { useAuth } from "./Context/Authprovider";

// const App = () => {
//   const { authUser,setauthUser } = useAuth(); // Assuming useAuth returns an object with authUser
//   console.log(authUser);
//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup"/>} />
//           <Route path="/signup" element={<Signup/>} />

//         </Routes>
//         <Toaster/>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
