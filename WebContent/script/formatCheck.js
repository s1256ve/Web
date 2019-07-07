/**
 *@Project     : EAI_IBANK
 *@File name   : formatCheck.js
 *@Description :
 * check  format tools for EAI_IBANK
 * =========================
 *@Version     : V. 1.0
 *@Author      : <a href="mailto:carl_chen@ubot.com.tw">Carl Cehn</a>
 *@Create date : 2005/05/26
 *==========================
 *@Version     : V. 1.1
 *@Author      : <a href="mailto:carl_chen@ubot.com.tw">Carl Chen</a>
 *@Modify date : 2007/10/22
 *@Modify note : �s�W�S��r��" ' "���סC
 *==========================
 *@Version     : V. 1.2
 *@Author      : <a href="mailto:carl_chen@ubot.com.tw">Carl Chen</a>
 *@Modify date : 2010/9/20
 *@Modify note : �s�W�x�~������ʽ�O������r�C
 *
 */
 String.prototype.trim = function () {return this.replace(/^\s+|\s+$/g, "");}
 
 var CharEng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var CharNum = "0123456789";
 /**
 * �ˬd�q�l�l��榡xxx@xxx.xxx
 * �ˬd�q�l�l��r�ꤣ�o���ť�
 * @return true or false
 */
 
 function chkEmail(email)
  {
 	
 	if(email == "")
 	{
 		alert("�ж�g�q�l�l��a�}!");
 		return false;
 	}
 	
 	chkMail = email.match(/^\S+@\S+\.\S+$/);	//�ˬd�O�_�X�G�榡xxx@xxx.xxx
 	if(!chkMail || !email)
 	{
 		alert("�q�l�l���}�榡�����T!");
    	    	return false;
    	}
    	
    	for(i = 0; i < email.length; i++) 
    	{
    		sub_mail = email.charAt(i);
		if(sub_mail == " ")
		{
			alert("�q�l�l�󤤤��o�t���ťզr��!");
			return false;
		}
	}
	return true;
}

 /**
 * �ˬd�����Ҧr���榡
 * @return true or false
 */
 
 function checkID(inID)
 {
 	if(inID == "")
 	{
 		alert("�п�J�����Ҧr��!");
 		return false;
 	}
 	if(inID < 10)
 	{
 		alert("�z��J�������Ҧr�����פ���!");
 		return false;
 	}
 	inID = inID.toUpperCase();		//�r���૬���j�g
 	if(CharEng.indexOf(inID.substr(1,1),0)==-1){
	  	if(checkIDArray(inID)==false)
	  	{
	  		return false;
	  	}
		else
		{
			inID = checkIDArray(inID);
		}
		if(inID.length==11)
		{
			if(CharEng.indexOf(inID.substr(10,1))==-1)
			{
	    			alert("�z�������Ҧr���ĤQ�@�X��J���~!");
	    			return false;
	  		}
	  	}
	  	return inID;
	}else{
		if(checkUnionId(inID)==false)
	  	{
	  		return false;
	  	}
	  	return inID;
	  }
  }
  
/**
���إ�����������
���Ҥ���
�Ĥ@�X�^��r�N��Ӳո��X�t��ɩ��ݪ��������D�X�ͦa���A�ĤG�X�Ʀr1���k��2���k�͡A��3�X�ܲ�10�X�����N�@��Ʀr�A
���t�^��r���������X�i�Τ����[�H�ֺ�Ӳո��X�O�_���T�A�ҦpR123456783�AR=25�A
�ˬd�����O�G2+5*9+1*8+2*7+3*6+4*5+5*4+6*3+7*2+8*1=167�A��10�X���������G���Ӧ��7�H10��h�o3�C

A=10 B=11 C=12 D=13 E=14 F=15 G=16 H=17 J=18 K=19 
L=20 M=21 N=22 P=23 Q=24 R=25 S=26 T=27 U=28 V=29 
X=30 Y=31 W=32 Z=33 I=34 O=35 

A�x�_�� B�x���� C�򶩥� D�x�n�� E������ F�x�_�� G�y���� H��鿤 I�Ÿq�� 
J�s�˿� K�]�߿� L�x���� M�n�뿤 N���ƿ� O�s�˥� P���L�� Q�Ÿq�� R�x�n��
S������ T�̪F�� U�Ὤ�� V�x�F�� W������ X��� Y�����s Z�s����

�����ҲΤ@���X�b��z�X�͵n�O�ɧY�t��A�ҥH���Ӭݥӳ��X�͵n�O�ɤ���F�ưȩҩ��ݿ����F
59�~���H�e�X�ͪ��H����Ӧ~���y�]�b�󿤥��A�]�����ҲΤ@���X�b54�~�~�}�l�t��A������~�A��t�ḹ�X���E�X���t�^�塤�A
�t�ܺ��Q�|���H�f�A���������ǰt��A58�~�[�J�ĤQ�X���ˬd���X���A60�~�_�����t�ḹ�X�A�t��~�X�̡ͪC
*/

function checkIDArray(inID)
{
	inID = inID.toUpperCase();		//�r���૬���j�g
	sub_inID = inID.substr(0,1);
	sun_inID2 = inID.substr(1,9);
 	if(CharEng.indexOf(sub_inID)==-1)
 	{
    		alert("�z�������Ҧr���Ĥ@�X��J���~!");
    		return false;
  	}
  	
  	if(inID.substr(1,1) != 1&& inID.substr(1,1) != 2)
  	{
  		alert("�z��J�������Ҧr���L�k�P�O�ʧO,�Э��s��J!");
  		return false;
  	}
	if(sub_inID == "A") { num_inID = "10"; }
	if(sub_inID == "B") { num_inID = "11"; }
	if(sub_inID == "C") { num_inID = "12"; }
	if(sub_inID == "D") { num_inID = "13"; }
	if(sub_inID == "E") { num_inID = "14"; }
	if(sub_inID == "F") { num_inID = "15"; }
	if(sub_inID == "G") { num_inID = "16"; }
	if(sub_inID == "H") { num_inID = "17"; }
	if(sub_inID == "I") { num_inID = "34"; }
	if(sub_inID == "J") { num_inID = "18"; }
	if(sub_inID == "K") { num_inID = "19"; }
	if(sub_inID == "L") { num_inID = "20"; }
	if(sub_inID == "M") { num_inID = "21"; }
	if(sub_inID == "N") { num_inID = "22"; }
	if(sub_inID == "O") { num_inID = "35"; }
	if(sub_inID == "P") { num_inID = "23"; }
	if(sub_inID == "Q") { num_inID = "24"; }
	if(sub_inID == "R") { num_inID = "25"; }
	if(sub_inID == "S") { num_inID = "26"; }
	if(sub_inID == "T") { num_inID = "27"; }
	if(sub_inID == "U") { num_inID = "28"; }
	if(sub_inID == "V") { num_inID = "29"; }
	if(sub_inID == "W") { num_inID = "32"; }
	if(sub_inID == "X") { num_inID = "30"; }
	if(sub_inID == "Y") { num_inID = "31"; }
	if(sub_inID == "Z") { num_inID = "33"; }
	
	for (i = 0; i < sun_inID2.length; i++)
	{
		sub1 = sun_inID2.charAt(i);
		if("0123456789".indexOf(sub1,0)<0)	//�Q�Φr����O�_�����X�k���r���X�{
		{
			alert("�z��J�������Ҧr����E�X���~!");
			return false;
		}
	}
	newID = num_inID + sun_inID2;
	num =  eval(newID.substr(0,1));
	for(i = 1; i < newID.length; i++)
	{
		num2 = parseInt((newID.substr(i,1))*(10-i));
		num = eval(num + num2);
	}
	num = num + "";
	if(eval(10-num.substr(num.length-1,1))%10 == inID.substr(9,1))
	{
		return inID;
	}
	else
	{
		alert("�z��J�������Ҧr�����X����W�h!");
		return false;
	}
}


 /**
 * �ˬd�O�_���p���H�Υd
 *1.�p���Ȧ�H�Υd�ѧO�X(�H�Υd�e���X)�ˮ� => chkUBCard(card)
 *2.�H�Υd�榡�ˮ�(VISA and Master) => checkCardArray(card)
 * @return true or false
 */

 function checkCard(card)
 {
 	if(card.trim() == "")
 	{
 		alert("�п�J�H�Υd��!");
 		return false;
 	}
 	if(card.length != 16)
 	{
 		alert("�z��J���d�����פ����T,�Э��s��J!");
 		return false;
 	}
 	for (i = 0; i < card.length; i++)
	{
		sub1 = card.charAt(i);
		if("0123456789".indexOf(sub1,0)<0)	//�Q�Φr����O�_�����X�k���r���X�{
		{
			alert("�z��J���H�Υd�����D�Ʀr�X�{,�Э��s��J!");
			return false;
		}
	}
	if(chkUBCard(card)==false)	//�p���Ȧ�H�Υd�ѧO�X(�H�Υd�e���X)�ˮ�
	{
		return false;
	}
 	if(checkCardArray(card)==false)	//�H�Υd�榡�ˮ�(VISA and Master)
 	{
 		return false;
 	}
	else
	{
		return true;
	}
}

 
/**
�H�Υd�榡�ˮ֤覡(VISA and Master)�G
1.�H�Υd�U���(���t�ˬd�X)���W�۹������[�v��(2,1,2,1,2,1...............�ѥk��_)
2. �C�@��ƥ[�v��p�ƭȤj��9�h�Q��ƻP�Ӧ�Ƭۥ[,����A�N�U�Ӧ�Ƭۥ[
3.��10��h�B�J2�ҨD�o���ƭȤ��Ӧ�ƧY�o�ˬd�X
*/ 
 
 function checkCardArray(card)
 {
 	
 	var cardArray = new Array(card.length);
 	var i = 0;
 	for(i=0; i<card.length; i++)
 	{
 		cardArray[i] = parseInt(card.charAt(i));
 	}
 	
 	for(j=card.length-2; j>=0; j-=2)		//�ھڳW�h�u����Ʀ�n��2
 	{
 		cardArray[j] *= 2;
 		if(cardArray[j] >9)
 		{
 			cardArray[j] -=9;	//�]���̦h�O��2��,�ҥH�ȵ����j��20,��9����[1
 		}
 	}
 	num=0;
 	for(k=0; k<card.length-1; k++)
 	{
 		num += parseInt(cardArray[k]);
 	}
 	num = num + "";
 	if(eval(10-num.substr(num.length-1,1))%10 == card.charAt(card.length-1))
 	{
 		return true;
 	}
	else
	{
		alert("�z��J���H�Υd�d�����ŦX�H�Υd���ҳW�h!");
		return false;
	}
}

/**
�Τ@�Ҹ��ˮ֤覡�G

�@�B�Τ@�Ҹ��s�C�W�h�G
�@�p�Q�X�A�Ĥ@�X���ϰ�X(�P���������)�B�ĤG�X���ʧO�X(�J�X�Һ޲z���ϥ΢ϢСFĵ��~�Ƭ�/�Ҩϥ΢Ѣ�)
�B�ĤT�ܤE�X���y�����B�ĤQ�X���ˬd���X�C

�G�B�ˬd���X�p��W�h�G
�Ĥ@�X�^��r���ഫ���G��Ʀr�X(�ഫ���Ʀr�P��������ҦP)�A���O���H�S�w�ơF�ĤG�X�^��r���ഫ���G��Ʀr
��A�u�����ƭ��H�S�w�ơF�l�ĤT��E�X�A����O���H�S�w�ơC�ˬd���X��10�Ьۭ���Ӧ�Ƭۥ[�`�M�����ơC���Y
�ۭ���Ӧ�Ƭۥ[�`�M���Ƭ�0�A�h�w�H�u0�v���ˬd���X�C
	�|�ҡGFA12345689
	(�ԡG�ഫ��15�A���ഫ��10�w�֨����ơu0�v)
	�i�Ĥ@�X�ϰ�βĤG�X�ʧO���^��X�A���̾ڤU�C�Ʀr����A���ʧO�ഫ�ᤧ�G��Ʀr�X�A�u�����ơC�j

*/
function checkUnionId(id){
    var id =id.trim();
    if(id == "")
    {
 		alert("�п�J�Τ@�Ҹ�!");
 		return false;
 	}
 	if(id.length != 10)
 	{
 		alert("�z��J���Τ@�Ҹ����פ���!");
 		return false;
 	}
    v = new Array();
    v[0]="A"; v[1]="B"; v[2]="C"; v[3]="D"; v[4]="E"; v[5]="F"; v[6]="G"; v[7]="H"; v[8]="J"; v[9]="K"; v[10]="L"; v[11]="M"; v[12]="N"; v[13]="P";
    v[14]="Q"; v[15]="R"; v[16]="S"; v[17]="T"; v[18]="U"; v[19]="V"; v[20]="X"; v[21]="Y"; v[22]="W"; v[23]="Z"; v[24]="I"; v[25]="O";
    var inte = -1;   
	var inte1 = -1;
	var s1 = id.charAt(0).toUpperCase();
	var s2 = id.charAt(1).toUpperCase();
	
	for(var i = 0; i < 26; i++)
	{
	    if(s1 == v[i])
	        inte = i; 
    }
    if(inte==-1) 
    {
        alert("�z��J���Τ@�Ҹ����ŦX�Τ@�Ҹ����ҳW�h!");
        return false;
    }
    for(var x = 0; x < 4; x++)
    {
        if(s2 == v[x])
		    inte1 = x; 
	}
    
    if(inte1==-1) 
    {    
        alert("�z��J���Τ@�Ҹ����ŦX�Τ@�Ҹ����ҳW�h!");
        return false;
    }
    var total = 0;
    all = new Array();
    
	//E�Τ@�Ҹ��Ĥ@�ӭ^���ഫ���Ʀr
	var E = inte + 10;
	
	//E1�Τ@�Ҹ��Ĥ@�ӭ^���ഫ���Ʀr���Q���
	var E1 = Math.floor(E/10);
	
	//E2�Τ@�Ҹ��Ĥ@�ӭ^���ഫ���Ʀr���Ӧ��
	var E2 = E%10;
	//alert("E2"+E2);
	
    	all[0] = E1;
	all[1] = E2;
	all[2] = inte1;
    	for(var j = 3; j <= 10; j++)
	{
	    //�Τ@�Ҹ��^��᭱���K���
	    var string="1234567890";
	    if (string.indexOf(id.charAt(j-1))==-1)
	    {
	        alert("�z��J���Τ@�Ҹ���K�X���~!");
	        return false;
	    }
	    all[j] = id.charAt(j - 1);
	    
    }
    
   	for(var k = 1; k <= 9; k++)
	 	total +=eval( (all[k] * (10 - k))%10);
	 	
    total=eval(total*1+all[0]*1+all[10]*1);

	if(total % 10 == 0)
	{
	    return true;
	}
    else
    {
        alert("�z��J���Τ@�Ҹ����ŦX�Τ@�Ҹ����ҳW�h!");
        return false;
    }
	
}

/**  �ˬdinput�O�_���j�p�g�^��+�Ʀr
*�禡�I�s: �binput���[�J�ƥ� onKeypress="KeyPressChk()"		
*�禡��^: �W�w�r���H�~, return �Ŧr��(input����ܦ��r��)
*/

function KeyPressChk(){
	var iKeyCode = window.event.keyCode
	if (!(iKeyCode >= 48 && iKeyCode <=57) && !(iKeyCode >= 65 && iKeyCode <=90) && !(iKeyCode >= 97 && iKeyCode <=122)){
		window.event.keyCode = 0;
	}
}


/**
*�ˮ֬O�_���p���Ȧ�H�Υd(�@�����s�d�o��N�����s�W�[�ѧO�d��)
*return true or false
**/

function chkUBCard(card)
{
	ubstr = card.substr(0 , 6);
	ub = new Array();
	ub[1]="457952";ub[2]="457953";ub[3]="543381";ub[4]="540966";ub[5]="517951";
	ub[6]="451445";ub[7]="400016";ub[8]="356056";ub[9]="356356";ub[10]="400357";
	ub[11]="469531";ub[12]="410523";ub[13]="356556";ub[14]="552345";ub[15]="515709";
	ub[16]="463781";ub[17]="472635";ub[18]="472634";ub[19]="524264";ub[20]="523764";
	ub[21]="356657";ub[22]="356599";ub[23]="524132";ub[24]="356656";ub[25]="481509";
	for (i=0; i<ub.length; i++)
	{
		if(ubstr == ub[i])
		{
			return true;
		}
	}
	alert("�z��J���H�Υd�����O�p���Ȧ�H�Υd,���˵��᭫�s��J!");
	return false;
}


 /**
 * �ˬd�O�_���Ʀr
 * @return true or false
 */
 
 function checkNumber(chkNo){
 	
 	lenNo = chkNo.length ;
 	var cmpNo = "";
 	
 	for(i =0 ; i < lenNo; i++){
 		cmpNo = chkNo.substring(i,i+1);
 		if (CharNum.indexOf(cmpNo) == -1) return false; 		
 	}
 	return true;
 	
 }

/**
*�ˬd�O�_���S��r��" ' "
*@return true or false
*/

function chkExecptional(chkStr){
	if(chkStr.indexOf("'") != -1){
		alert("�z������������t���S��r��\" ' \"�A�Х�������A�e�X�I");
		return false;
	}
	if(chkStr.indexOf("��") != -1){
		alert("�z������������t���S��r��\" �� \"�A�Х�������A�e�X�I");
		return false;
	}
	if(chkStr.indexOf("��") != -1){
		alert("�z������������t���S��r��\" �� \"�A�Х�������A�e�X�I");
		return false;
	}
	else{
		return true;
	}
}


/**
*�t�Φ۰ʵn�X�\��
*��J�n�X�]�w�ɭ��ﶵ(ibank: yesfund:)
*��X�n�X�ɭ�
*/

var setlogout;
function checkStayTime(aptype){
	//setlogout = st;
	if(aptype=='ibank'){
		setlogout = '5:00';
		checkStayTime1();
	}
	else if(aptype=='yesfund'){
		setlogout = '2:00';
		checkStayTime1();
	}
}

function checkStayTime1(){
	var timeText;
	var currTime = setlogout.split(":");
	currTime = currTime[0]*60 + currTime[1]*1;
	if(currTime==1){
		document.forms[0].pageid.value = "IC0000998";
		document.forms[0].aptype.value="NOAP";
		document.forms[0].submit();
		//document.IC0100000.submit();
		//window.location="http://www.google.com.tw";
	}
	else{
		currTime -= 1;
		var min1 = Math.floor(currTime/60);
		var sec1 = currTime%60;
		if(currTime<30){
			timeText = '<b>'+currTime+'</font>���۰ʵn�X</b>';
		}
		else{
			timeText = '<b>'+currTime+'���۰ʵn�X</b>';
		}
		setlogout = min1+":"+sec1;
		//alert(setlogout);
		document.getElementById('readTime').innerHTML=timeText;
		setTimeout("checkStayTime1()",1000); 
	}
}
/**
�P�_�x�~������ʽ�O�A�^�ǹ�����r
checkBCurrType:����
checkSCurrType:����
**/

function checkBCurrType(currType){
	var ct = currType;
	if(ct=='A'){
		return "\'A\' �ѥ����B���v���ΰ�~�s�ڵ�����";
	}
	else if(ct=='B'){
		return "\'B\' ��~�U�ڡB��~�ɴڤεo����~���q�ŵ�";
	}
	else if(ct=='C'){
		return "\'C\' ��~���ұo";
	}
	else if(ct=='D'){
		return "\'D\' �e�~�[�u�ΰӥ�T���f�ڦ���";
	}
	else if(ct=='E'){
		return "\'E\' ��~�A�Ȧ���";
	}
	else if(ct=='F'){
		return "\'F\' ��~���ءBĺ�a�����ব��";
	}
	else if(ct=='G'){
		return "\'G\' ��~�~��ұo";
	}
	else if(ct=='I'){
		return "\'I\' �X�i�f�q���Ϋ��w�ꤺ��f���f�ڦ���";
	}
	else if(ct=='R'){
		return "\'R\' �ꤺ�f�ڤ����I";
	}
	else if(ct=='S'){
		return "\'S\' �ꤺ�~���O��B����B�Ũ鵥���ڶ������I";
	}
	else if(ct=='T'){
		return "\'T\' �ꤺĺ�a���ব��";
	}
	else if(ct=='X'){
		return "\'X\' �s�x���P�~�������ץ��(SWAP)";
	}
	else if(ct=='Y'){
		return "\'Y\' �s�x���P�~�������״��Q���(CCS)";
	}
	else if(ct=='Z'){
		return "\'Z\' ��L";
	}
	else if(ct=='0'){
		return "\' \' ���ʥ~�׶ȧ@�~�s���A�ץX";
	}
}

function checkSCurrType(currType){
	var ct = currType;
	if(ct=='A'){
		return "\'A\' �ѥ����B���v���ΰ�~�s�ڵ�����";
	}
	else if(ct=='B'){
		return "\'B\' ��~�U�ڡB��~�ɴڤεo����~���q�ŵ�";
	}
	else if(ct=='C'){
		return "\'C\' ��~���ұo";
	}
	else if(ct=='D'){
		return "\'D\' �e�~�[�u�ΰӥ�T���f�ڦ���";
	}
	else if(ct=='E'){
		return "\'E\' ��~�A�Ȧ���";
	}
	else if(ct=='F'){
		return "\'F\' ��~���ءBĺ�a�����ব��";
	}
	else if(ct=='G'){
		return "\'G\' ��~�~��ұo";
	}
	else if(ct=='I'){
		return "\'I\' �X�i�f�q���Ϋ��w�ꤺ��f���f�ڦ���";
	}
	else if(ct=='R'){
		return "\'R\' �ꤺ�f�ڤ����I";
	}
	else if(ct=='S'){
		return "\'S\' �ꤺ�~���O��B����B�Ũ鵥���ڶ������I";
	}
	else if(ct=='T'){
		return "\'T\' �ꤺĺ�a���ব��";
	}
	else if(ct=='X'){
		return "\'X\' �s�x���P�~�������ץ��(SWAP)";
	}
	else if(ct=='Y'){
		return "\'Y\' �s�x���P�~�������״��Q���(CCS)";
	}
	else if(ct=='Z'){
		return "\'Z\' ��L";
	}
	else if(ct=='0'){
		return "\' \' ���⤧�~�׭�Y�H�s�x�����ʦs�J";
	}
}

function replaceWord(num){
	var sign = '*';
	var rtn = "";
	for(i=0;i<num;i++){
		rtn = rtn + sign;
	}
	return rtn;
}

/**
t_type�G�q�������A1�a�ΡB2���
**/
function replaceWord2(phone,t_type){
	var sign = '*';
	var rtn = "";
	if(t_type==1){
		if(phone.length>7){
			for(i=0;i<phone.length-6;i++){
				rtn = rtn + sign;
			}
			rtn = phone.substring(0,6) + rtn;
		}
		else{
			for(i=0;i<10-phone.length;i++){
				rtn = rtn + sign;
			}
			rtn = phone + rtn;
		}
	}
	else if(t_type==2){
		if(phone.length==10){
			for(i=0;i<phone.length-4;i++){
				rtn = rtn + sign;
			}
			rtn = phone.substring(0,4) + rtn;
		}
		else if(phone.length>4&&phone.length<10){
			for(i=0;i<6;i++){
				rtn = rtn + sign;
			}
			rtn = phone.substring(0,4) + rtn;
		}
		else{
			for(i=0;i<10-phone.length;i++){
				rtn = rtn + sign;
			}
			rtn = phone + rtn;	
		}
	}
	return rtn;
}

/**
EMAIL�B��
**/
function replaceEmail(email){
	var mailArray = email.split("@");
	return "*****@"+mailArray[1];
}

/**
�m�W�B��
**/
function showCName(cname){
   if(cname.length < 4){
   		cname = cname.substring(0,1)+replaceWord(cname.length-1);
   }
   else{
   		cname = cname.substring(0,2)+replaceWord(cname.length-2);
   }   
   if(cname.length > 8){      
      return cname.substring(0,8)+"(��)";
   }else{
      return cname;
   }
}

/**
������ƾB��
**/
function replaceWord3(content,num){
	if(content.length > num){
		return content.substring(0,num)+replaceWord(content.length-num);
	}else{
		return content;
	}
}

/**
���O��Ӫ�
**/
function chkCurrTable(curr){
	var currname = curr;
	if(currname=="USD"){
			return "01";
	}else if(currname=="JPY"){
		return "03";
	}else if(currname=="GBP"){
		return "04";
	}else if(currname=="AUD"){
		return "05";
	}else if(currname=="HKD"){
		return "06";
	}else if(currname=="CAD"){
		return "07";
	}else if(currname=="CNY"){
		return "08";
	}else if(currname=="SGD"){
		return "12";
	}else if(currname=="ZAR"){
		return "13";
	}else if(currname=="CHF"){
		return "15";
	}else if(currname=="NZD"){
		return "18";
	}else if(currname=="EUR"){
		return "21";
	}else{
		return currname;
	}
}

/*  ú���O�B�ҫO�B�Ұh�B����~�����X����
*	1.���O�GcheckHealthInsurance()
*  2.�ҫO/�Ұh�GcheckLaborPensionInsurance()
*	3.����~���GcheckNationalPensionInsurance()
*/


/*  ���X�^����Ʀr
*	PensionType�G
*	1�G���O/�ҫO/�Ұh
*	2�G����~��
*/
function transerBarCode(barcode,PensionType){
	var transerBarCode='';
	var transerTable=null;
	if(PensionType == 1)
		transerTable={A:'1',B:'2',C:'3',D:'4',E:'5',F:'6',G:'7',H:'8',I:'9',J:'1',K:'2',L:'3',M:'4',N:'5',O:'6',P:'7',Q:'8',R:'9',S:'2',T:'3',U:'4',V:'5',W:'6',X:'7',Y:'8',Z:'9'};
	else
		transerTable={A:'1',B:'2',C:'3',D:'4',E:'5',F:'6',G:'7',H:'8',I:'9',J:'1',K:'2',L:'3',M:'4',N:'5',O:'6',P:'7',Q:'8',R:'9',S:'2',T:'3',U:'4',V:'5',W:'6',X:'7',Y:'8',Z:'9','/':'0','+':'1','\%':'2','-':'6','.':'7',' ':'8',$:'9'};
	var index;
	for(var count=0; count<= barcode.length-1; count++){
		index=barcode.substring(count,count+1);
		
		if(transerTable[index] != null)
			transerBarCode += transerTable[index];
		else
			transerBarCode += index;	
	}
	return transerBarCode;
}
//------�p���ˮֽX
function calculateVerificationCode(barcode,barcodeOdd,barcodeEven){
	for(index=0 ;index<= barcode.length-1; index+=2){
		barcodeOdd += parseInt(barcode.substring(index,index+1),10);
		if(index+1 <= barcode.length-1){
			barcodeEven += parseInt(barcode.substring(index+1,index+2),10);
		}
		else
			break;
	}
	return{
		odd:barcodeOdd,
		even:barcodeEven
	};
}
//------�ഫ�ˮֽX
function transferVerificationCode(barcodeOdd,barcodeEven){
	barcodeOdd %= 11;
	barcodeEven %= 11;
	switch(barcodeOdd){
		case 0:
			barcodeOdd='A';
			break;
		case 10:	
			barcodeOdd='B';
			break;
		default:
			barcodeOdd= barcodeOdd.toString();
			break;
	}
	switch(barcodeEven){
	case 0:
		barcodeEven='X';
		break;
	case 10:	
		barcodeEven='Y';
		break;
	default:
		barcodeEven= barcodeEven.toString();
		break;
	}
	return{
		odd:barcodeOdd,
		even:barcodeEven
	};
}
/*  ����ˮֽX
 *	PensionType�G
 *	1�G���O/�ҫO/�Ұh
 *	2�G����~��
 */
function checkVerificationCode(barcode1,barcode2,barcode3,PensionType){
	barcode1=barcode1.toUpperCase();
	barcode2=barcode2.toUpperCase();
	barcode3=barcode3.toUpperCase();
	var validation=barcode3.substring(4,6);	 //���X�ˮֽX
	barcode1= transerBarCode(barcode1,PensionType);
	barcode2= transerBarCode(barcode2,PensionType);
	barcode3= barcode3.substring(0,4)+barcode3.substring(6,15);
	var barcode={
			odd:0,
			even:0
	};
	barcode=calculateVerificationCode(barcode1,barcode.odd,barcode.even);
	barcode=calculateVerificationCode(barcode2,barcode.odd,barcode.even);
	barcode=calculateVerificationCode(barcode3,barcode.odd,barcode.even);
	barcode=transferVerificationCode(barcode.odd,barcode.even);
	if(validation == barcode.odd+barcode.even)
		return true;
	else{
		alert("���X��J���~�A�аѦұ��X��J�d��");
		return false;
	}
}
//**********   ���O�O���X����
function checkHealthInsurance(barcode1,barcode2,barcode3){
	var month3=parseInt(barcode3.substring(2,4),10);
	//step1 �ˬd��J�榡�O�_���T
	if( !/\d{6}600/.test(barcode1) || barcode1.length != 9){
		alert("���X�@��J���~�A�аѦұ��X��J�d��");
		return false;
	}
	else if(!/\d{16}/.test(barcode2) || barcode2.length != 16){
		alert("���X�G��J���~�A�аѦұ��X��J�d��");
		return false;
	}
	else if(!/\d{4}[A-Z0-9]{2}\d{9}/.test(barcode3)|| month3>12 || month3<=0 || barcode3.length != 15){
		alert("���X�T��J���~�A�аѦұ��X��J�d��");
		return false;
	}	
	//step2 ����ˮֽX
	else{     
		return checkVerificationCode(barcode1,barcode2,barcode3,1);
	}
}
/*******   �ҫO/�Ұhú�O���X����
 * Labor_OR_Pension: 
 *	 0�G�ҫO
 *	 1�G�Ұh
 */
function checkLaborPensionInsurance(barcode1,barcode2,barcode3,Labor_OR_Pension){
	var year1=1911+parseInt('1'+barcode1.substring(0,2),10);
	var month1=parseInt(barcode1.substring(2,4),10);
	var day1=parseInt(barcode1.substring(4,6),10);
	var days1_Total = new Date(year1,month1,0).getDate();
	var month3=parseInt(barcode3.substring(2,4),10);
	var regexp1 =null,regexp2=null;
	
	if(Labor_OR_Pension==0){
		regexp1=/\d{2}[0-1][0-9][0-3][0-9]6ZA/;
		regexp2=/0[A-Z0-9]{15}/;
	}	
	else if(Labor_OR_Pension==1){
		regexp1=/\d{2}[0-1][0-9][0-3][0-9]6ZB/;
		regexp2=/9[A-Z0-9]{15}/;
	}
	
	//step1 �ˬd��J�榡&���&�ѼƬO�_���T   
	if( !regexp1.test(barcode1) || month1 >12 || month1<=0 || days1_Total < day1 || day1<=0 || barcode1.length != 9){    
		alert("���X�@��J���~�A�аѦұ��X��J�d��");
		return false;
	}	
	else if(!regexp2.test(barcode2) || barcode2.length != 16){
		alert("���X�G��J���~�A�аѦұ��X��J�d��");
		return false;
	}
	else if(!/\d{2}[0-1][0-9][A-Z0-9]{2}\d{9}/.test(barcode3) || month3>12 || month3<=0 || barcode3.length != 15){
		alert("���X�T��J���~�A�аѦұ��X��J�d��");
		return false;
	}	
	//step2 ����ˮֽX
	else{     
		return checkVerificationCode(barcode1,barcode2,barcode3,1); 
	}
}
//******* ����~�����X����
function checkNationalPensionInsurance(barcode1,barcode2,barcode3){
	var year1=1911+parseInt('1'+barcode1.substring(0,2),10);
	var month1=parseInt(barcode1.substring(2,4),10);
	var day1=parseInt(barcode1.substring(4,6),10);
	var days1_Total = new Date(year1,month1,0).getDate();
	
	//step1 �ˬd��J�榡&���&�ѼƬO�_���T   
	if( !/\d{2}[0-1][0-9][0-3][0-9]630/.test(barcode1) || month1 >12 || month1<=0 || days1_Total < day1 || day1<=0 || barcode1.length != 9){    
		alert("���X�@��J���~�A�аѦұ��X��J�d��");
		return false;
	}	
	else if(!/[A-Z0-9/+%-. $]{16}/.test(barcode2) || barcode2.length != 16){
		alert("���X�G��J���~�A�аѦұ��X��J�d��");
		return false;
	}
	else if(!/\d{4}[A-Z0-9]{2}\d{9}/.test(barcode3) || barcode3.length != 15){
		alert("���X�T��J���~�A�аѦұ��X��J�d��");
		return false;
	}	
	//step2 ����ˮֽX
	else{     
		return checkVerificationCode(barcode1,barcode2,barcode3,2); 
	}
}
//*******�T�{�Ұ��O�B�Ұh�B����~��ú�O���B�O�_���T
function checkAmount(barcode3,amount){
	barcode3= parseInt(barcode3.substring(7,15),10);
	if(barcode3== amount)
		return true;
	else{
		alert("���B���~");
		return false;
	}
}