import { useState } from "react";


export default function TextForm(props: any) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = () => {
    const newText = '';
    setText(newText);
    props.showAlert('Text area cleared.', 'danger');
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Coppied to clipboard!', 'success')
  }

  const changeText = (event: any) => {
    setText(event.target.value);
  }
  return (
    <>
      <div className="container my-3">
          <h1 style={ props.textColor } >{ props.heading }</h1>
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={8} placeholder="Enter text here." onChange={ changeText } value={ text } style={{ backgroundColor: props.mode === 'light'?'white' : 'black', color: props.mode ==='light'?'black': 'white' }} ></textarea>
          </div>
          <button className="btn btn-primary" onClick={ handleUpClick }>Convert To Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={ handleLowClick }>Convert To Lowercase</button>
          <button className="btn btn-primary" onClick={ handleCopyToClipboard }>Copy To Clipboard</button>
          <button className="btn btn-danger mx-2" onClick={ handleClear }>Clear The Box</button>
      </div>
      <div className="container">
        <h1 style={ props.textColor }>Your text summary</h1>
        <p style={ props.textColor }>{ text.split(' ').length-1 } words and { text.length } characters</p>
        <p style={ props.textColor }>{ 0.008 * text.split(' ').length } Minutes to read</p>
        <h3 style={ props.textColor }>Preview</h3>
        <p style={ props.textColor } >{ text.length > 0 ? text: '*Enter something in the textbox*' }</p>
      </div>
    </>
  );
}