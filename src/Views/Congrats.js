import React from "react";
import Proptypes from "prop-types";
/**
 * Functional react component for congrats message
 * @function
 * @param {object} props - React props
 * @return {JSX.Element} = Rendered component or null
 */
const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: Proptypes.bool.isRequired,
};

export default Congrats;
