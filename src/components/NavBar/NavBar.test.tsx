import {render, screen} from "@testing-library/react";
import {it} from "@jest/globals";
import {MemoryRouter} from "react-router-dom";
import NavBar from "./NavBar";

;

it("should render the brand name in the Navbar", () => {
    render(
        <MemoryRouter>
            <NavBar/>
        </MemoryRouter>
    );

    screen.getByText("Homelike");
});
  