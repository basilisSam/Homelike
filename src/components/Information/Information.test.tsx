import {render, screen} from "@testing-library/react";
import {it} from "@jest/globals";
import {MemoryRouter} from "react-router-dom";
import Information from "./Information";

;

it("should render the brand name in the Information", () => {
    const title = "Issue not found!"
    const description = "Sorry there is no such issue."
    render(
        <MemoryRouter>
            <Information title={title} description={description}/>
        </MemoryRouter>
    );

    screen.getByText("Issue not found!");
    screen.getByText("Sorry there is no such issue.");
    screen.getByRole("button")
});
  