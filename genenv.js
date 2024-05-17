const fs = require('fs');
require('dotenv').config();

const content = `
export const environment = {
    SUPABASE_KEY: "${process.env.SUPABASE_KEY}",
    DB_URL: "${process.env.DB_URL}",
}
`;

fs.writeFile('src/environments/environment.ts', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully!');
});
