function getIP(){

	var xhr = new XMLHttpRequest();
	xhr.open('GET', "https://ipinfo.io/json", true);
	xhr.send();
	 
	xhr.onreadystatechange = processRequest;
	function processRequest(event) {
		if (xhr.readyState == 4 && xhr.status ==200) {
			var response = JSON.parse(xhr.responseText);
			return response;
		}
	}		
}

//Send POST request

function sendData(pin,value){

	var auth = "a051a5720103492da3dcd21638751318";
	//var auth = "b8f38de1f8f64b76b4a3dd0643924358";
	var url = "https://private-anon-7d28ed15b9-blynkapi.apiary-proxy.com/"+auth+"/update/"+pin+"?"+"value"+"="+value;
	//console.log(url);
	console.log(value);
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.onreadystatechange = function () {
		if (this.readyState === 4) {
		  console.log('Status:', this.status);
		  //console.log('Headers:', this.getAllResponseHeaders());
		  //console.log('Body:', this.responseText);
		}
	};
	  
	  request.send();
	
}

function getKey() {
	document.addEventListener("keypress", function onEvent(event) {
		//console.log(event.key);
		sendData("V2",event.key);
	});
}

function mousePosition(){

	let handleMousemove = (event) => {
		//Print positions
		//console.log(`${event.x},${event.y}\n`);
		sendData("V2",event.x);
		//sendData("V2",event.y);
		};

	let throttle = (func, delay) => {
	  let prev = Date.now() - delay;
	  return (...args) => {
	    let current = Date.now();
	    if (current - prev >= delay) {
	      prev = current;
	      func.apply(null, args);
	    }
	  }
	};

	document.addEventListener('mousemove', throttle(handleMousemove, 500));
}

function size(){
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	console.log(w);
	console.log(h);
}