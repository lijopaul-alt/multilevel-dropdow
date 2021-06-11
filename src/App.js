import React, { useState } from "react";
import "./App.css";
import Catinput from "./Components/CatInput";

import Menuinput from "./Components/MenuInput";
import Dropdown from "react-multilevel-dropdown";
import classes from "./Components/Input.module.css";

const App = () => {
  const [catergories, setCategories] = useState({});
  const [inputCatVal, setInputCatVal] = useState("");

  const [inputMenuVal, setInputMenuVal] = useState("");

  const setNewCat = () => {
    if (inputCatVal.val !== "") {
      setCategories((prevState) => {
        return {
          ...prevState,
          [inputCatVal]: [],
        };
      });
    }
  };

  const setNewMenu = () => {
    if (inputMenuVal.val !== "") {
      const main = inputCatVal;
      const sub = inputMenuVal;
      setCategories((prevState) => {
        return {
          ...prevState,
          [main]: [...prevState[main], sub],
        };
      });
      setInputMenuVal("");
    }
  };

  return (
    <React.Fragment>
      <nav>
        <ul className="unorderlist">
          <Dropdown
            title="Home"
            position="right"
            buttonClassName="button"
            wrapperClassName="button"
          ></Dropdown>

          <Dropdown
            title="categories"
            position="right"
            buttonClassName="button"
            wrapperClassName="button"
          >
            <Dropdown.Item className="item">Continental</Dropdown.Item>
            <Dropdown.Item className="item">punjabi</Dropdown.Item>
            <Dropdown.Item className="item">chettinad</Dropdown.Item>
            <Dropdown.Item className="item">
              south indian <i className="fa fa-sort-desc icon"></i>
              <Dropdown.Submenu position="right">
                <Dropdown.Item className="item">Dosa</Dropdown.Item>
                <Dropdown.Item className="item">Uthappam</Dropdown.Item>
                <Dropdown.Item className="item">Parotta</Dropdown.Item>
                <Dropdown.Item className="item">
                  Chicken <i className="fa fa-sort-desc icon"></i>
                  <Dropdown.Submenu position="right">
                    <Dropdown.Item className="item">
                      Chicken Masala
                    </Dropdown.Item>
                    <Dropdown.Item className="item">Chicke gravy</Dropdown.Item>
                    <Dropdown.Item className="item">Chicken 65</Dropdown.Item>
                  </Dropdown.Submenu>
                </Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
            {Object.keys(catergories).map((cat, i) => (
              <Dropdown.Item key={i} className="item">
                {cat}
                {catergories[cat].length > 0 ? (
                  <Dropdown.Submenu position="right">
                    {catergories[cat].map((cater, i) => (
                      <Dropdown.Item className="item" key={i + 6}>
                        {cater}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Submenu>
                ) : null}
              </Dropdown.Item>
            ))}
          </Dropdown>

          <Dropdown
            title="Browse"
            position="right"
            buttonClassName="button"
            wrapperClassName="button"
          ></Dropdown>
          <Dropdown
            title="Help"
            position="right"
            buttonClassName="button"
            wrapperClassName="button"
          ></Dropdown>
        </ul>
      </nav>
      <div className={classes.form}>
        <Catinput
          setInpuCatval={setInputCatVal}
          setNewCat={setNewCat}
          val={inputCatVal}
        />
        <Menuinput
          setInputMenuVal={setInputMenuVal}
          setNewMenu={setNewMenu}
          val={inputMenuVal}
        />
      </div>
      <div className={classes.list}>
        <p>STEP 1: Add new category in category input</p>
        <p>STEP 2: Click UPDATE CAT button to add a new category in list</p>
        <p>
          STEP 3: Add new SUBMENU to corresponding category in submenu input
        </p>
        <p>
          STEP 4: click UPDATE SUB button to add a new submenu in corresponding
          category list
        </p>
      </div>
    </React.Fragment>
  );
};
export default App;
