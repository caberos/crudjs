import App from "./App.js"

import { connectDB } from "./db.js"


connectDB();
App.listen(3000)
console.log('Server run on port', 3000)