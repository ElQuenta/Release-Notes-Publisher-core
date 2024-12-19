process.loadEnvFile()

const {
    DB_NAME: dbName = 'release_notes_publisher',
    DB_HOST: host = 'localhost',
    DB_PORT: dbport = 6543,
    DB_USER: user = '',
    DB_PASSWORD: password = '',
    SERVER_PORT: port = 3000,
    DB_HOST_ONLINE: hostOnLine = false
} = process.env;

const config = {
    server: {
        port
    },
    mongo: {
        dbName,
        host,
        dbport,
        user,
        password,
        hostOnLine
    },
    jwt: {
        tokenSecret: process.env.TOKEN_SECRET || 'yourSecretKey',
    },
}

export default config