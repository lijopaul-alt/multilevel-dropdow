import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuid } from "uuid";
const RecursiveFolder = (props) => {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const [key, setKey] = useState("selector-key-init");
  const children = props.folders
    ? props.folders.filter((folder) => folder.parent_id === props.folder.id)
    : [];

  const selectorRef = useRef(null);
  const selectorChildren = useRef(null);
  return (
    <div
      ref={selectorRef}
      className={"recursive-selector-parent"}
      key={key}
      onMouseOver={() => {
        setIsUnfolded(true);
      }}
      onMouseOut={(e) => {
        //if (e.current && !e.current.includes(selectorChildren))
        setIsUnfolded(false);
        setKey(uuid());
      }}
    >
      <div>
        <span>{props.folder ? props.folder.name : ""}</span>
      </div>

      <AnimatePresence>
        {isUnfolded && children.length && (
          <motion.div
            className="recursive-selector-children"
            ref={selectorChildren}
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: "100%",
              opacity: 1,

              x: 0,
            }}
            exit={{
              width: 0,
            }}
          >
            {children.map((el, index) => (
              <RecursiveFolder folder={el} folders={props.folders} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecursiveFolder;
