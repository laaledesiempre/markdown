import React from "react";
import { useEffect, useState } from "react";
import {setTextValue} from "../../store/slices/text"
import { useDispatch } from "react-redux"


export const Textarea = () => {
  const [textArea,setTextArea] = useState("")
  const dispatch = useDispatch();
  const changeHandler=(e)=>{
    setTextArea(e.target.value)
  }
  useEffect(()=>{
    dispatch(setTextValue(textArea))
    // eslint-disable-next-line
  },[textArea])
  return (
    <>
      <textarea name="" id="" cols="30" rows="10" onChange={changeHandler}></textarea>
    </>
  );
};
