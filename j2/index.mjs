import { query } from './conectionSQL.mjs';

async function probarConexion() {
  try {
    // Consulta simple para obtener la hora actual de la base de datos
    const res = await query('SELECT NOW() AS hora_actual;');
    console.log(' Conexión exitosa a PostgreSQL:');
    console.log('Hora en DB:', res.rows[0].hora_actual);
  } catch (err) {
    console.error(' Error al conectar con PostgreSQL:', err.message);
  }
}

probarConexion();

