import { gql } from '@apollo/client'

export const GET_ALL_REPO = gql`
  query GetRepositories($queryString: String!, $queryItems: Int!) {
    search(query: $queryString, type: REPOSITORY, first: $queryItems) {
      repositoryCount
      nodes {
        ... on Repository {
          name
          description
          forkCount
          url
        }
      }
    }
  }
`
