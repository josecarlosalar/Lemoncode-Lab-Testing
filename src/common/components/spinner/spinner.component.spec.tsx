import React from "react";
import { SpinnerComponent } from "./spinner.component";
import { render, screen } from "@testing-library/react";
import { usePromiseTracker } from "react-promise-tracker";

jest.mock("react-promise-tracker");

describe("SpinnerComponent", () => {
    it("should render a spinner when promise is in progress", async () => {
      //Arrange
      usePromiseTracker.mockReturnValue({ promiseInProgress: true });
  
      //Act
      render(<SpinnerComponent />);

      //Assert
      const spinner = await screen.getByRole("presentation");
      expect(spinner).toBeInTheDocument();
    });
  
    it("should not render a spinner when promise is not in progress", async () => {
      //Arrange
      usePromiseTracker.mockReturnValue({ promiseInProgress: false });
  
      //Act
      render(<SpinnerComponent />);
      
      //Assert
      const spinner = await screen.queryByRole("presentation");
      expect(spinner).not.toBeInTheDocument();
    });
  });