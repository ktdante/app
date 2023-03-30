function saveChanges(event) {
    event.preventDefault();
    textbox1.readOnly = true;
    textbox2.readOnly = true;
    document.getElementById('edit-btn').textContent = 'Edit';
    document.getElementById('edit-btn').onclick = enableEdit;
    fetch('/save', {
        method: 'POST',
        body: new FormData(document.getElementById('form'))
    })
    .then(response => response.text())
    .then(html => document.documentElement.innerHTML = html)
    .catch(error => console.error(error));
}

function enableEdit() {
    textbox1.readOnly = false;
    textbox2.readOnly = false;
    document.getElementById('edit-btn').style.display = 'none';
    document.getElementById('save-btn').style.display = 'block';
}