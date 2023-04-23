import React, { FormEvent, useCallback, useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();

  const handleRegister = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      signUp({ name, username, email, password });
      navigate('/add-house');
    },
    [name, email, username, password],
  );

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="orange" textAlign="center">
          Register
        </Header>
        <Form size="large" onSubmit={handleRegister}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user outline"
              iconPosition="left"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="orange" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Do you have a account? <Link to="/">Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
