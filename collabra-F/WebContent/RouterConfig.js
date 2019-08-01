alert("angular js");
var myApp=angular.module("myApp",['ngRoute','ngCookies']);
myApp.config(function($routeProvider){
	
			$routeProvider.when("/Login",{templateUrl:"c_user/Login.html"})
						  .when("/Register",{templateUrl:"c_user/Register.html"})
						  .when("/Contact",{templateUrl:"c_user/Contact.html"})
						  .when("/About",{templateUrl:"c_user/About.html"})
						  .when("/addblog",{templateUrl:"c_blog/Blog.html"})
						  .when("/manageBlog",{templateUrl:"c_blog/ManageBlog.html"})
					      .when("/showBlog",{templateUrl:"c_blog/ShowAllBlog.html"})
						  .when("/Publish",{templateUrl:"c_job/PublishJobs.html"})
					      .when("/showJobs",{templateUrl:"c_job/ShowJobs.html"})
				     	  .when("/friend",{templateUrl:"c_friend/Friend.html"})
						  .when("/updatePic",{templateUrl:"c_user/UpdateProfilePicture.html"})
						  .when("/UpdateProfile",{templateUrl:"c_user/UpdateProfile.html"})
						  .when("/chat",{templateUrl:"c_chat/Chat.html"})
						  
});
alert("create app");