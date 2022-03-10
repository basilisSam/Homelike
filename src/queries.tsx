import { gql } from "@apollo/client"

const GET_ISSUES = gql`
query GET_ISSUES($state:[IssueState!]){
  repository(owner:"reactjs", name:"reactjs.org") {
    issues(last:3, states: $state) {
      edges {
        node {
          createdAt
          closedAt 
          number
          title
        }
      }
    }
  }
}`

const GET_ISSUE =  gql`
query GET_ISSUE($issueNumber: Int!) {
    repository(owner:"reactjs", name:"reactjs.org") {
      issue(number: $issueNumber) {
            title
           body
            number
            comments(first:2) {
              edges{
                  node{
                      id
                      body  
                  }
              }
            }
        }
      }
    }` 


export {
    GET_ISSUES,
    GET_ISSUE
}