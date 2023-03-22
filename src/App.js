import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import SignInSide from './components/LoginPage/SignInSide';
import SignupPage from './components/SignupPage/SignupPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <SignInSide />,
        path: '/signIn',
      },
      {
        element: <SignupPage />,
        path: '/signUp',
      },
    ]
  },
]);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
