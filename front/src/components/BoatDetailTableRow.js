import React from 'react'
import { Button } from '@mui/material'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import styles from "./BoatDetailTableRow.module.css"


export default function BoatDetailTableRow (props) {
  return (
    <>
      {Object.keys(props?.timetables).map(row => (
        <TableRow
          key={row}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell
            component='th'
            scope='row'
            className={
              props?.timetables[row]?.data.actual === props?.timetables[row]?.data.maximumPlaces
                ? styles.fullrow
                : ''
            }
          >
            {row}
          </TableCell>
          <TableCell
            align='right'
            className={
              props?.timetables[row]?.data.actual === props?.timetables[row]?.data.maximumPlaces
                ? styles.fullrow
                : ''
            }
          >
            {props?.timetables[row]?.data.actual}/{props?.timetables[row]?.data.maximumPlaces}
          </TableCell>
          <TableCell
            align='right'
            className={
              props?.timetables[row]?.data.actual === props?.timetables[row]?.data.maximumPlaces
                ? styles.fullrow
                : ''
            }
          >
            {props?.timetables[row]?.data.actual >= props?.timetables[row]?.data.maximumPlaces ? (
              <Button
                onClick={e => {
                  props.handleOpen(e, row)
                }}
                disabled
              >
                Complet
              </Button>
            ) : (
              <Button
                onClick={e => {
                  props.handleOpen(e, row)
                }}
              >
                Réserver
              </Button>
            )}
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
