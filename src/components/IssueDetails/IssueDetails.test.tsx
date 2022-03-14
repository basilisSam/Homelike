import {cleanup, render, waitFor,screen} from "@testing-library/react";
import {it} from "@jest/globals";
import Router, {MemoryRouter} from "react-router-dom";
import IssueDetails from "./IssueDetails";
import {GET_ISSUE} from "../../queries";
import {MockedProvider} from '@apollo/react-testing';
import {GraphQLError} from "graphql";


beforeEach(() => {
    jest.spyOn(Router, 'useParams').mockReturnValue({issueNumber: '1'})
})

afterEach(cleanup);

it("should render error when issue not found", async () => {
    const mocks: any = {
        request: {
            query: GET_ISSUE,
            variables: {issueNumber: 1},
        },
        result: {
            errors: [new GraphQLError('Error!')],
        },
    };

    render(
        <MemoryRouter>
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <IssueDetails/>
            </MockedProvider>
        </MemoryRouter>
    );

    await waitFor(() => {
        screen.getByText("Issue not found!");
    });
});


it("should render open state if issue is open", async () => {
    const mocks: any = {
        request: {
            query: GET_ISSUE,
            variables: {issueNumber: 1},
        },
        result: {
            data: {repository: {issue: {state: "OPEN",title:"a title",body:"a body",number:123,comments:{edges:[]}}}},
        },
    };

    render(
        <MemoryRouter>
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <IssueDetails/>
            </MockedProvider>
        </MemoryRouter>
    );

    await waitFor(() => {
        screen.getByText("Open");
    });
});

it("should render closed state if issue is closed", async () => {
    const mocks: any = {
        request: {
            query: GET_ISSUE,
            variables: {issueNumber: 1},
        },
        result: {
            data: {repository: {issue: {state: "CLOSED",title:"a title",body:"a body",number:123,comments:{edges:[]}}}},
        },
    };

    render(
        <MemoryRouter>
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <IssueDetails/>
            </MockedProvider>
        </MemoryRouter>
    );

    await waitFor(() => {
        screen.getByText("Closed");
    });
});
