import React from "react";
import { Shallow, shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word  ", () => {
    const instructions = findByTestAttribute(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});