import {useQuery} from "@apollo/client";
import {Params, useParams} from "react-router-dom";
import {GET_ISSUE} from "../../queries";
import {IssueComment} from "../IssueComment/IssueComment";
import Spinner from "../Spinner/Spinner";
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Information from "../Information/Information";


function IssueDetails() {
    const {issueNumber}: Readonly<Params> = useParams()
    const {loading, error, data} = useQuery(GET_ISSUE, {
        variables: {issueNumber: Number(issueNumber)},
    });

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : error ? (
                <Information
                    title="Issue not found!"
                    description="Sorry there is no such data.repository.issue."
                />
            ) : (
                <>
                    <div className="w-1/2 mx-auto sm:px-6 lg:px-8">
                        <h1 className="text-3xl mb-2">
                            {data.repository.issue.title} (#{data.repository.issue.number})
                        </h1>

                        <div className="flex flex-wrap justify-left mb-4 space-x-2">
                            {data.repository.issue.state === "OPEN" ? (
                                <>
                  <span
                      className="px-4 py-2 rounded-full text-white bg-green-600 font-semibold text-sm text-justify flex  w-max gap-1">
                    <LockOpenOutlined/> <p className="mt-1">Open</p>{" "}
                  </span>
                                </>
                            ) : (
                                <>
                  <span
                      className="px-4 py-2 rounded-full text-white bg-red-600 font-semibold text-sm text-justify flex  w-max gap-1">
                    <LockOutlined/> <p className="mt-1">Closed</p>
                  </span>
                                </>
                            )}
                        </div>

                        <div className="flex justify-center">
                            <hr className="border-b-1 border-gray-300 w-4/5 "/>
                        </div>

                        <div className="text-s mt-6">{data.repository.issue.body}</div>
                    </div>
                    <div className="mt-24">
                        {data.repository.issue.comments &&
                            data.repository.issue.comments.edges.map((node: any) => (
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
