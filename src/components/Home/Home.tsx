import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ISSUES } from "../../queries";
import Issues from "../Issues/IssuesTable";
import "./Home.css";

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
      <div className='homeWrapper'>
          <Issues issues={issues} handleStateChange={handleStateChange} issueState={issueState}/>
      </div>
    );
  }
  
  export default Home;
