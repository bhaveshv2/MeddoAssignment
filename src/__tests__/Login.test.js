import React from "react";
import ReactDOM from "react-dom";
import Login from "../Login";
import {useAuth0} from "@auth0/auth0-react";

const user = {
  email: "a@a.com",
  email_verified: true,
  sub: "auth0|5f6f2ed547b18b0076a40b7c"
};

// intercept the useAuth0 function and mock it
jest.mock("@auth0/auth0-react");

describe("First test", () => {
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
  });

  it("login without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render( <Login/> , div);
  });
});