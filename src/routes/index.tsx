import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home/index'

export const Routes = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
