import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import './Mainboard.css'
const MainBoard = props => {
  let {pins} = props
  return (
    <Wrapper>
      <Container className='mainboard__container'>
        {pins.map((pin, index) => {
          let {urls} = pin
          return <Pin key={index} urls={urls} />
        })}
      </Container>
    </Wrapper>
  )
}

export default MainBoard

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
`
const Container = styled.div`
  background-color: white;

  margin: 0 auto;
  height: 100%;
`
