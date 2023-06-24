import { gql } from "@apollo/client";

export const POST_MEMORY = gql`

mutation UploadFile($file: Upload!, $name: String!) {
    createMemory(file: $file, name: $name) {
      name
      file
    }
  }
  
`