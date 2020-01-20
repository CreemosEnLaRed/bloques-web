//@format

function ce(tagName, attrs, childs) {
  const node = document.createElement(tagName);

  if (attrs) {
    for (let key in attrs) {
      node.setAttribute(key, attrs[key]);
    }
  }

  if (childs) {
    for (let i = 0, len = childs.length; i < len; i += 1) {
      node.appendChild(childs[i]);
    }
  }

  return node;
}

function ct(text) {
  return document.createTextNode('' + text);
}

function byId(id) {
  return document.getElementById(id);
}

function setDisplay(node, value) {
  node.style.display = value;
}

export {ce, ct, byId, setDisplay};
