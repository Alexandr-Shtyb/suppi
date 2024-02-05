import { FC } from 'react'
import { IRepoItemProps } from './interface'
import { RepoItemWrapper, RepoItemInfoBlock } from './style'

const RepoItem: FC<IRepoItemProps> = ({ data }) => {
  return (
    <RepoItemWrapper>
      <RepoItemInfoBlock>{data.name}</RepoItemInfoBlock>
      <RepoItemInfoBlock>{data.description}</RepoItemInfoBlock>
      <RepoItemInfoBlock>{data.url}</RepoItemInfoBlock>
    </RepoItemWrapper>
  )
}

export default RepoItem
