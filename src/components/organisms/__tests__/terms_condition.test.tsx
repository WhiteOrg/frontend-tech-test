import React from "react";
import renderer from "react-test-renderer";
import TermsCondition from "../terms_condition";

describe("ORGANISMS: Render testing", () => {
  test("Should render TermsCondition", () => {
    const component = renderer.create(
      <TermsCondition titleTermsCondition="Terms & Conditions" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
