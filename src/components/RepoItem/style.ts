import styled from '@emotion/styled'

export const RepoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  width: 100%;
  padding: 50px 100px;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);

  @media (max-width: 480px) {
    padding: 25px 50px;
  }
`

export const RepoItemInfoBlock = styled.div`
  padding: 10px;

  @media (max-width: 480px) {
    padding: 25px 50px;
  }
`
