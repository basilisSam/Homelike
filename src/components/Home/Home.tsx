import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ISSUES } from "../../queries";
import Issues from "../Issues/IssuesTable";
import "./Home.css";

function Home() {
  const [issues, setIssues] = useState([]);
  const { loading, error, data } = useQuery(GET_ISSUES);


  useEffect(() => {
   if(data){
     setIssues(data.repository.issues.edges)
   }
  },[data]);

    return (
      <div className='homeWrapper'>
          <Issues issues={issues}/>
      </div>
    );
  }
  
  export default Home;
