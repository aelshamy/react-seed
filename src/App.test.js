import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import App from "./App";

describe("<App/>", () => {
  beforeEach(() => {});

  test("it will match the snapshot", () => {
    const c = create(<App />);
    expect(toJson(c)).toMatchSnapshot();
  });

  describe("render()", () => {
    test("should render correctly", () => {
      const component = shallow(<App />);
      expect(component).toMatchSnapshot();
      expect(component.find("header").exists()).toBe(true);
      expect(component.find("header").text()).toEqual("React App");
      expect(component.find("p").exists()).toBe(true);
    });
  });
});
