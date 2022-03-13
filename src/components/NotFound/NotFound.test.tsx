import { render, screen } from "@testing-library/react";
import { it } from "@jest/globals";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";
;

it("should render the brand name in the NotFound", () => {
    render(
      <MemoryRouter>
          <NotFound />
      </MemoryRouter>
    );
  
    screen.getByText("404");
    screen.getByText("Sorry we couldn't find this page.");
    screen.getByRole("button")
  });
  