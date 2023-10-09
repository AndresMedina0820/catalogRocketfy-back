import dotenv from 'dotenv';

dotenv.config();

const config = {
	// isProd: process.env.MONGODB_ATLAS_ENV === 'production',
	// env: process.env.MONGODB_ATLAS_ENV || 'development',
	port: process.env.NODE_PORT || '3005',
	dbUser: process.env.MONGODB_ATLAS_USERNAME,
	dbPassword: process.env.MONGODB_ATLAS_PASSWORD,
	dbHost: process.env.MONGODB_ATLAS_HOST,
	dbCluster: process.env.MONGODB_ATLAS_CLUSTER,
	dbName: process.env.MONGODB_ATLAS_DB,
	dbPort: process.env.DB_PORT || 5432,
};

export default config;
