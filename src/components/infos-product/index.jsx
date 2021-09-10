
// it is important that the links below start with https:// or else it will only work on localhost
export const PRODUCTION_ASSETS = 'http://localhost:3000/' // 'https://polisportvirtualtour.com' https://polisport.vr360.pt/
export const DEVELOP_ASSETS = 'http://localhost:3000/' // 'https://polisportvirtualtour.com' https://polisport.vr360.pt/


export const ASSETS_FOLDER = process.env.REACT_APP_ENVIRONMENT === 'production' ? PRODUCTION_ASSETS: DEVELOP_ASSETS;

export const COLOR = {
  primary: '#BBC3C3',
  secondary: '#1D3739',
  tertiaty: '#2D5A64',
  quaternary: '#AEDBD9',
  quinary: '#112426',
  senary: '#AFAEAE',
}

export const FONT = {
  md: '2.5em',
  md1: '36px',
  md2: '24px',
  md3: '32px',
  sm1: '1.5em',
  sm2: '13px',
  sm3: '21px',
}

export const LINK = {
  linkedin: 'https://www.linkedin.com',
  termsAndCondition: 'https://www.polisport.com/en/help-and-support/privacy-policy_538.html'
}