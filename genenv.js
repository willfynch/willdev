const fs = require('fs');
require('dotenv').config();

const content = `
export const environment = {
    SUPABASE_KEY: "${process.env.SUPABASE_KEY}",
    DB_URL: "${process.env.DB_URL}",
    EMAILJS_PUBLIC_KEY: "${process.env.EMAILJS_PUBLIC_KEY}",
    EMAILJS_SERVICE_ID: "${process.env.EMAILJS_SERVICE_ID}",
    EMAILJS_TEMPLATE_ID: "${process.env.EMAILJS_TEMPLATE_ID}"
}
`;

fs.writeFile('src/environments/environment.ts', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully!');
});
