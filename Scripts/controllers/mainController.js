/**
 * Created by dd31andre on 5/14/2015.
 */

function homePageCtrl(){
    var self = this;
    self.projects_examples = [
        {title:"Website for Unix Interactive", big: "example.png", host: "Codedrops", small: "example_logo.png", daysLeft: "12", tags:["UX","UI","FrontEnd"], description: "We are small interactive agency and dont have enough resources to complete the project, if you are willing to work remotely or inhouse with awesome pros like you"},
        {title:"Create the example on our framework", big: "example2.png", host: "Snap.svg",  small: "example_logo2.png", daysLeft: "54", tags:["UI","FrontEnd"], description: "We are small interactive agency and dont have enough resources to complete the project, if you are willing to work remotely or inhouse with awesome pros like you" },
        {title:"Photoshoot for Transmission Production", big: "example3.png", host: "Transmission Production",  small: "example_logo3.png", daysLeft: "11", tags:["UX","Marketing"], description: "We are small interactive agency and dont have enough resources to complete the project, if you are willing to work remotely or inhouse with awesome pros like you" },
        {title:"Please help us build the better world with awesome tool", big: "example4.jpg", host: "Inuit Production Studio",  small: "example_logo4.png", daysLeft: "81", tags:["UI","Marketing", "FrontEnd", "BackEnd"], description: "We are small interactive agency and dont have enough resources to complete the project, if you are willing to work remotely or inhouse with awesome pros like you" }
    ];

}

function auth_controll($log, $location){
    var self = this;
    self.email = {
        text: "me@email.com"
    };
    self.newUser = {};
    self.submit = function(form){
        if(form.$valid){
            self.newUser = {
               name: self.username,
               email: self.userEmail,
               password: self.password
            };
            $log.log(self.newUser);
            $location.path("/tothemainPage")
        }
    }
}

app.controller("home_pageProjectsCtrl", homePageCtrl).controller("authenticationCtrl", ["$log", "$location", auth_controll]);