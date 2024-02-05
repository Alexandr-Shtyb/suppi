import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { ApolloProvider } from '@apollo/client'
import { client } from './api/client/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
