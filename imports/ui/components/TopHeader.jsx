import React from 'react'
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { withRouter, NavLink } from 'react-router-dom'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

const TopHeader = ({ currentUser }) => (
  <Menu secondary pointing>
    <Menu.Item as={NavLink} activeClassName="active" exact to="/">
      <Image src="/logo2.gif" size="mini" alt="icon" />
    </Menu.Item>
    {currentUser === '' && (
    <Menu.Item as={NavLink} activeClassName="active" exact to="/signin">
    Sign In
    </Menu.Item>
    )}
    {currentUser === '' && (
    <Menu.Item as={NavLink} activeClassName="active" exact to="/signup">
    Sign Up
    </Menu.Item>
    )}
    {currentUser !== '' && (
    <Menu.Item as={NavLink} activeClassName="active" exact to="/dashboardUser">
      Dashboard users
    </Menu.Item>    
    )}
    {currentUser !== '' && (
    <Menu.Item as={NavLink} activeClassName="active" exact to="/dashboardProducts">
      Dashboard products
    </Menu.Item>    
    )} 
    {currentUser !== '' && (
    <Menu.Item as={NavLink} activeClassName="active" exact to="/dashboardPrices">
      Dashboard prices
    </Menu.Item>    
    )}    
    <Menu.Item position="right">
      {currentUser !== '' && (
        <Dropdown text={currentUser} pointing="top right" icon="user">
          <Dropdown.Menu>
            <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout" />
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Menu.Item>
  </Menu>
)

TopHeader.propTypes = { currentUser: PropTypes.string }
TopHeader.defaultProps = { currentUser: ''}

// withRouter HOC.
// see explanation: https://reacttraining.com/react-router/web/api/withRouter

const TopHeaderContainer = withTracker(() => (
  { 
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }
))(TopHeader)

export default withRouter(TopHeaderContainer)
