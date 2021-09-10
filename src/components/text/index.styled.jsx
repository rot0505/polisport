import styled from 'styled-components';

const TextStyled = styled.div`
    color: ${p => p.color};
    font-family: ${p => p.fontFamily};
    font-size: ${p => p.fontSize};
    text-transform: ${p => p.textTransform};
    font-weight: ${p => p.fontWeight};
    letter-spacing: ${p => p.letterSpacing};
    line-height: ${p => p.lineHeight};
    margin-top: ${p => {
        switch(p.typeDescription) {
            case 'single-line':
                return '35px'
            case 'multiline':
                return '20px'
            default:
                return ''
        }}
    };
    
    @media (max-width: 768px) {
        font-size: ${p => p.fontSizeMobile };
        margin-top: ${p => {
            switch(p.typeDescription) {
                case 'single-line':
                    return '25px'
                case 'multiline':
                    return '10px'
                default:
                    return ''
            }}
        }
    }
`;
  
export { TextStyled }
