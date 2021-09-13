import styled from 'styled-components'

export const Container = styled.div``

export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-size: contain;
`

export const ImagesDiv = styled.div`
  padding: 5px;
`

export const Image = styled.img`

  width: 250px;
  height: 250px;
  border-radius: 10px;
`
export const Button = styled.button`
  margin-left: 600px;
  margin-bottom: 10px;
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: crimson;
  color: white;
  font-size: 15px;

  &:hover {
    opacity: 0.8;
  }
`
