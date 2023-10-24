import React, { Fragment } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from './routes';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

function App() {
 
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
              const Page = route.page;
              const Layout = route.IsShowHeader || route.IsShowFooter ? DefaultComponent : Fragment;
              return(
                  <Route key={route.path} path={route.path} element={
                     <Layout>
                        <Page/>
                     </Layout>
                  }/>
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App;