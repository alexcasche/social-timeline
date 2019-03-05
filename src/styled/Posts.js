import styled from 'styled-components'

const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 2px;
  background-color: white;
  @media only screen and (min-width: 768px) {
    width: calc(100% - 340px);
  }
`

Posts.Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #e8f4f9;
`

Posts.Avatar = styled.div`
  
`

export default Posts