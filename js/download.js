//@format

function downloadAs(data, exportName, contentType) {
  const dataBlob = new Blob([data], {type: contentType});

  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(dataBlob, exportName);
  } else {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(dataBlob);
    link.setAttribute('download', exportName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export {downloadAs};
