const express = require("express"),
      app = express(),
      layouts = require("express-ejs-layouts"),
      homeController = require("./controllers/homeController"),
      errorController = require("./controllers/errorController")



      app.set("port", process.env.PORT || 3000);
      app.set("view engine", "ejs");
      //adding body parsing to the top of main.js file
      app.use(express.urlencoded({extended:false})); //tell express.js to use body-parser for processing url-encoded and json parameters
      app.use(express.json());
      app.use(layouts);
      app.use(express.static("public"));
      


      app.get("/", homeController.homePage);
      app.get("/courses", homeController.showCourses);
      app.get("/contact", homeController.showSignUp);
      app.get("/contact", homeController.postedSignUpForm);


     
       //   ERROR HANDLING ROUTES
      app.use(errorController.pageNotFoundError);
      app.use(errorController.internalServerError);

      app.listen(app.get("port"), () =>{
          console.log(`Server running at http://localhost:${app.get("port")}`);
      });