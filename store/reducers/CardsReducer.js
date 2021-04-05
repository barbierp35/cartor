const INITIAL_STATE = {
  cards: {
    '2C': {
      name: '2 de trèfle',
      rule: ' donne 2 gorgées',
      src: require('../../assets/cards/2C.png'),
      active: true
    },
    '2D': {
      name: '2 de carreau',
      rule: ' boit 2 gorgées',
      src: require('../../assets/cards/2D.png'),
      active: true
    },
    '2H': {
      name: '2 de coeur',
      rule: ' boit 2 gorgées',
      src: require('../../assets/cards/2H.png'),
      active: true
    },
    '2S': {
      name: '2 de pique',
      rule: ' donne 2 gorgées',
      src: require('../../assets/cards/2S.png'),
      active: true
    },
    '3C': {
      name: '3 de trèfle',
      rule: ' donne 3 gorgées',
      src: require('../../assets/cards/3C.png'),
      active: true
    },
    '3D': {
      name: '3 de carreau',
      rule: ' boit 3 gorgées',
      src: require('../../assets/cards/3D.png'),
      active: true
    },
    '3H': {
      name: '3 de coeur',
      rule: ' boit 3 gorgées',
      src: require('../../assets/cards/3H.png'),
      active: true
    },
    '3S': {
      name: '3 de pique',
      rule: ' donne 3 gorgées',
      src: require('../../assets/cards/3S.png'),
      active: true
    },
    '4C': {
      name: '4 de trèfle',
      rule: ' donne 4 gorgées',
      src: require('../../assets/cards/4C.png'),
      active: true
    },
    '4D': {
      name: '4 de carreau',
      rule: ' boit 4 gorgées',
      src: require('../../assets/cards/4D.png'),
      active: true
    },
    '4H': {
      name: '4 de coeur',
      rule: ' boit 4 gorgées',
      src: require('../../assets/cards/4H.png'),
      active: true
    },
    '4S': {
      name: '4 de pique',
      rule: ' donne 4 gorgées',
      src: require('../../assets/cards/4S.png'),
      active: true
    },
    '5C': {
      name: '5 de trèfle',
      rule: ' donne 5 gorgées',
      src: require('../../assets/cards/5C.png'),
      active: true
    },
    '5D': {
      name: '5 de carreau',
      rule: ' boit 5 gorgées',
      src: require('../../assets/cards/5D.png'),
      active: true
    },
    '5H': {
      name: '5 de coeur',
      rule: ' boit 5 gorgées',
      src: require('../../assets/cards/5H.png'),
      active: true
    },
    '5S': {
      name: '5 de pique',
      rule: ' donne 5 gorgées',
      src: require('../../assets/cards/5S.png'),
      active: true
    },
    '6C': {
      name: '6 de trèfle',
      rule: ' dit quelque chose qu\'il a déjà fait. Ceux qui ne l\'ont jamais fait boivent une gorgée',
      src: require('../../assets/cards/6C.png'),
      active: true
    },
    '6D': {
      name: '6 de carreau',
      rule: ' dit quelque chose qu\'il a déjà fait. Ceux qui ne l\'ont jamais fait boivent une gorgée',
      src: require('../../assets/cards/6D.png'),
      active: true
    },
    '6H': {
      name: '6 de coeur',
      rule: ' dit quelque chose qu\'il a déjà fait. Ceux qui ne l\'ont jamais fait boivent une gorgée',
      src: require('../../assets/cards/6H.png'),
      active: true
    },
    '6S': {
      name: '6 de pique',
      rule: ' dit quelque chose qu\'il a déjà fait. Ceux qui ne l\'ont jamais fait boivent une gorgée',
      src: require('../../assets/cards/6S.png'),
      active: true
    },
    '7C': {
      name: '7 de trèfle',
      rule: ' dit quelque chose qu\'il n\'a jamais fait. Ceux qui l\'ont déjà fait boivent une gorgée',
      src: require('../../assets/cards/7C.png'),
      active: true
    },
    '7D': {
      name: '7 de carreau',
      rule: ' dit quelque chose qu\'il n\'a jamais fait. Ceux qui l\'ont déjà fait boivent une gorgée',
      src: require('../../assets/cards/7D.png'),
      active: true
    },
    '7H': {
      name: '7 de coeur',
      rule: ' dit quelque chose qu\'il n\'a jamais fait. Ceux qui l\'ont déjà fait boivent une gorgée',
      src: require('../../assets/cards/7H.png'),
      active: true
    },
    '7S': {
      name: '7 de pique',
      rule: ' dit quelque chose qu\'il n\'a jamais fait. Ceux qui l\'ont déjà fait boivent une gorgée',
      src: require('../../assets/cards/7S.png'),
      active: true
    },
    '8C': {
      name: '8 de trèfle',
      rule: ' dit un mot. Le joueur à sa gauche doit en trouver un autre qui rime. Un mot déjà dit ou aucun mot trouvé égal une gorgée',
      src: require('../../assets/cards/8C.png'),
      active: true
    },
    '8D': {
      name: '8 de carreau',
      rule: ' dit un mot. Le joueur à sa gauche doit en trouver un autre qui rime. Un mot déjà dit ou aucun mot trouvé égal une gorgée',
      src: require('../../assets/cards/8D.png'),
      active: true
    },
    '8H': {
      name: '8 de coeur',
      rule: ' dit un mot. Le joueur à sa gauche doit en trouver un autre qui rime. Un mot déjà dit ou aucun mot trouvé égal une gorgée',
      src: require('../../assets/cards/8H.png'),
      active: true
    },
    '8S': {
      name: '8 de pique',
      rule: ' dit un mot. Le joueur à sa gauche doit en trouver un autre qui rime. Un mot déjà dit ou aucun mot trouvé égal une gorgée',
      src: require('../../assets/cards/8S.png'),
      active: true
    },
    '9C': {
      name: '9 de trèfle',
      rule: ' dit. Dans ma valise j\'ai suivi d\'un mot. Le joueur à sa gauche répète en ajoutant un mot. Celui qui ne trouve pas boit une gorgée',
      src: require('../../assets/cards/9C.png'),
      active: true
    },
    '9D': {
      name: '9 de carreau',
      rule: ' dit. Dans ma valise j\'ai suivi d\'un mot. Le joueur à sa gauche répète en ajoutant un mot. Celui qui ne trouve pas boit une gorgée',
      src: require('../../assets/cards/9D.png'),
      active: true
    },
    '9H': {
      name: '9 de coeur',
      rule: ' dit. Dans ma valise j\'ai suivi d\'un mot. Le joueur à sa gauche répète en ajoutant un mot. Celui qui ne trouve pas boit une gorgée',
      src: require('../../assets/cards/9H.png'),
      active: true
    },
    '9S': {
      name: '9 de pique',
      rule: ' dit. Dans ma valise j\'ai suivi d\'un mot. Le joueur à sa gauche répète en ajoutant un mot. Celui qui ne trouve pas boit une gorgée',
      src: require('../../assets/cards/9S.png'),
      active: true
    },
    '10C': {
      name: '10 de trèfle',
      rule: ' crée ou supprime une alliance. Un joueur en alliance doit boire si son coéquipier boit',
      src: require('../../assets/cards/10C.png'),
      active: true
    },
    '10D': {
      name: '10 de carreau',
      rule: ' crée ou supprime une alliance. Un joueur en alliance doit boire si son coéquipier boit',
      src: require('../../assets/cards/10D.png'),
      active: true
    },
    '10H': {
      name: '10 de coeur',
      rule: ' crée ou supprime une alliance. Un joueur en alliance doit boire si son coéquipier boit',
      src: require('../../assets/cards/10H.png'),
      active: true
    },
    '10S': {
      name: '10 de pique',
      rule: ' crée ou supprime une alliance. Un joueur en alliance doit boire si son coéquipier boit',
      src: require('../../assets/cards/10S.png'),
      active: true
    },
    'JC': {
      name: 'Valet de trèfle',
      rule: ' a le pouvoir du doigt. Lorsqu\'il met son doigt sur son menton, le dernier a le faire doit boire une gorgée',
      src: require('../../assets/cards/JC.png'),
      active: true
    },
    'JD': {
      name: 'Valet de carreau',
      rule: ' a le pouvoir du doigt. Lorsqu\'il met son doigt sur son menton, le dernier a le faire doit boire une gorgée',
      src: require('../../assets/cards/JD.png'),
      active: true
    },
    'JH': {
      name: 'Valet de coeur',
      rule: ' a le pouvoir du doigt. Lorsqu\'il met son doigt sur son menton, le dernier a le faire doit boire une gorgée',
      src: require('../../assets/cards/JH.png'),
      active: true
    },
    'JS': {
      name: 'Valet de pique',
      rule: ' a le pouvoir du doigt. Lorsqu\'il met son doigt sur son menton, le dernier a le faire doit boire une gorgée',
      src: require('../../assets/cards/JS.png'),
      active: true
    },
    'QC': {
      name: 'Dame de trèfle',
      rule: ' a le Mother Fucker. Lorsqu\'il pose une question à quelqu\'un, il faut répondre Mother Fucker suivi de la réponse',
      src: require('../../assets/cards/QC.png'),
      active: true
    },
    'QD': {
      name: 'Dame de carreau',
      rule: ' a le Mother Fucker. Lorsqu\'il pose une question à quelqu\'un, il faut répondre Mother Fucker suivi de la réponse',
      src: require('../../assets/cards/QD.png'),
      active: true
    },
    'QH': {
      name: 'Dame de coeur',
      rule: ' a le Mother Fucker. Lorsqu\'il pose une question à quelqu\'un, il faut répondre Mother Fucker suivi de la réponse',
      src: require('../../assets/cards/QH.png'),
      active: true
    },
    'QS': {
      name: 'Dame de pique',
      rule: ' a le Mother Fucker. Lorsqu\'il pose une question à quelqu\'un, il faut répondre Mother Fucker suivi de la réponse',
      src: require('../../assets/cards/QS.png'),
      active: true
    },
    'KC': {
      name: 'Roi de trèfle',
      rule: ' doit dire si c\'est le 1, 2, 3 ou 4ème roi de sortie. S\'il se trompe, c\'est une gorgée. Si c\'est le 4ème roi, c\'est cul sec !',
      src: require('../../assets/cards/KC.png'),
      active: true
    },
    'KD': {
      name: 'Roi de carreau',
      rule: ' doit dire si c\'est le 1, 2, 3 ou 4ème roi de sortie. S\'il se trompe, c\'est une gorgée. Si c\'est le 4ème roi, c\'est cul sec !',
      src: require('../../assets/cards/KD.png'),
      active: true
    },
    'KH': {
      name: 'Roi de coeur',
      rule: ' doit dire si c\'est le 1, 2, 3 ou 4ème roi de sortie. S\'il se trompe, c\'est une gorgée. Si c\'est le 4ème roi, c\'est cul sec !',
      src: require('../../assets/cards/KH.png'),
      active: true
    },
    'KS': {
      name: 'Roi de pique',
      rule: ' doit dire si c\'est le 1, 2, 3 ou 4ème roi de sortie. S\'il se trompe, c\'est une gorgée. Si c\'est le 4ème roi, c\'est cul sec !',
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