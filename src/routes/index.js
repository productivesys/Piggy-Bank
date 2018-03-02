const moveToDashbboard = require('./getDashboard');
const updateAccountDetails = require('./updateAccountDetails');
const authenticate = require('./authRequest');
const verify = require('./verifyRequest');
const logout = require('./deleteRequest');
const editPassword = require('./editPassword');
const transactionRequest = require('./transaction.js');
const transferMoney = require('./transferMoney.js');
const signUp = require('./signup');
const miniStatement = require('./miniStatement');
const login = require('./login');

module.exports = [].concat(
  updateAccountDetails,
  editPassword, moveToDashbboard, transactionRequest,
  authenticate, verify, logout, transferMoney, signUp,
  miniStatement, login,
);
