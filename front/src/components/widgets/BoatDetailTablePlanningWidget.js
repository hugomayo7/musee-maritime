import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import styles from './BoatDetailTablePlanningWidget.module.css'
import PlanningReservationWidget from './PlanningReservationWidget'
import BoatDetailTableContent from '../BoatDetailTableContent'
import fetchBoatsPromise from '../../api/main/boats'
import { useParams } from 'react-router-dom'

export default function BoatDetailTablePlanningWidget (props) {
  const [open, setOpen] = React.useState(false)
  const { id } = useParams()
  const [boatReservation, setBoatReservation] = React.useState()
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpen = (e, row) => {
    setOpenModal(true)
    setBoatReservation(row)
  }
  const handleClose = () => setOpenModal(false)
  const [timetables, setTimetables] = useState()

  useEffect(() => {
    setTimetables(props.timetables)
  }, [props?.timetables])


  const confirmReservation = async () => {
    // Send reservation to the server
    fetch(`http://localhost:8000${props.timetables[boatReservation].data["@id"]}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/merge-patch+json'
      },
      body: JSON.stringify({
        actual: props?.timetables[boatReservation]?.data.actual + 1
      })
    })
      .then(res => {
        if (res) return res.json()
      })
      .then(async res => {
        // Refresh
        await fetchBoatsPromise().then(e => {
          let boat = e.boatsList.find(e => e.id === id)
          setTimetables(boat.visits.week)
          handleClose()
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

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
          <BoatDetailTableContent
            handleOpen={handleOpen}
            state={props?.state}
            timetables={timetables}
          />
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
          id={boatReservation}
          state={openModal}
          handleClose={handleClose}
          openModal={openModal}
          boats={props?.boatsData}
          confirmReservation={confirmReservation}
        />
      ) : (
        <></>
      )}
    </>
  )
}
