'use server';

let count = 0;

export const incrementCount = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  count++;
  return count;
};
