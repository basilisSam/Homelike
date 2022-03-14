import {useLazyQuery, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {GET_ISSUES} from "../../queries";
import "./Home.css";
import Spinner from "../Spinner/Spinner";
import IssuesTable from "../IssuesTable/IssuesTable";

function Home() {

    const PAGE_COUNT = 7

    const [issueState, setIssueState] = useState("OPEN");
    const [currentIssues, setCurrentIssues] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [endCursor, setEndCursor] = useState("");

    const handlePageClick = (event: any) => {
        getNewIssues();
    };

    const {loading, data} = useQuery(GET_ISSUES, {
        variables: {state: issueState, first: PAGE_COUNT},
    });

    const [getNewIssues, {data: newData}] = useLazyQuery(GET_ISSUES, {
        variables: {state: issueState, first: PAGE_COUNT, after: endCursor}
    });


    const handleStateChange = (state: string) => {
        console.log("handleStateChange")
        setIssueState(state);
    };

    useEffect(() => {
        if (data) {
            setCurrentIssues(data.repository.issues.edges)
            setPageCount(Math.ceil(data.repository.issues.totalCount / PAGE_COUNT));
            setEndCursor(data.repository.issues.pageInfo.endCursor);
        }
    }, [data, issueState]);

    useEffect(() => {
        if (newData) {
            setCurrentIssues(newData.repository.issues.edges)
            setPageCount(
                Math.ceil(newData.repository.issues.totalCount / PAGE_COUNT)
            );
            setEndCursor(newData.repository.issues.pageInfo.endCursor);
        }
    }, [newData, issueState]);

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <div className="homeWrapper pt-8">
                    <IssuesTable
                        handleStateChange={handleStateChange}
                        issueState={issueState}
                        handlePageClick={handlePageClick}
                        pageCount={pageCount}
                        currentIssues={currentIssues}
                    />
                </div>
            )}
        </>
    );
}

export default Home;