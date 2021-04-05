const INITIAL_STATE = {
  cards: {
    '2C': {
      name: '2 de trèfle',
      src: require('../../assets/cards/2C.png'),
      active: true
    },
    '2D': {
      name: '2 de carreau',
      src: require('../../assets/cards/2D.png'),
      active: true
    },
    '2H': {
      name: '2 de coeur',
      src: require('../../assets/cards/2H.png'),
      active: true
    },
    '2S': {
      name: '2 de pique',
      src: require('../../assets/cards/2S.png'),
      active: true
    },
    '3C': {
      name: '3 de trèfle',
      src: require('../../assets/cards/3C.png'),
      active: true
    },
    '3D': {
      name: '3 de carreau',
      src: require('../../assets/cards/3D.png'),
      active: true
    },
    '3H': {
      name: '3 de coeur',
      src: require('../../assets/cards/3H.png'),
      active: true
    },
    '3S': {
      name: '3 de pique',
      src: require('../../assets/cards/3S.png'),
      active: true
    },
    '4C': {
      name: '4 de trèfle',
      src: require('../../assets/cards/4C.png'),
      active: true
    },
    '4D': {
      name: '4 de carreau',
      src: require('../../assets/cards/4D.png'),
      active: true
    },
    '4H': {
      name: '4 de coeur',
      src: require('../../assets/cards/4H.png'),
      active: true
    },
    '4S': {
      name: '4 de pique',
      src: require('../../assets/cards/4S.png'),
      active: true
    },
    '5C': {
      name: '5 de trèfle',
      src: require('../../assets/cards/5C.png'),
      active: true
    },
    '5D': {
      name: '5 de carreau',
      src: require('../../assets/cards/5D.png'),
      active: true
    },
    '5H': {
      name: '5 de coeur',
      src: require('../../assets/cards/5H.png'),
      active: true
    },
    '5S': {
      name: '5 de pique',
      src: require('../../assets/cards/5S.png'),
      active: true
    },
    '6C': {
      name: '6 de trèfle',
      src: require('../../assets/cards/6C.png'),
      active: true
    },
    '6D': {
      name: '6 de carreau',
      src: require('../../assets/cards/6D.png'),
      active: true
    },
    '6H': {
      name: '6 de coeur',
      src: require('../../assets/cards/6H.png'),
      active: true
    },
    '6S': {
      name: '6 de pique',
      src: require('../../assets/cards/6S.png'),
      active: true
    },
    '7C': {
      name: '7 de trèfle',
      src: require('../../assets/cards/7C.png'),
      active: true
    },
    '7D': {
      name: '7 de carreau',
      src: require('../../assets/cards/7D.png'),
      active: true
    },
    '7H': {
      name: '7 de coeur',
      src: require('../../assets/cards/7H.png'),
      active: true
    },
    '7S': {
      name: '7 de pique',
      src: require('../../assets/cards/7S.png'),
      active: true
    },
    '8C': {
      name: '8 de trèfle',
      src: require('../../assets/cards/8C.png'),
      active: true
    },
    '8D': {
      name: '8 de carreau',
      src: require('../../assets/cards/8D.png'),
      active: true
    },
    '8H': {
      name: '8 de coeur',
      src: require('../../assets/cards/8H.png'),
      active: true
    },
    '8S': {
      name: '8 de pique',
      src: require('../../assets/cards/8S.png'),
      active: true
    },
    '9C': {
      name: '9 de trèfle',
      src: require('../../assets/cards/9C.png'),
      active: true
    },
    '9D': {
      name: '9 de carreau',
      src: require('../../assets/cards/9D.png'),
      active: true
    },
    '9H': {
      name: '9 de coeur',
      src: require('../../assets/cards/9H.png'),
      active: true
    },
    '9S': {
      name: '9 de pique',
      src: require('../../assets/cards/9S.png'),
      active: true
    },
    '10C': {
      name: '10 de trèfle',
      src: require('../../assets/cards/10C.png'),
      active: true
    },
    '10D': {
      name: '10 de carreau',
      src: require('../../assets/cards/10D.png'),
      active: true
    },
    '10H': {
      name: '10 de coeur',
      src: require('../../assets/cards/10H.png'),
      active: true
    },
    '10S': {
      name: '10 de pique',
      src: require('../../assets/cards/10S.png'),
      active: true
    },
    'JC': {
      name: 'Valet de trèfle',
      src: require('../../assets/cards/JC.png'),
      active: true
    },
    'JD': {
      name: 'Valet de carreau',
      src: require('../../assets/cards/JD.png'),
      active: true
    },
    'JH': {
      name: 'Valet de coeur',
      src: require('../../assets/cards/JH.png'),
      active: true
    },
    'JS': {
      name: 'Valet de pique',
      src: require('../../assets/cards/JS.png'),
      active: true
    },
    'QC': {
      name: 'Dame de trèfle',
      src: require('../../assets/cards/QC.png'),
      active: true
    },
    'QD': {
      name: 'Dame de carreau',
      src: require('../../assets/cards/QD.png'),
      active: true
    },
    'QH': {
      name: 'Dame de coeur',
      src: require('../../assets/cards/QH.png'),
      active: true
    },
    'QS': {
      name: 'Dame de pique',
      src: require('../../assets/cards/QS.png'),
      active: true
    },
    'KC': {
      name: 'Roi de trèfle',
      src: require('../../assets/cards/KC.png'),
      active: true
    },
    'KD': {
      name: 'Roi de carreau',
      src: require('../../assets/cards/KD.png'),
      active: true
    },
    'KH': {
      name: 'Roi de coeur',
      src: require('../../assets/cards/KH.png'),
      active: true
    },
    'KS': {
      name: 'Roi de pique',
      src: require('../../assets/cards/KS.png'),
      active: true
    },
  },
  showedCard: null
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MIX_CARDS':
      newState = {...state}

      var currentIndex = newState.cards.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        temporaryValue = array[currentIndex];
        newState.cards[currentIndex] = newState.cards[randomIndex];
        newState.cards[randomIndex] = temporaryValue;
      }

      return newState;

    case 'DISABLE_CARD':
      newState = {...state}

      if (typeof newState.cards[action.payload] !== 'undefined') {
        newState.cards[action.payload]['active'] = false
      }

      return newState;

    case 'NEXT_CARD':
      newState = {...state}

      for (let slug in newState.cards){
        if (newState.cards[slug].active == true) {
          newState.showedCard = slug;
          return newState
        }
      }

    default:
      return state
  }
};

export default cardsReducer;