import { PropTypes } from 'react';

const ncptProps = {
  anduid: PropTypes.string.isRequired,
  ncpt_term_w_context: PropTypes.string.isRequired,
  pub_term_indent: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  level1: PropTypes.string.isRequired,
  level2: PropTypes.string.isRequired,
  level3: PropTypes.string.isRequired,
  level4: PropTypes.string.isRequired,
  level5: PropTypes.string.isRequired,
  alphanumeric_sort: PropTypes.string.isRequired,
  ncpt_type: PropTypes.number.isRequired,
  char: PropTypes.string.isRequired,
  and_parent: PropTypes.string.isRequired,
  actual_sort: PropTypes.string.isRequired  
};

export default PropTypes.shape(ncptProps);
