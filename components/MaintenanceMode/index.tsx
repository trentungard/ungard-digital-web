import whiteLogo from '../../public/LogoWhite.svg';
import { useState, useEffect } from 'react';

export const MaintenanceMode = ({setCanBypass}) => {

    const [ showBypass, setShowBypass ] = useState(false);
    const [ clickCount, setClickCount ] = useState(0);
    const [phrase, setPhrase] = useState('');
    const validate = () => phrase === 'letmeinbrother' ? setCanBypass(true) : alert('incorrect phrase');

    useEffect(() => clickCount >= 10 ? setShowBypass(true) : null, [clickCount])

    return(
        <div className='bg-gradient-to-br from-avenue-blue via-ungard-blue to-moonbeam w-full h-screen text-white flex justify-center items-center overflow-hidden'>
            <div className='text-center'>
                <h1 className='text-3xl xl:text-6xl p-5'>Sorry, we're currently down for maintenance :(</h1>
                <p className='text-lg xl:text-2xl p-5'>
                    Have an urgent matter? Feel free to send an email to 
                    <a className='underline mx-2' href="mailto:trent@ungarddigital.com">trent@ungarddigital.com</a> <br/>
                    or give me a call at <a className='underline mx-2' href="tel:15705607532">(570)560-7532</a>
                </p>
                <img className='mx-auto my-5 w-44 xl:w-96' src={whiteLogo.src} />
                <p className='text-4xl xl:text-8xl p-5 cursor-pointer' onClick={() => setClickCount(state => state + 1)}>Ungard Digital</p>
                { showBypass ?
                    <div className='my-10'>
                        <input className='text-black border-2' value={phrase} onChange={e => setPhrase(e.target.value)} />
                        <button  className='border-2' onClick={validate}>Go</button>
                    </div>
                    : 
                    null
                }
            </div>
        </div>
    )
}