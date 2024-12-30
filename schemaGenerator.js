const Tesseract = require('tesseract.js');

const extractData = async (filePath) => {
  const { data: { text } } = await Tesseract.recognize(filePath, 'eng');
  // Extract relevant details from the text (e.g., name, email, phone, etc.)
  // This is a placeholder; adjust the extraction logic as needed
  const extractedData = {
    name: 'Extracted Name',
    email: 'extracted.email@example.com',
    phone: '123-456-7890',
    address: 'Extracted Address',
    date_of_birth: '1990-01-01'
  };
  return extractedData;
};

module.exports = { extractData };
