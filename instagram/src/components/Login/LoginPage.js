import React, { useContext, useState, useEffect } from 'react';
import { PostContext } from '../../App';
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

export default () => {
  const { dispatch } = useContext(PostContext);
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  function login(e) {
    if(e) {
      e.preventDefault();
    }
    dispatch({ type: 'logged-in', payload: username });
    localStorage.setItem('username', username);
    localStorage.setItem('loggedIn', true);
    setPassword('');
    setUsername('');
  }

  useEffect(() => {
    const username = localStorage.getItem('username');
    if(username) {
      login();
    }
  }, []);

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardBody className="login-body">
          <CardTitle>Login</CardTitle>
          <Form className="login-form" onSubmit={login}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                onChange={e => setUsername(e.target.value)}
                value={username}
                autoComplete="off"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

// class LoginPage extends React.Component {
//   state = {
//     username: '',
//     password: '',
//     loggedIn: false
//   };
//
//   componentDidMount() {
//     if (localStorage.getItem('loggedIn') === 'true') {
//       this.setState({ loggedIn: !this.state.loggedIn });
//       this.props.onLoggedIn({ ...this.state, loggedIn: true });
//     } else {
//       localStorage.clear();
//       this.props.logout();
//     }
//     localStorage.setItem('loggedIn', this.state.loggedIn);
//   }
//
//   onInputChange = e => this.setState({ [e.target.name]: e.target.value });
//
//   login = e => {
//     e.preventDefault();
//     const newState = { username: '', password: '', loggedIn: true };
//     this.setState();
//     localStorage.setItem('username', this.state.username);
//     localStorage.setItem('loggedIn', true);
//     this.props.onLoggedIn(newState);
//     // window.location.reload();
//   };
//
//   render() {}
// }
