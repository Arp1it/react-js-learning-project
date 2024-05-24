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
      // let t = document.getElementById("myBox");
      // t.select();
      // navigator.clipboard.writeText(t.value);
      navigator.clipboard.writeText(text);
      props.showalert("Copied", "info")
      // document.getSelection().removeAllRanges()
    }

    const handleextraspaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      cancel();
    }

    const CountingWords = () =>{
      const trimmed = text.trim();
      const t = trimmed.replace(/\s+/g, " ")

      if (t.length > 0){
        return t.split(" ").length
      }

      else{
        return "0"
      }
    }

    const CountingChars = () =>{
      let k = text.split(" ").filter(s => s).join(" ")
      let m = k.replaceAll("\n", "").split(" ").filter(s => s).join(" ").replaceAll(" ", "")
      return m.length
    }

  return (
    <>
    <div className='container'>
        <h2 className='my-3'>{props.heading}</h2>
        <textarea className="form-control" onChange={handleonchange} value={text} id="myBox" rows="12"></textarea>
        <button disabled={CountingChars()===0} className='btn btn-primary my-2 mx-1' onClick={handleUptext}>Convert to Uppercase</button>
        <button disabled={CountingChars()===0} className='btn btn-primary my-2 mx-1' onClick={handleLotext}>Convert to Lowercaase</button>
        <button disabled={CountingChars()===0} className='btn btn-primary my-2 mx-1' onClick={handlecleartext}>Clear Text</button>
        <button disabled={CountingChars()===0} className='btn btn-primary my-2 mx-1' onClick={speaktext}>Speak</button>
        <button disabled={CountingChars()===0} className='btn btn-primary my-2 mx-1' onClick={stopspeak}>Stop speak</button>
        <button disabled={CountingChars()===0} className='btn btn-primary my-2 mx-1' onClick={handlecopy}>Copy</button>
        <button disabled={CountingChars()===0} className='btn btn-primary my-2 mx-1' onClick={handleextraspaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3'>
      <h3>Your text summary</h3>
      <p>{CountingWords()} words, {CountingChars()} characters</p>
      {/* <p>{text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words, {CountingChars()} characters</p> */}
      <p>{0.01 * CountingChars()} minutes read</p>
      {/* <p>{0.01 * text.split("/\s+/").filter((element)=>{return element.length!==0}).length} minutes read</p> */}
      <h4><u>Preview</u>:-</h4>
      <p><b>{text}</b></p>
      <p>/..\"{CountingChars()>0?text:'Enter text in textbox to preview it here!'}"/..\</p>
    </div>
    </>
  )
}
