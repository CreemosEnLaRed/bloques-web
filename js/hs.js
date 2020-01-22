//@format
import {ce, ct} from './dom.js';
import {getChildBlockList} from './blockly.js';

function childsToDom(obj, indent) {
  return obj.childs.map((child, _i, _it) => child.toDom(indent));
}

function Par(attrs, childs) {
  this.attrs = attrs;
  this.childs = childs;
}

Par.prototype.toDom = function(indent) {
  return ce('p', {}, indent, childsToDom(this, indent + 1));
};

function Title(attrs, childs) {
  this.text = attrs.text;
  this.level = attrs.level;
  this.childs = childs;
}

Title.prototype.toDom = function(indent) {
  return ce(this.level, {}, indent, childsToDom(this, indent + 1));
};

function Text(attrs) {
  this.text = attrs.text;
}

Text.prototype.toDom = function(_indent) {
  return ct(this.text);
};

function WrapText(attrs) {
  this.text = attrs.text;
  this.type = attrs.type;
}

WrapText.prototype.toDom = function(indent) {
  if (this.type === 'underline') {
    return ce('span', {style: 'text-decoration: underline'}, indent, [
      ct(this.text)
    ]);
  } else {
    return ce(this.type, {}, indent, [ct(this.text)]);
  }
};

function Img(attrs) {
  this.src = attrs.src;
  this.alt = attrs.alt;
}

Img.prototype.toDom = function(indent) {
  return ce('img', {src: this.src, alt: this.alt}, indent);
};

function Link(attrs) {
  this.href = attrs.href;
  this.label = attrs.label;
}

Link.prototype.toDom = function(indent) {
  return ce('a', {href: this.href}, indent, [ct(this.label)]);
};

function List(attrs, childs) {
  this.type = attrs.type;
  this.childs = childs;
}

List.prototype.toDom = function(indent) {
  return ce(this.type, {}, indent, childsToDom(this, indent + 1));
};

function Li(_attrs, childs) {
  this.childs = childs;
}

Li.prototype.toDom = function(indent) {
  return ce('li', {}, indent, childsToDom(this, indent + 1));
};

function Div(attrs, childs) {
  this.attrs = attrs;
  this.childs = childs;
}

Div.prototype.toDom = function(indent) {
  return ce('div', {}, indent, childsToDom(this, indent + 1));
};

function fieldValue(block, name) {
  return block.getFieldValue(name);
}

function getItems(block) {
  const children = getChildBlockList(block, 'ITEMS');
  return children.map((child, _i, _it) => child.hsToDom());
}

function hsToDomPar() {
  return new Par({}, getItems(this));
}

function hsToDomTitle() {
  return new Title({level: fieldValue(this, 'LEVEL')}, getItems(this));
}

function hsToDomText() {
  return new Text({text: fieldValue(this, 'TEXT')});
}

function hsToDomWrapText() {
  return new WrapText({
    text: fieldValue(this, 'TEXT'),
    type: fieldValue(this, 'TYPE')
  });
}

function hsToDomList() {
  return new List({type: fieldValue(this, 'TYPE')}, getItems(this));
}

function hsToDomLi() {
  return new Li({}, getItems(this));
}

function hsToDomDiv() {
  return new Div({}, getItems(this));
}

function hsToDomImg() {
  return new Img({src: fieldValue(this, 'SRC'), alt: fieldValue(this, 'ALT')});
}

function hsToDomLink() {
  return new Link({
    href: fieldValue(this, 'HREF'),
    label: fieldValue(this, 'LABEL')
  });
}

const TAGS = [
    'hs_par',
    'hs_title',
    'hs_text',
    'hs_list',
    'hs_li',
    'hs_div',
    'hs_wraptext',
    'hs_img',
    'hs_link'
  ],
  SERIALIZERS = {
    hs_par: hsToDomPar,
    hs_title: hsToDomTitle,
    hs_text: hsToDomText,
    hs_list: hsToDomList,
    hs_li: hsToDomLi,
    hs_div: hsToDomDiv,
    hs_wraptext: hsToDomWrapText,
    hs_img: hsToDomImg,
    hs_link: hsToDomLink
  };

function setup(Blockly) {
  const Blocks = Blockly.Blocks;

  TAGS.forEach((type, _i, _it) => setupBlock(Blocks[type], type));
}

function setupBlock(Block, type) {
  Block.hsToDom = SERIALIZERS[type];
}

export {setup};
