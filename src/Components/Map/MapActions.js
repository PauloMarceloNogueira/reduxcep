const closed_click = () => {
  console.log('FECHOU!')
  return {
    type: 'CLOSED_CARD',
    payload: true
  }
};

export { closed_click }