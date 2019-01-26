import apiUrl from '../apiConfig'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const createLogApi = (dent, user) => {
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
// Might need to check arguments for validation of api functions)
export const getLogApi = (dent, user) => {
  return fetch(apiUrl + '/dents', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const indexLogApi = (user, id) => {
  return fetch(apiUrl + `/dents/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
  })
}


export const destroyLogApi = (user, id) => {
  return fetch(apiUrl + `/dents/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const updateLogApi = (user, dent, id) => {
  return fetch(apiUrl + `/dents/${id}`, {
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
