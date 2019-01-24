import React from 'react'

const DentalForm = ({ handleChange, handleSubmit, dent }) => (
  <form className='update-form' onSubmit={this.handleSubmit}>
    <h3>Update Log</h3>
    <label htmlFor="pain_level">Pain Level</label>
    <input
      required
      type="pain_level"
      name="pain_level"
      value={this.state.dent.pain_level}
      placeholder="Pain Level"
      onChange={this.handleChange}
    />
    <label htmlFor="sensitivity">Sensitivity</label>
    <input
      required
      name="sensitivity"
      value={this.state.dent.sensitivity}
      type="sensitivity"
      placeholder="Sensitivity"
      onChange={this.handleChange}
    />
    <label htmlFor="how_long">How Long</label>
    <input
      required
      name="how_long"
      value={this.state.dent.how_long}
      type="how_long"
      placeholder="How Long"
      onChange={this.handleChange}
    />
    <label htmlFor="medications">Medications</label>
    <input
      required
      name="medications"
      value={this.state.dent.medications}
      type="medications"
      placeholder="Medications"
      onChange={this.handleChange}
    />
    <label htmlFor="notes">Notes</label>
    <input
      required
      name="notes"
      value={this.state.dent.notes}
      type="notes"
      placeholder="Notes"
      onChange={this.handleChange}
    />
    <button type="submit">Update Log</button>
  </form>
)
export default DentalForm
