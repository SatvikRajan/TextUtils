import React,{useState} from "react";
export default function TextForm(props) {
  const[text,setText]= useState("")
  const handleUpClick =()=>
  {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success")
  }
  const handleLoClick =()=>
  {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case","success")
  }
  const handleOnChange =(event)=>
  {
    setText(event.target.value)
  }
  const clearText =()=>
  {
    let newText = ' '
    setText(newText)
    props.showAlert("Cleared Text","success")
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces","success")
  }
  const handleCopy =()=>
  {
    let newText = document.getElementById('exampleFormControlTextarea1')
    newText.select()
    navigator.clipboard.writeText(newText.value)
    props.showAlert("Text Copied","success")

  }
  return (
    <>
    <div className="container"></div>
      <div className="mb-1 p-3 border border-dark rounded">
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading} </h1>
        <textarea
          style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black', margin: "20px 0px"}}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value = {text}
          onChange={handleOnChange}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={clearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
      <div className="container" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black', margin: "10px 0px"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
      </div>
    </>
  );
}
