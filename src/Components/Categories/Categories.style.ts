 import styled from 'styled-components'


export const Container = styled.div`
  font-size: 20px;
  padding-right: 40px;
  padding-top: 20px;

  & a {
    &:hover {
      color: snow;
      opacity: 0.8;
    }
  }

  & a {
    text-decoration: none;
    color: black;
    text-transform: capitalize;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
`

export const Li = styled.li`
  padding-top: 5px;
`
