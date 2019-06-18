console.log("launching app");

var pubService = require("./services/pubs.service")

console.log(pubService.findAllPubs());
console.log(pubService.findOpenPubsAtDAy("Friday"));
console.log(pubService.findOpenPubsAtDAy("Monday"));

module.exports = {
  services: {
    pubService : pubService
  }
}
