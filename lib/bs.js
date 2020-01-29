Blockly.Blocks['bs_alert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Alerta")
        .appendField(new Blockly.FieldDropdown([["info","info"], ["peligro","danger"], ["advertencia","warning"], ["primary","primary"], ["exito","success"], ["claro","light"], ["oscuro","dark"]]), "TYPE");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_badge'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Insignia")
        .appendField(new Blockly.FieldDropdown([["info","info"], ["peligro","danger"], ["advertencia","warning"], ["primary","primary"], ["exito","success"], ["claro","light"], ["oscuro","dark"]]), "TYPE");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Boton")
        .appendField(new Blockly.FieldDropdown([["info","info"], ["peligro","danger"], ["advertencia","warning"], ["primary","primary"], ["exito","success"], ["claro","light"], ["oscuro","dark"]]), "TYPE");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_card'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Carta");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_card_body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cuerpo de Carta");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_card_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Imagen de Carta")
        .appendField(new Blockly.FieldTextInput("img/image.jpg"), "SRC")
        .appendField("descripcion")
        .appendField(new Blockly.FieldTextInput("imagen de..."), "ALT")
        .appendField("posicion")
        .appendField(new Blockly.FieldDropdown([["arriba","top"], ["abajo","bottom"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
