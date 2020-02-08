//@format
import {ce} from './dom.js';
import {
  childsToDom,
  setupTags,
  fieldValue,
  inputValue,
  getItems
} from './domgen.js';

class Tag {
  constructor({tag, attrs}, childs) {
    this.tag = tag;
    this.attrs = attrs;
    this.childs = childs;
  }

  toDom(indent) {
    const attrs = this.attrs === null ? {} : this.attrs.toDomAttrs({}),
      childs = childsToDom(this, indent + 1);
    console.log(this.tag, attrs, indent, childs);
    return ce(this.tag, attrs, indent, childs);
  }
}

class Attr {
  constructor({key, value, next}) {
    this.key = key;
    this.value = value;
    this.next = next;
  }

  toDomAttrs(attrs) {
    attrs[this.key] = this.value;
    return this.next === null ? attrs : this.next.toDomAttrs(attrs);
  }

  toDom(_indent) {
    return null;
  }
}

function tagFromBlock() {
  const attrs = inputValue(this, 'ATTRS').connection.targetBlock();
  return new Tag(
    {
      tag: fieldValue(this, 'TAG'),
      attrs: attrs === null ? null : attrs.hsToDom()
    },
    getItems(this)
  );
}

function attrFromBlock(obj, key) {
  const next = inputValue(obj, 'NEXT').connection.targetBlock();
  return new Attr({
    key: key,
    value: fieldValue(obj, 'VALUE'),
    next: next === null ? null : next.hsToDom()
  });
}

function classFromBlock() {
  return attrFromBlock(this, 'class');
}
function hrefFromBlock() {
  return attrFromBlock(this, 'href');
}
function srcFromBlock() {
  return attrFromBlock(this, 'src');
}
function altFromBlock() {
  return attrFromBlock(this, 'alt');
}

const TAGS = [
    'html_tag',
    'html_attr_class',
    'html_attr_href',
    'html_attr_src',
    'html_attr_alt'
  ],
  SERIALIZERS = {
    html_tag: tagFromBlock,
    html_attr_class: classFromBlock,
    html_attr_href: hrefFromBlock,
    html_attr_src: srcFromBlock,
    html_attr_alt: altFromBlock
  };

function setup(Blockly) {
  setupTags(Blockly, TAGS, SERIALIZERS);
}

export {setup};
