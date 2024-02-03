import React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import { Page } from './components';
import Typography from '@mui/material/Typography';
import Container from '../../components/Container';
import MenusBreadcrumbs from './components/Breadcumbs';
import AccordionComp from './components/Accordion';
import TableComp from './components/TableComp';

const Test = (): JSX.Element => {
  // const theme = useTheme();

  return (
    <Main>
      <MenusBreadcrumbs />
      <Page>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Atención al inversionista
          </Typography>
        </Box>
        <Container>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Preguntas Frecuentes (FAQ)
          </Typography>
          <AccordionComp />
        </Container>
        <Typography variant="h5" gutterBottom fontWeight={700}>
          Administrador de Inversiones y Agentes Comercializadores
        </Typography>
        <Typography my={2} fontWeight={700}>
          Administrador de Inversiones
        </Typography>
        <Typography my={1} fontWeight={700}>
          Asiento registral ante la Superintendencia del Sistema Financiero de
          los adminsitradores del fondo de Ahorro
        </Typography>
        <TableComp />
        <Container></Container>
      </Page>
    </Main>
  );
};

export default Test;
