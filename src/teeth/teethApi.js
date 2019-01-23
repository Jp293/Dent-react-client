import apiUrl from '../apiConfig'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const CreateLog = dent => {
  return fetch(apiUrl + '/dents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      dent: {
        pain_level: dent.pain_level,
        sensitivity: dent.sensitivity,
        how_long: dent.how_long,
        medications: dent.medications,
        notes: dent.notes
      }
    })
  })
}

export const GetLog = dent => {
  return fetch(apiUrl + '/dents', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    // body: JSON.stringify({})
  })
}

export const DestroyLog = dent => {
  // Is the syntax below correct? Double Check
  return fetch(apiUrl + `/dents/${ID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const UpdateLog = dent => {
  return fetch(apiUrl + `/dents/${ID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      dent: {
        pain_level: dent.pain_level,
        sensitivity: dent.sensitivity,
        how_long: dent.how_long,
        medications: dent.medications,
        notes: dent.notes
      }
    })
  })
}
