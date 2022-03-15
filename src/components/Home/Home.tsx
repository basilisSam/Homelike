import {useQuery} from "@apollo/client";
import {useState} from "react";
import {GET_ISSUES} from "../../queries";
import "./Home.css";
import Spinner from "../Spinner/Spinner";
import IssuesTable from "../IssuesTable/IssuesTable";
import Information from "../Information/Information";

function Home() {

    const PAGE_COUNT = 7
    const [issueState, setIssueState] = useState("OPEN");

    const handlePageClick = () => {
        fetchMore({
            variables: {
                after: data.repository.issues.pageInfo.endCursor
            },
            updateQuery: (previousResult: any, {fetchMoreResult}: any) => {
                const newEdges = fetchMoreResult.repository.issues.edges;
                const pageInfo = fetchMoreResult.repository.issues.pageInfo;

                return newEdges.length
                    ? {
                        repository: {
                            issues: {
                                totalCount: previousResult.repository.issues.totalCount,
                                edges: previousResult.repository.issues.edges,
                                pageInfo
                            }

                        }
                    }
                    : previousResult;
            }
        })
    };

    const {
        loading,
        error,
        data,
        fetchMore
    } = useQuery(GET_ISSUES, {
        fetchPolicy:'network-only',
        variables: {state: issueState, first: PAGE_COUNT, after: null}
    });

    const handleStateChange = (state: string) => {
        setIssueState(state);
    };

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : error ? (
                <Information
                    title="An error occurred!"
                    description="Probably the personal access token has expired, sorry for the inconvenience!"
                />
            ) : (
                <div className="homeWrapper pt-8">
                    <IssuesTable
                        handleStateChange={handleStateChange}
                        issueState={issueState}
                        handlePageClick={handlePageClick}
                        pageCount={Math.ceil(data.repository.issues.totalCount / PAGE_COUNT)}
                        currentIssues={data.repository.issues.edges}
                    />
                </div>
            )}
        </>
    );
}

export default Home;