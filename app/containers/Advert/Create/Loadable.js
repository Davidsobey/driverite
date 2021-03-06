/**
 *
 * Asynchronously loads the component for AdCreate
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
