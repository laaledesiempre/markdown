import React from "react";
import { useSelector } from "react-redux"
import { useEffect } from "react";
import { marked } from "marked"
export const Markdown = () => {
  const value = useSelector((state) => state.text.text)
  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(value)
  }, [value])
  return (
    <>
      <div className="markdown" id="preview"></div>
    </>
  );
};
