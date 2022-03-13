import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ISSUE } from "../../queries";
import { IssueComment } from "../IssueComment/IssueComment";
import Spinner from "../Spinner/Spinner";
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Information from "../Information/Information";

function IssueDetails() {
  const { issueNumber }: any = useParams();
  const { issueState }: any = useParams();
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
      {/* {loading ? (
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
      } */}

      {loading ? (
        <Spinner />
      ) : error ? (
        <Information
          title="Issue not found!"
          description="Sorry there is no such issue."
        />
      ) : (
        <>
          <div className="w-1/2 mx-auto sm:px-6 lg:px-8">
            <h1 className="text-3xl mb-2">
              {issue.title} (#{issue.number})
            </h1>

            <div className="flex flex-wrap justify-left mb-4 space-x-2">
              {issueState === "OPEN" ? (
                <>
                  <span className="px-4 py-2 rounded-full text-white bg-green-600 font-semibold text-sm text-justify flex  w-max gap-1">
                    <LockOpenOutlined /> <p className="mt-1">Open</p>{" "}
                  </span>
                </>
              ) : (
                <>
                  <span className="px-4 py-2 rounded-full text-white bg-red-600 font-semibold text-sm text-justify flex  w-max gap-1">
                    <LockOutlined /> <p className="mt-1">Closed</p>
                  </span>
                </>
              )}
            </div>

            <div className="flex justify-center">
              <hr className="border-b-1 border-gray-300 w-4/5 " />
            </div>

            <div className="text-s mt-6">{issue.body}</div>
          </div>
          <div className="mt-24">
            {issue.comments &&
              issue.comments.edges.map((node: any) => (
                <IssueComment
                  key={node.node.id}
                  body={node.node.body}
                  publishedAt={node.node.publishedAt}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default IssueDetails;
