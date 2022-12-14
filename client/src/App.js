import './App.css';
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import About from './pages/about/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Post from './pages/Post'
import SinglePost from './pages/SinglePost'
import User from './pages/User'
import Resturants from './pages/Resturants'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/posts">
              <Post />
            </Route>
            <Route exact path="/posts/:postId">
              <SinglePost />
            </Route>
            <Route exact path="/user">
              <User />
            </Route>
            <Route exact path="/resturants">
              <Resturants />
            </Route>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
