import styled from 'styled-components'
import { shade } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 20px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`

Post.Avatar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

Post.Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

Post.Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  padding: 0;
  right: -2px;
  top: -5px;
  border: none;
  color: #bbb;
  transition: color .15s ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${shade(0.15, '#bbb')};
  }
  &:focus {
    outline: none;
  }
`

Post.DeleteIcon = styled(FontAwesomeIcon)`
  color: inherit;
  font-size: 12px;
`

Post.Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

Post.Name = styled.h1`
  font-size: 16px;
  line-height: 1.15;
  font-weight: 600;
  color: #444;
  margin: 0 8px 0 0;
`

Post.Info =  styled.h3`
  font-size: 14px;
  line-height: 1.15;
  color: #aaa;
  font-weight: 400;
  margin: 0;
`

Post.Content = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #444;
`

export default Post