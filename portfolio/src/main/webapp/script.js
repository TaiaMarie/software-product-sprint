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
function getJStats() {
  fetch('/data').then(response => response.json()).then((myOb) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('data-container');
    myObListElement.innerHTML = '';
    console.log('Hawaii');
    console.log('Kansas');
    console.log('Washington');
  });}
  /** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
 function requestTranslation() {
        const text = document.getElementById('text').value;
        const languageCode = document.getElementById('language').value;
        const resultContainer = document.getElementById('result');
        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);
        fetch('/data', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
        });
      }
