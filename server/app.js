import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    const app = express();
    server.applyMiddleware({ app });
    await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
    // prettier-ignore
    console.log( // eslint-disable-line no-console
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
}

const typeDefs = gql`
    type Book {
        title: String
    }

    type Query {
        books: [Book]
    }
`;

const books = [
    {
        title: "The Awakening",
    },
    {
        title: "City of Glass",
    },
];

const resolvers = {
    Query: {
        books: () => books,
    },
};

startApolloServer(typeDefs, resolvers);
