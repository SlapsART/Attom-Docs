// convert.js
import fs from "fs-extra";
import { remark } from "remark";
import html from "remark-html";

async function convertMarkdownToHTML(inputPath, outputPath) {
  try {
    const markdown = await fs.readFile(inputPath, "utf8");

    // Procesar con remark (maneja md y mdx)
    const processed = await remark().use(html).process(markdown);
    const htmlContent = processed.toString();

    // Escribir el archivo HTML
    await fs.outputFile(outputPath, htmlContent);
    console.log(`✅ Archivo convertido: ${outputPath}`);
  } catch (error) {
    console.error("❌ Error al convertir el archivo:", error);
  }
}

// Usa la línea de comandos: node convert.js archivo.md archivo.html
const [,, inputFile, outputFile] = process.argv;
if (!inputFile || !outputFile) {
  console.log("Uso: node convert.js entrada.md salida.html");
  process.exit(1);
}

convertMarkdownToHTML(inputFile, outputFile);
