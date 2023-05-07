export const decreaseNumber = ({ baseNum = 0, toSubtract = 0 }) => {
  const firstArg = Number(baseNum);
  const secondArg = Number(toSubtract);

  return firstArg - secondArg;
};
