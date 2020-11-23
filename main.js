var souls = 0;

function soulsClick(number){
    souls = souls + number;
    document.getElementById("souls").innerHTML = souls;
};

var hire = 0;

function buyHire(){
    var hireCost = Math.floor(10 * Math.pow(1.1,hire));     //works out the cost of this cursor
    if(souls >= hireCost){                                   //checks that the player can afford the cursor
        hire = hire + 1;                                   //increases number of cursors
    	souls = souls - hireCost;                          //removes the cookies spent
        document.getElementById('hire').innerHTML = hire;  //updates the number of cursors for the user
        document.getElementById('souls').innerHTML = souls;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,hire));       //works out the cost of the next cursor
    document.getElementById('hireCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	soulsClick(hire);
	
}, 1000);