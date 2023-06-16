import React from "react";
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props,ref) => {
return(
    <input ref={ref} className={classes.My_Input}  {...props}/>
)
})


export default MyInput;