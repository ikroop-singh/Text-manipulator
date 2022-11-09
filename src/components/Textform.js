import React,{useState} from 'react'


export default function Textform(props) {
    const[text,setText]=useState('');
    const handleupClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert('Converted to upper case','success')

    }
    const handleonChange=(event)=>{
        console.log('onchange function is called ');
        setText(event.target.value);
    }
    const handlelowClick=()=>{
        setText(text.toLowerCase());
        props.showalert('Converted to lower case','success')

    }
    const handleclearall=()=>{
        setText('');
        props.showalert('Text has been cleared','success')
    }

    const copyHandler=()=>{
        let copyText=document.getElementById('textarea');
        copyText.select();
        copyText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(copyText.value);
        props.showalert('Text has been copied to clipboard','success')
 

    }
   
    
    return (
      <>            
        <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="form-floating">
                <textarea name="" id="textarea" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'rgb(1 16 1)':'white',color:props.mode==='dark'?'white':'black'}} cols="30" rows="10" className="form-control"></textarea>
            </div>
            
            <button disabled ={text.length===0} className="btn btn-success my-3 mx-3" onClick={handleupClick}>Convert to uppercase</button>
            <button disabled ={text.length===0} className="btn btn-success my-3 mx-3" onClick={handlelowClick}>Convert to lowercase</button>
            <button disabled ={text.length===0} className="btn btn-success my-3 mx-3" onClick={handleclearall}>Clear all</button>
            <button disabled ={text.length===0} className="btn btn-success my-3 mx-3" onClick={copyHandler}>Copy text</button>
        </div>

        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.split('').filter((element)=>{return element!==' '}).length}characters </p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes takes to read the text </p>
            <h2>Preview </h2>
            <p>{text.length>0?text:'Write something to preview it.'}</p>
        </div>
      
      </>  
    )
}
