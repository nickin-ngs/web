<<<<<<< HEAD
const components = {
  "header": "header.html",
  "footer": "footer.html",
};

function loadHTML(divId, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`ไม่สามารถโหลด ${file} ได้`);
      return response.text();
    })
    .then(html => {
      document.getElementById(divId).innerHTML = html;
    })
    .catch(err => console.error(err));
}

for (const [divId, file] of Object.entries(components)) {
  loadHTML(divId, file);
}
=======
const components = {
  "header": "header.html",
  "footer": "footer.html",
};

function loadHTML(divId, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`ไม่สามารถโหลด ${file} ได้`);
      return response.text();
    })
    .then(html => {
      document.getElementById(divId).innerHTML = html;
    })
    .catch(err => console.error(err));
}

for (const [divId, file] of Object.entries(components)) {
  loadHTML(divId, file);
}
>>>>>>> 3cdf7b60ea8528d846bee17b79aa708b03e9c012
