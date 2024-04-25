<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>PDF Viewer</title>
 <!-- Include PDF.js library -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
 <style>
    #pdf-viewer {
      width: 100%;
      max-width: 800px; /* Adjust as needed */
      margin: 0 auto;
    }
 </style>
</head>
<body>
 <div id="pdf-viewer">
    <!-- Canvas for rendering PDF content -->
    <canvas id="pdf-canvas"></canvas>
 </div>

 <script type="text/javascript" src="script.js"></script>
</body>
</html>
