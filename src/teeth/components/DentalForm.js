import React from 'react'


const DentalForm = ({ handleChange, handleSubmit, dent }) => (
  <form className='update-form' onSubmit={handleSubmit}>
    <h3>Update Log</h3>
    <label htmlFor="pain_level">Pain Level</label>
    <input
      required
      name="pain_level"
      value={dent.pain_level}
      placeholder="Pain Level"
      onChange={handleChange}
    />
    <label htmlFor="sensitivity">Sensitivity</label>
    <input
      required
      name="sensitivity"
      value={dent.sensitivity}
      placeholder="Sensitivity"
      onChange={handleChange}
    />
    <label htmlFor="how_long">How Long</label>
    <input
      required
      name="how_long"
      value={dent.how_long}
      placeholder="How Long"
      onChange={handleChange}
    />
    <label htmlFor="medications">Medications</label>
    <input
      required
      name="medications"
      value={dent.medications}
      placeholder="Medications"
      onChange={handleChange}
    />
    <label htmlFor="notes">Notes</label>
    <input
      required
      name="notes"
      value={dent.notes}
      placeholder="Notes"
      onChange={handleChange}
    />
    <button type="submit">Update Log</button>
    <button onClick={handleChange}>Cancel</button>
  </form>
)
export default DentalForm
