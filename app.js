const express = require("express");
const path = require("path");

//require("dotenv").config();

//const cors = require("cors");
//const passport = require("passport");
//const cookieSession = require("cookie-session");

const app = express();

//app.use(cors());
// Body Parser
app.use(express.json({ limit: "10mb" }));

// app.use(
//   cookieSession({
//     name: "billing-app-session",
//     keys: ["key1", "key2"],
//   })
// );
// Initializes passport and passport sessions
//app.use(passport.initialize());
//app.use(passport.session());

// app.use((req, res, next) => {
//   if (req.path == "/home.html" && (!req.user || req.user.id == -100)) {
//     res.redirect("/");
//   } else {
//     next();
//   }
// });
app.use(express.static(path.join(__dirname, "public")));

// Example protected and unprotected routes
app.get("/", (req, res) => {
  //   if (!req.user) {
  //     res.status(401)
  //       .send(`<a href="/auth/google">Login</a> using your google account.
  //     `);
  //   } else if (req.user.id == -100) {
  //     res.status(403)
  //       .send(`Your account is not authorized to access this app please contact the app administrator
  //     or try <a href="/auth/google">Login</a> agian.
  //     `);
  //   } else {
  res.redirect("/home.html");
  //}
});

// db connection
// const db = require("./config/keys").mongoURI;

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((err) => console.log(err));

// app.use((req, res, next) => {
//   if (req.path.indexOf("/api") === 0) {
//     if (req.user) {
//       if (req.user.id == -100) {
//         res.sendStatus(403);
//       } else next();
//     } else {
//       res.sendStatus(401);
//     }
//   } else next();
// });

// routes
// app.use("/auth", require("./routes/auth"));
// app.use("/api/customers", require("./routes/customers"));
// app.use("/api/sales", require("./routes/sales"));
// app.use("/api/products", require("./routes/products"));
// app.use("/api", require("./routes/api"));
// app.use("/users", require("./routes/users"));

app.use((error, req, res, next) => {
  const stackTrace = process.env.DEBUG == "true" ? error.stack : "";
  console.log(error.stack);
  return res.status(500).json({ errorMsg: error.toString(), stackTrace });
});

// starting server
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server running on  ${PORT}`));

/*

const Customer = require("./models/Customer");

app.get("/moveDataInvoices", (req, res) => {
  const colec = mongoose.connection.db.collection("SaleProducts");
  // console.log(colec);
  //const add = await colec.find().toArray();
  // .then((user) => {
  //   if (user) {
  //     return res.send(user);
  //   } else return res.send("no user");
  // });
  //return res.send(add);
  Customer.find().then((users) => {
    if (users) {
      // users.forEach(async function (user) {
      //   //console.log(user.ID);
      //   const adds = await colec.find({ CustomerId: user.ID }).toArray();

      //   var custAdd = [];
      //   adds.forEach(function (add) {
      //     custAdd.push({ ID: add.ID, Name: add.Name, City: add.City });
      //   });
      //   //console.log(custAdd);
      //   user.Addresses = custAdd;
      //   //user.Email = "syammehar@gmail.com";
      //   user.save();
      // });

      return res.send(users);
    } else return res.send("no user");
  });
  //return res.send("ok");
});
app.get("/moveData", (req, res) => {
  const colec = mongoose.connection.db.collection("CustomerAddresses");
  // console.log(colec);
  //const add = await colec.find().toArray();
  // .then((user) => {
  //   if (user) {
  //     return res.send(user);
  //   } else return res.send("no user");
  // });
  //return res.send(add);
  Customer.find().then((users) => {
    if (users) {
      // users.forEach(async function (user) {
      //   //console.log(user.ID);
      //   const adds = await colec.find({ CustomerId: user.ID }).toArray();

      //   var custAdd = [];
      //   adds.forEach(function (add) {
      //     custAdd.push({ ID: add.ID, Name: add.Name, City: add.City });
      //   });
      //   //console.log(custAdd);
      //   user.Addresses = custAdd;
      //   //user.Email = "syammehar@gmail.com";
      //   user.save();
      // });

      return res.send(users);
    } else return res.send("no user");
  });
  //return res.send("ok");
});

*/
