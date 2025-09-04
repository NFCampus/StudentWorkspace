document.getElementById('accessForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const matrix = document.getElementById('matrix').value.trim();
  const timestamp = new Date().toISOString();

  fetch('folders.json')
    .then(response => response.json())
    .then(data => {
      logAccess(matrix, timestamp);

      if (data[matrix]) {
        document.getElementById('result').innerHTML = `
          ✅ Folder found! <br>
          <a href="${data[matrix]}" target="_blank">Open Your Folder</a>
        `;
      } else {
        document.getElementById('result').innerHTML = `
          ❌ Matrix number not found. Please check and try again.
        `;
      }
    })
    .catch(error => {
      document.getElementById('result').textContent = "Error loading folder data.";
      console.error(error);
    });
});

function logAccess(matrix, timestamp) {
  console.log(`Access attempt: ${matrix} at ${timestamp}`);
  // You can later connect this to Google Sheets, Firebase, or a backend to store logs
}
