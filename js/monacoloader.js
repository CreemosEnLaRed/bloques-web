//@format
/*globals require, monaco*/
require.config({paths: {vs: './lib/vs'}});

require.config({
  'vs/nls': {
    availableLanguages: {
      '*': 'es'
    }
  }
});

require(['vs/editor/editor.main'], function() {
  const node = document.getElementById('targetHTML'),
    editor = monaco.editor.create(node, {
      value: '<!-- el codigo va a aparecer aca -->',
      language: 'html'
    });

  window.appOnEditorLoaded(editor, node);
});
