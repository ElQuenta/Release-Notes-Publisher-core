import mongoose from "mongoose";
import config from "./config";
const { user, password, host, dbport, dbName, hostOnLine } = config.mongo

const connection = hostOnLine ?
    `mongodb+srv://${user}:${password}@${host}/${dbName}` :
    `mongodb://${user}:${password}@${host}:${dbport}/${dbName}?authSource=admin`

const mongoInit = async () => {
    mongoose.connect(connection).then(db => console.log('DB is connected to', db.connection.host))
        .catch(err => console.error('Connection error:', err));
}

export default mongoInit