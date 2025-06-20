async function downloadContent() {
  const url = document.getElementById('urlInput').value;
  const status = document.getElementById('statusMessage');

  if (!url) {
    status.textContent = "Please enter a URL.";
    return;
  }

  status.textContent = "Downloading...";

  try {
    // Encode the URL for safe inclusion in a query string
    const encodedUrl = encodeURIComponent(url);
    const response = await fetch(`https://download-j1r3.onrender.com/download?url=${encodedUrl}`);

    const data = await response.json();

    if (response.ok) {
      status.textContent = "Download started or completed successfully.";
    } else {
      status.textContent = data.error || "Something went wrong.";
    }
  } catch (error) {
    status.textContent = "Network error. Please try again.";
  }
}
