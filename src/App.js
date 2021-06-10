import React from "react";
import "./App.css";

import Dropdown from "react-multilevel-dropdown";

const App = () => {
  // const categories=useState({id:1,value:'continental'

  //},{id:2,value:'punjabi'},{id:3,value:'chettinad'},{id:'4,'south indian'})
  // const [dishes] = useState([
  //   { id: 6, value: "Dosa" },
  //   { id: 7, value: "uthappam" },
  //   { id: 8, value: "parotta" },
  //   { id: 9, value: "chicken" },
  // ]);

  // const [variety] = useState([
  //   { id: 11, value: "chciken masala" },
  //   { id: 12, value: "chicken gravy" },
  //   { id: 13, value: "chicken 65" },
  //   { id: 14, value: "chiken varuval" },
  // ]);

  // const nestedObjects = Catergories.map((Catergories) => {
  //   if (Catergories.value === "south indian") {
  //     return (
  //       <Dropdown.Item
  //         children={Catergories.id}
  //         key={Catergories.id}
  //         className="item"
  //       >
  //         <p key={Catergories.id}>
  //           {Catergories.value} <i className="fa fa-sort-desc icon"></i>
  //         </p>
  //         <Dropdown.Submenu position="right">
  //           {dishes.map((dishes) => {
  //             if (dishes.value === "chicken") {
  //               return (
  //                 <Dropdown.Item key={dishes.id} className="item">
  //                   <p key={dishes.id}>{dishes.value}</p>
  //                   <i className="fa fa-sort-desc icon"></i>
  //                   <Dropdown.Submenu position="right">
  //                     {variety.map((variety) => (
  //                       <Dropdown.Item key={variety.key} className="item">
  //                         <p key={variety.key}> {variety.value}</p>
  //                       </Dropdown.Item>
  //                     ))}
  //                   </Dropdown.Submenu>
  //                 </Dropdown.Item>
  //               );
  //             } else
  //               return (
  //                 <Dropdown.Item key={dishes.id} className="item">
  //                   <p key={dishes.id}>{dishes.value}</p>
  //                 </Dropdown.Item>
  //               );
  //           })}
  //         </Dropdown.Submenu>
  //       </Dropdown.Item>
  //     );
  //   } else
  //     return (
  //       <Dropdown.Item key={Catergories.id} className="item">
  //         <p>{Catergories.value}</p>
  //       </Dropdown.Item>
  //     );
  // });
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
            <Dropdown.Item className="item">
              <p>Continental</p>
            </Dropdown.Item>
            <Dropdown.Item className="item">
              <p>punjabi</p>
            </Dropdown.Item>
            <Dropdown.Item className="item">
              <p>chettinad</p>
            </Dropdown.Item>
            <Dropdown.Item className="item">
              <p>
                south indian <i className="fa fa-sort-desc icon"></i>
              </p>
              <Dropdown.Submenu position="right">
                <Dropdown.Item className="item">
                  <p>Dosa</p>
                </Dropdown.Item>
                <Dropdown.Item className="item">
                  <p>Uthappam</p>
                </Dropdown.Item>
                <Dropdown.Item className="item">
                  <p>Parotta</p>
                </Dropdown.Item>
                <Dropdown.Item className="item">
                  <p>
                    Chicken <i className="fa fa-sort-desc icon"></i>
                  </p>
                  <Dropdown.Submenu position="right">
                    <Dropdown.Item className="item">
                      <p>Chicken Masala</p>
                    </Dropdown.Item>
                    <Dropdown.Item className="item">
                      <p>Chicke gravy</p>
                    </Dropdown.Item>
                    <Dropdown.Item className="item">
                      <p>Chicken 65</p>
                    </Dropdown.Item>
                  </Dropdown.Submenu>
                </Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
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
      <h4>Click catergories </h4>
    </React.Fragment>
  );
};
export default App;
