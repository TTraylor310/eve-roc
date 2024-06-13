async function fetchEveOnlineStatus() {
  try {
    const res = await fetch('https://esi.evetech.net/latest/status/?datasource=tranquility')
    if (!res.ok) {
      throw new Error('Error fetching data 222')
    }
    return res.json()
    console.log(res.json())
  } catch (error) {
    console.log('Error checking Status of Eve Online API, ', error)
    return null
  }
}

export {fetchEveOnlineStatus}