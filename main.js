// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let hearts = document.getElementsByClassName("like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("url")
  .then(function(serverMessage) {
    heart.innerText = FULL_HEART;
  })
  .catch(function(error) {
    document.getElementById("modal").className = "";
  });
}

for (let glyph of hearts) {
  glyph.addEventListener("click", likeCallback);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
