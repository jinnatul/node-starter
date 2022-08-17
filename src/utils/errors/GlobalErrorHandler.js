const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

export default (err, req, res, next) => {
  console.log("Global", err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (err.message === "invalid_request" || err.message === "invalid_grant") {
    err.message = "Request failed! Try again later.";
  }

  if (process.env.STAGE === "Development") {
    sendErrorDev(err, res);
  } else {
    sendErrorProd(err, res);
  }
};
