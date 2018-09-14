const createAndAppend = function (tag, htmlclass, text, parent) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (htmlclass) { element.classList.add(htmlclass) }
  parent.appendChild(element);

  return element;
}

module.exports = createAndAppend;
