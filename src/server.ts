import { connectDB } from '@/config/db.config';
import employeeRouter from '@/features/employee/employee.routes';
import express from 'express';
import { DBConnectionError } from './errors/dbConnection.error';

const routePrefix = '/api/v1'

async function startServer() {
    const app = express();

    app.use(express.json());

    // DB Connection
    try {
        await connectDB();
        console.log('🌿 MongoDB connected succesfully');

        app.use(`${routePrefix}/employee`, employeeRouter);

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`🔥 Server running at port ${PORT}`);
        })

    } catch (error) {
        console.error("❌ Failed to start server");

        if (error instanceof DBConnectionError) {
            console.error("DB Error:", error.message);
            console.error("Cause:", error.cause);
        } else if (error instanceof Error) {
            console.error(error.message);
            console.error(error.stack);
        } else {
            console.error("Unknown error:", error);
        }

        process.exit(1);
    }
}

startServer();