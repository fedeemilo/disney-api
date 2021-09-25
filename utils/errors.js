const errServer = (res, err) =>
  res.status(500).json({
    ok: false,
    error: err.errors[0].message,
  });

const errRequest = (res, msg) =>
  res.status(400).json({
    ok: false,
    error: msg,
  });

module.exports = {
  errServer,
  errRequest,
};
