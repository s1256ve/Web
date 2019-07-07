String.prototype.trim = function () {return this.replace(/^\s+|\s+$/g, "");}

function checkNum(dstText){
	data = dstText.match(/[^0-9]/g);
	if (data || !dstText) return false;
		return true;
	}
	
	
function chkFundTxn(sCert){
		var sCertNo = sCert.substring(0,1);
		
		if (sCertNo == "F" || sCertNo == "S"){
			return false;
		}else{	
			return true;
		}
}

function rtnBankName(sBankCode,sExpDate){
		if (sBankCode.trim() == "701"){
			return "�l���b������";
		}else if(sExpDate == "0000"){
			return "�p���Ȧ�b������" ;		
		}else{
			return "�p���H�Υd����" ;		
		}
}

function dispSCHD(sSCHD){
	if(sSCHD == "00"){
		return "";
	}else{
		return sSCHD + " ";
	}
}

function rtnFundInfo(FundID1,FundCNAME1,FundID2,FundCNAME2,FundID3,FundCNAME3,CertNo,SendAmt1,SendAmt2,SendAmt3,BankCode,AcctNo,SchdDate,SchdDate2,SchdDate3,SchdDate4,SchdDate5,SchdDate6,Cury,TotalAmt,ExpDate){
	 var stra = ""
	 var str1 = moneyAddDot(TotalAmt);
	 var str2 = rtnBankName(BankCode,ExpDate);
	 var sSendAmt1 ,sSendAmt2 ,sSendAmt3
	 	 	
	 var sRowSpan = "1";
	 if (FundID3.trim() !=""){
	 	sRowSpan = "3";	 	
	 }else if (FundID2.trim() !=""){
	 	sRowSpan = "2";	 	
	 }
	 
	 if (FundID1.trim() != ""){ 
	 	sSendAmt1 = moneyAddDot(SendAmt1);
	     stra =" <tr> <td width=\'49\'> <div align=\'center\'> <a href=\'#\' onclick=\"chkSubmit(\'"+FundID1+"\',\'"+FundCNAME1+"\',\'"+CertNo+"\',\'"+SendAmt1+"\',\'"+BankCode+"\',\'"+AcctNo+"\',\'"+SchdDate+"\',\'"+SchdDate2+"\',\'"+SchdDate3+"\',\'"+SchdDate4+"\',\'"+SchdDate5+"\',\'"+SchdDate6+"\',\'"+Cury+"\',\'"+TotalAmt+"\',\'"+ ExpDate+ "\')\">"+FundID1 
	      +"</a></div></td><th rowspan=\'"+ sRowSpan +"\' scope=\'row\' width=\'48\' class=\'t4\'><div align=\'center\'>"+ CertNo +"</div></th><td width=\'105\'><div align=\'center\'><a href=\'#\' onclick=\"chkSubmit(\'"+FundID1+"\',\'"+FundCNAME1+"\',\'"+CertNo+"\',\'"+SendAmt1+"\',\'"+BankCode+"\',\'"+AcctNo+"\',\'"+SchdDate+"\',\'"+SchdDate2+"\',\'"+SchdDate3+"\',\'"+SchdDate4+"\',\'"+SchdDate5+"\',\'"+SchdDate6+"\',\'"+Cury+"\',\'"+TotalAmt+"\',\'"+ ExpDate+ "\')\">"+FundCNAME1
	 	+"</a></div></td><!--<th rowspan=\'"+ sRowSpan +"\' scope=\'row\' width=\'72\' class=\'t4\'><div align=\'center\'>"+ Cury + " " + str1.toString()
	 	+"</div></th>--><th rowspan=\'"+ sRowSpan +"\' scope=\'row\' width=\'120\' class=\'t4\'><div align=\'center\'><font size=-1>"+ str2.toString()
      	+"</font></div></th><th rowspan=\'"+ sRowSpan +"\' scope=\'row\' width=\'92\' class=\'t4\'><div align=\'left\'>&nbsp;"+AcctNo
      	+"</div></th><td width=\'76\'><div align=\'left\'>&nbsp;" + Cury + " " + sSendAmt1.toString()              	
      	+"</div></td><th rowspan=\'"+ sRowSpan +"\' scope=\'row\' width=\'64\' class=\'t4\'><div align=\'center\'>"+dispSCHD(SchdDate)+dispSCHD(SchdDate2)+dispSCHD(SchdDate3)+dispSCHD(SchdDate4)+dispSCHD(SchdDate5)+dispSCHD(SchdDate6)+"��</div></th></tr>"  ; 	     
      }      
      if (sRowSpan == "2"){
      	sSendAmt2 = moneyAddDot(SendAmt2);
      	stra += " <tr> <td width=\'49\'> <div align=\'center\'> <a href=\'#\' onclick=\"chkSubmit(\'"+FundID2+"\',\'"+FundCNAME2+"\',\'"+CertNo+"\',\'"+SendAmt2+"\',\'"+BankCode+"\',\'"+AcctNo+"\',\'"+SchdDate+"\',\'"+SchdDate2+"\',\'"+SchdDate3+"\',\'"+SchdDate4+"\',\'"+SchdDate5+"\',\'"+SchdDate6+"\',\'"+Cury+"\',\'"+TotalAmt+"\',\'"+ ExpDate+"\')\">"+FundID2
		 +"</a></div></td><td width=\'105\'><div align=\'center\'><a href=\'#\' onclick=\"chkSubmit(\'"+FundID2+"\',\'"+FundCNAME2+"\',\'"+CertNo+"\',\'"+SendAmt2+"\',\'"+BankCode+"\',\'"+AcctNo+"\',\'"+SchdDate+"\',\'"+SchdDate2+"\',\'"+SchdDate3+"\',\'"+SchdDate4+"\',\'"+SchdDate5+"\',\'"+SchdDate6+"\',\'"+Cury+"\',\'"+TotalAmt+"\',\'"+ ExpDate+"\')\">"+FundCNAME2
	 	+"</a></div></td><td width=\'72\'><div align=\'center\'>&nbsp;" + Cury + " " + sSendAmt2.toString()+"</div></td></tr>"   ;       	
      }
      if (sRowSpan == "3"){
      	sSendAmt3 = moneyAddDot(SendAmt3);
      	stra += " <tr> <td width=\'49\'> <div align=\'center\'> <a href=\'#\' onclick=\"chkSubmit(\'"+FundID3+"\',\'"+FundCNAME3+"\',\'"+CertNo+"\',\'"+SendAmt3+"\',\'"+BankCode+"\',\'"+AcctNo+"\',\'"+SchdDate+"\',\'"+SchdDate2+"\',\'"+SchdDate3+"\',\'"+SchdDate4+"\',\'"+SchdDate5+"\',\'"+SchdDate6+"\',\'"+Cury+"\',\'"+TotalAmt+"\',\'"+ ExpDate+"\')\">"+FundID3
		 +"</a></div></td><td width=\'105\'><div align=\'center\'><a href=\'#\' onclick=\"chkSubmit(\'"+FundID3+"\',\'"+FundCNAME3+"\',\'"+CertNo+"\',\'"+SendAmt3+"\',\'"+BankCode+"\',\'"+AcctNo+"\',\'"+SchdDate+"\',\'"+SchdDate2+"\',\'"+SchdDate3+"\',\'"+SchdDate4+"\',\'"+SchdDate5+"\',\'"+SchdDate6+"\',\'"+Cury+"\',\'"+TotalAmt+"\',\'"+ ExpDate+"\')\">"+FundCNAME3
	 	+"</a></div></td><td width=\'72\'><div align=\'center\'>&nbsp;" + Cury + " " + sSendAmt3.toString()+"</div></td></tr>"   ;       	     	
      }	 	
     	
	 return stra;
}

function rtnFundTrans(FromFundID, ToFundID, FundCName, FundAMTDate, CURRENCY, FundAMT, InvSubject){
	
	var str01 = ""
	if (FromFundID != ToFundID){
	     str01="<tr><td bgcolor=\'#E7F1EE\' width=\'73\' height=\'25\'><div align=\'center\'><img src='graph/fund/graph/arrow.gif' width='10' height='9'><a href=\'#\' onclick=\"chksubmit(\'"+ ToFundID
	     +"\',\'"+ FundCName +"\',\'"+ FundAMTDate +"\',\'"+ CURRENCY +"\',\'"+ FundAMT +"\');\">"+ ToFundID +"</a></div></td><td bgcolor=\'#E7F1EE\' width=\'189\'>&nbsp;<a href=\'#\' onclick=\"chksubmit('"+ ToFundID 
	     +"\',\'"+ FundCName +"\',\'"+ FundAMTDate +"\',\'"+ CURRENCY +"\',\'"+ FundAMT +"\');\">"+ FundCName +"</a></td><td bgcolor=\'#E7F1EE\' width=\'86\'>&nbsp;"+ CURRENCY +"</td></tr>"; 
	}	
	return str01;
	
}

function ChgStyle(sid,sNo,eNo){  
	  
	  document.all[sid].style.fontWeight = "Bold";
	  document.all[sid].style.color = "red"; 
	  RecoveryStyle(sid,sNo,eNo);
	
}
	
function RecoveryStyle(sid,sNo,eNo){	
	for(i=sNo;i<=eNo;i++){
		nid = "id"+i.toString();
		if (nid!=sid){
			 document.all[nid].style.fontWeight = "normal";
	  		 document.all[nid].style.color = "blue"; 	
		}	
	}
}

function validEmail(sEmail){
			var chkEmail = sEmail.match(/^\S+@\S+\.\S+$/);
			if (sEmail == ""){
    	        return "�ж�g�q����H�q�l�l��a�}!";                  
    	}else if(!chkEmail || !sEmail){
    	    		return "�q�l�l���}�����T!";   	    		
    	}else{
    					return "";    	
    	}
}

function disableButton(btn){
	btn.disabled = true;
}

function disableButton2(btn1,btn2){
	btn1.disabled = true;
	btn2.disabled = true;
}

function disableButton3(btn1,btn2,btn3){
	btn1.disabled = true;
	btn2.disabled = true;
	btn3.disabled = true;
}

/**
 * �ˮ֩w���w�B���ڤ��
 * @param sDay String ���Ѩt�Τ��(��Day);����
 * @param Schd1 String �Ĥ@�զ��ڤ���r��;����
 * @param Schd2 String �ĤG�զ��ڤ���r��;"00"��ܵL���ڤ��
 * @param Schd3 String �ĤT�զ��ڤ���r��;"00"��ܵL���ڤ�� 
 * @return String return �D��U�@�Ӧ��ڤ��
 */
function pickINVDate(sDay,Schd1,Schd2,Schd3){
		var i = 1  // ���X�Ӧ��ڤ�	
		var Date1 = eval(sDay);
		var SchdDate1 = eval(Schd1);
		
		if (Schd3 == "00"){
			if(Schd2 == "00"){
				i = 1;
			}else{
				i = 2;
				var SchdDate2 = eval(Schd2);
			}			
		}else{
			i =3;
			var SchdDate2 = eval(Schd2);
			var SchdDate3 = eval(Schd3);
		}
				
		if (i == 1){
			return Schd1;		
		}else if(i == 2){
			if (Date1 < SchdDate1){
				return Schd1;
			}else if(Date1 < SchdDate2){
				return Schd2;
			}else{
				return Schd1;
			}		
		}else if(i == 3){
			if (Date1 < SchdDate1){
				return Schd1;
			}else if(Date1 < SchdDate2){
				return Schd2;
			}else if(Date1 < SchdDate3){
				return Schd3;
			}else{
				return Schd1;
			}		
		}
	}