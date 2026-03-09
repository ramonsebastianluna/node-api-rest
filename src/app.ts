import express, { Application, Request, Response } from 'express';

// Inicializamos la aplicación de Express
const app: Application = express();

// Middlewares Globales
app.use(express.json()); // Permite a nuestra API entender formato JSON en el body

// Ruta base de prueba (para confirmar que la API funciona)
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: '¡La API Rest con TypeScript y Prisma está funcionando perfectamente!',
  });
});

// ¡IMPORTANTE! Exportamos la aplicación sin llegar a iniciar el servidor (listen)
export default app;
