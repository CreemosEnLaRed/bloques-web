Blockly.Blocks['hs_par'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Parrafo");
    this.appendStatementInput("ITEMS")
        .setCheck(["dom", "String", "Number"]);
    this.setPreviousStatement(true, "dom");
    this.setNextStatement(true, "dom");
    this.setColour(230);
 this.setTooltip("Parrafo");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Titulo Nivel")
        .appendField(new Blockly.FieldDropdown([["1","h1"], ["2","h2"], ["3","h3"], ["4","h4"], ["5","h5"], ["6","h6"]]), "LEVEL");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
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
    this.appendDummyInput()
        .appendField("Lista")
        .appendField(new Blockly.FieldDropdown([["numerada","ol"], ["no numerada","ul"]]), "TYPE");
    this.appendStatementInput("ITEMS")
        .setCheck("htmlLi");
    this.setPreviousStatement(true, "dom");
    this.setNextStatement(true, "dom");
    this.setColour(90);
 this.setTooltip("Lista");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['hs_li'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Item de Lista");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
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
        .appendField("Imagen");
    this.appendDummyInput()
        .appendField("en")
        .appendField(new Blockly.FieldTextInput("img/rainbow.png"), "SRC");
    this.appendDummyInput()
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
        .appendField(new Blockly.FieldTextInput("https://duckduckgo.com"), "HREF");
    this.appendDummyInput()
        .appendField("con texto")
        .appendField(new Blockly.FieldTextInput("link a un buscador"), "LABEL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Enlace a otra pagina con texto");
 this.setHelpUrl("");
  }
};

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
        .appendField(new Blockly.FieldTextInput("img/image.jpg"), "SRC");
    this.appendDummyInput()
        .appendField("descripcion")
        .appendField(new Blockly.FieldTextInput("imagen de..."), "ALT");
    this.appendDummyInput()
        .appendField("posicion")
        .appendField(new Blockly.FieldDropdown([["arriba","top"], ["abajo","bottom"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};