import db from "./db.js";
const resolvers = {
  Query: {
    users: () => db.users,
    orders: () => db.orders,
    user: (_, args) => db.users.find((item) => item.id === args.id),
    order: (_, args) => db.orders.find((item) => item.id === args.id),
  },
  User: {
    order(parent) {
      return db.orders.find((orderItem) => orderItem.id === parent.id);
    },
  },
  Mutation: {
    deleteOrder: (_, args) => db.orders.filter((o) => o.id != args.id),
    addOrder: (_, args) => {
      let order = {
        ...args.order,
        id: Math.floor(Math.random() * 1000).toString(),
      };
      db.orders.push(order);

      return order;
    },
    updateOrder(_, args) {
      db.orders = db.orders.map((o) => {
        if (o.id === args.id) {
          return { ...o, ...args.edits };
        }
        return o;
      });
      return db.orders.find((o) => o.id === args.id);
    },
  },
};

export default resolvers;
