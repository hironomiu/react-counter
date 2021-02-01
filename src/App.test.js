import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import App from "./components/App"
import userEvent from "@testing-library/user-event"

afterEach(() => cleanup())

describe("Rendering", () => {
  it("Should render all elements correctly", () => {
    render(<App />)
    expect(screen.getByRole("textbox")).toBeTruthy()
    expect(screen.getAllByRole("button")[0]).toBeTruthy()
    expect(screen.getAllByRole("button")[1]).toBeTruthy()
    const inputValue = screen.getByRole("textbox")
    expect(inputValue.value).toBe("hello")
  })
})

describe("Input form onChange event", () => {
  it("Shold ", () => {
    render(<App />)
    const inputValue = screen.getByRole("textbox")
    new Promise(() => {
      userEvent.type(inputValue, "test")
    }).then(() => {
      expect(inputValue.value).toBe("test")
    })
  })
})
