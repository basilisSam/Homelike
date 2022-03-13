import {cleanup, render, screen} from '@testing-library/react';
import {afterEach, it} from '@jest/globals';
import {MemoryRouter} from 'react-router-dom';
import IssuesTable from './IssuesTable';
import {  IssueData,Data } from "../Issue/Issue"
import {IssuesTableData} from './IssuesTable';

afterEach(cleanup);


const data: Data = {
    number:10,
    title: "string",
    createdAt: "2017",
    closedAt: "2017"
}
const issueProps:IssueData= {
    issueData: data,
    issueState: 'OPEN'
}

   const IssuesTableDataProps:IssuesTableData ={
    handleStateChange: jest.fn(),
     issueState:"OPEN",
    handlePageClick:jest.fn(),
     pageCount:5, 
     currentItems: [
         {issueData: {
             number: 10,
             title: 'String',
             createdAt: '2017',
             closedAt: '2017'
         },
         issueState: 'OPEN'
        }
     ]
   }
   const props = [{number:10, title: "string",createdAt: "2017", closedAt: "2017"}]

it('should render multiple child components', () => {
    render(<MemoryRouter>
     
            <IssuesTable handleStateChange={jest.fn()} issueState={"OPEN"} handlePageClick={jest.fn()}  pageCount={5} currentItems={IssuesTableDataProps.currentItems} />

    </MemoryRouter>);


    screen.getByText("2017");
    
});