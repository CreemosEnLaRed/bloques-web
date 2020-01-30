//@format
import {getChildBlockList} from './blockly.js';

function childsToDom(obj, indent) {
  return childsFieldToDom(obj.childs, indent);
}

function childsFieldToDom(childs, indent) {
  return childs.map((child, _i, _it) => child.toDom(indent));
}

function fieldValue(block, name) {
  return block.getFieldValue(name);
}

function checkboxValue(block, name) {
  return fieldValue(block, name) === 'TRUE';
}

function getItems(block, fieldName = 'ITEMS') {
  fieldName;
  const children = getChildBlockList(block, fieldName);
  return children.map((child, _i, _it) => child.hsToDom());
}

function setupTags(Blockly, tags, serializers) {
  const Blocks = Blockly.Blocks;

  tags.forEach((type, _i, _it) => {
    Blocks[type].hsToDom = serializers[type];
  });
}

export {
  childsToDom,
  childsFieldToDom,
  setupTags,
  fieldValue,
  checkboxValue,
  getItems
};
