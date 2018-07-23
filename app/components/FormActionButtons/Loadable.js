/**
 *
 * Asynchronously loads the component for FormActionButtons
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
