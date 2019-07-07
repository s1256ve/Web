// CertScript.js

// Author: Sean@UITC
	
function GenP7N(strSrc)
{
	var P7Sign = new ActiveXObject("CapiP7._P7Sign");
	var vOutputFormat = 1;
	strSrc = "001500040761UBOT";
	var vP7 = P7Sign.Generate(strSrc, vOutputFormat, 0, 0);
	return vP7;
}

function  VerifyP7(strEncypted)
{
	var P7Sign = new ActiveXObject("CapiP7._P7Sign");
	var vRes = "";
	if(strEncypted == "")
	{
		alert("請先產生P7簽章");
	}
	else
	{
		vRes = P7Sign.Verify(strEncypted);
	}
	return vRes;
}	
