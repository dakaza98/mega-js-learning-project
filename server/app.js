import { ApolloServer } from "apollo-server-express";
import express from "express";
import { Book, Query } from "./schema.js";

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

startApolloServer([Book, Query], resolvers);
