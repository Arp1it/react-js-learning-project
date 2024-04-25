import React, {useState} from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';


export default function TextForm(props) {
  const [text, setText] = useState("");
  const {speak, cancel} = useSpeechSynthesis();

    // setText("Hey")

    const handleUptext = (event) =>{
        // console.log(event)
        // console.log(document.getElementById("myBox").value)
        // console.log(text)
        let newText = text.toUpperCase()
        setText(newText)
        cancel()
    }

    const handleLotext = (event) =>{
        let newText = text.toLowerCase()
        setText(newText)
        cancel()
    }

    const handlecleartext = (event) =>{
        let newText = ""
        setText(newText)
        cancel()
    }

    const handleonchange = (event) =>{
        setText(event.target.value)
        cancel()
    }

    const stopspeak = () =>{
      cancel()
    }

    const speaktext = () =>{
      speak({text})
    }

    const handlecopy = () =>{
      let t = document.getElementById("myBox");
      t.select();
      navigator.clipboard.writeText(t.value);
      props.showalert("Copied", "info")
    }

    const handleextraspaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      cancel();
    }


  return (
    <>
    <div className='container'>
        <h2 className='my-3'>{props.heading}</h2>
        <textarea className="form-control" onChange={handleonchange} value={text} id="myBox" rows="12"></textarea>
        <button className='btn btn-primary my-3 mx-1' onClick={handleUptext}>Convert to Uppercase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleLotext}>Convert to Lowercaase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handlecleartext}>Clear Text</button>
        <button className='btn btn-primary my-3 mx-1' onClick={speaktext}>Speak</button>
        <button className='btn btn-primary my-3 mx-1' onClick={stopspeak}>Stop speak</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handlecopy}>Copy</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleextraspaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3'>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.01 * text.split(" ").length} minutes read</p>
      <h4><u>Preview</u>:-</h4>
      <p><b>{text}</b></p>
      <p>/..\"{text.length>0?text:'Enter text in textbox to preview it here!'}"/..\</p>
    </div>
    </>
  )
}
