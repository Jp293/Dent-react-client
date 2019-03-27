import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Dentlogs.scss'

const DentalForm = ({ dent, handleChange, handleSubmit, cancelPath }) => (
  <form className='dent-log-form' onSubmit={handleSubmit}>
    <h3>Update Log</h3>
    <TextField
      id="pain-level-update"
      className="textField"
      label="Pain Level"
      required
      name="pain_level"
      value={dent.pain_level}
      type="number"
      min="0"
      max="10"
      placeholder="Scale 0 - 10"
      onChange={handleChange}
      variant="outlined"
    />
    <TextField
      id="sensitivity-update"
      className="textField"
      label="Sensitivity"
      required
      value={dent.sensitivity}
      name="sensitivity"
      type="number"
      min="0"
      max="10"
      placeholder="Scale 0 - 10 "
      onChange={handleChange}
      variant="outlined"
    />
    <TextField
      id="how-long-update"
      className="textField"
      label="How Long"
      required
      value={dent.how_long}
      name="how_long"
      placeholder="ex. 2 days/ 3 weeks/ 1 month"
      onChange={handleChange}
      variant="outlined"
    />
    <TextField
      id="medications-update"
      className="textField"
      label htmlFor="Medications"
      required
      value={dent.medications}
      name="medications"
      placeholder="Ibuprofren/Aspirin/etc?"
      onChange={handleChange}
      variant="outlined"
    />
    <TextField
      id="notes-update"
      className="textField"
      label="Notes"
      value={dent.notes}
      required
      name="notes"
      placeholder="Any other symptoms?"
      onChange={handleChange}
      variant="outlined"
    />
    <div>
      <Button className="update-button" variant="contained" color="primary" type="submit">Update Log</Button>
      <Link to={cancelPath}>
        <Button variant="contained" color="secondary">Cancel</Button>
      </Link>
    </div>
  </form>
)
export default DentalForm
