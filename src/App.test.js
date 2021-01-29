import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./components/App"

describe("Rendering", () => {
  it("Should render all elements correctly", () => {
    render(<App />)
    expect(screen.getByRole("textbox")).toBeTruthy()
    expect(screen.getAllByRole("button")[0]).toBeTruthy()
    expect(screen.getAllByRole("button")[1]).toBeTruthy()
  })
})
