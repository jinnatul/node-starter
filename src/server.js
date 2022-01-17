import app from './app';
import sequelize from './config/Database';

// Db connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Failed!!! Please check your connection credentials!');
    });

// Express server  
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port ${port} in ${process.env.STAGE} mode`);
});
