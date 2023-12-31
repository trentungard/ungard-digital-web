interface LogoProps {
  height?: number;
  width?: number;
  className?: string;
}

export const LogoBlue = ({height = 50, width = 68, className}: LogoProps) => {
  return(
    <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width} height={height} fill="#4B50C4"/>
      <path d="M27 40L30 43L8 43L11 40L27 40Z" fill="white"/>
      <path d="M23 36L26 39L12 39L15 36L23 36Z" fill="white"/>
      <path d="M24 9.99999L27 13V39L24 36V9.99999Z" fill="white"/>
      <path d="M28 14L31 17V43L28 40V14Z" fill="white"/>
      <path d="M27 9V12L24 9V7H27V9Z" fill="white"/>
      <path d="M31 9V16L28 13V7H31V9Z" fill="white"/>
      <path d="M14 9.99999L11 13V39L14 36V9.99999Z" fill="white"/>
      <path d="M10 14L7 17V43L10 40V14Z" fill="white"/>
      <path d="M11 9V12L14 9V7H11V9Z" fill="white"/>
      <path d="M7 9V16L10 13V7H7V9Z" fill="white"/>
      <path d="M58 40L61 43L34 43L37 40L58 40Z" fill="white"/>
      <path d="M54 36L57 39L41 39L44 36L54 36Z" fill="white"/>
      <path d="M44 14L41 11L57 11L54 14L44 14Z" fill="white"/>
      <path d="M58 10L61 7L34 7L37 10L58 10Z" fill="white"/>
      <path d="M40 11L37 14V11H40Z" fill="white"/>
      <path d="M37 36L40 39L37 39L37 36Z" fill="white"/>
      <path d="M61 42V8L58 11V39L61 42Z" fill="white"/>
      <path d="M57 38V12L54 15V35L57 38Z" fill="white"/>
      <path d="M40 38V12L37 15V35L40 38Z" fill="white"/>
      <path d="M40 38V12L37 15V35L40 38Z" fill="white"/>
      <path d="M41 38V12L44 15V35L41 38Z" fill="white"/>
    </svg>
  )
}