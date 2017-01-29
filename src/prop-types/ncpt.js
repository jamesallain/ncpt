import { PropTypes } from 'react';


const patientNcptProps = {
  id: PropTypes.string.isRequired,
  assessment: PropTypes.shape({
    andiud: PropTypes.string.isRequired, //term
    value: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
    standard: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired,
  diagnosis: PropTypes.shape({
    andiud: PropTypes.string.isRequired, //problem
    etiology: PropTypes.shape({intervention: PropTypes.string.isRequired //intervetion
    }).isRequired,
    signs:PropTypes.shape({andiud: PropTypes.string.isRequired, //monitoring
      value: PropTypes.string.isRequired,
      units: PropTypes.string.isRequired,
      standard: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired
    }).isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};

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
