//@format

function readerOnLoad(fn) {
  const reader = new window.FileReader();
  reader.onload = function(e1) {
    fn(e1.target.result);
  };

  return reader;
}

function readFileAsText(file, fn) {
  const reader = readerOnLoad(fn);
  reader.readAsText(file);
}

function readFirstInputFileAsText(input, fn) {
  const files = input.files;

  if (files.length === 0) {
    return;
  }

  return readFileAsText(files[0], fn);
}

export {readFirstInputFileAsText, readFileAsText};
