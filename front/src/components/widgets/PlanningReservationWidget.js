import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import styles from './PlanningReservationWidget.module.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '400px',
  bgcolor: 'background.paper',
  border: '1px solid #38679D',
  borderRadius: '5px',
  p: 4
}

const styleTitle = {
  fontSize: '18px',
  mb: 2
}

export default function PlanningReservationWidget (props) {
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={props.openModal}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.openModal}>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              sx={styleTitle}
              variant='h6'
              component='h2'
            >
              Confirmez vous votre réservation pour <span className={styles.bolder}>{props?.id}</span> ?
            </Typography>
            <hr />
            <Stack
              direction='row'
              spacing={2}
              sx={{ mt: 2, justifyContent: 'flex-end' }}
            >
              <Button variant='outlined' color='error' onClick={props.handleClose}>
                Annuler
              </Button>
              <Button variant='contained' color='success' >
                Confirmer
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
