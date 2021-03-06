import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import DrawerLeft from './DrawerLeft'

class AppBarTop extends Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div>
        <AppBar
          title="PCG Portal"
          onLeftIconButtonTouchTap={this.handleToggle}

          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Profile" />
              <MenuItem primaryText="System Health" />
              <MenuItem primaryText="Sign out" onClick={() => this.props.logout()}/>
            </IconMenu>
          }
        />
        <DrawerLeft
          open={this.state.open}
          close={this.handleClose}
          onToggleDrawer={this.handleToggle}
        />
      </div>
    )
  }
}

export default AppBarTop
