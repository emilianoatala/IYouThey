import gql from 'graphql-tag';

export const GET_POSTS = gql `
    query {
        getAllPosts {
            id
            description
            createdAt
            user{
                name
                lastname
                id
            }
        }
    }
    
`


export const GET_USER = gql `
    query {
        getUser {
            id
            name
            lastname
            email
        }
    }   
`