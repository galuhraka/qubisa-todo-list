const cards = [
  {
    id: "card-1",
    title: "Learning Javascript",
  },
  {
    id: "card-2",
    title: "Learning Phyton",
  },
  {
    id: "card-3",
    title: "Learning Flutter",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards,
    },
  },
  listIds: ["list-1"],
};

export default data;
