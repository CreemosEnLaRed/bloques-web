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

function attrFromBlock() {
  const next = inputValue(this, 'NEXT').connection.targetBlock();
  return new Attr({
    key: fieldValue(this, 'KEY'),
    value: fieldValue(this, 'VALUE'),
    next: next === null ? null : next.hsToDom()
  });
}

const TAGS = ['html_tag', 'html_attr'],
  SERIALIZERS = {
    html_tag: tagFromBlock,
    html_attr: attrFromBlock
  };

function setup(Blockly) {
  setupTags(Blockly, TAGS, SERIALIZERS);
}

export {setup};
