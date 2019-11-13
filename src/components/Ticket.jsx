import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div className="color-toggle">
      <style global jsx>{`
          div .color-toggle{
            background-color: red;
          }
          .color-toggle:hover{
            background: green;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
