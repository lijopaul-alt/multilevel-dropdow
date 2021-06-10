import React, { useState } from "react";
import "./App.css";

import Dropdown from "react-multilevel-dropdown";

const App = () => {
  const [Catergories] = useState([
    { id: 1, value: "continental" },
    { id: 2, value: "chinese" },
    { id: 3, value: "south indian" },
    { id: 4, value: "mexican" },
    { id: 5, value: "american" },
  ]);
  const [dishes] = useState([
    { id: 6, value: "Dosa" },
    { id: 7, value: "uthappam" },
    { id: 8, value: "parotta" },
    { id: 9, value: "chicken" },
  ]);

  const [variety] = useState([
    { id: 11, value: "chciken masala" },
    { id: 12, value: "chicken gravy" },
    { id: 13, value: "chicken 65" },
    { id: 14, value: "chiken varuval" },
  ]);

  const nestedObjects = Catergories.map((Catergories) => {
    if (Catergories.value === "south indian") {
      return (
        <Dropdown.Item key={Catergories.id} className="item">
          <p>
            {Catergories.value} <i className="fa fa-sort-desc icon"></i>
          </p>
          <Dropdown.Submenu position="right">
            {dishes.map((dishes) => {
              if (dishes.value === "chicken") {
                return (
                  <Dropdown.Item key={dishes.id} className="item">
                    {dishes.value}
                    <i className="fa fa-sort-desc icon"></i>
                    <Dropdown.Submenu position="right">
                      {variety.map((variety) => (
                        <Dropdown.Item key={variety.key} className="item">
                          {variety.value}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Submenu>
                  </Dropdown.Item>
                );
              } else {
                return (
                  <Dropdown.Item key={dishes.id} className="item">
                    {dishes.value}
                  </Dropdown.Item>
                );
              }
            })}
          </Dropdown.Submenu>
        </Dropdown.Item>
      );
    } else {
      return (
        <Dropdown.Item key={Catergories.id} className="item">
          <p>{Catergories.value}</p>
        </Dropdown.Item>
      );
    }
  });
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
            title="south indian"
            position="right"
            buttonClassName="button"
            wrapperClassName="button"
          >
            {nestedObjects}
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
      <h4>Click South indian </h4>
    </React.Fragment>
  );
};
export default App;
