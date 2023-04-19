import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
const value= useSelector((state) => state.text.text)
const [convertedValue,setConvertedValue] =useState("")
useEffect(()=>{
setConvertedValue(value)
},[value])
export const Markdown = () => {
  return (
    <>
      <div className="markdown">{convertedValue}</div>
    </>
  );
};
