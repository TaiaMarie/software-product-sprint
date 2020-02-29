/**
 * Adds a random greeting to the page.
 */
function addRandomPlace() {
  const places =
      ['Dubai', 'Egypt', 'Bora Bora', 'Tahiti', 'Machu Picchu', 'Greece'];

  // Pick a random greeting.
  const place = places[Math.floor(Math.random() * places.length)];

  // Add it to the page.
  const placeContainer = document.getElementById('place-container');
  placeContainer.innerText = place;
}
function getJSON(){
    fetch('/data')  // sends a request to /my-data-url
    .then(response => response.json()) // parses the response as JSON
    .then((myOb) => { // now we can reference the fields in myOb!
    const adataListElement = document.getElementById('data-container');
    myObListElement.innerHTML = '';
    myObListElement.appendChild(
        createListElement('Hawaii'));
    myObListElement.appendChild(
        createListElement('Kansas'));
    myObListElement.appendChild(
        createListElement('Washington'));
    System.out.print(myOb)
});
/** Creates an <li> element containing txt. */
function createListElement(txt) {
  const liElement = document.createElement('liw');
  liElement.innerText = txt;
  return liElement;
}
}

