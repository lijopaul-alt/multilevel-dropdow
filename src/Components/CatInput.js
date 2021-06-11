import React from "react";
import classes from "./Input.module.css";

const Catinput = (props) => {
  return (
    <div className={classes.div}>
      <label>
        <p>Update category</p>
        <input
          type="text"
          placeholder="update new category"
          onChange={(e) => props.setInpuCatval(e.target.value)}
          value={props.val}
        />
      </label>
      <button onClick={() => props.setNewCat()}>UPDATE CAT</button>
    </div>
  );
};

export default Catinput;
