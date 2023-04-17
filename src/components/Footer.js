import { useState } from 'react'
import './style/Footer.css'
import imag from '../assets/newsletter-image.jpg'

const Footer = () => {
    const [inputValue, setInputValue] = useState('')
    
    function checkEmail(){
        if (!inputValue.includes('@')) {
            alert("Attention, there is no @, this is not a valid address 😥")
        }
    }

    function handleInput(e){
        setInputValue(e.target.value)
    }
    
	return (
		<footer className='jh-footer'>
            <div className='jh-image'>
                <img className='jh-image' src={imag} alt='succulents in pot'/>
            </div>
			<div className='jh-sub'>
                <div className='jh-footer-elem'>
                For plant enthusiasts 🌿🌱🌵
                </div>
                <div className='jh-footer-elem'>Subscribe to our newsletter :</div>
                <div className='jh-footer-elem'>
                    <input 
                        placeholder="name@email.com"
                        value={inputValue}
                        onChange={handleInput}
                        onBlur={checkEmail}
                    />

                    
                    <button style={{marginLeft: 20}} onClick={() => alert(inputValue)}>Send</button>
                </div>
            </div>
		</footer>
	)
}

export default Footer