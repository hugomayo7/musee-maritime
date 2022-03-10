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
import styles from './BoatDetailTableCharacWidget.module.css'

export default function BoatDetailTableCharacWidget (props) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={styles.container}>
      <TableContainer component={Paper} className={styles.nobrdr}>
        <Table aria-label='simple header'>
          {/* <TableHead>
            <TableRow>
              <TableCell>Catégorie</TableCell>
              <TableCell align='right'>Wow</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {props?.characteristics ? (
              <>
                {Object.keys(props?.characteristics).map((row, i) =>
                  i < 4 ? (
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                        '&:nth-of-type(odd)': {
                          backgroundColor: '#DADADA'
                        },
                        '&': {
                          backgroundColor: '#9EC0E7'
                        }
                      }}
                    >
                      <TableCell
                        component='th'
                        scope='row'
                        sx={{ width: '50%' }}
                      >
                        {row}
                      </TableCell>
                      <TableCell align='right'>
                        {props?.characteristics[row]}
                      </TableCell>
                    </TableRow>
                  ) : (
                    <></>
                  )
                )}
              </>
            ) : (
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
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Collapse in={open} timeout='auto' className={styles.tbody} unmountOnExit>
        <TableContainer component={Paper} className={styles.nobrdr}>
          <Table aria-label='simple table'>
            <TableBody>
              {props?.characteristics ? (
                Object.keys(props?.characteristics).map((row, i) =>
                  i >= 4 ? (
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                        '&:nth-of-type(odd)': {
                          backgroundColor: '#DADADA'
                        },
                        '&': {
                          backgroundColor: '#9EC0E7'
                        }
                      }}
                    >
                      <TableCell
                        component='th'
                        scope='row'
                        sx={{ width: '50%' }}
                      >
                        {row}
                      </TableCell>
                      <TableCell align='right'>
                        {props?.characteristics[row]}
                      </TableCell>
                    </TableRow>
                  ) : (
                    <></>
                  )
                )
              ) : (
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
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
      <div className={`${styles.mainicon} ${open ? styles.mainicondes : ''}`}>
        <IconButton
          aria-label='expand row'
          size='small'  
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </div>
    </div>
  )
}
