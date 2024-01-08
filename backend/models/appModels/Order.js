const mongoose = require('mongoose');
const express = require('express');
const PDFDocument = require('pdfkit');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');
const app = express();

const router = express.Router();

router.post('/generate-pdf', async (req, res) => {
  try {
    // Retrieve the order data from the request
    const orderData = req.body;

    // Paths to the HTML templates
    const actaTemplatePath = path.join(__dirname, 'Plantilla', 'ACTA.html');
    const planillaTemplatePath = path.join(__dirname, 'Plantilla', 'PLANILLAJES.html');

    // Generate PDFs from HTML content
    const actaPdfBuffer = await generatePdfFromTemplate(actaTemplatePath, orderData);
    const planillaPdfBuffer = await generatePdfFromTemplate(planillaTemplatePath, orderData);

    // Create a zip file and add PDF buffers
    const zip = archiver('zip', { zlib: { level: 9 } });
    res.attachment('orders.zip');
    zip.pipe(res);

    zip.append(actaPdfBuffer, { name: 'ACTA.pdf' });
    zip.append(planillaPdfBuffer, { name: 'PLANILLAJES.pdf' });
    zip.finalize();

  } catch (error) {
    console.error('Error para generar el PDF: ', error);
    res.status(500).send('Internal Server Error');
  }
});

// A helper function to generate a PDF using PDFKit
function generatePdfFromTemplate(templatePath, data) {
  return new Promise((resolve, reject) => {
    try {
      // Read HTML template and replace placeholders
      const template = fs.readFileSync(templatePath, 'utf8');
      const filledTemplate = replacePlaceholders(template, data);

      // Create a PDF document
      const doc = new PDFDocument();
      const buffers = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });

      // Add content to the PDF here using PDFKit methods
      doc.text(filledTemplate); // This is a simplistic example. You would parse your HTML and apply styling as needed.

      // Finalize PDF file
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

// A helper function to replace placeholders in the template with actual data
function replacePlaceholders(template, data) {
  // Replace this with actual logic to replace placeholders with data
  return template.replace(/{{orderId}}/g, data.orderId); // example placeholder replacement
}


// Mongoose model (should be defined elsewhere)
const orderSchema = new mongoose.Schema({
  // your schema definition
});
module.exports = router;
module.exports = mongoose.model('Order', orderSchema);
