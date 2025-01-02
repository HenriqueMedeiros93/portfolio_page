

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleLeft, faChevronCircleRight, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faVuejs, faJs,faGithub, faLinkedin, faSearchengin,} from '@fortawesome/free-brands-svg-icons'; 

export class Icons {
  static readonly imported = {
    faVuejs,
    faJs,
    faGithub,
    faLinkedin,
    faSearchengin,
    faChevronCircleLeft,
    faChevronCircleRight,
    faHamburger
  };

  public static import() {
    library.add(this.imported);
  }
}