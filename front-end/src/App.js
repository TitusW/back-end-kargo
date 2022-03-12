import './App.css';

import './index.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/client'
import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

import TopNav from './components/TopNav'
import { ChakraProvider } from '@chakra-ui/react'

import Login from './pages/Login'
import Shipments from './pages/Shipments'
import Drivers from './pages/Drivers'
import Trucks from './pages/Trucks'
// import CharacterDetail from './pages/CharacterDetail'

const LayoutWrapScreen = ({ children }) => {
  return (
    <>
      <div class="flex container mx-auto flex-row">
        <TopNav />
        <div class="container mx-auto px-4">{children}</div>
      </div>
    </>
  )
}

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <div className="App">
          <BrowserRouter>
            <Routes>
            <Route exacts path="/" element={(
                  <LayoutWrapScreen>
                  <Login />
                  </LayoutWrapScreen>
                )
              }/>
              <Route exacts path="/shipments" element={(
                  <LayoutWrapScreen>
                  <Shipments />
                  </LayoutWrapScreen>
                )
              }/>
              <Route exacts path="/drivers" element={(
                  <LayoutWrapScreen>
                  <Drivers />
                  </LayoutWrapScreen>
                )
              }/>
              <Route exacts path="/trucks" element={(
                  <LayoutWrapScreen>
                  <Trucks />
                  </LayoutWrapScreen>
                )
              }/>
              {/* <Route
                exact
                path="/"
                render={() => {
                    return (
                        this.state.isUserAuthenticated ?
                        <Redirect to="/home" /> :
                        <Redirect to="/test1" /> 
                    )
                }}
              /> */}
              {/* <Route exacts path="/films/:idFilm" element={(
                  <LayoutWrapScreen>
                  <FilmDetail />
                  </LayoutWrapScreen>
                )
              }/>
              <Route exacts path="/characters/:idChar" element={(
                  <LayoutWrapScreen>
                  <CharacterDetail />
                  </LayoutWrapScreen>
                )
              }/> */}
            </Routes>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
