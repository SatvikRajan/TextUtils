import React,{useState} from "react";
export default function TextForm(props) {
  const[text,setText]= useState("Enter Text Here")
  const handleUpClick =()=>
  {
    console.log("upper case ")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success")
  }
  const handleLoClick =()=>
  {
    console.log("lower case ")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case","success")
  }
  const handleOnChange =(event)=>
  {
    console.log("handle change ")
    setText(event.target.value)
  }
  const clearText =()=>
  {
    console.log("clear Text")
    let newText = ' '
    setText(newText)
    props.showAlert("Cleared Text","success")
  }
  const handleExtraSpaces = ()=>{
    console.log("Extra spaces removed")
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces","success")
  }
  const handleCopy =()=>
  {
    console.log("copy test")
    let newText = document.getElementById('exampleFormControlTextarea1')
    newText.select()
    navigator.clipboard.writeText(newText.value)
    props.showAlert("Text Copied","success")

  }
  return (
    <>
    <div className="container"></div>
      <div className="mb-1  p-3 border border-dark rounded">
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
        <textarea
          style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value = {text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
      <div className="container" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </div>
    </>
  );
}
