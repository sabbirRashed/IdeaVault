import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();
const db = client.db('SparkNest');

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),

    emailAndPassword: {
        enabled: true,
    },
});