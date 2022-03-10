import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ISSUE } from "../../queries";
import { IssueComment } from "../IssueComment/IssueComment";

function IssueDetails() {
  const { issueNumber }: any = useParams();
  const [issue, setIssue]: any = useState({});
  const { loading, error, data } = useQuery(GET_ISSUE, {
    variables: { issueNumber: parseInt(issueNumber) },
  });

  useEffect(() => {
    if (data) {
      setIssue(data.repository.issue);
    }
  }, [data]);

  return (
    <>
      {issue  && (
        <>
          <h1>{issue.title}</h1>
          <h1> {issue.body}</h1>
          <h1>{issue.number}</h1>          
          {issue.comments && (issue.comments.edges.map((node: any) =>  (
            <IssueComment comment={node.node} key={node.node.id} />
          )))}
        </>
      )}
    </>
  );
}

export default IssueDetails;
