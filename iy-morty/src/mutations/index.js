import gql from 'graphql-tag';

export const SET_POST = gql `
    mutation setPost($input:PostInput) {
        setPost(input:$input) {
            id
        }
    }
  `