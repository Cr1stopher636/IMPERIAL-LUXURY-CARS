import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  password: 'S3rv3r',
  host: 'localhost',
  port: 5432,
  database: 'cerveceria',
});

// Listener para verificar errores inesperados en clientes inactivos
pool.on('error', (err) => {
  console.error('Error inesperado en el pool de PostgreSQL:', err);
  process.exit(-1);
});

export const query = (text, params) => pool.query(text, params);
export default pool;