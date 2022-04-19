import React, { useState } from 'react'

import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

const initialUser = {
  firstName: '',
  lastName: '',
  age: 0,
  visits: 0,
  status: 'single',
  progress: 0,
  subRows: undefined,
}

const AddUserDialog = props => {
  const [user, setUser] = useState(initialUser)
  const { addUserHandler } = props
  const [open, setOpen] = React.useState(false)

  const [switchState, setSwitchState] = React.useState({
    addMultiple: false,
  })

  const handleSwitchChange = name => event => {
    setSwitchState({ ...switchState, [name]: event.target.checked })
  }

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    resetSwitch()
  }

  const handleAdd = event => {
    addUserHandler(user)
    setUser(initialUser)
    switchState.addMultiple ? setOpen(true) : setOpen(false)
  }

  const handleChange = name => ({ target: { value } }) => {
    setUser({ ...user, [name]: value })
  }

  return (
    <div>
      <Tooltip title="Add">
        <IconButton style={{color: 'white'}} aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>All Fields Disabled.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            disabled
            placeholder="Project Name"
            value={""}
            onChange={handleChange('firstName')}
          />
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            disabled
            value={""}
            placeholder="Project Owner"
            onChange={handleChange('lastName')}
          />
          <TextField
            margin="dense"
            label="Division"
            type="text"
            fullWidth
            disabled
            placeholder="Division"
            value={""}
            onChange={handleChange('age')}
          />
          <TextField
            margin="dense"
            label="Budget"
            type="text"
            fullWidth
            disabled
            placeholder="$0.00"
            value={""}
            onChange={handleChange('visits')}
          />
          <TextField
            margin="dense"
            label="Status"
            type="text"
            fullWidth
            disabled
            placeholder="Status"
            value={""}
            onChange={handleChange('status')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button disabled onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

AddUserDialog.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
}

export default AddUserDialog