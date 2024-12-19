import mongoose from "mongoose";
import config from "./config";
const { user, password, host, dbport, dbName, hostOnLine } = config.mongo

const connection = hostOnLine ?
`mongodb://${user}:${password}@${host}:${dbport}/?tls=true&tlsCAFile=global-bundle.pem&retryWrites=false`:
`mongodb://${user}:${password}@${host}:${dbport}/${dbName}?authSource=admin`

const mongoInit = async () => {
    mongoose.connect(connection, { user: user, pass: password })
    .then(db => console.log('DB is connected to', db.connection.host))
    .catch(err => console.error('Connection error:', err));
}

export default mongoInit