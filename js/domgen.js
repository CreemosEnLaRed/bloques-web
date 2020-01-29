//@format
import {getChildBlockList} from './blockly.js';

function childsToDom(obj, indent) {
  return obj.childs.map((child, _i, _it) => child.toDom(indent));
}

function fieldValue(block, name) {
  return block.getFieldValue(name);
}

function getItems(block) {
  const children = getChildBlockList(block, 'ITEMS');
  return children.map((child, _i, _it) => child.hsToDom());
}

function setupTags(Blockly, tags, serializers) {
  const Blocks = Blockly.Blocks;

  tags.forEach((type, _i, _it) => {
    Blocks[type].hsToDom = serializers[type];
  });
}

export {childsToDom, setupTags, fieldValue, getItems};
