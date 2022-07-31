const initialState = [
  {
    id: 1,
    title: "Episode 1",
    cards: [
      {
        id: 1,
        text: "Drama Korea - Mouse",
      },
      {
        id: 2,
        text: "Drama Korea - Taxi Driver",
      },
      {
        id: 3,
        text: "Drama Korea - Eve",
      },
    ],
  },
  {
    id: 2,
    title: "Episode 2",
    cards: [
      {
        id: 1,
        text: "Drama Korea - Mouse",
      },
      {
        id: 2,
        text: "Drama Korea - Goblin",
      },
      {
        id: 3,
        text: "Drama Korea - Eve",
      },
      {
        id: 4,
        text: "Reality Show - Law of The Jungle",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
