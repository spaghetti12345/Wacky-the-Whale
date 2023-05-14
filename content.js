const statistics = [
    "Blue whales are the largest recorded animal in the world",
   
   "Several factors contribute to whales’ current endangered status, such as overfishing, pollution, dam/bridge construction, private/commercial boating, and commercial whaling.",
   
   "Almost 3 million whales were killed in the 20th century.",
   
   "53% of great whale species are endangered, and 71% of those species are critically endangered. That’s a lot!",
   
   "At least 300,000 whales and dolphins are killed each year unintentionally by fisheries.",
   
   "Great whales also play a part in the fight against climate change, accumulating up to 33 tons of carbon in their bodies over their lifespan and taking it out of the atmosphere.",
   
   "Blue whales can consume up to 8000 pounds of krill and photosynthetic plankton every day, managing the balance of life in ocean ecosystems."
   
   ];
   
let n = 0; 
length = statistics.length;
function changeStat(){
    let stat = statistics[n];
    n = n + 1;
    document.getElementById("stats").innerHTML = stat;
    if (n == length) {
    n = 0;
    }
}
let btn = document.getElementById("change-stat");
btn.addEventListener("click", changeStat);

function moveWhale() {
    console.log("hello");
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
      if (pos == 250) {
        clearInterval(id);
        moveWhale();
      } else {
        pos++; 
        elem.style.left = pos + "px"; 
      }
    }
  }
  window.onload = moveWhale;