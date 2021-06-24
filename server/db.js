import { Pool } from "pg";
require("dotenv").config();
let config;

const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/qadata';


// export const pool = new Pool({
//   connectionString: dbUrl,
//   connectionTimeoutMillis: 5000,
// });



//Amanuel code
//heroku
// if (process.env.DATABASE_URL) {
// 	config = {
// 		connectionString: process.env.DATABASE_URL,
// 		connectionTimeoutMillis: 5000,
// 		ssl: {
// 			rejectUnauthorized: false,
// 		},
// 	};
	
// }

//  else  {// local
 

// 	config = {
// 		user: process.env.DB_USER,
// 		host: process.env.DB_HOST,
// 		database: "q_a",
// 		password: process.env.DB_PASS,
// 		port: 5432,
// 	};
// }
// const pool = new Pool(config);

	config = {
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: "qadata",
		password: process.env.DB_PASS,
		port: 5432,
	};
}
const pool = new Pool(config);


export const connectDb = async () => {
    let client;
	try {
		client = await pool.connect();
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("Postgres connected to", client.database);
	client.release();
};
export const disconnectDb = () => pool.close();
export default { query: pool.query.bind(pool) };



