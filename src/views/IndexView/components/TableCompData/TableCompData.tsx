import * as React from 'react';
import { useEffect, useState } from 'react';
import { Post } from '../../../../types/modelos';
import Api from '../../../../servicios/api';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function TableCompData() {
  const [datos, setDatos] = useState<Post[]>([]);
  const [cargando, setCargando] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datosDelBackend = await Api.getPosts();
        setDatos(datosDelBackend);
      } catch (error) {
        console.error(error.message);
      } finally {
        setCargando(false);
      }
    };
    fetchData().then(() => console.log('done'));
  }, []);
  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        {cargando ? (
          <p>Cargando...</p>
        ) : (
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow hover>
                <TableCell>id</TableCell>
                <TableCell align="center">title</TableCell>
                <TableCell align="center">body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datos
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((dato) => (
                  <TableRow
                    key={dato.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{dato.id}</TableCell>
                    <TableCell align="center">{dato.title}</TableCell>
                    <TableCell align="center">{dato.body}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={datos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
