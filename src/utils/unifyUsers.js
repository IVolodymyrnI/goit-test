export function unifyUsers(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

