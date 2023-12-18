import { UserModel } from "../../configuration/mongooseSchema";
import {
  startAndEndDate,
  userData,
  userFromDB,
} from "../../configuration/Types";
import { itemsPool } from "../../configuration/postGres";
import { after } from "mocha";
export const getUserByUserNameDB = async (email: string) => {
  try {
    const user = (await itemsPool.query(
      `SELECT * FROM users WHERE user_name = '${email}'`
    )) as any;
    if (user.rows.length < 1) {
      return null;
    }
    return user.rows[0];
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};

export const signUpDB = async (user: userData) => {
  try {
    const insert = (await itemsPool.query(`
    INSERT INTO users (user_name, password) 
    VALUES ('${user.user_name}', '${user.password}')
  `)) as any;
    if (insert.rowCount > 0) return user;
    else {
      return Promise.reject(new Error("user is Already exists"));
    }
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};

export const getRegistrationDataFromDB = async (dates: startAndEndDate) => {
  try {
    const data = await itemsPool.query(`SELECT 
    to_char(date_series::date, 'YYYY-MM-DD') as login_day,
    COUNT(login_time)::int as login_count
  FROM 
    generate_series('${dates.start}'::date, '${dates.end}'::date, '1 day'::interval) date_series
  LEFT JOIN 
    login_logs5
  ON 
    date_series::date = DATE_TRUNC('day', login_time)::date
  GROUP BY 
    login_day
  ORDER BY 
    login_day;
  `);
    return data.rows;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};
