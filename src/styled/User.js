import styled from 'styled-components'

const User = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    width: 300px
    margin-bottom: 0;
  }
`

User.Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

User.Info = styled.div`
  display: flex;
  flex-direction: column;
`

User.Name = styled.h1`
  font-size: 18px;
  line-height: 1.15;
  font-weight: 600;
  color: #444;
  margin: 0 0 5px;
`

User.Handle =  styled.h3`
  font-size: 14px;
  line-height: 1.15;
  color: #666;
  margin: 0;
`

export default User