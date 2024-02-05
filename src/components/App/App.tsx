import { useState, useEffect } from 'react'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import Spin from '../Spin/Spin'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useLazyQuery } from '@apollo/client'
import { GET_ALL_REPO } from '../../api/queries/repositories'
import { v4 as uuidv4 } from 'uuid'
import RepoItem from '../RepoItem/RepoItem'
import { IDataArray } from './interface'

import { CustomContainer, RequestError, CustomStack } from './style'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [repositories, setRepositories] = useState<IDataArray[]>([])
  const [queryItems, setQueryItems] = useState(10)
  const [fetching, setFetching] = useState(false)

  const [loadRepos, { error, loading, data }] = useLazyQuery(GET_ALL_REPO)

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setRepositories([])
    setQueryItems(10)
  }

  const loadHandler = () => {
    if (searchValue.trim() !== '') {
      loadRepos({
        variables: { queryString: searchValue, queryItems: queryItems },
      })
    }
  }

  const scrollHandler = (e: Event) => {
    e.preventDefault()
    if (
      (e.target as Document).documentElement.scrollHeight -
        ((e.target as Document).documentElement.scrollTop +
          window.innerHeight) <
      100
    ) {
      setFetching(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  useEffect(() => {
    if (fetching) {
      loadHandler()
    }
  }, [fetching])

  useEffect(() => {
    if (data && data.search.nodes) {
      setRepositories([...data.search.nodes])
      setQueryItems((queryItems) => queryItems + 10)
      setFetching(false)
    }
  }, [data])

  return (
    <CustomContainer>
      <CustomStack spacing={2} direction="row">
        <Input
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            searchHandler(e)
          }
        />
        <Button variant="contained" onClick={loadHandler}>
          Find
        </Button>
      </CustomStack>

      {loading && !error && <Spin />}

      {error && repositories.length === 0 ? (
        <RequestError>Some problem...</RequestError>
      ) : (
        <List>
          {repositories.length > 0 &&
            repositories.map((repo: IDataArray) => {
              return (
                <ListItem key={uuidv4()}>
                  <RepoItem data={repo} />
                </ListItem>
              )
            })}
        </List>
      )}
    </CustomContainer>
  )
}

export default App
