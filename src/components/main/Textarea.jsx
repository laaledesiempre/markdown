import React from "react";
import { useEffect, useState } from "react";
import { setTextValue } from "../../store/slices/text"
import { useDispatch, useSelector } from "react-redux"


export const Textarea = () => {
  const values = useSelector((state) => state.text.text)
  const [textArea, setTextArea] = useState(values)
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setTextArea(e.target.value)
  }
  useEffect(() => {
    dispatch(setTextValue(textArea))
    // eslint-disable-next-line
  }, [textArea])
  return (
    <>
      <textarea autoComplete="false" id="editor" cols="50" rows="15" defaultValue={values} onChange={changeHandler}></textarea>
    </>
  );
};
