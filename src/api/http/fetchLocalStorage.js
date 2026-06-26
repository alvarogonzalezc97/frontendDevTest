import { getLocalStorage, setLocalStorage } from '../../storage/localStorage'

const FETCH_STORAGE_DURATION = 1000 * 60 * 60

export async function fetchLocalStorage(key, fetchApi) {
  const storageItems = getLocalStorage(key)

  if (storageItems) {
    return storageItems
  }

  const data = await fetchApi()

  setLocalStorage(key, data, FETCH_STORAGE_DURATION)

  return data
}
