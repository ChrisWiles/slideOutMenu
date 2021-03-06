import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      password: '',
      username: ''
    }
  }

  handleSubmit() {
    const {username, password} = this.state
    console.log(username, password)
    this.props.login()
    this.setState({username: ''})
    this.setState({password: ''})
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div className="row center-xs Login">
        <div className="col-xs-6">
          <div className="box">
            <Card>
              <CardActions>
                <div>
                  <TextField value={this.state.username} onChange={this.handleUsernameChange} hintText="Username" floatingLabelText="Username"/><br/>
                  <TextField value={this.state.password} onChange={this.handlePasswordChange} hintText="Password" floatingLabelText="Password" type="password"/><br/>
                </div>
                <FlatButton label="Login" onClick={this.handleSubmit}/>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
