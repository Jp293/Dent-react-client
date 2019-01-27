import React from 'react'
import { Link } from 'react-router-dom'


const DentalForm = ({ dent, handleChange, handleSubmit, cancelPath }) => (
  <form className='dent-log-form' onSubmit={handleSubmit}>
    <h3>Update Log</h3>
    <label htmlFor="pain_level">Pain Level: </label>
    <input
      required
      name="pain_level"
      type="number"
      min="0"
      max="10"
      value={dent.pain_level}
      placeholder="Scale 0 - 10"
      onChange={handleChange}
    />
    <label htmlFor="sensitivity">Sensitivity: </label>
    <input
      required
      name="sensitivity"
      type="number"
      min="0"
      max="10"
      value={dent.sensitivity}
      placeholder="Scale 0 - 10 "
      onChange={handleChange}
    />
    <label htmlFor="how_long">How Long: </label>
    <input
      required
      name="how_long"
      value={dent.how_long}
      placeholder="ex. 2 days/3 weeks/1 month"
      onChange={handleChange}
    />
    <label htmlFor="medications">Medications: </label>
    <input
      required
      name="medications"
      value={dent.medications}
      placeholder="Ibuprofren/Aspirin/etc?"
      onChange={handleChange}
    />
    <label htmlFor="notes">Notes: </label>
    <input
      required
      name="notes"
      value={dent.notes}
      placeholder="Any other symptoms?"
      onChange={handleChange}
    />
    <button type="submit">Update Log</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)
export default DentalForm
