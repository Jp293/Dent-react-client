import React from 'react'
import { Link } from 'react-router-dom'


const DentalForm = ({ dent, handleChange, handleSubmit, cancelPath }) => (
  <form className='update-form' onSubmit={handleSubmit}>
    <h3>Update Log</h3>
    <label htmlFor="pain_level">Pain Level</label>
    <input
      name="pain_level"
      value={dent.pain_level}
      placeholder="Pain Level"
      onChange={handleChange}
    />
    <label htmlFor="sensitivity">Sensitivity</label>
    <input
      name="sensitivity"
      value={dent.sensitivity}
      placeholder="Sensitivity"
      onChange={handleChange}
    />
    <label htmlFor="how_long">How Long</label>
    <input
      name="how_long"
      value={dent.how_long}
      placeholder="How Long"
      onChange={handleChange}
    />
    <label htmlFor="medications">Medications</label>
    <input
      name="medications"
      value={dent.medications}
      placeholder="Medications"
      onChange={handleChange}
    />
    <label htmlFor="notes">Notes</label>
    <input
      name="notes"
      value={dent.notes}
      placeholder="Notes"
      onChange={handleChange}
    />
    <button type="submit">Update Log</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)
export default DentalForm
