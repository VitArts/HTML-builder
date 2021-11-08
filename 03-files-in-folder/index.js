const fs = require('fs/promises');
const path = require('path');

const folder = path.join(__dirname, 'secret-folder');

async function readFolder() {
  try {
    const files = await fs.readdir(folder, { withFileTypes: true });

    for (const file of files)
      if (file.isFile()) {
        const fileDir = path.join(folder, file.name);
        const fileExp = path.extname(fileDir).slice(1);
				const fileName = path.parse(fileDir).name;
        const stat = await fs.stat(fileDir);
				const kb = (stat.size / 1024).toFixed(2);
        console.log(`${fileName} - ${fileExp} - ${kb}kb`);
      }
  } catch (err) {
    console.error(err);
  }
}

readFolder();