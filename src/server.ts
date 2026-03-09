import app from './app';

const PORT = process.env.PORT || 3000;

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Endpoint de prueba: http://localhost:${PORT}/api/health`);
});
