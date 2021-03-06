import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faPalette,
  faMapMarkerAlt,
  faPaperPlane,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faLaptopCode, faDrawPolygon, faEdit, faEdit, faPalette, faMapMarkerAlt, faTwitter, faLinkedinIn, faGithub, faPaperPlane, faLongArrowAltRight);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
