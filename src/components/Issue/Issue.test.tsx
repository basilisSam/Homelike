import {render, screen} from "@testing-library/react";
import {it} from "@jest/globals";
import {MemoryRouter} from "react-router-dom";
import {Issue, IssueProps} from "./Issue";

it("should render issue", () => {
    const props: IssueProps = {
        issueData: {
            number: 1,
            title: "a title",
            createdAt: "2021",
            closedAt: "2022"
        },
        issueState: "OPEN"
    }
    render(
        <MemoryRouter>
            <table>
                <tbody>
                <Issue {...props} />
                </tbody>
            </table>
        </MemoryRouter>
    );

    screen.getByText("a title");
    screen.getByText("#1");
});

it("should render issue with created at description", () => {
    const props: IssueProps = {
        issueData: {
            number: 1,
            title: "a title",
            createdAt: "2021",
            closedAt: "2022"
        },
        issueState: "OPEN"
    }
    render(
        <MemoryRouter>
            <table>
                <tbody>
                <Issue {...props} />
                </tbody>
            </table>
        </MemoryRouter>
    );

    screen.getByText("Created at: 2021 24:00:00")
});

it("should render issue with closed at description", () => {
    const props: IssueProps = {
        issueData: {
            number: 1,
            title: "a title",
            createdAt: "2021",
            closedAt: "2022"
        },
        issueState: "CLOSED"
    }
    render(
        <MemoryRouter>
            <table>
                <tbody>
                <Issue {...props} />
                </tbody>
            </table>
        </MemoryRouter>
    );
    screen.getByText("Closed at: 2022 24:00:00")
});