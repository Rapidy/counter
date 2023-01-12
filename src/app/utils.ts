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
