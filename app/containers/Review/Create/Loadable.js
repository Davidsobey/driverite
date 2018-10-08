/**
 *
 * Asynchronously loads the component for ReviewCreate
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
