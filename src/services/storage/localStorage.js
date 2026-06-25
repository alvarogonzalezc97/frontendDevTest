import { STORAGE_DURATION } from '../config/api.config'

export function getLocalStorage(key) {
  const item = localStorage.getItem(key)
  
  if (!item){ 
    return null
  }
  
  const { data, expiry } = JSON.parse(item)

  if (Date.now() > expiry) {
    localStorage.removeItem(key)
    return null
  }

  return data
}

export function setLocalStorage(key, data) {
  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      expiry: Date.now() + STORAGE_DURATION
    })
  )
}