import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import { Topbar, Sidebar, Footer } from './components';

import { pages } from '../navigation';
import { CarraouselComp, SocialButtons } from '../../views/IndexView/components';
import { Card, Grid, Typography } from '@mui/material';
import MenusBreadcrumbs from '../../views/Aatest/components/Breadcumbs';
import { Header } from '../../views/IndexView/components/Header/Header';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const Main = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          <TopNav colorInvert={colorInvert} />
        </Container>
      </Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Container>
          <Grid container spacing={2}>
            <Header />
            <Grid item xs={12} md={9}>
              {' '}
              {/* style={{ background: 'red' }}*/}
              <MenusBreadcrumbs />
              {children}
            </Grid>
            <Grid item xs={12} md={3}>
              {' '}
              {/*style={{ background: 'blue' }}*/}
              <Card sx={{ boxShadow: 3, padding: 4 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                  // sx={{ color: 'common.red' }}
                >
                  Indice
                </Typography>
                <p>Cotizaciones de pensionados </p>
                <p>Devoluciones </p>
              </Card>
              <Card sx={{ boxShadow: 3, padding: 4 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                  // sx={{ color: 'common.red' }}
                >
                  Noticias
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={2}>
                    <p>imeg</p>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <p>Some text</p>
                  </Grid>
                </Grid>
              </Card>
              <CarraouselComp />
            </Grid>
          </Grid>
        </Container>
        <Divider />
      </main>
      <SocialButtons />

      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
