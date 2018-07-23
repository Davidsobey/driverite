import 'whatwg-fetch';
import { Cookies } from 'react-cookie';
import { error as errorAction } from '../components/Alert/actions';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export const addSecurityHeader = (insecureOptions) => {
  const cookies = new Cookies();
  const jwtToken = cookies.get('jwt');
  const secureHeaders = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const optionsDontExist = !insecureOptions;
  if (optionsDontExist) {
    return secureHeaders;
  }
  const noHeadersExist = !insecureOptions.headers;
  if (noHeadersExist) {
    return {
      ...insecureOptions,
      ...secureHeaders,
    };
  }
  return {
    ...insecureOptions,
    headers: {
      ...insecureOptions.headers,
      ...secureHeaders.headers,
    },
  };
};

export const addContentType = (options) => {
  const applicationJsonHeaders = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const optionsDontExist = !options;
  if (optionsDontExist) {
    return applicationJsonHeaders;
  }
  const noHeadersExist = !options.headers;
  if (noHeadersExist) {
    return {
      ...options,
      ...applicationJsonHeaders,
    };
  }
  const contentTypeHeaderExists = options.headers['Content-Type'];
  if (contentTypeHeaderExists) {
    return options;
  }
  return {
    ...options,
    headers: {
      ...options.headers,
      ...applicationJsonHeaders.headers,
    },
  };
};

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

let dispatch;

const request = (url, options) => {
  if (!dispatch) {
    console.warn('dispatcher not provided for request error toasts'); // eslint-disable-line no-console
  }
  const secureOptions = addSecurityHeader(addContentType(options));
  return fetch(url, secureOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(toastError); // eslint-disable-line
};

export const loadDispatcher = (dispatcher) => {
  if (!dispatcher) {
    return false;
  }
  dispatch = dispatcher;
  return true;
};

export default request;

const toastError = (error) => {
  if (error.response.columbusapierror) {
    error.response.columbusapierror.subErrors.forEach((subError) => {
      dispatch(
        errorAction({
          message: `${error.response.columbusapierror.status}: ${
            subError.message
          }`,
        }),
      );
    });
  } else {
    let message;
    switch (error.response.status) {
      case 404: {
        message = `${error.response.url} not found`;
        break;
      }
      case 401: {
        message = `Unauthorised to access resource at ${error.response.url}`;
        break;
      }
      case 502: {
        message = 'service is temporarily unavailable.';
        break;
      }
      default: {
        message = error;
      }
    }
    dispatch(
      errorAction({
        message,
      }),
    );
  }
  throw error;
};
