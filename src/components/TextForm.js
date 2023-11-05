import React, {useState} from 'react'

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

    let word_length;
    var words = text.replace(/\t|\n/gi, " ").split(' ')
    word_length = words.filter(word => (word !== '')).length



  return (
    <div style={{color: props.mode === 'light'? 'black':'white'}}>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control"  
                onChange={handleOnChange} 
                value={text} 
                id="textArea" 
                rows="8"
                style={{backgroundColor: props.mode === 'light'? 'white':'#B9B7BD'}}
                ></textarea>    
            </div>
            <div >
                <button className="btn btn-primary btn-sm" type='button' onClick={handleUpClick}>Uppercase</button> 
                <button className="btn btn-primary btn-sm ms-2" type='button' onClick={handleDownClick}>Lowercase</button> 
                <button className="btn btn-primary btn-sm ms-2" type='button' onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary btn-sm ms-2" type='button' onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary btn-sm ms-2" type='button' onClick={handleSpaceClick}>Remove Extra Space</button>
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
