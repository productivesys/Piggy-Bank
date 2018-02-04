const Server = require('../../server');

describe('Server test', () => {
  test('responds with success for valid request', (done) => {
    const options = {
      method: 'POST',
      url: '/route',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('responds for invalid path', (done) => {
    const options = {
      method: 'POST',
      url: '/router',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  test('response message verified', (done) => {
    const options = {
      method: 'POST',
      url: '/route',
    };
    const output = 'This is a post request to /route';
    Server.inject(options, (response) => {
      expect(response.result.message).toBe(output);
      done();
    });
  });
});
