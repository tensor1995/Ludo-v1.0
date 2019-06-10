/*function displayBlog() {
      document.getElementById("blog").style.display = "block";
    }*/

var counter = 0;
var numBlogs = 3;
function displayBlog(showBlog) {
       var element = document.getElementById(showBlog + counter);
       if(element.style.display == "block") {
              element.style.display = "none";
       }
       else {
              element.style.display = "block";
       }
}

/*Trainee*/

function onCustomizeClick(getCurrentElement){
	
	var getName=$(getCurrentElement).parent().siblings(".media-body").find("h1").text();
	var getNameLink=$(getCurrentElement).parent().siblings(".media-body").find(".link").text();
	console.log("Name & Link:"+getName+","+getNameLink);
	alert(""+getName)
	
	if(getName=="Mano ")
		$(getCurrentElement).parent().siblings(".media-body").find("h1").text("OH LOL ! You cliked ME");
	if(getName=="SM")
		$(getCurrentElement).parent().siblings(".media-body").find("h1").text("Damn Man!");
	
}

/*on settings Click*/
function onSettingsClick(GetCurrentSettings){
	$(".settingsPopup").remove();
	
	/*Creating Settings popup dynamically and their children*/
	var getId=$(GetCurrentSettings).attr("id");
	$("<div/>",{"id":"settings_"+getId,"class":"settingsPopup"}).appendTo("body");
	$("#settings_"+getId).append("<div>Enter Value:</div><input type='text' /><input type='submit' id='inputSetting_"+getId+"'/>");
	
	/*input submit click */
	$("#inputSetting_"+$(GetCurrentSettings).attr("id")).off("click").on("click",function(){
		//console.log("value"+$(this).siblings("input").val());
		callNameUpdate($(this).siblings("input").val(),$(GetCurrentSettings));
		
	})
}
/*on settings submit Click*/
function callNameUpdate(getCurrentInputValue,GetPostElement){
	$("#settings_"+$(GetPostElement).attr("id")).remove();
	$(GetPostElement).parent().siblings(".media-body").find("h1").text(getCurrentInputValue);
	
}