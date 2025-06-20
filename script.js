document.getElementById("downloadBtn").addEventListener("click", async () => {
  const url = document.getElementById("urlInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!url) {
    resultDiv.textContent = "Please enter a URL.";
    return;
  }

  resultDiv.textContent = "Sending request...";

  try {
    const response = await fetch("https://dow-j8cl.onrender.com/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    const data = await response.json();

    if (response.ok) {
      resultDiv.textContent = "Download successful: " + JSON.stringify(data);
    } else {
      resultDiv.textContent = "Error: " + (data.error || "Unknown error");
    }
  } catch (err) {
    resultDiv.textContent = "Request failed: " + err.message;
  }
});
