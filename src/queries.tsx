import { gql } from "@apollo/client"

const GET_ISSUES = gql`
query GET_ISSUES($state:[IssueState!],$first:Int!,$after:String){
  repository(owner:"reactjs", name:"reactjs.org") {
    issues(first:$first, after:$after, states: $state) {
      totalCount
      edges {
        node {
          createdAt
          closedAt 
          number
          title
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}`

const GET_UPDATE_ISSUES = gql`
query GET_ISSUES($state:[IssueState!],$first:Int!,$after:String){
  repository(owner:"reactjs", name:"reactjs.org") {
    issues(first:$first, after:$after, states: $state) {
      totalCount
      edges {
        node {
          createdAt
          closedAt 
          number
          title
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
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
                      publishedAt
                  }
              }
            }
        }
      }
    }` 


export {
    GET_ISSUES,
    GET_ISSUE,
    GET_UPDATE_ISSUES
}