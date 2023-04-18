export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export const formatAmount = (amount: number) => {
  let str = `${amount}`.replace(/[^0-9]/g, '');
  str = str.replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/gm, '$1$2.');

  return `${amount <= -1 ? '-' : ''}${str}`;
};

export const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

export const getPercentage = (
  currentNumber: number,
  totalNumber: number,
  isString?: boolean
) => {
  const percentage = (currentNumber / totalNumber) * 100;

  if (isString) {
    return percentage <= 100 ? `${percentage}%` : '100%';
  }

  return percentage <= 100 ? percentage : 100;
};
