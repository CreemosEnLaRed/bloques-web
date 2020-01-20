//@format
/*globals Blockly*/

import {byId, setDisplay, ct} from './dom.js';
import {setup} from './hs.js';
import {getBlockListFromBlock} from './blockly.js';

function onWorkspaceUpdate(_e, workspace, targetDomNode, targetHTMLNode) {
  targetDomNode.innerHTML = '';
  workspace.getTopBlocks(true).forEach((block, _i, _it) =>
    getBlockListFromBlock(block).forEach((childBlock, _j, _it1) => {
      targetDomNode.appendChild(childBlock.hsToDom().toDom(0));
      targetDomNode.appendChild(ct('\n\n'));
    })
  );

  targetHTMLNode.innerText = targetDomNode.innerHTML;
}

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
    onWorkspaceUpdate(e, workspace, targetDomNode, targetHTMLNode)
  );
  setup(Blockly);

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

main();
