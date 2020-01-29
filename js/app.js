//@format
/*globals Blockly*/

import {byId, setDisplay, ct} from './dom.js';
import {setup as setupHS} from './hs.js';
import {setup as setupBS} from './bs.js';
import {getBlockListFromBlock} from './blockly.js';

function onWorkspaceUpdate(_e, workspace, targetDomNode, editor) {
  targetDomNode.innerHTML = '';
  workspace.getTopBlocks(true).forEach((block, _i, _it) =>
    getBlockListFromBlock(block).forEach((childBlock, _j, _it1) => {
      targetDomNode.appendChild(childBlock.hsToDom().toDom(0));
      targetDomNode.appendChild(ct('\n\n'));
    })
  );

  editor.setValue(targetDomNode.innerHTML);
}

let editor = null;
function main() {
  const workspace = Blockly.inject('blocklyDiv', {
      media: './media/',
      toolbox: byId('toolbox')
    }),
    targetDomNode = byId('targetDOM'),
    targetHTMLNode = byId('targetHTML'),
    tabPagina = byId('tabPagina'),
    tabHTML = byId('tabHTML');

  workspace.addChangeListener(e =>
    onWorkspaceUpdate(e, workspace, targetDomNode, editor)
  );
  setupHS(Blockly);
  setupBS(Blockly);

  tabPagina.addEventListener('click', _ => {
    setDisplay(targetHTMLNode, 'none');
    setDisplay(targetDomNode, 'block');
    tabPagina.className = 'nav-link active';
    tabHTML.className = 'nav-link';
  });

  tabHTML.addEventListener('click', _ => {
    setDisplay(targetDomNode, 'none');
    setDisplay(targetHTMLNode, 'block');
    tabHTML.className = 'nav-link active';
    tabPagina.className = 'nav-link';
  });
}

window.appOnEditorLoaded = function(ed, node) {
  editor = ed;
  node.style.display = 'none';
};
main();
