import { Pool } from "pg"
import dotenv from "dotenv";


dotenv.config();
export const itemsPool = new Pool({
    connectionString: process.env.POSTGRES_CONNECTION_URI,
    ssl: {
        rejectUnauthorized: false
    }
});

export const connectPostGres = async () => {
    try {
        await itemsPool.connect()
        console.log("Connected to PostGres");
    } catch (error) {
        console.error("Error connecting to PostGres:", error);
    }
};

export const crateTrigger = async () => {
    await itemsPool.query(`
         CREATE  FUNCTION log_user_login10()
        RETURNS TRIGGER AS $$
        BEGIN
          INSERT INTO login_logs5 (user_name, login_time) 
          VALUES (NEW.user_name,CURRENT_TIMESTAMP );
          RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
      `)
    const result = await itemsPool.query(`
      SELECT *
      FROM information_schema.triggers
      WHERE trigger_name = 'user_login_trigger'
    `);
    if (result.rowCount === 0) {
        await itemsPool.query(`
        CREATE TRIGGER user_login_trigger
        AFTER INSERT 
        ON users
        FOR EACH ROW
        EXECUTE PROCEDURE log_user_login10();
      `);
    }
}



