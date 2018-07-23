/**
 *
 * Asynchronously loads the component for ManagerCreate
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
