import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {
  HeaderAppBarSx,
  HeaderDrawerSx,
  HeaderIconButtonSx,
  HeaderLinkSignInSx,
  HeaderLink_2_SignInSx,
  HeaderLink_3_SignInSx,
  navItems
} from '../StyleComponent/StyleComponent';

// const drawerWidth = 240;
export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        USER
      </Typography>
      <Divider />
      <List>
        {navItems?.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item?.to} variant="body2" sx={{
                textDecoration: 'none',
                cursor: 'pointer',
              }}>
                {item?.field}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Link href="/signIn" variant="body2" sx={HeaderLinkSignInSx}>
          {"Login"}
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={HeaderAppBarSx}>
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={HeaderIconButtonSx}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'block' } }}>
              <img src="https://i.ibb.co/JsvBDwD/logo.png" alt="" style={{ width: '150px' }} />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems?.map((item, i) => (
                <Button variant='text' key={i} sx={{ color: 'primary.main' }}>
                  <Link href={item?.to} variant="body2" sx={HeaderLink_2_SignInSx}>
                    {item?.field}
                  </Link>
                </Button>
              ))}
              <Button sx={{ bgcolor: 'primary.green' }}>
                <Link href="/signIn" variant="body2" sx={HeaderLink_3_SignInSx}>
                  {"Login"}
                </Link>
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={HeaderDrawerSx}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}