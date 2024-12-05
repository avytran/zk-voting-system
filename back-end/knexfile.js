require('dotenv').config(); // Đảm bảo .env đã được đọc

module.exports = {
  development: {
    client: 'mssql',  // Chỉ rõ client là mssql
    connection: {
      host: process.env.DB_HOST,  // Địa chỉ máy chủ SQL Server
      user: process.env.DB_USER,  // Tên người dùng SQL Server
      password: process.env.DB_PASSWORD, // Mật khẩu người dùng
      database: process.env.DB_NAME, // Tên cơ sở dữ liệu
      options: {
        encrypt: true,  // Cần thiết cho kết nối Azure SQL Database
        trustServerCertificate: true,  // Cho phép kết nối với máy chủ không có chứng chỉ SSL hợp lệ
      },
    },
  },
};