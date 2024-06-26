// import { useContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
import { Alert } from "react-bootstrap";
// import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  // const { user } = useContext(UserContext);
  // const user = useSelector((state) => state?.user?.account);

  // if (user && !user.auth) {
  if (!sessionStorage) {
    return (
      <>
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>You don't have permission to access this router!</p>
        </Alert>
      </>
    );
  }

  return <>{props.children}</>;
};

export default PrivateRoute;
