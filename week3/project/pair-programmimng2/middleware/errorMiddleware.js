const error = (error, req, res, next) => {
  console.error(error.message);
  next(error);
};

module.exports = error;
