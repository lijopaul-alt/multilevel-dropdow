import React from "react";
import classes from "./Input.module.css";

const Menuinput = (props) => {
  return (
    <div className={classes.div}>
      <label>
        <p> Update Menu</p>
        <input
          type="text"
          placeholder="update new Menu"
          onChange={(e) => props.setInputMenuVal(e.target.value)}
          value={props.val}
        />
      </label>
      <button onClick={() => props.setNewMenu(props.cat)}>UPDATE SUB</button>
    </div>
  );
};

export default Menuinput;
