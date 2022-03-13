import { useQuery, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ISSUES } from "../../queries";
import "./Home.css";
import Spinner from "../Spinner/Spinner";
import IssuesTable from "../IssuesTable/IssuesTable";

function Home() {

  const PAGE_COUNT = 7

  const [issueState, setIssueState] = useState("OPEN");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [endCursor, setEndCursor] = useState("");

  const handlePageClick = (event: any) => {
     getNewIssues();
  };

  const { loading, data } = useQuery(GET_ISSUES, {
    variables: { state: issueState, first: PAGE_COUNT },
  });

  const [getNewIssues, { data: newData }] = useLazyQuery(GET_ISSUES, {
    variables: { state: issueState, first: PAGE_COUNT, after: endCursor }
  });


  const handleStateChange = (state: string) => {
    console.log("handleStateChange")
    setIssueState(state);
  };

  useEffect(() => {
    if (data) {
      console.log('Data:', data)
      setCurrentItems(data.repository.issues.edges)
      setPageCount(Math.ceil(data.repository.issues.totalCount / PAGE_COUNT));
      setEndCursor(data.repository.issues.pageInfo.endCursor);
    }
  }, [data, issueState]);

  useEffect(() => {
    if (newData) {
      setCurrentItems(newData.repository.issues.edges)
      setPageCount(
        Math.ceil(newData.repository.issues.totalCount / PAGE_COUNT)
      );
      setEndCursor(newData.repository.issues.pageInfo.endCursor);
    }
  }, [newData, issueState]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="homeWrapper pt-8">
          <IssuesTable
            handleStateChange={handleStateChange}
            issueState={issueState}
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            currentItems={currentItems}
          />
        </div>
      )}
    </>
  );
}

export default Home;