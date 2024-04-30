 
    // PDF.js worker source
    const workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

    // PDF file URL
    const pdfUrl = '20230911114747.pdf'; // Make sure this matches the name of your PDF file

    // Initialize PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

    // Fetch the PDF document
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc) {
      // Get the first page of the PDF
      return pdfDoc.getPage(1);
    }).then(function(page) {
      const canvas = document.getElementById('pdf-canvas');
      const context = canvas.getContext('2d');

      // Set canvas dimensions to match the page dimensions
      const viewport = page.getViewport({ scale: 1.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render the PDF page on the canvas
      page.render({
        canvasContext: context,
        viewport: viewport
      });
    }).catch(function(error) {
      console.error('Error loading PDF:', error);
    });