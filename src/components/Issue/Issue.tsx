import {Link} from "react-router-dom";
import "./Issue.css";


export interface IssueProps {
    issueData: Data;
    issueState: string;
}

export interface Data {
    number: number;
    title: string;
    createdAt: string;
    closedAt: string | null;
}

export function Issue(issue: IssueProps) {

    const generateDate = (date: string | null) => {
        if (date) {
            const time = new Date(date).toLocaleTimeString("en", {
                timeStyle: "medium",
                hour12: false,
            });
            return `${date.substring(0, 10)} ${time}`;
        }
    }

    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="flex items-center">
                    <div>
                        <div className="text-sm leading-5 text-gray-800">
                            #{issue.issueData.number}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-md leading-5 text-gray-800 font-bold">
                    {issue.issueData.title}
                </div>
                <div className="text-xs leading-5 text-gray-400 font-bold">
                    {issue.issueState === "OPEN"
                        ? `Created at: ${generateDate(issue.issueData.createdAt)}`
                        : `Closed at: ${generateDate(issue.issueData.closedAt)}`}
                </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <Link to={`/${issue.issueData.number}`}>
                    <button
                        className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                        View Details
                    </button>
                </Link>
            </td>
        </tr>
    );
}
