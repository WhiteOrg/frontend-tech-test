import React from "react";
import renderer from "react-test-renderer";
import Bullet from "../bullet";

describe("ATOMS: Render testing", () => {
  test("Should render Bullet", () => {
    const component = renderer.create(
      <ul>
        <Bullet>
          Advertising is key factor in your web site promotion. Let people talk
          about you, your products, and your services.
        </Bullet>
        <Bullet>
          You see, people are always on the look out for good content right?
          Your site should have really good contents. Don’t write
        </Bullet>
        <Bullet>
          “Welcome to my website” or “Ours is a World’s first company…blah blah”
          unless and until you really have dominating product.{" "}
        </Bullet>
        <Bullet>
          You sell your products or services as like others, but you think you
          must be noticed.{" "}
        </Bullet>
        <Bullet>
          Your offer should be different to attract visitor. Your presentation
          should be mind catching.{" "}
        </Bullet>
        <Bullet>
          Get aware of advertisers online. There are few major players around.{" "}
        </Bullet>
      </ul>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
