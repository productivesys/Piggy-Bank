
const getReqValue = require('./getRequestWithValue');
const moveToDashbboard = require('./getDashboard');
const loginRequest = require('./loginRequest');
const updateAccountDetails = require('./updateAccountDetails');
const showLogin = require('./getLogin');
const editPassword = require('./editPassword');

module.exports = [].concat(
  getReqValue, loginRequest, updateAccountDetails,
  showLogin, editPassword, moveToDashbboard,
);
