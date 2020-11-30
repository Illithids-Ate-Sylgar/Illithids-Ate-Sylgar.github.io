var souls = 0;
checkSouls;
var wood = 0;
checkWood;
var followers = 0;


function checkSouls(){
    if (souls >= 10){
        document.getElementByid('woodClick').disabled = false;
    } else {
        document.getElementById('woodClick').disabled = true;
    };
};
function checkWood(){
    if (wood >= 15){
        document.getElementById('buyCamps').disabled = false;
    } else {
        document.getElementById('buyCamps').disabled = true;
    };
};

function soulsClick(number){
    souls = souls + number;
    document.getElementById("souls").innerHTML = souls;
    checkSouls;
};

function woodClick(number){
    wood = wood + number;
    document.getElementById("wood").innerHTML = wood;
    checkWood;
};

function buyFollower(){
    var followerCost = Math.floor(10 * Math.pow(1.15,followers));
    if(souls >= followerCost){
        followers = followers + 1;
    	souls = souls - followerCost;
        document.getElementById('followers').innerHTML = followers;
        document.getElementById('souls').innerHTML = souls;
    };
    var nextCost = Math.floor(10 * Math.pow(1.15,followers));
    document.getElementById('followerCost').innerHTML = nextCost;
};

var camps = 0;

function buyCamps(){
    var campsCost = Math.floor(10 * Math.pow(1.5,camps));
    var followerCampreq = Math.floor(10 * Math.pow(2, camps));
    if(wood >= campsCost){                                   
        if(followers >= followerCampreq){
            camps = camps + 1;
    	    wood = wood - campsCost;                          
            document.getElementById('camps').innerHTML = camps;  
            document.getElementById('wood').innerHTML = wood;
        };
   
    };
    var nextCostCamps = Math.floor(10 * Math.pow(1.5,camps));       //works out the cost of the next follower
    document.getElementById('campsCost').innerHTML = nextCostCamps;  //updates the follower cost for the user
    var nextFollowercampreq = Math.floor(10 * Math.pow(2,camps));
    document.getElementById('followerCampreq').innerHTML = nextFollowercampreq;
};

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  };
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  };
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};


window.setInterval(function(){
    
	soulsClick(followers/10);
	
}, 1000);
