window.onload=function(){
	var index =1;
	image.onclick=function(){
			var imgs =["blue.jpg","black.jpg","gray.jpg","violet.jpg","green.jpeg"];
			var caption =["blue","black","gray","violet","green"];
			document.getElementById("image").src = imgs[index];
			document.getElementById("cap").innerText=caption[index];
			index++;
			if(index==5){
				index=0;
			}

	}
	var change =image.onclick;

	setInterval(change,1000);
	
}





































/*window.onload = function () {
	var listNode = document.getElementById("list");
	var capNode = document.getElementById("cap");
	var imageNode = document.getElementById("image");

	var links = listNode.getElementsByTagName("a");
	var i,image;
	var imageCache=[];
	for(i=0;i<links.length;i++)
	{
		image = new Image();
		image.src = listNode.getAttribute("href");
		image.title = listNode.getAttribute("title");
		imageCache[imageCache.length] = image;
	}

	var count =0;
	var Interval = setInterval(function(){
		count = (count + 1)%imageCache.length;
		image = imageCache[count];
		imageNode.src=image.src;
		capNode.firstChild.nodeValue = image.title;
	},1000)
}*/




