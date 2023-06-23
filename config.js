const middleware = function (config, app) {
  return function (req, res, next) {
    if (config["maintenance"].activated) {
      if (config["maintenance_file"].activated) {
        return res.status(503).sendFile(__dirname + "/" + config["maintenance_file"].file)
      }
      return res.status(503).send(config["maintenance"].msg)
    }    
    
    if (config["unique_values"].activated) {
      for (let key in req.query) {
        if (Array.isArray(req.query[key])) {
          req.query[key] = req.query[key][0];
        }
      }
      for (let key in req.body) {
        if (Array.isArray(req.body[key])) {
          req.body[key] = req.body[key][0];
        }
      }
    }
     
    if (config["handler_404"].activated) {
      const rotas = app._router.stack.filter(r => r.route).map(r => r.route.path);
      if (!rotas.includes(req.path)) {
        if (config["404_file"].activated) {
          return res.status(404).sendFile(__dirname + "/" + config["404_file"].file)
        }
        return res.status(404).send(config["handler_404"].msg)
      }
    }
   next();
   };
};

module.exports = middleware;
