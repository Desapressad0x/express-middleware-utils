# express-middleware-utils

This is a package that provides utility middleware for Express.js. The main goal of this package is to offer extra functionalities to enhance security and control in Express applications.

## Installation

To install the express-middleware-utils package, use the following command:

```console
git clone https://github.com/Desapressad0x/express-middleware-utils.git
npm install && node .
```

## Functionalities

### Prevention against HTTP Parameter Pollution

By enabling the `unique_values` option in the configuration object, the middleware will ensure that query parameters (`req.query`) and body parameters (`req.body`) contain only unique values, removing any additional values that may cause HTTP parameter pollution.

Example configuration to enable prevention against HTTP Parameter Pollution:

```javascript
const config = {
  unique_values: {
    activated: true
  },
  // Other configuration options...
};
```

This is useful to avoid security issues related to HTTP parameter pollution.

### Server Maintenance

If the `maintenance` option is enabled in the configuration object, the middleware will return a response with the status 503 (Service Unavailable) when the server is in maintenance mode. This can be useful to show a maintenance page or display an informative message to users during that period.

Example configuration to enable server maintenance:

```javascript
const config = {
  maintenance: {
    activated: true,
    msg: 'The server is currently under maintenance.'
  },
  // Other configuration options...
};
```

You can also choose to send an HTML file as a response instead of a text message by enabling the `maintenance_file` option and specifying the file path.

### Handling Not Found Routes

If the `handler_404` option is enabled in the configuration object, the middleware will return a response with the status 404 (Not Found) when no matching route is found for the current request. This can be useful to handle invalid or non-existent URLs in your application.

Example configuration to enable handling of not found routes:

```javascript
const config = {
  handler_404: {
    activated: true,
    msg: 'Page not found.'
  },
  // Other configuration options...
};
```

Similar to the server maintenance option, you can choose to send an HTML file as a response by enabling the `404_file` option and specifying the file path.
