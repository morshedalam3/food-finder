import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const FoodCards = ({ food, handleClose, handleShow, show }) => {
  const [details, setDetails] = useState({});
  console.log(details);
  // useEffect(() => {
  //   fetchDataById();
  // }, [details]);
  const fetchDataById = async (id) => {
    // const { data } = await getFoodDetailsById(id);
    // const {data} = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
  };
  const handleSubmit = async (id) => {
    const { data } = await axios.get(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
    setDetails(data);
    handleShow();
  };
  return (
    <>
      <div className="card  ms-3 mt-3" style={{ width: "18rem" }}>
        <img
          src={food.image_url}
          className="card-img-top"
          alt="..."
          style={{ height: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{food.title}</h5>
          <button
            onClick={() => handleSubmit(food.recipe_id)}
            className="btn btn-primary"
          >
            Get Ingredients
          </button>
        </div>
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{details?.recipe?.title}</Modal.Title>
        </Modal.Header>
        {details ? (
          <Modal.Body>
            {details?.recipe?.ingredients?.map((data) => (
              <p>{data}</p>
            ))}
          </Modal.Body>
        ) : (
          <Modal.Body>No ingredients with id: {food.recipe_id}</Modal.Body>
        )}
      </Modal>
    </>
  );
};

export default FoodCards;
