import React from 'react'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import styles from './BoatDetailTableContent.module.css'
import BoatDetailTableRow from './BoatDetailTableRow'



export default function BoatDetailTableContent(props) {
  return (
    <Table aria-label='simple table'>
            <TableBody>
              {props?.state?.id === -1 ? (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component='th'
                    scope='row'
                    className={styles.loadingrow}
                  >
                    Chargement...
                  </TableCell>
                  <TableCell
                    align='right'
                    className={styles.loadingrow}
                  ></TableCell>
                  <TableCell
                    align='right'
                    className={styles.loadingrow}
                  ></TableCell>
                </TableRow>
              ) : props?.timetables ? (
                <BoatDetailTableRow timetables={props?.timetables} handleOpen={props?.handleOpen}></BoatDetailTableRow>
              ) : (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    Aucune visite
                  </TableCell>
                  <TableCell align='right'></TableCell>
                  <TableCell align='right'></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
  )
}
