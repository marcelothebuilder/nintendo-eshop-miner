import mongoose, { ConnectionOptions, Mongoose } from "mongoose";
import { Environment } from "../../env/Environment";

export interface MongoConnectProperties extends Pick<ConnectionOptions, "user" | "pass" | "authSource"> {
  ipAddress: string;
  port: number;
  database: string;
}

export const connect = (properties: MongoConnectProperties): Promise<Mongoose> =>
  mongoose.connect(`mongodb://${properties.ipAddress}:${properties.port}/${properties.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    user: properties.user,
    pass: properties.pass,
    authSource: properties.authSource,
  });

export const connectDefault = (): Promise<Mongoose> =>
  connect({
    ipAddress: Environment.get("MONGO_IP").else("localhost"),
    port: parseInt(Environment.get("MONGO_PORT").else("27017"), 10),
    pass: Environment.get("MONGO_PASS").else("nintendo"),
    user: Environment.get("MONGO_USER").else("root"),
    authSource: Environment.get("MONGO_AUTH_SOURCE").else("admin"),
    database: Environment.get("MONGO_DB").else("nintendo"),
  });
