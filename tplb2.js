window.onload=initLinks;
	var mypic=new Array("tplb2/t1.jpg","tplb2/t2.jpg","tplb2/t3.jpg");
	var thispic=0;
	function initLinks(){
		document.getElementById('befLink').onclick=turnBef;
		document.getElementById('nexLink').onclick=turnNex;
	}
	function turnBef(){
		if(thispic==0){
			thispic=mypic.length;
		}
		thispic--;
		document.getElementById('tplbimg').src=mypic[thispic];
		return false;
	}
	function turnNex(){
		thispic++;
		if(thispic==mypic.length){
			thispic=0;
		}
		document.getElementById('tplbimg').src=mypic[thispic];
		return false;
	}