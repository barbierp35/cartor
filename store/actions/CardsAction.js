export const disableCard = slugCard => (
  {
    type: 'DISABLE_CARD',
    payload: slugCard
  }
);

export const nextCard = () => (
  {
    type: 'NEXT_CARD'
  }
);