export const truncateString = (str, n) => {
  if (str.length > n) {
    return str.substring(0, n) + '...'
  } else {
    return str
  }
}

export const getById = (arr, id) => {
  return arr.find(item => item.id === id)
}
