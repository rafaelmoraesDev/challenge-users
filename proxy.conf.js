const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "localhost:8080/",
    secure: false,
    logLevel: "debug"
  }
]
module.exports = PROXY_CONFIG
