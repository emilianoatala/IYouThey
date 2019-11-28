import gql from "graphql-tag";

export const SUBCRIBE_POST = gql`
    subscription newPost{
        newPost{
            id
            description
        }
    }
`