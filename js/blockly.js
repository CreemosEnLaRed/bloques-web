//@format

function getBlockList(firstBlock, parentBlock) {
  const children = [];

  let node = firstBlock;

  while (node !== null && node !== parentBlock) {
    children.push(node);
    node = node.getNextBlock();
  }

  return children;
}

function getChildBlockList(parentBlock) {
  const firstChild = parentBlock.getChildren(true)[0] || null;

  return getBlockList(firstChild, parentBlock);
}

function getBlockListFromBlock(firstBlock) {
  return getBlockList(firstBlock, null);
}

export {getBlockListFromBlock, getBlockList, getChildBlockList};
