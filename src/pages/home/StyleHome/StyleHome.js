import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Branding component style
export const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',
    padding: theme.spacing(4),
    margin: '4rem 0',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
}));

// Brands component style
export const BrandsWrapper = styled(Box)(({ theme }) => ({
    cursor: 'pointer',
    marginBottom: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > img': {
        height: '60px'
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& > img': {
            marginBottom: '1rem',
        }
    }
}));

// OurWorks component style
export const ourWorkGridItemSx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

// OurWorks component style
export const ourWorkTabSx = {
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    '& .Mui-selected': {
        color: 'primary.green',
        fontWeight: 'bold',
    },
    '& .MuiButtonBase-root': {
        textTransform: 'capitalize',
    }
};

// ourSpecialty component style
export const ourSpecialtySecondSectionTitleSx = {
    fontSize: {
        xs: '20px',
        sm: '20px',
        md: '34px',
    },
};

// ourSpecialty component style
export const ourSpecialtyTypographySx = {
    fontSize: {
        xs: '16px',
        sm: '16px',
        md: '20px',
    },
};

// ourSpecialty component style
export const ourSpecialtyButtonSx = {
    bgcolor: 'primary.green',
    mt: 2,
    px: 0,
    display: 'flex',
    mx: 'auto',
    textTransform: 'capitalize',
    width: {
        xs: '50%',
        sm: '50%',
        md: '30%',
        lg: '15%',
    },
    fontSize: {
        xs: '15px',
        sm: '15px',
    },
}

// OurTeam component style
export const ourTeamSecondSectionTitleSx = {
    fontSize: {
        xs: '25px',
        sm: '25px',
        md: '34px',
    },
};

// OurTeam component style
export const ourTeamInnerBoxSx = {
    width: {
        xs: 'auto',
        sm: 'auto',
        md: 500,
        lg: 800,
    },
    height: {
        xs: 270,
        sm: 270,
        md: 350,
        lg: 450,
    },
    overflowY: 'scroll',
    overflowX: 'hidden',
    mx: 'auto',
};

// Faq component style
export const faqMainBoxSx = {
    mb: 8,
    display: 'flex',
    flexDirection: 'column',
    columnGap: 2,
};

// Faq component style
export const faqInnerBoxSx = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    mt: 5,
};

// Contact component sx style
export const contactTypographySx = {
    fontSize: '15px',
    textAlign: 'center',
};

// Contact component sx style
export const contactGridSx = {
    minHeight: '70vh',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 5,
    mb: 8,
    mx: 'auto',
};

// Contact component sx style
export const contactTextFieldSx = {
    TextFieldSx_1: {
        width: '90%',
        backgroundColor: '#ffff',
    },
    TextFieldSx_2: {
        width: '90%',
        mt: 2,
        backgroundColor: '#ffff',
    },
    TextFieldSx_3: {
        width: '90%',
        my: 2,
        backgroundColor: '#ffff',
        border: 'none',
        p: 2
    },
}