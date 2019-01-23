import apiUrl from '../apiConfig'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const CreateLogApi = dent => {
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

export const GetLogApi = dent => {
  return fetch(apiUrl + '/dents', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    // body: JSON.stringify({})
  })
}

export const DestroyLogApi = dent => {
  // Is the syntax below correct? Double Check
  return fetch(apiUrl + `/dents/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const UpdateLogApi = dent => {
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
