export default async function CustomFetch(url, init_obj) {
  let res = null
  let data = null
  try {
    res = await fetch(url, init_obj)
  } catch {
    throw new Error('Network connection failed')
  }
  try {
    data = await res.json()
  } catch {
    throw new Error('Response body was not json')
  }

  if (res.ok) {
    return data
  } else {
    throw new Error(data.message)
  }
}

// CustomFetch('http://localhost:5000/api/tasks', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     title: 'task12',
//     description: 'This is task9',
//   }),
// })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })
