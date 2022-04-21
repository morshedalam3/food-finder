import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { getFood } from "./api/index";
import Foods from "./components/Foods/Foods";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";

function getFormValues() {
  const storedValues = localStorage.getItem("form");
  if (!storedValues)
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  return JSON.parse(storedValues);
}
function App() {
  const [search, setSearch] = useState("");
  const [food, setFood] = useState({});
  const [values, setValues] = useState(getFormValues);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await getFood(search);
    setFood(data.recipes);
  };
  return (
    <div>
      <Router>
        <Header values={values} handleShow={handleShow} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                fetchData={fetchData}
                food={food}
                values={values}
                setValues={setValues}
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
              />
            }
          />
          <Route
            exact
            path="/searchFood"
            element={
              <Foods
                data={food}
                show={show}
                setShow={setShow}
                handleShow={handleShow}
                handleClose={handleClose}
              />
            }
          />
        </Routes>
      </Router>

      {/* <FoodCard /> */}
    </div>
  );
}

export default App;
