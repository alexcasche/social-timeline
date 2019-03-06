import styled from 'styled-components'
import { shade } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    width: calc(100% - 320px);
  }
`

Feed.Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #e8f4f9;
  border-radius: 5px 5px 0 0;
  border: 1px solid #cfe9f3;
`

Feed.Avatar = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 10px;
  border-radius: 3px;
`

Feed.Form = styled.form`
  width: 100%;
  height: 36px;
  display: flex;
  position: relative;
`

Feed.Input = styled.input`
  width: 100%;
  padding: 0 50px 0 10px;
  background-color: white;
  border: 1px solid #cfe9f3;
  border-radius: 3px;
  color: #4F93C7;
  font-size: 14px;
  overflow: hidden;
  transition: border-color .15s ease-in-out;
  &::placeholder {
    color: #73b0dd;
  }
  &:focus {
    border-color: ${shade(0.1, '#cfe9f3')};
    outline: none;
  }
`

Feed.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 45px;
  height: 34px;
  right: 1px;
  top: 1px;
  background-color: transparent;
  border: none;
  border-radius: 0 3px 3px 0;
  color: #50abf0;
  transition: color .15s ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${shade(0.15, '#50abf0')};
  }
  &:focus {
    outline: none;
  }
`

Feed.ButtonIcon = styled(FontAwesomeIcon)`
  color: inherit;
  font-size: 18px;
`

Feed.Posts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
`

export default Feed