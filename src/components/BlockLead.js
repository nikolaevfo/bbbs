import React from 'react';
import PropTypes from 'prop-types';

function BlockLead({ children }) {
  return (
    <section className="lead page__section">
      <article className="card-container card-container_type_identical">{children}</article>
    </section>
  );
}

export default BlockLead;

BlockLead.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
