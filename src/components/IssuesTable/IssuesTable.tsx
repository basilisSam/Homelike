import {Data, Issue, IssueProps} from "../Issue/Issue";
import "./IssuesTable.css";
import ReactPaginate from "react-paginate";

export interface IssueNode {
    node: IssueEntity;
}

export interface IssueEntity {
    number: number;
    title: string;
    createdAt: string;
    closedAt: string | null;
}

export interface IssuesTableProps {
    handleStateChange: (state: string) => void;
    issueState: string;
    handlePageClick: (event: any) => void;
    pageCount: number;
    currentIssues: IssueNode[];
}

function IssuesTable({handleStateChange,issueState,handlePageClick,pageCount,currentIssues}: IssuesTableProps) {
    return (
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <div
                className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-2xl px-12">
                <div className="flex justify-between">
                    <div>
                        <button
                            onClick={() => handleStateChange("OPEN")}
                            className={
                                issueState === "OPEN" ? "active" : "NotActive"
                            }
                        >
                            Open
                        </button>
                        <button
                            className={
                                issueState === "CLOSED" ? "active" : "NotActive"
                            }
                            onClick={() => handleStateChange("CLOSED")}
                        >
                            Closed
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                <table className="min-w-full">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                            Issue Number
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                            Title
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {currentIssues.map((issue:IssueNode,index:number) => (
                        <Issue
                            key={index}
                            issueData={issue.node}
                            issueState={issueState}
                        />
                    ))}
                    </tbody>
                </table>
                <div className="my-3 flex justify-center">
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        className="flex justify-around w-1/2"
                    />
                </div>
            </div>

        </div>
    );
}

export default IssuesTable;
