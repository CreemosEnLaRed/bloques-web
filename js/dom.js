//@format

function ce(tagName, attrs, indentLevel, childs) {
  const node = document.createElement(tagName);

  if (attrs) {
    for (let key in attrs) {
      node.setAttribute(key, attrs[key]);
    }
  }

  if (childs && childs.length > 0) {
    const baseIndentStr = getIndentStr(indentLevel),
      indentStr = baseIndentStr + BASE_INDENT;

    node.appendChild(newLine());
    node.appendChild(ct(baseIndentStr));
    for (let i = 0, len = childs.length; i < len; i += 1) {
      node.appendChild(ct(indentStr));
      node.appendChild(childs[i]);
    }
    node.appendChild(newLine());
    node.appendChild(ct(indentStr));
  }

  return node;
}

function ct(text) {
  return document.createTextNode('' + text);
}

function newLine() {
  return ct('\n');
}

const INDENT_CACHE = new Array(100);

function getIndentStr(level) {
  if (level < 100) {
    const str = INDENT_CACHE[level];

    if (str === undefined) {
      const newStr = mkIndent(level);
      INDENT_CACHE[level] = newStr;
      return newStr;
    } else {
      return str;
    }
  }

  return mkIndent(level);
}

const BASE_INDENT = '  ';
function mkIndent(level) {
  let result = '';

  for (let i = 0; i < level; i += 1) {
    result += BASE_INDENT;
  }

  return result;
}

function byId(id) {
  return document.getElementById(id);
}

function setDisplay(node, value) {
  node.style.display = value;
}

export {ce, ct, byId, setDisplay};
