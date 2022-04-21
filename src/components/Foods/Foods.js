import React from "react";
import FoodCards from "../FoodCards/FoodCards";
const Foods = ({ data, handleClose, handleShow, show, setShow }) => {
  console.log(data);
  return (
    <div className="container mt-5">
      {data ? (
        <div className="row my-5 box">
          {data?.map((fd) => (
            <FoodCards
              key={fd.title}
              food={fd}
              show={show}
              setShow={setShow}
              handleShow={handleShow}
              handleClose={handleClose}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Foods;
