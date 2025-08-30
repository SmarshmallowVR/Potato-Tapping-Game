let awayTime = 0;
chrome.storage.local.get(["numOfSessions"], (result) => {
let numberOfSessions = result.numOfSessions || 0;
chrome.storage.local.set({ numOfSessions: numberOfSessions });
});

setInterval(function() {
  let currentPotatoes = 0;
  let multiplier = 1;
  let allPotatoes = 0;
  let totalAway = 0;

  chrome.storage.local.get(["away"], (result) => {
  totalAway = result.away || 0;
  });

  chrome.storage.local.get(["multiplying"], (result) => {
    multiplier = result.multiplying || 1;

    chrome.storage.local.get(["totalOfAll"], (result) => {
      allPotatoes = result.totalOfAll || 0;
      allPotatoes = Number(allPotatoes);

      chrome.storage.local.get(["current"], (result) => {
        currentPotatoes = result.current || 0;
        currentPotatoes = Number(currentPotatoes);
        currentPotatoes = currentPotatoes + (1 * multiplier);
        totalAway = totalAway + (1 * multiplier);
        allPotatoes = allPotatoes + (1 * multiplier);
        
        chrome.storage.local.set({ away: totalAway });
        chrome.storage.local.set({ current: currentPotatoes });
        chrome.storage.local.set({ totalOfAll: allPotatoes });
      });
    });
  });
  console.log("Enjoy More Potatoes :)");
}, 20000);

setInterval(function() {
    chrome.storage.local.get(["multiplying"], (result) => {
    multiplier = result.multiplying || 1;
    awayTime = awayTime + (1 * multiplier);
  chrome.storage.local.set({ timeAway: awayTime })
    });
}, 20000);