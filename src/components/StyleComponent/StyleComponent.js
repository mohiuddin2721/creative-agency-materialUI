// SignInSide component sx
export const signInInnerGridSx = {
    backgroundImage: 'url(https://i.ibb.co/sPXVMbC/Frame.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

// SignInSide component sx
export const signInBoxSx = {
    my: 8,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

// SignUpPage component sx
export const signUpGridSx = {
    backgroundImage: 'url(https://i.ibb.co/sPXVMbC/Frame.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'rotateY(180deg)',
};

// SignInSide component sx
export const signUpBoxSx = {
    my: 8,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

// Header component 
export const navItems = [
    {
        field: 'Home',
        to: '/',
    },
    {
        field: 'Service',
        to: '#service',
    },
    {
        field: 'FAQ',
        to: '#faq',
    },
    {
        field: 'Contact',
        to: '#contact',
    },
];

// Header component style
export const HeaderLinkSignInSx = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'primary.main'
};

// Header component style
export const HeaderLink_2_SignInSx = {
    textDecoration: 'none',
    cursor: 'pointer',
};

// Header component style
export const HeaderLink_3_SignInSx = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: '#fff'
};

// Header component style
export const HeaderAppBarSx = {
    background: 'transparent',
    boxShadow: 'none',
    mt: 2,
    position: 'static',
};

// Header component style
export const HeaderIconButtonSx = {
    mr: 2, display: { sm: 'none' }, backgroundColor: 'primary.main',
    '&:hover': {
        backgroundColor: 'primary.main'
    }
};

// Header component style
const drawerWidth = 240;
export const HeaderDrawerSx = {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
};

