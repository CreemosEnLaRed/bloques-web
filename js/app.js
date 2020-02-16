//@format
/*globals Blockly*/
import {byId, setDisplay, ct} from './dom.js';
import {setup as setupHS} from './hs.js';
import {setup as setupBS} from './bs.js';
import {setup as setupHTML} from './html.js';
import {getBlockListFromBlock} from './blockly.js';
import {readFirstInputFileAsText} from './file.js';
import {downloadAs} from './download.js';

const BLOCK_CHANGE = Blockly.Events.BLOCK_CHANGE;
function onWorkspaceUpdate(
  e,
  workspace,
  targetDomNode,
  editor,
  genFullPageNode
) {
  targetDomNode.innerHTML = '';
  workspace.getTopBlocks(true).forEach((block, _i, _it) =>
    getBlockListFromBlock(block).forEach((childBlock, _j, _it1) => {
      const node = childBlock.hsToDom().toDom(0);
      if (node !== null) {
        targetDomNode.appendChild(node);
        targetDomNode.appendChild(ct('\n\n'));
      }
    })
  );

  if (e.type === BLOCK_CHANGE) {
    if (e.element === 'field' && e.name === 'TAG') {
      const block = workspace.getBlockById(e.blockId);
      block.setFieldValue(e.newValue, 'TAG_CLOSE');
    }
  }

  setEditorValue(editor, targetDomNode.innerHTML, genFullPageNode.checked);
}

const HTML_PREFIX = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mi Pagina</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  </head>
  <body class="p-3">
  <!-- v -->
`,
  HTML_SUFFIX = `
  <!-- ^ -->
  </body>
</html>
`;
function setEditorValue(editor, bodyHTML, genFullPage) {
  const html = genFullPage ? HTML_PREFIX + bodyHTML + HTML_SUFFIX : bodyHTML;
  editor.setValue(html);
}

function exportWorkspace(workspace) {
  const xmlDom = Blockly.Xml.workspaceToDom(workspace),
    xmlText = Blockly.Xml.domToText(xmlDom);

  downloadAs(
    xmlText,
    'bloques-' + new Date().toISOString().replace(/[: .]/g, '-') + '.bloques',
    'application/xml'
  );
}

function importWorkspace(workspace, input) {
  readFirstInputFileAsText(input, xmlText => {
    const xmlDom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(xmlDom, workspace);
  });
}

function hideAndShow(toHide, toShow) {
  toHide.forEach(node => setDisplay(node, 'none'));
  setDisplay(toShow, 'block');
}

function activeTab(toActivate, toDeactivate) {
  toActivate.className = 'nav-link active';
  toDeactivate.forEach(node => (node.className = 'nav-link'));
}

let editor = null;
function main() {
  const workspace = Blockly.inject('blocklyDiv', {
      media: './media/',
      toolbox: byId('toolbox')
    }),
    targetDomNode = byId('targetDOM'),
    targetHTMLNode = byId('targetHTML'),
    genFullPageNode = byId('htmlCompleto'),
    fileSectionNode = byId('fileSection'),
    tabPagina = byId('tabPagina'),
    tabFile = byId('tabFile'),
    tabHTML = byId('tabHTML'),
    exportBtn = byId('export'),
    importBtn = byId('import'),
    fileImport = byId('file-import');

  workspace.addChangeListener(e =>
    onWorkspaceUpdate(e, workspace, targetDomNode, editor, genFullPageNode)
  );
  setupHS(Blockly);
  setupBS(Blockly);
  setupHTML(Blockly);

  tabPagina.addEventListener('click', _ => {
    hideAndShow([targetHTMLNode, fileSectionNode], targetDomNode);
    activeTab(tabPagina, [tabHTML, tabFile]);
  });

  tabHTML.addEventListener('click', _ => {
    hideAndShow([targetDomNode, fileSectionNode], targetHTMLNode);
    activeTab(tabHTML, [tabPagina, tabFile]);
  });

  tabFile.addEventListener('click', _ => {
    hideAndShow([targetHTMLNode, targetDomNode], fileSectionNode);
    activeTab(tabFile, [tabHTML, tabPagina]);
  });

  exportBtn.addEventListener('click', _ => exportWorkspace(workspace));
  importBtn.addEventListener('click', _ =>
    importWorkspace(workspace, fileImport)
  );
}

window.appOnEditorLoaded = function(ed, _node) {
  editor = ed;
  byId('targetHTML').style.display = 'none';
};
main();
