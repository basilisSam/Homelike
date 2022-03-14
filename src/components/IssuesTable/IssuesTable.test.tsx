import {cleanup, render, screen} from '@testing-library/react';
import {afterEach, it} from '@jest/globals';
import {MemoryRouter} from 'react-router-dom';
import IssuesTable, {IssuesTableProps} from './IssuesTable';

afterEach(cleanup);

const IssuesTableDataProps: IssuesTableProps = {
    handleStateChange: jest.fn(),
    issueState: "OPEN",
    handlePageClick: jest.fn(),
    pageCount: 5,
    currentIssues: [
        {
            node: {
                number: 1,
                title: 'String',
                createdAt: '2017',
                closedAt: '2017'
            },
        },
        {
            node: {
                number: 2,
                title: 'String',
                createdAt: '2018',
                closedAt: null
            },
        }
    ],
}

it('should render multiple child components', () => {
    render(<MemoryRouter>
        <IssuesTable {...IssuesTableDataProps}/>
    </MemoryRouter>);

    screen.getByText("#1");
    screen.getByText("#2");
    screen.getByText("Created at: 2017 24:00:00");
    screen.getByText("Created at: 2018 24:00:00");
});