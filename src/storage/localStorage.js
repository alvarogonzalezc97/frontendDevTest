const DEAFULT_STORAGE_DURATION = 1000 * 60 * 60 * 24

export function getLocalStorage(key) {
  const item = localStorage.getItem(key)

  if (!item) {
    return null
  }

  const { data, expiry } = JSON.parse(item)

  if (expiry && Date.now() > expiry) {
    localStorage.removeItem(key)
    return null
  }

  return data
}

export function setLocalStorage(key, data, duration = DEAFULT_STORAGE_DURATION) {
  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      expiry: duration ? Date.now() + duration : null,
    })
  )
}
