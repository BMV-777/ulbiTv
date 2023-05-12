import React from "react";
import css from "./MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={css.myInput} {...props} />;
});

export default MyInput;
