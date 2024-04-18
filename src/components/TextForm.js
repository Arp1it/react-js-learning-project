import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here!");

    // setText("Hey")

    const handleonclick = (event) =>{
        // console.log(event)
        // console.log(document.getElementById("myBox").value)
        // console.log(text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleonchange = (event) =>{
        setText(event.target.value)
    }

  return (
    <div>
        <h2 className='my-3'>{props.heading}</h2>
        <textarea className="form-control" onChange={handleonchange} value={text} id="myBox" rows="12"></textarea>
        <button className='btn btn-primary my-3' onClick={handleonclick}>Convert to Uppercase</button>
    </div>
  )
}
