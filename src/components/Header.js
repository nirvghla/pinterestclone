import React, {useState} from 'react'
import styled from 'styled-components'
import PinterestIcon from '@material-ui/icons/Pinterest'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import NotificationsIcon from '@material-ui/icons/Notifications'
import FaceIcon from '@material-ui/icons/Face'
import TextsmsIcon from '@material-ui/icons/Textsms'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const Header = props => {
  const [input, setInput] = useState('')

  const onSearchSumit = e => {
    e.preventDefault()
    props.onSubmit(input)
    console.log('this is the input', input)
  }
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href='/'>Homepage</a>
      </HomePageButton>
      <FollowingButton>
        <a href='/'>Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input
              type='text'
              onChange={e => {
                setInput(e.target.value)
              }}
            />
            <button type='submit' onClick={onSearchSumit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`

const HomeButtons = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  justify-content: center;
  border-radius: 24px;
  min-width: 123px;
  cursor: pointer;
`

const HomePageButton = styled(HomeButtons)`
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
  }
`

const FollowingButton = styled(HomeButtons)`
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  :hover {
    background-color: #e1e1e1;
  }
`

const SearchWrapper = styled.div`
  flex: 1;
`
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  border-radius: 50px;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }
  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }
  form > button {
    display: none;
  }
  input:focus {
    outline: none;
  }
  input:active {
    outline: none;
  }
`

const IconWrapper = styled.div``

export default Header
