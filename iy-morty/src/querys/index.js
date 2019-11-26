import gql from 'graphql-tag';

export const GET_POSTS = gql `
    query {
        getAllPosts {
            id
            description
            createdAt
        }
    }
    
`