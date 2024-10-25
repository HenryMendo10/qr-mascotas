const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Endpoint para procesar los datos del formulario y crear la landing page
app.post('/create-page', upload.single('image'), (req, res) => {
    const { fullname, petName, email, phone, social } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`; // Ruta de la imagen

    // Crea un archivo HTML simple para la landing page
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${petName}'s Page</title>
        </head>
        <body>
            <h1>Hola soy ${petName}</h1>
            <img src="${imageUrl}" alt="${petName}">
            <p>Me he perdido y estoy asustado/a, quiero encontrar a mi dueño ${fullname}.</p>
            <p>Redes sociales: ${social}</p>
            <p>Teléfono de mi dueño: ${phone}</p>
        </body>
        </html>
    `;

    // Guardar el archivo HTML en una carpeta pública
    const pagePath = `public/${petName}-page.html`;
    fs.writeFileSync(pagePath, htmlContent);

    // Devolver la URL de la página
    res.json({ pageUrl: `http://localhost:3000/${petName}-page.html` });
});

// Servir archivos estáticos
app.use(express.static('public'));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
