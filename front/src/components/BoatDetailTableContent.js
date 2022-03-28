import React, { useEffect, useState } from 'react'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import styles from './BoatDetailTableContent.module.css'
import BoatDetailTableRow from './BoatDetailTableRow'

export default function BoatDetailTableContent (props) {
  const [timetables, setTimetables] = useState(
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component='th' scope='row'>
        Aucune visite
      </TableCell>
      <TableCell align='right'></TableCell>
      <TableCell align='right'></TableCell>
    </TableRow>
  )

  useEffect(() => {
    if (props?.timetables) {
      setTimetables(
        <BoatDetailTableRow
          timetables={props?.timetables}
          handleOpen={props?.handleOpen}
        ></BoatDetailTableRow>
      )
    }
  }, [props])

  return (
    <Table aria-label='simple table'>
      <TableBody>
        {props?.state?.id === -1 ? (
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component='th' scope='row' className={styles.loadingrow}>
              Chargement...
            </TableCell>
            <TableCell align='right' className={styles.loadingrow}></TableCell>
            <TableCell align='right' className={styles.loadingrow}></TableCell>
          </TableRow>
        ) : (
          <>
          {timetables}
          </>
        )}
      </TableBody>
    </Table>
  )
}
