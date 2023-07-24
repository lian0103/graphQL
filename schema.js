const typeDefs = `#graphql
    type Order{
        id: ID!
        total: Int!
        content: String!
    }
    type User{
        id: ID!
        name: String!
        email: String!
        order: Order  
    }
    type Query {
        users: [User]
        user(id: ID!): User
        orders: [Order]       
        order(id: ID!): Order  
    }
    type Mutation{
        addOrder(order: AddOrderInput!): Order
        deleteOrder(id: ID!): [Order]
        updateOrder(id: ID!,edits: EditOrderInput!): Order
    }
    input AddOrderInput{
        total: Int!
        content: String!
    }
    input EditOrderInput{
        total: Int!
        content: String!
    }
`;

export default typeDefs;
