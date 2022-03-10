import { Link } from "react-router-dom";
import "./Issue.css";

export function Issue({issueData}: any ) {
  return (
    <tr>
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
            <div>
                <div className="text-sm leading-5 text-gray-800">{issueData.number}</div>
            </div>
        </div>
    </td>
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{issueData.title}</div>
    </td>
    
    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
    <Link to={`/${issueData.number}`}>
        <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
        </Link>
    </td>
</tr>
  );
}
