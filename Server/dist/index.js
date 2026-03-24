import express from 'express';
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    return res.send("Backend is running Successfull");
});
app.listen(PORT, () => console.log(`App is Running on Port ${PORT}`));
