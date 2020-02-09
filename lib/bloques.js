Blockly.Blocks['hs_par'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Parrafo");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
        .setCheck("hs_li");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, "hs_li");
    this.setNextStatement(true, "hs_li");
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("en")
        .appendField(new Blockly.FieldTextInput("img/rainbow.png"), "SRC");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .setAlign(Blockly.ALIGN_RIGHT)
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
        .appendField(new Blockly.FieldDropdown([["informacion","info"], ["peligro","danger"], ["advertencia","warning"], ["primaria","primary"], ["exito","success"], ["clara","light"], ["oscura","dark"]]), "TYPE");
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
        .setCheck(["bs_card_body", "bs_card_image"]);
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
    this.setPreviousStatement(true, ["bs_card_image", "bs_card_body"]);
    this.setNextStatement(true, ["bs_card_image", "bs_card_body"]);
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
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("descripcion")
        .appendField(new Blockly.FieldTextInput("imagen de..."), "ALT");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("posicion")
        .appendField(new Blockly.FieldDropdown([["arriba","top"], ["abajo","bottom"]]), "TYPE");
    this.setPreviousStatement(true, ["bs_card_image", "bs_card_body"]);
    this.setNextStatement(true, ["bs_card_image", "bs_card_body"]);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Filas");
    this.appendStatementInput("ITEMS")
        .setCheck("bs_row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_row'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fila");
    this.appendStatementInput("ITEMS")
        .setCheck("bs_col");
    this.setPreviousStatement(true, "bs_row");
    this.setNextStatement(true, "bs_row");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_col'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Columna");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, "bs_col");
    this.setNextStatement(true, "bs_col");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tabla")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "BORDER")
        .appendField("con bordes")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "STRIPED")
        .appendField("a rayas");
    this.appendDummyInput()
        .appendField("Cabecera");
    this.appendStatementInput("HEAD")
        .setCheck("bs_table_row");
    this.appendDummyInput()
        .appendField("Cuerpo");
    this.appendStatementInput("BODY")
        .setCheck("bs_table_row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_table_row'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fila de Tabla");
    this.appendStatementInput("ITEMS")
        .setCheck("bs_table_cell");
    this.setPreviousStatement(true, "bs_table_row");
    this.setNextStatement(true, "bs_table_row");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_table_cell'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Celda");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, "bs_table_cell");
    this.setNextStatement(true, "bs_table_cell");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_navbar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Barra de Navegacion")
        .appendField(new Blockly.FieldDropdown([["clara","light"], ["oscura","dark"], ["principal","primary"], ["secundaria","secondary"], ["informacion","info"], ["exito","success"], ["advertencia","warning"], ["peligro","danger"]]), "TYPE")
        .appendField("con")
        .appendField(new Blockly.FieldTextInput("Titulo"), "TITLE");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_navitem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Navegacion")
        .appendField(new Blockly.FieldTextInput("texto"), "TEXT");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("a")
        .appendField(new Blockly.FieldTextInput("http://duckduckgo.com"), "HREF");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bs_spacing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("margen exterior")
        .appendField(new Blockly.FieldDropdown([["todos","m-"], ["vertical","my-"], ["horizonal","mx-"], ["superior","mt-"], ["derecho","mr-"], ["inferior","mb-"], ["izquierdo","ml-"]]), "MARGIN")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "MARGIN_LEVEL")
        .appendField("interior")
        .appendField(new Blockly.FieldDropdown([["todos","p-"], ["vertical","py-"], ["horizonal","px-"], ["superior","pt-"], ["derecho","pr-"], ["inferior","mb-"], ["izquierdo","pl-"]]), "PADDING")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "PADDING_LEVEL");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['html_tag'] = {
  init: function() {
    this.appendValueInput("ATTRS")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["p","p"], ["h1","h1"], ["h2","h2"], ["h3","h3"], ["h4","h4"], ["h5","h5"], ["h6","h6"], ["strong","strong"], ["em","em"], ["span","span"], ["div","div"], ["img","img"], ["a","a"], ["hr","hr"], ["nav","nav"], ["button","button"], ["table","table"], ["thead","thead"], ["tbody","tbody"], ["tr","tr"], ["td","td"], ["ol","ol"], ["ul","ul"], ["li","li"]]), "TAG");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['html_attr'] = {
  init: function() {
    this.appendValueInput("NEXT")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["class","class"], ["src","src"], ["alt","alt"], ["href","href"]]), "KEY")
        .appendField(new Blockly.FieldTextInput(""), "VALUE");
    this.setOutput(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['html_tag_raw'] = {
  init: function() {
    this.appendValueInput("ATTRS")
        .setCheck(null)
        .appendField("<")
        .appendField(new Blockly.FieldTextInput("tag"), "TAG");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(">");
    this.appendStatementInput("ITEMS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("</")
        .appendField(new Blockly.FieldLabelSerializable("tag"), "TAG_CLOSE")
        .appendField(">");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['html_attr_raw'] = {
  init: function() {
    this.appendValueInput("NEXT")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("attr"), "KEY")
        .appendField("=\"")
        .appendField(new Blockly.FieldTextInput(""), "VALUE")
        .appendField("\"");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
