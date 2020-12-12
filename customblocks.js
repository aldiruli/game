//index warna 1
Blockly.Blocks['warna_level1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pilih warna ")
        .appendField(new Blockly.FieldColour("#ffffff"), "warna");
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['warna_level1'] = function(block) {
  var colour_warna = block.getFieldValue('warna');
  if (colour_warna==="#ff0000") {
    var code = "document.getElementById('lingkaran').style.backgroundColor='red';"
    alert("berhasil");window.location="index2.html";
  }else {
    alert("coba lagi");
  }
  return code;
};

//index warna 2
Blockly.Blocks['warna_level2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pilih warna ")
        .appendField(new Blockly.FieldColour("#ffffff"), "warna");
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['warna_level2'] = function(block) {
  var colour_warna = block.getFieldValue('warna');
  if (colour_warna==="#ffff66") {
    var code = "document.getElementById('lingkaran').style.backgroundColor='#ffff66';"
    alert("berhasil");window.location="index3.html";
  }if (colour_warna==="#ffff33") {
    var code = "document.getElementById('lingkaran').style.backgroundColor='#ffff33';"
    alert("berhasil");window.location="index3.html";
  }if (colour_warna==="#ffff00") {
    var code = "document.getElementById('lingkaran').style.backgroundColor='#ffff00';"
    alert("berhasil");window.location="index3.html";
  }else {
    alert("coba lagi");
  }
  return code;
};

//index warna 3
Blockly.Blocks['warna_level3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pilih warna ")
        .appendField(new Blockly.FieldColour("#ffffff"), "warna");
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['warna_level3'] = function(block) {
  var colour_warna = block.getFieldValue('warna');
  if (colour_warna==="#33ff33") {
    var code = "document.getElementById('lingkaran').style.backgroundColor='#33ff33';"
    alert("berhasil");window.location="index_lampu.html";
  }if (colour_warna==="#33cc00") {
    var code = "document.getElementById('lingkaran').style.backgroundColor='#33cc00';"
    alert("berhasil");window.location="index_lampu.html";
  }if (colour_warna==="#009900") {
    var code = "document.getElementById('lingkaran').style.backgroundColor='#009900';"
    alert("berhasil");window.location="index_lampu.html";
  }
  return code;
};

//index warna lampu
Blockly.Blocks['laper'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("lampu pertama")
        .appendField(new Blockly.FieldColour("#ffffff"), "pertama");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['laper'] = function(block) {
  var colour_light = block.getFieldValue('pertama');
  if (colour_light==="#ff0000") {
    var code = "document.getElementById('merah').style.backgroundColor='#ff0000';"
  }
  return code;
};

Blockly.Blocks['lake'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("lampu kedua")
        .appendField(new Blockly.FieldColour("#ffffff"), "kedua");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['lake'] = function(block) {
  var colour_light = block.getFieldValue('kedua');
  if (colour_light==="#ffff66") {
    var code = "document.getElementById('kuning').style.backgroundColor='#ffff66';"
  }if (colour_light==="#ffff33") {
    var code = "document.getElementById('kuning').style.backgroundColor='#ffff33';"
  }if (colour_light==="#ffff00") {
    var code = "document.getElementById('kuning').style.backgroundColor='#ffff00';"
  }
  return code;
};

Blockly.Blocks['lati'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("lampu ketiga")
        .appendField(new Blockly.FieldColour("#ffffff"), "ketiga");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['lati'] = function(block) {
  var colour_light = block.getFieldValue('ketiga');
  if (colour_light==="#33ff33") {
    var code = "document.getElementById('hijau').style.backgroundColor='#33ff33';"
  }if (colour_light==="#33cc00") {
    var code = "document.getElementById('hijau').style.backgroundColor='#33cc00';"
  }if (colour_light==="#009900") {
    var code = "document.getElementById('hijau').style.backgroundColor='#009900';"
  }
  return code;
};

//jalan_level1
Blockly.Blocks['maju'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jalan")
        .appendField(new Blockly.FieldTextInput("maju"), "maju");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['maju'] = function(block) {
  var text_depan = block.getFieldValue('maju');
  var y=document.getElementById('charID').offsetLeft;
  y= y +10;
  document.getElementById('charID').style.left= y + "px";

  return code;

};

Blockly.Blocks['kanan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jalan")
        .appendField(new Blockly.FieldTextInput("kanan"), "kanan");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['kanan'] = function(block) {
  var text_bawah = block.getFieldValue('kanan');
    var x=document.getElementById('charID').offsetTop;
    x= x -100;
    document.getElementById('charID').style.top= x + "px";
  return code;
};

Blockly.Blocks['kiri'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jalan")
        .appendField(new Blockly.FieldTextInput("kiri"), "kiri");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['kiri'] = function(block) {
  var text_bawah = block.getFieldValue('kiri');
  var x=document.getElementById('charID').offsetTop;
  x= x -200;
  document.getElementById('charID').style.top= x + "px";
  return code;
};
