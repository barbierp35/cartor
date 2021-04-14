const INITIAL_STATE = {
  cards: {
    '1C': {
      name: 'As de trèfle',
      number: 'As',
      rule: ' donne une gorgée',
      src: require('../../assets/cards/2C.png'),
      active: true
    },
    '1D': {
      name: 'As de carreau',
      number: 'As',
      rule: ' boit une gorgée',
      src: require('../../assets/cards/2D.png'),
      active: true
    },
    '1H': {
      name: 'As de coeur',
      number: 'As',
      rule: ' boit une gorgée',
      src: require('../../assets/cards/2H.png'),
      active: true
    },
    '1S': {
      name: 'As de pique',
      number: 'As',
      rule: ' donne une gorgée',
      src: require('../../assets/cards/2S.png'),
      active: true
    },
    '2C': {
      name: '2 de trèfle',
      number: '2',
      rule: ' donne 2 gorgées',
      src: require('../../assets/cards/2C.png'),
      active: true
    },
    '2D': {
      name: '2 de carreau',
      number: '2',
      rule: ' boit 2 gorgées',
      src: require('../../assets/cards/2D.png'),
      active: true
    },
    '2H': {
      name: '2 de coeur',
      number: '2',
      rule: ' boit 2 gorgées',
      src: require('../../assets/cards/2H.png'),
      active: true
    },
    '2S': {
      name: '2 de pique',
      number: '2',
      rule: ' donne 2 gorgées',
      src: require('../../assets/cards/2S.png'),
      active: true
    },
    '3C': {
      name: '3 de trèfle',
      number: '3',
      rule: ' donne 3 gorgées',
      src: require('../../assets/cards/3C.png'),
      active: true
    },
    '3D': {
      name: '3 de carreau',
      number: '3',
      rule: ' boit 3 gorgées',
      src: require('../../assets/cards/3D.png'),
      active: true
    },
    '3H': {
      name: '3 de coeur',
      number: '3',
      rule: ' boit 3 gorgées',
      src: require('../../assets/cards/3H.png'),
      active: true
    },
    '3S': {
      name: '3 de pique',
      number: '3',
      rule: ' donne 3 gorgées',
      src: require('../../assets/cards/3S.png'),
      active: true
    },
    '4C': {
      name: '4 de trèfle',
      number: '4',
      rule: ' donne 4 gorgées',
      src: require('../../assets/cards/4C.png'),
      active: true
    },
    '4D': {
      name: '4 de carreau',
      number: '4',
      rule: ' boit 4 gorgées',
      src: require('../../assets/cards/4D.png'),
      active: true
    },
    '4H': {
      name: '4 de coeur',
      number: '4',
      rule: ' boit 4 gorgées',
      src: require('../../assets/cards/4H.png'),
      active: true
    },
    '4S': {
      name: '4 de pique',
      number: '4',
      rule: ' donne 4 gorgées',
      src: require('../../assets/cards/4S.png'),
      active: true
    },
    '5C': {
      name: '5 de trèfle',
      number: '5',
      rule: ' donne 5 gorgées',
      src: require('../../assets/cards/5C.png'),
      active: true
    },
    '5D': {
      name: '5 de carreau',
      number: '5',
      rule: ' boit 5 gorgées',
      src: require('../../assets/cards/5D.png'),
      active: true
    },
    '5H': {
      name: '5 de coeur',
      number: '5',
      rule: ' boit 5 gorgées',
      src: require('../../assets/cards/5H.png'),
      active: true
    },
    '5S': {
      name: '5 de pique',
      number: '5',
      rule: ' donne 5 gorgées',
      src: require('../../assets/cards/5S.png'),
      active: true
    },
    '6C': {
      name: '6 de trèfle',
      number: '6',
      rule: ' dit quelque chose qu\'il a déjà fait. Ceux qui ne l\'ont jamais fait boivent une gorgée',
      src: require('../../assets/cards/6C.png'),
      active: true
    },
    '6D': {
      name: '6 de carreau',
      number: '6',
      rule: ' dit quelque chose qu\'il a déjà fait. Ceux qui ne l\'ont jamais fait boivent une gorgée',
      src: require('../../assets/cards/6D.png'),
      active: true
    },
    '6H': {
      name: '6 de coeur',
      number: '6',
      rule: ' dit quelque chose qu\'il a déjà fait. Ceux qui ne l\'ont jamais fait boivent une gorgée',
      src: require('../../assets/cards/6H.png'),
      active: true
    },
    '6S': {
      name: '6 de pique',
      number: '6',
      rule: ' dit quelque chose qu\'il a déjà fait. Ceux qui ne l\'ont jamais fait boivent une gorgée',
      src: require('../../assets/cards/6S.png'),
      active: true
    },
    '7C': {
      name: '7 de trèfle',
      number: '7',
      rule: ' dit quelque chose qu\'il n\'a jamais fait. Ceux qui l\'ont déjà fait boivent une gorgée',
      src: require('../../assets/cards/7C.png'),
      active: true
    },
    '7D': {
      name: '7 de carreau',
      number: '7',
      rule: ' dit quelque chose qu\'il n\'a jamais fait. Ceux qui l\'ont déjà fait boivent une gorgée',
      src: require('../../assets/cards/7D.png'),
      active: true
    },
    '7H': {
      name: '7 de coeur',
      number: '7',
      rule: ' dit quelque chose qu\'il n\'a jamais fait. Ceux qui l\'ont déjà fait boivent une gorgée',
      src: require('../../assets/cards/7H.png'),
      active: true
    },
    '7S': {
      name: '7 de pique',
      number: '7',
      rule: ' dit quelque chose qu\'il n\'a jamais fait. Ceux qui l\'ont déjà fait boivent une gorgée',
      src: require('../../assets/cards/7S.png'),
      active: true
    },
    '8C': {
      name: '8 de trèfle',
      number: '8',
      rule: ' dit un mot. Le joueur à sa gauche doit en trouver un autre qui rime. Un mot déjà dit ou aucun mot trouvé égal une gorgée',
      src: require('../../assets/cards/8C.png'),
      active: true
    },
    '8D': {
      name: '8 de carreau',
      number: '8',
      rule: ' dit un mot. Le joueur à sa gauche doit en trouver un autre qui rime. Un mot déjà dit ou aucun mot trouvé égal une gorgée',
      src: require('../../assets/cards/8D.png'),
      active: true
    },
    '8H': {
      name: '8 de coeur',
      number: '8',
      rule: ' dit un mot. Le joueur à sa gauche doit en trouver un autre qui rime. Un mot déjà dit ou aucun mot trouvé égal une gorgée',
      src: require('../../assets/cards/8H.png'),
      active: true
    },
    '8S': {
      name: '8 de pique',
      number: '8',
      rule: ' dit un mot. Le joueur à sa gauche doit en trouver un autre qui rime. Un mot déjà dit ou aucun mot trouvé égal une gorgée',
      src: require('../../assets/cards/8S.png'),
      active: true
    },
    '9C': {
      name: '9 de trèfle',
      number: '9',
      rule: ' dit : Dans ma valise j\'ai suivi d\'un mot. Le joueur à sa gauche répète en ajoutant un mot. Celui qui ne trouve pas boit une gorgée',
      src: require('../../assets/cards/9C.png'),
      active: true
    },
    '9D': {
      name: '9 de carreau',
      number: '9',
      rule: ' dit : Dans ma valise j\'ai suivi d\'un mot. Le joueur à sa gauche répète en ajoutant un mot. Celui qui ne trouve pas boit une gorgée',
      src: require('../../assets/cards/9D.png'),
      active: true
    },
    '9H': {
      name: '9 de coeur',
      number: '9',
      rule: ' dit : Dans ma valise j\'ai suivi d\'un mot. Le joueur à sa gauche répète en ajoutant un mot. Celui qui ne trouve pas boit une gorgée',
      src: require('../../assets/cards/9H.png'),
      active: true
    },
    '9S': {
      name: '9 de pique',
      number: '9',
      rule: ' dit : Dans ma valise j\'ai suivi d\'un mot. Le joueur à sa gauche répète en ajoutant un mot. Celui qui ne trouve pas boit une gorgée',
      src: require('../../assets/cards/9S.png'),
      active: true
    },
    '10C': {
      name: '10 de trèfle',
      number: '10',
      rule: ' crée ou supprime une alliance. Un joueur en alliance doit boire si son coéquipier boit',
      src: require('../../assets/cards/10C.png'),
      active: true
    },
    '10D': {
      name: '10 de carreau',
      number: '10',
      rule: ' crée ou supprime une alliance. Un joueur en alliance doit boire si son coéquipier boit',
      src: require('../../assets/cards/10D.png'),
      active: true
    },
    '10H': {
      name: '10 de coeur',
      number: '10',
      rule: ' crée ou supprime une alliance. Un joueur en alliance doit boire si son coéquipier boit',
      src: require('../../assets/cards/10H.png'),
      active: true
    },
    '10S': {
      name: '10 de pique',
      number: '10',
      rule: ' crée ou supprime une alliance. Un joueur en alliance doit boire si son coéquipier boit',
      src: require('../../assets/cards/10S.png'),
      active: true
    },
    'JC': {
      name: 'Valet de trèfle',
      number: 'Valet',
      rule: ' a le pouvoir du doigt. Lorsqu\'il met son doigt sur son menton, le dernier a le faire doit boire une gorgée',
      src: require('../../assets/cards/JC.png'),
      active: true
    },
    'JD': {
      name: 'Valet de carreau',
      number: 'Valet',
      rule: ' a le pouvoir du doigt. Lorsqu\'il met son doigt sur son menton, le dernier a le faire doit boire une gorgée',
      src: require('../../assets/cards/JD.png'),
      active: true
    },
    'JH': {
      name: 'Valet de coeur',
      number: 'Valet',
      rule: ' a le pouvoir du doigt. Lorsqu\'il met son doigt sur son menton, le dernier a le faire doit boire une gorgée',
      src: require('../../assets/cards/JH.png'),
      active: true
    },
    'JS': {
      name: 'Valet de pique',
      number: 'Valet',
      rule: ' a le pouvoir du doigt. Lorsqu\'il met son doigt sur son menton, le dernier a le faire doit boire une gorgée',
      src: require('../../assets/cards/JS.png'),
      active: true
    },
    'QC': {
      name: 'Dame de trèfle',
      number: 'Dame',
      rule: ' a le Mother Fucker. Lorsqu\'il pose une question à quelqu\'un, il faut répondre Mother Fucker suivi de la réponse',
      src: require('../../assets/cards/QC.png'),
      active: true
    },
    'QD': {
      name: 'Dame de carreau',
      number: 'Dame',
      rule: ' a le Mother Fucker. Lorsqu\'il pose une question à quelqu\'un, il faut répondre Mother Fucker suivi de la réponse',
      src: require('../../assets/cards/QD.png'),
      active: true
    },
    'QH': {
      name: 'Dame de coeur',
      number: 'Dame',
      rule: ' a le Mother Fucker. Lorsqu\'il pose une question à quelqu\'un, il faut répondre Mother Fucker suivi de la réponse',
      src: require('../../assets/cards/QH.png'),
      active: true
    },
    'QS': {
      name: 'Dame de pique',
      number: 'Dame',
      rule: ' a le Mother Fucker. Lorsqu\'il pose une question à quelqu\'un, il faut répondre Mother Fucker suivi de la réponse',
      src: require('../../assets/cards/QS.png'),
      active: true
    },
    'KC': {
      name: 'Roi de trèfle',
      number: 'Roi',
      rule: ' doit dire si c\'est le 1, 2, 3 ou 4ème roi de sortie. S\'il se trompe, c\'est une gorgée. Si c\'est le 4ème roi, c\'est cul sec !',
      src: require('../../assets/cards/KC.png'),
      active: true
    },
    'KD': {
      name: 'Roi de carreau',
      number: 'Roi',
      rule: ' doit dire si c\'est le 1, 2, 3 ou 4ème roi de sortie. S\'il se trompe, c\'est une gorgée. Si c\'est le 4ème roi, c\'est cul sec !',
      src: require('../../assets/cards/KD.png'),
      active: true
    },
    'KH': {
      name: 'Roi de coeur',
      number: 'Roi',
      rule: ' doit dire si c\'est le 1, 2, 3 ou 4ème roi de sortie. S\'il se trompe, c\'est une gorgée. Si c\'est le 4ème roi, c\'est cul sec !',
      src: require('../../assets/cards/KH.png'),
      active: true
    },
    'KS': {
      name: 'Roi de pique',
      number: 'Roi',
      rule: ' doit dire si c\'est le 1, 2, 3 ou 4ème roi de sortie. S\'il se trompe, c\'est une gorgée. Si c\'est le 4ème roi, c\'est cul sec !',
      src: require('../../assets/cards/KS.png'),
      active: true
    }
  },
  showedCard: null
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESET_CARDS':
      newState = {...state}

      for (let slugCard in newState.cards) {
        newState.cards[slugCard]['active'] = true
      }

      newState.showedCard = null

      return newState;

    case 'DISABLE_CARD':
      newState = {...state}

      if (typeof newState.cards[action.payload] !== 'undefined') {
        newState.cards[action.payload]['active'] = false
      }

      return newState;

    case 'NEXT_CARD':
      newState = {...state}

      let listKeysCards = Object.keys(newState.cards)
      let i = 0;

      do {
        i = i + 1;
        let randomCardSlug = listKeysCards[Math.floor(Math.random() * listKeysCards.length)]

        if (newState.cards[randomCardSlug].active == true) {
          newState.showedCard = randomCardSlug;
          return newState
        }
      } while (i < Object.keys(newState.cards).length)

    default:
      return state
  }
};

export default cardsReducer;