import React from 'react'
import { Container, Line } from './index.styled'

function MidiaComponent({playing = true, background = "transparent"}) {

  const isPlaying = playing;

  const getRandomHeight = (min, additionalRange) => (Math.floor(Math.random() * additionalRange) + min);
  
  return (
    <Container background={background}>
      <Line className={isPlaying ? 'playing': 'mute'} randHeight={getRandomHeight(5, 21)} randTime={getRandomHeight(.8, 1.8)}/>
      <Line className={isPlaying ? 'playing': 'mute'} randHeight={getRandomHeight(5, 21)} randTime={getRandomHeight(.8, 1.8)}/>
      <Line className={isPlaying ? 'playing': 'mute'} randHeight={getRandomHeight(5, 21)} randTime={getRandomHeight(.8, 1.8)}/>
      <Line className={isPlaying ? 'playing': 'mute'} randHeight={getRandomHeight(5, 21)} randTime={getRandomHeight(.8, 1.8)}/>
      <Line className={isPlaying ? 'playing': 'mute'} randHeight={getRandomHeight(5, 21)} randTime={getRandomHeight(.8, 1.8)}/>
    </Container>
  )
}

export default React.memo(MidiaComponent);
