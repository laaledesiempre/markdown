import React from "react";
import { useEffect, useState } from "react";
import {setTextValue} from "../../store/slices/text"
import { useDispatch, useSelector } from "react-redux"

const [textArea,setTextArea] = useState("")
const dispatch = useDispatch();
const changeHandler=(value)=>{
  setTextArea(value)
}
useEffect(()=>{
  dispatch(setTextValue(textArea))
},[textArea])

export const Textarea = () => {
  return (
    <>
      <textarea name="" id="" cols="30" rows="10" onChange="setTextArea(event.target.value)"></textarea>
    </>
  );
};
