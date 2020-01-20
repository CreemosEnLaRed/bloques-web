Blockly.JavaScript['hs_par'] = function(block) {
  var statements_items = Blockly.JavaScript.statementToCode(block, 'items');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['hs_title'] = function(block) {
  var dropdown_level = block.getFieldValue('level');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['hs_text'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['hs_list'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var statements_item = Blockly.JavaScript.statementToCode(block, 'item');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['hs_li'] = function(block) {
  var statements_items = Blockly.JavaScript.statementToCode(block, 'items');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};