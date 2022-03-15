import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import styles from './BoatDetailTablePlanningWidget.module.css'

export default function BoatDetailTablePlanningWidget (props) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='simple header'>
          <TableHead>
            <TableRow>
              <TableCell>Jour</TableCell>
              <TableCell align='right'>Places restantes</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Collapse in={open} timeout='auto' className={styles.tbody} unmountOnExit>
        <TableContainer component={Paper}>
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
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>

      <IconButton
        aria-label='expand row'
        size='small'
        onClick={() => setOpen(!open)}
      >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </>
  )
}
