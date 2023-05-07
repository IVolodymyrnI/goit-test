export const increaseNumber = ({ baseNum = 0, toAdd = 0 }) => {
  const firstArg = Number(baseNum);
  const secondArg = Number(toAdd);

  return firstArg + secondArg;
};
