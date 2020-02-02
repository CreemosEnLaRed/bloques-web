//@format
import {
  div,
  img,
  table,
  thead,
  tbody,
  tr,
  td,
  a,
  ul,
  li,
  nav,
  ct
} from './dom.js';
import {
  childsToDom,
  childsFieldToDom,
  setupTags,
  fieldValue,
  checkboxValue,
  getItems
} from './domgen.js';

class Alert {
  constructor(attrs, childs) {
    this.type = attrs.type;
    this.childs = childs;
  }

  toDom(indent) {
    return div(
      {class: 'alert alert-' + this.type},
      indent,
      childsToDom(this, indent + 1)
    );
  }
}

function alertFromBlock() {
  return new Alert({type: fieldValue(this, 'TYPE')}, getItems(this));
}

class Button {
  constructor(attrs, childs) {
    this.type = attrs.type;
    this.childs = childs;
  }

  toDom(indent) {
    return div(
      {class: 'btn btn-' + this.type},
      indent,
      childsToDom(this, indent + 1)
    );
  }
}

function buttonFromBlock() {
  return new Button({type: fieldValue(this, 'TYPE')}, getItems(this));
}

class Badge {
  constructor(attrs, childs) {
    this.type = attrs.type;
    this.childs = childs;
  }

  toDom(indent) {
    return div(
      {class: 'badge badge-' + this.type},
      indent,
      childsToDom(this, indent + 1)
    );
  }
}

function badgeFromBlock() {
  return new Badge({type: fieldValue(this, 'TYPE')}, getItems(this));
}

class Card {
  constructor(_attrs, childs) {
    this.childs = childs;
  }

  toDom(indent) {
    return div({class: 'card'}, indent, childsToDom(this, indent + 1));
  }
}

function cardFromBlock() {
  return new Card({}, getItems(this));
}

class CardBody {
  constructor(_attrs, childs) {
    this.childs = childs;
  }

  toDom(indent) {
    return div({class: 'card-body'}, indent, childsToDom(this, indent + 1));
  }
}

function cardBodyFromBlock() {
  return new CardBody({}, getItems(this));
}

class CardImage {
  constructor({type, src, alt}, childs) {
    this.type = type;
    this.src = src;
    this.alt = alt;
    this.childs = childs;
  }

  toDom(indent) {
    return img(
      {class: 'card-img-' + this.type, src: this.src, alt: this.alt},
      indent
    );
  }
}

function cardImageFromBlock() {
  return new CardImage(
    {
      type: fieldValue(this, 'TYPE'),
      src: fieldValue(this, 'SRC'),
      alt: fieldValue(this, 'ALT')
    },
    getItems(this)
  );
}

class Container {
  constructor(_attrs, childs) {
    this.childs = childs;
  }

  toDom(indent) {
    return div({class: 'container'}, indent, childsToDom(this, indent + 1));
  }
}

function containerFromBlock() {
  return new Container({}, getItems(this));
}

class Row {
  constructor(_attrs, childs) {
    this.childs = childs;
  }

  toDom(indent) {
    return div({class: 'row'}, indent, childsToDom(this, indent + 1));
  }
}

function rowFromBlock() {
  return new Row({}, getItems(this));
}

class Col {
  constructor(_attrs, childs) {
    this.childs = childs;
  }

  toDom(indent) {
    return div({class: 'col'}, indent, childsToDom(this, indent + 1));
  }
}

function colFromBlock() {
  return new Col({}, getItems(this));
}

class Table {
  constructor({border, striped}, head, body) {
    this.border = border;
    this.striped = striped;
    this.head = head;
    this.body = body;
  }

  toDom(indent) {
    const cn =
      'table' +
      (this.border ? ' table-bordered' : '') +
      (this.striped ? ' table-striped' : '');
    return table({class: cn}, indent, [
      thead({}, indent + 1, childsFieldToDom(this.head, indent + 2)),
      tbody({}, indent + 1, childsFieldToDom(this.body, indent + 2))
    ]);
  }
}

function tableFromBlock() {
  return new Table(
    {
      border: checkboxValue(this, 'BORDER'),
      striped: checkboxValue(this, 'STRIPED')
    },
    getItems(this, 'HEAD'),
    getItems(this, 'BODY')
  );
}

class TableRow {
  constructor(_attrs, childs) {
    this.childs = childs;
  }

  toDom(indent) {
    return tr({}, indent, childsToDom(this, indent + 1));
  }
}

function tableRowFromBlock() {
  return new TableRow({}, getItems(this));
}

class TableCell {
  constructor(_attrs, childs) {
    this.childs = childs;
  }

  toDom(indent) {
    return td({}, indent, childsToDom(this, indent + 1));
  }
}

function tableCellFromBlock() {
  return new TableCell({}, getItems(this));
}

const NAVBAR_TYPE_TO_CN = {
  light: 'navbar navbar-expand-lg navbar-light bg-light',
  dark: 'navbar navbar-expand-lg navbar-dark bg-dark',
  primary: 'navbar navbar-expand-lg navbar-dark bg-primary',
  secondary: 'navbar navbar-expand-lg navbar-dark bg-secondary',
  info: 'navbar navbar-expand-lg navbar-dark bg-info',
  success: 'navbar navbar-expand-lg navbar-dark bg-success',
  danger: 'navbar navbar-expand-lg navbar-dark bg-danger',
  warning: 'navbar navbar-expand-lg navbar-dark bg-warning'
};
class NavBar {
  constructor({type, title}, childs) {
    this.type = type;
    this.title = title;
    this.childs = childs;
  }

  toDom(indent) {
    const cn = NAVBAR_TYPE_TO_CN[this.type];

    return nav({class: cn}, indent, [
      a({class: 'navbar-brand', href: '#'}, indent + 1, [ct(this.title)]),
      div({class: 'collapse navbar-collapse'}, indent + 1, [
        ul(
          {class: 'navbar-nav mr-auto'},
          indent + 2,
          childsToDom(this, indent + 3)
        )
      ])
    ]);
  }
}

function navbarFromBlock() {
  return new NavBar(
    {
      type: fieldValue(this, 'TYPE'),
      title: fieldValue(this, 'TITLE')
    },
    getItems(this)
  );
}

class NavItem {
  constructor({text, href}) {
    this.text = text;
    this.href = href;
  }

  toDom(indent) {
    return li({class: 'nav-item'}, indent, [
      a({class: 'nav-link', href: this.href}, indent + 1, [ct(this.text)])
    ]);
  }
}

function navItemFromBlock() {
  return new NavItem({
    text: fieldValue(this, 'TEXT'),
    href: fieldValue(this, 'HREF')
  });
}

const TAGS = [
    'bs_alert',
    'bs_button',
    'bs_badge',
    'bs_card',
    'bs_card_body',
    'bs_card_image',
    'bs_container',
    'bs_row',
    'bs_col',
    'bs_table',
    'bs_table_row',
    'bs_table_cell',
    'bs_navbar',
    'bs_navitem'
  ],
  SERIALIZERS = {
    bs_alert: alertFromBlock,
    bs_button: buttonFromBlock,
    bs_badge: badgeFromBlock,
    bs_card: cardFromBlock,
    bs_card_body: cardBodyFromBlock,
    bs_card_image: cardImageFromBlock,
    bs_container: containerFromBlock,
    bs_row: rowFromBlock,
    bs_col: colFromBlock,
    bs_table: tableFromBlock,
    bs_table_row: tableRowFromBlock,
    bs_table_cell: tableCellFromBlock,
    bs_navbar: navbarFromBlock,
    bs_navitem: navItemFromBlock
  };

function setup(Blockly) {
  setupTags(Blockly, TAGS, SERIALIZERS);
}

export {setup};
