import React,{lazy,Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ROUTES } from './helpers/routes';
import { ApolloProvider } from "react-apollo";
import {client} from "./Client"
import { GET_USER } from './querys';
import { Query } from 'react-apollo'
import { userContext } from './helpers/context';
const DashboardContainer = lazy(() => import('./components/dashboard/DashboardContainer'));
const SignUpContainer = lazy(() => import('./components/SignUp/SignUpContainer'));


  const App = () => {
    
        return (
          <ApolloProvider client={client}>
            <Query query={GET_USER}>
             {({data, loading, error , refetch})=>{
              if (loading) return null
              if (error) return `Error ${error.message}`
              const redirect = !data.getUser ? <Redirect to={ROUTES.Home} /> : ""
              return  (
                <userContext.Provider value={{user:data.getUser, refetch} || {}}>
                  <Suspense fallback={()=>"Loaading"}>
                    <Router>
                    {redirect}
                    <Switch>
                      <Route exact path={ROUTES.Home} render={()=><SignUpContainer refetch={refetch} session={data.getUser}/>}/>
                      <Route path={ROUTES.Dashboard} render={()=><DashboardContainer session={data.getUser} refetch={refetch}/>}  />
                    </Switch>
                  </Router>
                </Suspense>
              </userContext.Provider>
              ) 
            }}
          </Query>
        </ApolloProvider>
        )    
}

export default App