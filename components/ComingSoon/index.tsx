import whiteLogo from '../../public/LogoWhite.svg';
export const ComingSoon = () => {
    return(
        <div className='bg-gradient-to-br from-avenue-blue via-ungard-blue to-moonbeam min-h-screen w-full text-white flex justify-center items-center'>
            <div className='text-center max-w-4xl'>
                <h1 className='text-3xl xl:text-6xl p-5 font-bold'>Coming Soon!</h1>
                <p className='text-lg xl:text-2xl p-5'>We're very excited to release Ungard Digital to the world, but the site isn't quite ready. For now, here's some general information</p>
                <div className='bg-slate-100 text-black rounded-lg my-5 drop-shadow-md max-w-xl w-11/12 lg:w-3/4 mx-auto py-3'>
                    <p className='text-lg xl:text-2xl p-5'>We offer a variety of Digital services to help businesses of all sizes, but specialize in the following areas:</p>
                    <ul className='text-md xl:text-lg p-2'>
                        <li>Custom Website Development</li>
                        <li>Software Development</li>
                        <li>Digital Marketing Consulting</li>
                        <li>General Software/Technology Consulting</li>
                    </ul>
                </div>
                <p className='text-lg xl:text-2xl p-5'>
                    Have an urgent matter? Feel free to send an email to
                    <a className='underline mx-2' href="mailto:trent@ungarddigital.com">trent@ungarddigital.com</a> <br/>
                    or give use a call at <a className='underline mx-2' href="tel:15705607532">(570)560-7532</a>
                </p>
                <div className='animate-pulse'>
                    <img className='mx-auto my-5 w-44 xl:w-80' src={whiteLogo.src} />
                </div>
            </div>
        </div>
    )
}