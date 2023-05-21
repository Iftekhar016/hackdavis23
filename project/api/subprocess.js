const { exec } = require('child_process');

export default function handler(req, res) {
  const pythonScriptPath = 'project/public/python/notes_parser/notes_parser.py';
  const pdfFilePath = 'C:/Users/ahmed/OneDrive/Documents/GitHub/hackdavis23/project/public/python/notes_parser/testFiles/b.pdf';

  const command = `python3 ${pythonScriptPath} ${pdfFilePath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      res.status(500).json({ error: 'Command execution failed' });
      return;
    }

    const output = {
      stdout,
      stderr
    };

    res.status(200).json(output);
  });
}
