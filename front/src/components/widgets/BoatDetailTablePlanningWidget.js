import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import { useParams } from 'react-router-dom'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import styles from './BoatDetailTablePlanningWidget.module.css'
import { Button } from '@mui/material'
import PlanningReservationWidget from './PlanningReservationWidget'

export default function BoatDetailTablePlanningWidget (props) {
  const { id } = useParams()
  const [open, setOpen] = React.useState(false)
  const [boatReservation, setBoatReservation] = React.useState()
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpen = e => {
    setOpenModal(true)
    setBoatReservation(id)
  }
  const handleClose = () => setOpenModal(false)

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='simple header'>
          <TableHead>
            <TableRow>
              <TableCell>Jour</TableCell>
              <TableCell align='right'>Places restantes</TableCell>
              <TableCell align='right'>Réserver</TableCell>
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
                      <Button
                        onClick={e => {
                          handleOpen(e)
                        }}
                      >
                        Réserver
                      </Button>
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
        </TableContainer>
      </Collapse>

      <IconButton
        aria-label='expand row'
        size='small'
        onClick={() => setOpen(!open)}
      >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>

      {boatReservation ? (
        <PlanningReservationWidget
          boat={boatReservation}
          state={openModal}
          handleClose={handleClose}
          openModal={openModal}
        />
      ) : (
        <></>
      )}
    </>
  )
}
