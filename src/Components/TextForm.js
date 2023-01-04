import React ,{useState} from 'react';


export default function TextForm(props) {
  const [text,setText]=useState("");
  const handleUpClick=()=>{
    //console.log("Uppercase was clicked");
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success")
  }
  const handleLoClick=()=>{
    //console.log("Uppercase was clicked");
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success")
  }
  const handleClear=()=>{
    //console.log("Uppercase was clicked");
    let newText ='';
    setText(newText);
    props.showAlert("text cleared!","success")
  }
  const handleCopy =()=>{
    var text=document.getElementById("mybox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value)
    props.showAlert(" copied to clipboard!","success")
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed" ,"success")
  }
  const handleOnChange = (event)=>{
   // console.log("on change");
    setText(event.target.value);
  }

  
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white' :'black'}}>
   <h1>{props.heading}</h1>
<div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'grey' :'white' ,color : props.mode==='dark'?'white' :'black'}} id="mybox" rows="8"></textarea>
</div>
 <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to uppercase</button>
 <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
 <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy </button>
 <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white' :'black'}} >
      <h2>"your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} charecters</p>
      <p>{.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
