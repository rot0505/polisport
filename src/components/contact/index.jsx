/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { useResize } from '../../hooks'
import { useIntl } from 'react-intl'
import { Text } from '..'
import { MdDirectionsBike } from 'react-icons/md'
import { Container, 
          InputText,
          TextArea,
          InputCheckBox,
          CheckLabel,
          EnterTour,
          TextContainer,
          BikeContainer
         } from './index.styled'

function ContactComponent() {
  const intl = useIntl()

  const [textDistance, setTextDistance ] = useState(null);
  const [ clickEnable, setClickEnable ] = useState(true)
  const [ fileString, setFileString ] = useState('nothing to show here...');
  const { isMobile } = useResize();

  const ref = useRef(null);
  const textRef = useRef(null);
  const fileRef = useRef(null);

  const [ emailError, setEmailError ] = useState(false);

  const [ inputs, setAllInputs ] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    files: [],
    checked: false
  });

  const handleChange = (e) => setAllInputs({...inputs, [e.target.name]: e.target.value})

  const handleChangeCheckbox = (e) => setAllInputs({...inputs, checked : !inputs.checked})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (CheckForm()) {
      console.log("send and redirect")
      setClickEnable(false);
    } else {
      console.log("missing values")
    }
  }

  const CheckForm = () => {
    let allValid = true;
    setEmailError(!validateEmail(inputs.email))

    

    if(!validateEmail(inputs.email) && isMobile){
      ref.current.scrollTop = 0;
    }

    if(inputs.name === '') allValid = false;
    if(validateEmail(inputs.email) !== true) allValid = false;
    if(inputs.subject === '') allValid = false;
    if(inputs.message === '') allValid = false;

    return allValid;
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFileChange = (e) => {
    setFileString(e.target.files[0].name);
  }

  useEffect(() => {
    const mRight = isMobile ? 8 : 20;
    setTextDistance(textRef?.current.offsetWidth + mRight)
  }, [isMobile])

  useEffect(() => {
    if(emailError) {
      setEmailError(!validateEmail(inputs.email));
    }

  }, [inputs.email])

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-12">
           <Text 
              className="main-text" 
              textId="contact.title"
              textTransform="uppercase"
              fontSize="34px"
              fontSizeMobile="23px"
              fontWeight="500"
              letterSpacing="2.2px"
           />
          </div>
        </div>
        <div ref={ref} className="row overflow-scroll">
          <div className="col-12 centered">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-7 inputs-margin">
                  <InputText
                      className={inputs.name !== '' ? 'filled': 'empty'}
                      placeholder={intl.formatMessage({ id: "contact.your-name" })}
                      name="name"
                      value={inputs.name}
                      onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-7 inputs-margin">
                  <InputText
                      className={inputs.email !== '' ? 'filled': 'empty'}
                      placeholder={intl.formatMessage({ id: "contact.your-email" })}
                      autoComplete="no"
                      name="email"
                      value={inputs.email}
                      onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-7 inputs-margin">
                  <InputText
                      className={inputs.subject !== '' ? 'filled': 'empty'}
                      placeholder={intl.formatMessage({ id: "contact.your-subject" })}
                      name="subject"
                      value={inputs.subject}
                      onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-7 inputs-margin">
                <div className='input-wrapper'>
                    <label htmlFor='input-file'>Add File</label>
                    <input id='input-file' type='file' value='' onChange={handleFileChange}/>
                    <span ref={fileRef} id='file-name'>{fileString}</span>
                  </div>
                </div>
              </div>
              <div className="row message">
                <div className="col-12 col-md-7 inputs-margin">
                  <TextArea
                    className={inputs.message !== '' ? 'filled': 'empty'}
                    placeholder={intl.formatMessage({id: 'contact.your-message' })}
                    name="message"
                    value={inputs.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12 p-0">
                <CheckLabel className={inputs.checked !== false ? 'filled': 'empty'} onClick={handleChangeCheckbox}>
                  <InputCheckBox className={inputs.checked ? 'checked': ''}/>
                  <span>
                    <Text
                      fontSize="14px"
                      color="#929292"
                      textId="contact.agree-terms"
                    />
                  </span>
                </CheckLabel>
              </div> 
            </form>
          </div>
        </div>
      </div>
      <EnterTour className={`${!clickEnable ? 'leaving' : ''} ${!inputs.checked ? 'disabled' : ''}`}>
        <div className="container absolute d-flex align-items-flex-end">
          <TextContainer ref={textRef} className="text-container" onClick={handleSubmit}>
            <Text textTransform="uppercase" letterSpacing=".8px" lineHeight="30px" fontSize="19px" fontSizeMobile="14px" fontWeight="100" textId="contact.send" />
          </TextContainer>
          {textDistance && 
            <BikeContainer onClick={handleSubmit} distance={textDistance} className={`bike-container ${!clickEnable ? 'leaving' : ''}`}>
              <MdDirectionsBike color="#FFF"/>
            </BikeContainer>
          }
        </div>
      </EnterTour>
    </Container>
  )
}

export default ContactComponent
