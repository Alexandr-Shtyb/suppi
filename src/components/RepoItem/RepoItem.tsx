import { FC } from 'react'
import { IRepoItemProps } from './interface'
import { REPO_ITEMS } from '../../constants/global'
import { RepoItemWrapper, RepoItemInfoBlock } from './style'
import { IDataArray } from '../App/interface'

const RepoItem: FC<IRepoItemProps> = ({ data }) => {
  return (
    <RepoItemWrapper>
      {REPO_ITEMS.map((item) => {
        return (
          <RepoItemInfoBlock>
            {data[item as keyof IDataArray]}
          </RepoItemInfoBlock>
        )
      })}
    </RepoItemWrapper>
  )
}

export default RepoItem
