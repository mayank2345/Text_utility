import React, {useState} from 'react'
import { AiOutlineCopy, AiOutlineClear } from 'react-icons/ai'
import {TbSpaceOff} from 'react-icons/tb'


export default function TextForm(props) {
    const [text, setText] = useState('')
    // text = 'I am trying to update text'         // Wrong way to update or change the text
    //setText('I am trying to update text')         // Correct way to update or change the text

    const handleUpClick = () => {
        if (text === ''){
            props.showAlert('Please enter text', 'warning')
        }else{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert('Text changed to Uppercase', 'success')}
    }

    const handleDownClick = () => {
        if (text === ''){
            props.showAlert('Please enter text', 'warning')
        }else{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert('Text changed to Lowercase', 'success')}
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Text clear', 'success')
    }

    const handleCopyClick = () => {
        if (text === ''){
            props.showAlert('Please enter text', 'warning')
        }else{
        var copyText = document.getElementById('textArea')
        copyText.focus()
        copyText.select()
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copied to clipboard', 'success')}
    }

    const handleSpaceClick = () => {
        if (text === ''){
            props.showAlert('No text found', 'warning')
        }else{
        var removeSpace = text.trim().split(/[\s]+/).join(' ');
        setText(removeSpace)
        props.showAlert('Removed Extra Spaces', 'success')}
    }

    const handleOnChange = (event) => {                                
        setText(event.target.value);
    }

    const [textSize, setTextSize] = useState('15')
    const handleTextSize = (e) => {
        setTextSize(e.target.value)
    }

    let word_length;
    var words = text.replace(/\t|\n/gi, " ").split(' ')
    word_length = words.filter(word => (word !== '')).length
    
    


  return (
    <div style={{color: props.mode === 'light'? 'black':'white'}}>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className= 'form-control'  
                onChange={handleOnChange} 
                value={text} 
                id="textArea" 
                rows="8"
                style={{backgroundColor: props.mode === 'light'? 'white':'#B9B7BD',fontSize: `${textSize}px`, resize: 'none', height: '200px', width: '80%'}}
                ></textarea>    
            </div>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button className="btn btn-dark" type='button' onClick={handleUpClick}>aA</button> 
                <button className="btn btn-dark" type='button' onClick={handleDownClick}>Aa</button> 
                <button className="btn btn-dark" type='button' onClick={handleClearClick}><AiOutlineClear/></button>
                <button className="btn btn-dark" type='button' onClick={handleCopyClick}> <AiOutlineCopy/> </button>
                <button className="btn btn-dark" type='button' onClick={handleSpaceClick}><TbSpaceOff/></button>
            </div>
            <div style={{width: '20rem' }}>
                <label htmlFor="customRange2" className="form-label">Text Size</label>
                <input type="range" className="form-range " min="10" defaultValue={'15'} max="72" onChange={handleTextSize} id="customRange2"></input>
            </div>
            
        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{word_length} words and {text.length} characters.</p>
            <p>{0.008 * word_length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: 'Enter something to preview here.'}</p>
        </div>
    </div>
  )
}
