import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// This is the default semantic css but can be replaced by a customized version
import 'semantic-ui-css/semantic.css'

// Public components
import TopHeader from '../../ui/components/TopHeader.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
import Signin from '../../ui/pages/Signin.jsx';
import Signup from '../../ui/pages/Signup.jsx';
import Signout from '../../ui/pages/Signout.jsx';
import DashboardUser from '../../ui/pages/DashboardUser';
import DashboardPrices from '../../ui/pages/DashboardPrices';
import DashboardProducts from '../../ui/pages/DashboardProducts';

Meteor.startup(() => {
  render(
    <Router>
      <div>
        <TopHeader />
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/signout" component={Signout} />
          <Route path="/dashboardUser" component={DashboardUser} />
          <Route path="/dashboardPrices" component={DashboardPrices} />
          <Route path="/dashboardProducts" component={DashboardProducts} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>,
    document.getElementById('app'),
  )
})

/**
 * ProtectedRoute (see React Router v4 sample)
 * will check the Meteor login before routing to the requested page
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null
      return isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      )
    }}
  />
)

ProtectedRoute.propTypes = { component: PropTypes.func.isRequired }
