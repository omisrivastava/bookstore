// import React from "react";
// import { useAuth } from "../Context/Authprovider";
// import { Navigate } from "react-router-dom";
// const Private = ({ children }) => {
//   const { authUser } = useAuth();
//   console.log(authUser);
//   return <>{authUser ? children : <Navigate to="/signup" />}</>;
// };

// export default Private;
import React from "react";
import { useAuth } from "../Context/Authprovider";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { authUser } = useAuth();
  console.log(authUser);
  return (
    <>
      {authUser ? children : <Navigate to="/signup" replace />}
    </>
  );
};

export default Private;
