var intervalId = window.setInterval(async function(){
  //navigator.clipboard.writeText(document.documentElement.innerHTML);
  try {
    // Extract the current HTML of the page
    const htmlContent = document.documentElement.innerHTML;

    // Send the HTML to the C# server
    const response = await fetch("http://localhost:58001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html: htmlContent })
    });

    if (!response.ok) {
      //console.error("Server responded with an error:", response.status, response.statusText);
    } else {
      //console.log("HTML sent successfully:", response.status);
    }
  } catch (error) {
    //console.error("Failed to send HTML:", error);
  }
}, 1250);

