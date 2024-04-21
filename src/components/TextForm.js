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


  return (
    <>
    <div className='container'>
        <h2 className='my-3'>{props.heading}</h2>
        <textarea className="form-control" onChange={handleonchange} value={text} id="myBox" rows="12"></textarea>
        <button className='btn btn-primary my-3 mx-1' onClick={handleUptext}>Convert to Uppercase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleLotext}>Convert to Lowercaase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handlecleartext}>Clear Text</button>
        <button className='btn btn-primary my-3 mx-1' onClick={speaktext}>speak</button>
        <button className='btn btn-primary my-3 mx-1' onClick={stopspeak}>stop speak</button>
    </div>
    <div className='container my-3'>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.01 * text.split(" ").length} minutes read</p>
      <h4><u>Preview</u>:-</h4>
      <p><b>{text}</b></p>
    </div>
    </>
  )
}
