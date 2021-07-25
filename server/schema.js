import { gql } from "apollo-server-express";

export const Book = gql`
    type Book {
        title: String
    }
`;

export const Query = gql`
    type Query {
        books: [Book]
    }
`;
