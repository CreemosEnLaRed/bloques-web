//@format

function getChildBlockList(block, fieldId) {
  const firstChild = block.getInputTargetBlock(fieldId);
  return getBlockListFromBlock(firstChild);
}

function getBlockListFromBlock(firstBlock) {
  const result = [];

  let node = firstBlock;
  while (node !== null) {
    result.push(node);
    node = node.getNextBlock();
  }

  return result;
}

export {getBlockListFromBlock, getChildBlockList};
