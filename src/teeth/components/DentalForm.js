import React from 'react'
import { withRouter } from 'react-router-dom'

const DentalForm = ({ handleChange, handleSubmit, dents }) => (
  <form className='update-form' onSubmit={this.handleSubmit}>
    <h3>Update Log</h3>
    <label htmlFor="pain_level">Pain Level</label>
    <input
      required
      type="pain_level"
      name="pain_level"
      value={dents.pain_level}
      placeholder="Pain Level"
      onChange={this.handleChange}
    />
    <label htmlFor="sensitivity">Sensitivity</label>
    <input
      required
      name="sensitivity"
      value={dents.sensitivity}
      type="sensitivity"
      placeholder="Sensitivity"
      onChange={this.handleChange}
    />
    <label htmlFor="how_long">How Long</label>
    <input
      required
      name="how_long"
      value={dents.how_long}
      type="how_long"
      placeholder="How Long"
      onChange={this.handleChange}
    />
    <label htmlFor="medications">Medications</label>
    <input
      required
      name="medications"
      value={dents.medications}
      type="medications"
      placeholder="Medications"
      onChange={this.handleChange}
    />
    <label htmlFor="notes">Notes</label>
    <input
      required
      name="notes"
      value={dents.notes}
      type="notes"
      placeholder="Notes"
      onChange={this.handleChange}
    />
    <button type="submit">Update Log</button>
    <button onClick={handleChange}>Cancel</button>
  </form>
)
export default withRouter(DentalForm)
