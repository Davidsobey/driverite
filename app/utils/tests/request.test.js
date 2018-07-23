import { Cookies } from 'react-cookie';
import { addSecurityHeader, addContentType } from '../request';

describe('Securing headers with addSecurityHeader util', () => {
  const cookies = new Cookies();
  cookies.set('jwt', '123');
  const CORRECT_AUTH_HEADER = 'Bearer 123';

  it('should add the security header to empty options', () => {
    const options = {};
    expect(addSecurityHeader(options)).toEqual({
      headers: {
        Authorization: CORRECT_AUTH_HEADER,
      },
    });
  });

  it('should add the security header when options are not provided', () => {
    expect(addSecurityHeader()).toEqual({
      headers: {
        Authorization: CORRECT_AUTH_HEADER,
      },
    });
  });

  it('should override the AuthorizationHeader when one is provided', () => {
    const BAD_TOKEN = 'Bearer 321';
    expect(addSecurityHeader({
      headers: {
        Authorization: BAD_TOKEN,
      },
    })).toEqual({
      headers: {
        Authorization: CORRECT_AUTH_HEADER,
      },
    });
  });

  it('should override the AuthorizationHeader when one is provided but not override anything else', () => {
    const BAD_TOKEN = 'Bearer 321';
    expect(addSecurityHeader({
      'Content-Type': 'application/json',
      headers: {
        Authorization: BAD_TOKEN,
        SomeOtherHeader: 'test',
      },
    })).toEqual({
      'Content-Type': 'application/json',
      headers: {
        Authorization: CORRECT_AUTH_HEADER,
        SomeOtherHeader: 'test',
      },
    });
  });
});

describe('Setting Content-Type headers with addContentType util', () => {
  const JSON_CONTENT_TYPE = 'application/json';
  it('should add the Content-Type header to empty options', () => {
    const options = {};
    expect(addContentType(options)).toEqual({
      headers: {
        'Content-Type': JSON_CONTENT_TYPE,
      },
    });
  });

  it('should add the Content-Type header when no options are provided', () => {
    expect(addContentType()).toEqual({
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('should not override the Content-Type header when one is provided', () => {
    expect(addContentType({
      headers: {
        'Content-Type': 'text',
      },
    })).toEqual({
      headers: {
        'Content-Type': 'text',
      },
    });
  });
});
