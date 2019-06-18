var pubData = require("../mocks/pubs.json")

function findAllPubs(){
  return pubData
}

function findOpenPubsAtDAy(day){
  return pubData.filter((item) => {
    return item.openDays.includes(day)
  })
}

module.exports = {
  findAllPubs: findAllPubs,
  findOpenPubsAtDAy: findOpenPubsAtDAy
};
