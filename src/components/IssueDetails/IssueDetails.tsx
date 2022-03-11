import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ISSUE } from "../../queries";
import { IssueComment } from "../IssueComment/IssueComment";
import Spinner from "../Spinner/Spinner";
import Issues from "../IssuesTable/IssuesTable";
import Information from "../Information/Information";

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

      {loading ? (
          <Spinner/>
      ) : (
          error ?
              <Information title="Issue not found!" description="Sorry there is no such issue." />
              :
          <>
          <div className="flex justify-center ">
            <div className="container px-6 py-10 mx-auto w-1/2 bg-white shadow-xl rounded-lg my-20">
              <div className="flex gap-2">
                <h2 className="text-gray-800 text-3xl">{issue.title} #{issue.number}</h2>
              </div>
              <p className="mt-2 text-gray-600 pt-6">{issue.body}</p>
            </div>
          </div>

      {issue.comments &&
        issue.comments.edges.map((node: any) => (
        <IssueComment comment={node.node} key={node.node.id} />
        ))}
          </>
      )
      }


    </>
  );
}

export default IssueDetails;
