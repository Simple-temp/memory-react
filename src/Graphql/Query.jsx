import { gql } from "@apollo/client";

export const GET_MEMORY = gql`
    query getMemory {
        getmemory {
        _id
        name
        file
        }
    }

`