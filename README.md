# Secure Voting System
This project implements a simplified secure voting system utilizing Zero-Knowledge Proofs through snarkjs and circom. The system ensures voter privacy and prevents tampering, providing a transparent and trustworthy voting process.
![Screenshot 2024-12-10 014752](https://github.com/user-attachments/assets/0f5b4f18-d996-4eb8-8dd9-e9088d874667)



## Installation  
To run this application on your machine, follow these steps: 
1. **Clone the Repository**:  git clone https://github.com/avytran/zk-voting-system.git
2. **Install Server Dependencies**:
- Front-End and Back-End Setup
   ```bash
   cd back-end
   npm install
   cd front-end
   npm install
- [Snarkjs setup](https://github.com/iden3/snarkjs)
4. **Configure the Database**:
- Ensure that SQL Server is installed and properly configured.
- Update the connection details in the appropriate configuration file.

## Features
- **Voter Privacy**: Implemented using Zero-Knowledge Proofs, allowing voters to prove their eligibility without revealing their identity.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: SQL Server, with data handling managed through Knex.js
- **Zero-Knowledge Proofs**: snarkjs, circom

## Acknowledgments
Thank you for checking out this project! If you have any questions or feedback, please feel free to reach out.
