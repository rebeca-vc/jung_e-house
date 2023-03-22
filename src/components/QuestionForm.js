import { useState } from 'react'

function checkValue(value, setInputValue) {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}

const QuestionForm = () => {
    const [ inputValue, setInputValue ] = useState("Send us a message")
    // const isInputError = inputValue.includes('fuck')
    
    
    return (
    <div style={{height: 200, display: "flex", justifyContent: "flex-start", alignItems: "center", paddingLeft: 32}}>
        
        <textarea 
            value={inputValue}
            onChange={(e) => checkValue(e.target.value, setInputValue)}
            />
        {/* {isInputError && (<div> C'mon be more polite </div>)} */}
        
        <button onClick={() => alert(inputValue)}>Send</button>
    </div>
    )
    
}
// const handleSubmit = (e) => {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }

/* <form onSubmit={handleSubmit}>
<input type='text' name='my_input' defaultValue='Type your text' />
<button type='submit'>Enter</button>
</form> */

export default QuestionForm


