import { ContentContainer } from '../ContentContainer';
// import Logo from './logo'
import logoBlue from '../../public/LogoBlue.svg'

export const Footer = () => {
  return (
    <footer className="bg-moonbeam text-kinda-white py-28">
      <ContentContainer className='flex justify-between items-center flex-col md:flex-row md:gap-10 max-w-4xl'>
        <div className="pb-10">
          <div className='flex justify-between items-center'>
            <img src={logoBlue.src} width='150px' />
            <h3 className='text-6xl text-right md:text-left md:ml-5'>Ungard Digital</h3>
          </div>
          <p className='text-4xl font-light w-full my-5 mx-auto'>Bringing the power of technology to your business.</p>
        </div>
        <div className='flex items-start gap-10 w-full justify-between md:justify-end'>
          {/* <div>
            <h4 className='text-2xl'>Company</h4>
            <ul className='font-light text-lg'>
              <li className='my-2'>About</li>
              <li className='my-2'>Contact</li>
              <li className='my-2'>News</li>
            </ul>
          </div> */}
          <div>
            {/* <h4 className='text-2xl'>Other</h4>
            <ul className='font-light text-lg'>
              <li className='my-2'>Terms and Conditions</li>
              <li className='my-2'>Privacy Policy</li>
              <li className='my-2'>Customer Disclaimer</li>
            </ul> */}
          </div>
        </div>
      </ContentContainer>
    </footer>
  )
}
