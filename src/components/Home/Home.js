import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import "./Home.css";

const Home = ({
  search,
  setSearch,
  fetchData,
  food,
  values,
  setValues,
  handleClose,
  handleShow,
  show,
}) => {
  const user =
    values.email && values.name && values.password && values.confirmPassword;
  console.log(user);
  const navigate = useNavigate();
  const handleSubmit = () => {
    fetchData();
    if (food?.length > 0) {
      navigate("/searchFood");
    }
  };
  return (
    <>
      {user ? (
        <div className="search-container">
          <div className="main_container">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <a className="btn">
              <i className="fas fa-search" onClick={handleSubmit}></i>
            </a>
          </div>
        </div>
      ) : (
        <Login
          values={values}
          setValues={setValues}
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
        />
      )}
    </>
  );
};

export default Home;
