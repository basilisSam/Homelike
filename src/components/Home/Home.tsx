import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ISSUES } from "../../queries";
import "./Home.css";
import Spinner from "../Spinner/Spinner";
import IssuesTable from "../IssuesTable/IssuesTable";

function Home() {
  const [issues, setIssues] = useState([]);
  const [issueState, setIssueState] = useState("OPEN");

  const { loading, error, data } = useQuery(GET_ISSUES,{
    variables: { state: issueState },
  });

  const handleStateChange = (state:string) => {
    setIssueState(state);
  }


  useEffect(() => {
   if(data){
     setIssues(data.repository.issues.edges)
   }
  },[data,issueState]);

    return (
        <>
        {loading ? (
              <Spinner/>
              ) : (
              <div className='homeWrapper pt-8'>
                <IssuesTable issues={issues} handleStateChange={handleStateChange} issueState={issueState}/>
              </div>
          )
        }
        </>
    );
  }
  
  export default Home;
