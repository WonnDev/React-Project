import React from "react";

const Homechild = (props) => {
  const { child1, child2 } = props;
  return (
    <>
      {child1}
      {child2}
    </>
  );
};

const UserHome = () => {
  return (
    <>
      {/* {user && user.auth === true ? ( */}
      {sessionStorage ? (
        <Homechild
          child1="Wellcome to my homepage..."
          child2="Please visit Manage Users."
        />
      ) : (
        <Homechild
          child1="Wellcome to my homepage...You are not Login..."
          child2={"Please visit Manage Users"}
        />
      )}
    </>
  );
};

export default UserHome;
