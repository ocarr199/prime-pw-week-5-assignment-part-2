
// Selecting all the buttons
let numOfBtns = document.querySelectorAll('.btn').length
for (let i = 0; i < numOfBtns; i++) {
// add event listener of click to the buttons
  document.querySelectorAll(".btn")[i].addEventListener('click', function() {
//  declaring variable to decide what sound to play
    let albumClicked = this.textContent;

 //  switch statement for choosing sound file
    switch (albumClicked) {
      case "Mac Miller":
        let WhatsTheUse = new Audio('songs/WhatsTheUse.mp3');
        WhatsTheUse.play();
        break;
      case "Radiohead":
        let WeirdFishes = new Audio(`songs/WeirdFishes.mp3`);
        WeirdFishes.play();
        break;
      case "BROCKHAMPTON":
        let FAKE = new Audio(`songs/FAKE.mp3`);
        FAKE.play();
        break;
      case "Earl Sweatshirt":
        let Riot = new Audio(`songs/Riot.mp3`);
        Riot.play();
        break;
      case "Pink Floyd":
        let Potw = new Audio(`songs/POTW.mp3`);
        Potw.play();
        break;
      default:
        console.log(albumClicked)
    };
  });

};
