import gql from "graphql-tag";

export const SUBCRIBE_POST = gql`
    subscription newPost{
        newPost{
            description
            createdAt
            user {
                id
                name
                lastname
            }
        }
    }
`

export const USER_LOGGED = gql`
    subscription userLogged{
        userLogged{
            id
            name
            lastname
        }
    }
`