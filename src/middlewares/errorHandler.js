const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: 'Ocurrio un error con el servidor',
    error: err.stack
  });
}

export default errorHandler;