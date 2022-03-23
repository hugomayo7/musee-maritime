import React from 'react'
import TableBody from '@mui/material/TableBody'
import { Button } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import styles from './BoatDetailTableContent.module.css'



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
                Object.keys(props?.timetables).map(row => (
                  <TableRow
                    key={row}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      component='th'
                      scope='row'
                      className={
                        props?.timetables[row]?.actu ===
                        props?.timetables[row]?.max
                          ? styles.fullrow
                          : ''
                      }
                    >
                      {row}
                    </TableCell>
                    <TableCell
                      align='right'
                      className={
                        props?.timetables[row]?.actu ===
                        props?.timetables[row]?.max
                          ? styles.fullrow
                          : ''
                      }
                    >
                      {props?.timetables[row]?.actu}/
                      {props?.timetables[row]?.max}
                    </TableCell>
                    <TableCell
                      align='right'
                      className={
                        props?.timetables[row]?.actu ===
                        props?.timetables[row]?.max
                          ? styles.fullrow
                          : ''
                      }
                    >
                      {
                          props?.timetables[row]?.actu >=
                          props?.timetables[row]?.max
                            ? ( <Button
                              onClick={e => {
                                props.handleOpen(e, row)
                              }}
                              disabled
                            >
                              Complet
                            </Button>)
                            : (
                              <Button
                              onClick={e => {
                                props.handleOpen(e, row)
                              }}
                              
                            >
                              Réserver
                            </Button>
                            )
                        }
                    </TableCell>
                  </TableRow>
                ))
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
