Blockly.Blocks['hs_par'] = {
  init: function() {
    this.appendStatementInput("ITEMS")
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
    this.appendStatementInput("ITEMS")
        .setCheck(null)
        .appendField("Titulo Nivel")
        .appendField(new Blockly.FieldDropdown([["1","h1"], ["2","h2"], ["3","h3"], ["4","h4"], ["5","h5"], ["6","h6"]]), "LEVEL");
    this.setPreviousStatement(true, "dom");
    this.setNextStatement(true, "dom");
    this.setColour(225);
 this.setTooltip("Titulo");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput("texto..."), "TEXT")
        .appendField("\"");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_list'] = {
  init: function() {
    this.appendStatementInput("ITEMS")
        .setCheck("htmlLi")
        .appendField("Lista")
        .appendField(new Blockly.FieldDropdown([["numerada","ol"], ["no numerada","ul"]]), "TYPE");
    this.setPreviousStatement(true, "dom");
    this.setNextStatement(true, "dom");
    this.setColour(90);
 this.setTooltip("Lista");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_li'] = {
  init: function() {
    this.appendStatementInput("ITEMS")
        .setCheck(null)
        .appendField("Item de Lista");
    this.setPreviousStatement(true, "htmlLi");
    this.setNextStatement(true, "htmlLi");
    this.setColour(90);
 this.setTooltip("Item de lista");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_div'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Contenedor");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("Contenedor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_wraptext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput("texto..."), "TEXT")
        .appendField("\"")
        .appendField(new Blockly.FieldDropdown([["en negrita","strong"], ["en italica","em"], ["subrayado","underline"], ["simple","span"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Texto con estilo");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Imagen en")
        .appendField(new Blockly.FieldTextInput("http://pagina.com/imagen.png"), "SRC")
        .appendField("descripcion")
        .appendField(new Blockly.FieldTextInput("imagen de..."), "ALT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Imagen con dirección y descripción");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Enlace a ")
        .appendField(new Blockly.FieldTextInput("https://duckduckgo.com"), "HREF")
        .appendField("con texto")
        .appendField(new Blockly.FieldTextInput("link a un buscador"), "LABEL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Enlace a otra pagina con texto");
 this.setHelpUrl("");
  }
};