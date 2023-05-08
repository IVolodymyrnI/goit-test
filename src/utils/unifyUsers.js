export function unifyUsers({ key, arrays }) {
  const merged = {};

  arrays.forEach((arr) => {
    arr.forEach((item) => {
      merged[item[key]] = Object.assign({}, merged[item[key]], item);
    });
  });

  return Object.values(merged);
}
