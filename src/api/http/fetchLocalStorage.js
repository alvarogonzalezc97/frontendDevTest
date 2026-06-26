import { getLocalStorage, setLocalStorage } from '../../storage/localStorage'

export async function fetchLocalStorage(key, fetchApi) {
  const storageItems = getLocalStorage(key)

  if (storageItems) {
    return storageItems
  }

  const data = await fetchApi()

  setLocalStorage(key, data)

  return data
}
