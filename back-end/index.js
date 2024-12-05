//Import dependencies
const express = require("express");
const routes = require('./routes/votingSystemRoutes'); // Nhập routes  
const cors = require("cors");
const dotenv = require("dotenv");
const mssql = require ("mssql");
const cookieParser = require("cookie-parser");
const knex = require('./database');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;  

app.use(cors()); //Avoid cors origin error
app.use(cookieParser()); //Create cookie
app.use(express.json()) //request, respond dưới dạng json
app.use('/api', routes);

app.listen(PORT, () => {  
    console.log(`Server đang chạy ở http://localhost:${PORT}`);  
});  