import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  FormGroup,
  Form,
  Label,
  Input,
  Button
} from 'reactstrap';
import './Login.scss';

class LoginPage extends React.Component {
  state = { loginText: '' };

  onUsernameChange = e => this.setState({ loginText: e.target.value });

  login = e => {
    e.preventDefault();
    localStorage.setItem('username', this.state.loginText);
    this.setState({ loginText: '' });
    window.location.reload();
  };

  render() {
    return (
      <div className="login-container">
        <Card className="login-card">
          <CardBody className="login-body">
            <CardTitle>Login</CardTitle>
            <Form className="login-form" onSubmit={this.login}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  onChange={this.onUsernameChange}
                  value={this.state.loginText}
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" type="password" name="password" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
