import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import TableComp from '../Aatest/components/TableComp/TableComp';
import TableCompData from './components/TableCompData';

const pages = [
  {
    id: 'general',
    href: '/account-general',
    title: 'Fondo provisional voluntario',
  },
  {
    id: 'security',
    href: '/account-security',
    title: 'Proyecta Life',
  },
  {
    id: 'notifications',
    href: '/account-notifications',
    title: 'Proyecta 5PLus',
  },
];

const IndexView = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Box
          sx={{
            backgroundImage: `linear-gradient(to bottom, ${alpha(
              theme.palette.background.paper,
              0,
            )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
            backgroundRepeat: 'repeat-x',
            position: 'relative',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Card>
                <List
                  disablePadding
                  sx={{
                    display: { xs: 'inline-flex', md: 'flex' },
                    flexDirection: { xs: 'row', md: 'column' },
                    overflow: 'auto',
                    flexWrap: 'nowrap',
                    width: '100%',
                    paddingY: { xs: 3, md: 4 },
                    paddingX: { xs: 4, md: 0 },
                  }}
                >
                  {pages.map((item) => (
                    <ListItem
                      key={item.id}
                      component={'a'}
                      href={item.href}
                      disableGutters
                      sx={{
                        marginRight: { xs: 2, md: 0 },
                        flex: 0,
                        paddingX: { xs: 0, md: 3 },
                        borderLeft: {
                          xs: 'none',
                          md: '2px solid transparent',
                        },
                        borderLeftColor: {
                          md:
                            activeLink === item.href
                              ? theme.palette.primary.main
                              : 'transparent',
                        },
                      }}
                    >
                      <Typography
                        variant='subtitle1'
                        noWrap
                        color={
                          activeLink === item.href
                            ? 'text.primary'
                            : 'text.secondary'
                        }
                      >
                        {item.title}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ paddingY: 2, paddingX: 1 }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      border: 'solid 1px #ccc',
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                    }}
                  >
                    <Typography fontWeight={700}>Proyecto 5 Plus</Typography>
                    <Typography>
                      Dirigido a personas con perfil de riesgo
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      border: 'solid 1px #ccc',
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                    }}
                  >
                    <Typography fontWeight={700}>Proyecto Lite</Typography>
                    <Typography>
                      Dirigido a personas con perfil de riesgo conservador
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ marginTop: 5, marginBottom: 5 }}>
                  Los fondos de ahorros previsional que son propiedad exclusiva
                  de los participanes
                </Typography>
                <Box>
                  <Typography variant='h6' gutterBottom fontWeight={700}>
                    Atención al inversionista
                  </Typography>
                  <Typography>
                    Procedimientos relativos a quejas y reclamos de los fondos
                    APV
                  </Typography>

                  <ol>
                    <li>Los canales de atención autorizados</li>
                    <li>Los canales de direccionan las quejas recibidas</li>
                    <li>Área responsable investiga y atiende la queja</li>
                    <li>
                      El canal de servicio por el canal que se haya recibido
                      inconformidad del cliente
                    </li>
                  </ol>
                </Box>
                <Box>
                  <Typography variant='h6' gutterBottom fontWeight={700}>
                    Preguntas Frecuentes (FAQ)
                  </Typography>
                  {/*<AccordionComp />*/}
                  <Typography
                    variant='h5'
                    fontWeight={700}
                    sx={{ marginTop: 5 }}
                  >
                    Administrador de Inversiones y Agentes Comercializadores
                  </Typography>
                  <Typography my={2} fontWeight={700}>
                    Administrador de Inversiones
                  </Typography>
                  <Typography my={1} fontWeight={700}>
                    Asiento registral ante la Superintendencia del Sistema
                    Financiero de los adminsitradores del fondo de Ahorro
                  </Typography>
                  <TableComp />
                </Box>

                <br />
                <Box>
                  <TableCompData />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Main>
    </Box>
  );
};

export default IndexView;
