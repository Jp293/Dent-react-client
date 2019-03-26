import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const DentalForm = ({ dent, handleChange, handleSubmit, cancelPath }) => (
  <form className='dent-log-form' onSubmit={handleSubmit}>
    <h3>Update Log</h3>
    <TextField
      id="pain-level-update"
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
      label="Notes"
      value={dent.notes}
      required
      name="notes"
      placeholder="Any other symptoms?"
      onChange={handleChange}
      variant="outlined"
    />
    <Button variant="outlined" color="primary" type="submit">Update Log</Button>
    <Link to={cancelPath}>
      <Button variant="outlined" color="secondary">Cancel</Button>
    </Link>
  </form>
)
export default DentalForm
