const { app } = require('./app')
const { db } = require('./Utils/db')

const startServer = async () => {
    try {
        await db.authenticate()
        await db.sync()

        const PORT = 3000;

        app.listen(PORT, () => {
            console.log('Running')
        })

    } catch (error) {
        console.log(error)
    }
}

startServer()