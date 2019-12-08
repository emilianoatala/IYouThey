import gql from 'graphql-tag';

export const GET_POSTS_AND_USER_LOGGED = gql `
    query {
        getAllPosts {
            id
            description
            createdAt
            user{
                name
                id
            }
        }
        getUserLogged {
            user {
                id
                name
                lastname
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

// export const GET_USER_LOGGED = gql `
//     query {
//         getUserLogged {
//             user {
//                 id
//                 name
//                 lastname
//                 email
//             }
            
//         }
//     }   
// `