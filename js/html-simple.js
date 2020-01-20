Blockly.Blocks['hs_par'] = {
  init: function() {
    this.appendStatementInput("items")
        .setCheck(["dom", "String", "Number"])
        .appendField("Parrafo");
    this.setPreviousStatement(true, "dom");
    this.setNextStatement(true, "dom");
    this.setColour(230);
 this.setTooltip("Parrafo");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_title'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("String")
        .appendField("Titulo")
        .appendField(new Blockly.FieldDropdown([["h1","h1"], ["h2","h2"], ["h3","h3"]]), "level");
    this.setPreviousStatement(true, "dom");
    this.setNextStatement(true, "dom");
    this.setColour(230);
 this.setTooltip("Titulo");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_text'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(["String", "Number"])
        .appendField("Texto")
        .appendField(new Blockly.FieldDropdown([["negrita","strong"], ["italica","em"], ["subrayado","underline"], ["simple","span"]]), "type");
    this.setPreviousStatement(true, "dom");
    this.setNextStatement(true, "dom");
    this.setColour(230);
 this.setTooltip("Texto con estilo");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_list'] = {
  init: function() {
    this.appendStatementInput("item")
        .setCheck("htmlLi")
        .appendField("Lista")
        .appendField(new Blockly.FieldDropdown([["numerada","ol"], ["no numerada","ul"], ["option","OPTIONNAME"]]), "type");
    this.setPreviousStatement(true, "dom");
    this.setNextStatement(true, "dom");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_li'] = {
  init: function() {
    this.appendStatementInput("items")
        .setCheck(null)
        .appendField("Item de Lista");
    this.setPreviousStatement(true, "htmlLi");
    this.setNextStatement(true, "htmlLi");
    this.setColour(230);
 this.setTooltip("Item de lista");
 this.setHelpUrl("");
  }
};