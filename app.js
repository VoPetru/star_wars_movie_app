/**
 * Created by iQuest on 7/8/2016.
 */

var express = require("express");

var app = express();

app.set("view engine", "ejs");

var routes = require("./routes");

var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Routes

// home
app.get("/", routes.home);

//movie single
app.get("/star_wars_episode/:episode_number?", routes.movie_simple);

// notFound
app.get("*", routes.notFound);

app.listen(process.env.PORT || 3000);