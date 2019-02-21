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
import styled from 'styled-components';
// import './Login.scss';

const LoginContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .login-card {
    margin: 10px 0;
    font-size: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    .card-title {
      font-size: 3.5rem;
      text-align: center;
      background-color: black;
      color: white;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input {
      font-size: 2.5rem;
    }

    button {
      font-size: 2.5rem;
    }
  }
`;

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
    loggedIn: false
  };

  componentDidMount() {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.setState({ loggedIn: !this.state.loggedIn });
      this.props.onLoggedIn({ ...this.state, loggedIn: true });
    } else {
      localStorage.clear();
      this.props.logout();
    }
    localStorage.setItem('loggedIn', this.state.loggedIn);
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  login = e => {
    e.preventDefault();
    const newState = { username: '', password: '', loggedIn: true };
    this.setState();
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('loggedIn', true);
    this.props.onLoggedIn(newState);
  };

  render() {
    return (
      <LoginContainer>
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
                  onChange={this.onInputChange}
                  value={this.state.username}
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  onChange={this.onInputChange}
                  value={this.state.password}
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </LoginContainer>
    );
  }
}

export default LoginPage;
