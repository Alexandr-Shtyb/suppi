import styled from '@emotion/styled'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

export const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const CustomStack = styled(Stack)`
  padding: 20px;
`

export const RequestError = styled.h1`
  padding: 10px;
`
