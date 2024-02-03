import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from 'components/Container';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box } from '@mui/material';
// const pages = [
//   {
//     id: 'general',
//     href: '/account-general',
//     title: 'Home',
//   },
//   {
//     id: 'security',
//     href: '/account-security',
//     title: 'Ahorro e inversiones',
//   },
//   {
//     id: 'notifications',
//     href: '/account-notifications',
//     title: 'Ahorro voluntario',
//   },
//   {
//     id: 'notifications',
//     href: '/account-notifications',
//     title: 'Conoce nuestros fondos',
//   },
// ];

const MenusBreadcrumbs = (): JSX.Element => {
  return (
    <Box>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        style={{ fontSize: 'medium' }}
      >
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Ahorro e inversiones
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Ahorro voluntario
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          Conoce nuestros fondos
        </Typography>
      </Breadcrumbs>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight={700}
        sx={{ display: 'flex', alignItems: 'center' }}
        color="red"
      >
        Conoce nuestros fondos
      </Typography>
    </Box>
  );
};

export default MenusBreadcrumbs;
