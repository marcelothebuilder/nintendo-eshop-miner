import mongoose, { ConnectionOptions, Mongoose } from "mongoose";

export interface MongoConnectProperties extends Pick<ConnectionOptions, "user" | "pass" | "authSource"> {
  ipAddress: string;
  port: number;
  database: string;
}

export const connect = (properties: MongoConnectProperties): Promise<Mongoose> =>
  mongoose.connect(`mongodb://${properties.ipAddress}:${properties.port}/${properties.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: properties.user,
    pass: properties.pass,
    authSource: properties.authSource,
  });
