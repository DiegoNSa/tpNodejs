var serviceModule = require("pub-services")

module.exports = {
  getListPub: serviceModule.services.pubService.findAllPubs,
  getOpenPub: serviceModule.services.pubService.findOpenPubsAtDAy
}
