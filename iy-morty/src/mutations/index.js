import gql from 'graphql-tag';

export const SET_POST = gql `
    mutation setPost($input:PostInput) {
        setPost(input:$input) {
            id
        }
    }
  `

export const CREATE_USER = gql `
mutation createUser($input:UserInput) {
    createUser(input:$input) {
        email
        password
    }
}
`

export const LOGIN_USER = gql `
mutation validateUser($input:UserLoginInput) {
    validateUser(input:$input) {
        token
    }
}`