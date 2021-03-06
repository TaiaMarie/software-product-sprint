/**
 * Fetches Hello Taia ! from the server and adds it to the DOM.
 */
function getName() {
  console.log('name');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addNameToDom() function.
  textPromise.then(addNameToDom);
}

/** Adds a random counrty to the DOM. */
function addNameToDom(name) {
  console.log('Adding name to dom: ' + name);

  const nameContainer = document.getElementById('name-container');
  nameContainer.innerText = name;
}


