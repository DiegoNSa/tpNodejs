var pubData = require("../mocks/pubs.json")
var moment = require("moment")

function findAllPubs(){
  return pubData
}

function findOpenPubsAtDAy(){
  return pubData.filter((item) => {
    return item.openDays.includes(moment().format('dddd'))
  })
}

module.exports = {
  findAllPubs: findAllPubs,
  findOpenPubsAtDAy: findOpenPubsAtDAy
};
