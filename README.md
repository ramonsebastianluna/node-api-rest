# Node API REST - Setup Starter

Este proyecto es una plantilla inicial para construir una API REST robusta utilizando Node.js, TypeScript, Express y Prisma, conectada a una base de datos PostgreSQL (ideal para usarse con Supabase u otra DBaaS).

## Requisitos Previos

Asegúrate de tener instalado en tu entorno local:
- [Node.js](https://nodejs.org/) (versión recomendada LTS)
- NPM o Yarn
- Una instancia de base de datos PostgreSQL en funcionamiento.

## Configuración y Arreglo del Proyecto (Para Nuevos Devs)

Para levantar el proyecto en un entorno local de desarrollo, sigue estos pasos al pie de la letra:

### 1. Clonar e Instalar
Primero, clona el repositorio e instala las dependencias (este paso también generará el Cliente de Prisma automáticamente):

```bash
git clone <url-del-repositorio>
cd node-api-rest
npm install
```

### 2. Variables de Entorno
Copia el archivo de plantilla `.env.example` y renómbralo a `.env`.

```bash
cp .env.example .env
```

Abre el archivo `.env` que acabas de crear y reemplaza las cadenas de conexión con los datos reales de tu base de datos (pueden ser de tu Supabase personal, un Pooler transaccional, o una BDD local de PostgreSQL).

### 3. Sincronizar Base de Datos Local
*(Si te estás conectando a una base de datos vacía en desarrollo).*
Sincroniza el esquema de Prisma para crear las tablas del sistema inicial en tu base de datos:

```bash
npx prisma db push
# o bien: npx prisma migrate dev
```

### 4. Lanzar el Servidor
Enciende el servidor en modo desarrollo (utiliza `nodemon` y `ts-node` para recarga automática).

```bash
npm run dev
```

El servidor estará corriendo de manera local. Puedes probar que la API está viva en la ruta de "Health Check":
`http://localhost:3000/api/health`

## Tecnologías Principales y Arquitectura

- **Servidor:** Express
- **Lenguaje:** TypeScript (código fuente en `/src`)
- **Base de Datos ORM:** Prisma
- **Vigilancia de Cambios:** Nodemon
