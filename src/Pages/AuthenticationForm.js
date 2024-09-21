import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from './Context';
import { LoginContext } from '../contextapi/LoginContext';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import classes from '../Style/AuthenticationTitle.module.css';

export function AuthenticationForm(props: PaperProps) {
  const { setSessionId } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const { hideLogin } = useContext(LoginContext);
  const [type, toggle] = useToggle(['login', 'register']);
  const [loading, setLoading] = useState(false); // State for button loading

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length > 6 ? null : 'Password should include at least 6 characters'),
    },
  });

  const handleRegister = async (userData) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post('https://server-347a.onrender.com/register', userData, { withCredentials: true });
      console.log('Registration successful', response);
      console.log("data:", response.data);

      login(response.data.user); // Pass the actual user data here
      // The cookie should be automatically set by the browser
      // Now we can get the session ID from the cookie
      fetchUserData();
      console.log("document cookie", document.cookie);
      setError(null);
      hideLogin();


    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError('Email already exists. Please use another email.');
      } else {
        setError('An error occurred during registration. Please try again.');
      }
      console.error(error);
    }
    finally {
      setLoading(false); // Stop loading
    }
  };

  const handleLogin = async (loginData) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post('https://server-347a.onrender.com/login', loginData);
      console.log('Login successful', response.data);
      console.log(response.data);
      console.log("response ok:", response);
      // The cookie should be automatically set by the browser
      // Now we can get the session ID from the cookie
      login(); // Pass the actual user data here
      fetchUserData();
      console.log("document cookie", document.cookie);
      setError(null);
      hideLogin();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('An error occurred during login. Please try again.');
      }
      console.error(error);
    }
    finally {
      setLoading(false); // Stop loading
    }
  };

  const handleSubmit = form.onSubmit((values) => {
    if (type === 'login') {
      handleLogin(values);
    } else {
      handleRegister(values);
    }
  });

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://server-347a.onrender.com/@me', { withCredentials: true });
      console.log('User data fetched successfully', response.data);

      if (response.data.id) {
        const userId = response.data.id;
        console.log("User ID:", userId);
        setSessionId(userId); // Optionally save user ID or session data in context
        login(); // Update the login status if needed
      } else {
        console.error("Failed to retrieve user data");
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  return (
    <Paper className={classes.theform} radius="md" p="30" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to HomeList, {upperFirst(type)} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      {error && <Text color="red">{error}</Text>}

      <form onSubmit={handleSubmit}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              {...form.getInputProps('name')}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            {...form.getInputProps('email')}
            radius="md"
          />

          <PasswordInput
            className='pass'
            required
            label="Password"
            placeholder="Your password"
            {...form.getInputProps('password')}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              {...form.getInputProps('terms', { type: 'checkbox' })}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl" disabled={loading}>
            {loading ? (type === 'login' ? 'Logging in...' : 'Registering...') : upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
