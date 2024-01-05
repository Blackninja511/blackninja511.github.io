document.getElementById('downloadButton').addEventListener('click', function() {
    // Repeat the download process 10 times
    for (let i = 0; i < 100; i++) {
      // Create a Blob containing the file data
      var blob = new Blob([`Your computer is now hacked ${i + 1}.`], { type: "text/plain" });
  
      // Create a link element
      var a = document.createElement('a');
  
      // Set the download attribute with the desired file name
      a.download = `example_${i + 1}.txt`;
  
      // Create a URL for the Blob and set it as the href attribute of the link
      a.href = window.URL.createObjectURL(blob);
  
      // Append the link to the body
      document.body.appendChild(a);
  
      // Trigger a click on the link to start the download
      a.click();
  
      // Remove the link from the DOM
      document.body.removeChild(a);
    }
  });
  