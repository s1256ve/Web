<%@ page language="java" import="java.io.*" contentType="text/html; charset=UTF-8"%>

<html>
<title>基金申購</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script>
	var dataSize=13;
	var data=window.opener.printData;
	//window.opener.document.IF0701000.printCsv.value;
	var dataArray=data.split("\n");
	var showData="";
	
	for(var i in dataArray)
		dataArray[i]=dataArray[i].split("@");
	
	for(var i in dataArray){
			showData+='<tr><td width="90" height="0">'+dataArray[i][0]+'</td><td width="75" height="0"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><div align="center">'+dataArray[i][1]
								+'</tr><tr><td height="1" bgcolor="#417c99"><img src="graph/spacer.gif" width="10" height="1"></td></tr><tr><td><div align="center">'+dataArray[i][2]
								+'</div></td></tr></table></td><td width="150" height="0"> <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><div align="center">'+dataArray[i][3]
								+'</div></tr><tr><td height="1" bgcolor="#417c99"><img src="graph/spacer.gif" width="10" height="1"></td></tr><tr><td><div align="center">'+dataArray[i][4]
								+'<input type="hidden" name="nowFundAmt" value="[[%%SEND-AMT%%]]"></div></td></tr></table></td><td width="150" height="0"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><div align="center">'+dataArray[i][5]
								+'</div></tr><tr><td height="1" bgcolor="#417c99"><img src="graph/spacer.gif" width="10" height="1"></td></tr><tr><td><div align="center">'+dataArray[i][6]
								+'</div></td></tr></table></td><td width="150" height="0"> <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><div align="center">'+dataArray[i][7]
								+'</div></tr><tr><td height="1" bgcolor="#417c99"><img src="graph/spacer.gif" width="10" height="1"></td></tr><tr><td><div align="center">'+dataArray[i][8]
								+'</div></tr></table></td></td><td width="160" height="0"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><div align="center">'+dataArray[i][9]
								+'</tr><tr><td height="1" bgcolor="#417c99"><img src="graph/spacer.gif" width="10" height="1"></td></tr><tr><td><div align="center">'+dataArray[i][10]
								+'</tr></table></td></td><td width="105"><div align="center"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><div align="center">'+dataArray[i][11]
								+'</div></td></tr><tr><td height="1" bgcolor="#417c99"><img src="graph/spacer.gif" width="10" height="1"></td></tr><tr><td><div align="center">'+dataArray[i][12]
								+'</div></td></tr></table></div></td><td width="150" height="0"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><div align="center">'+dataArray[i][13]
								+'</div></tr><tr><td height="1" bgcolor="#417c99"><img src="graph/spacer.gif" width="10" height="1"></td></tr><tr><td><div align="center">'+dataArray[i][14]
								+'</div></tr></table></td></td></tr>';
	}
	
</script>
</head>
<body>
</br>
	 <table width="965" border="1" cellpadding="0" bordercolor="#999999" align="center">
		<tbody>
			  <tr bgcolor="#6CCEFF">
                <td width="7%" height="32"><div align="center">基金名稱</div></td>
                <td width="7%" height="32"><div align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                      <td><div align="center">基金代號</div></td>
                    </tr>
                    <tr>
                      <td height="1" bgcolor="#417c99"><img src="./基金申購_files/spacer.gif" width="10" height="1"></td>
                    </tr>
                    <tr>
                      <td><div align="center">憑證號碼</div></td>
                    </tr>
                  </tbody></table>
                </div></td>
                <td width="13%" height="32"><div align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                      <td><div align="center">累積單位數 A</div></td>
                    </tr>
                    <tr>
                      <td height="1" bgcolor="#417c99"><img src="./基金申購_files/spacer.gif" width="10" height="1"></td>
                    </tr>
                    <tr>
                      <td><div align="center">累積信託金額</div></td>
                    </tr>
                  </tbody></table>
                 
                </div></td>
                <td width="9%" height="32"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody><tr>
                    <td><div align="center">原始申購價格</div></td>
                  </tr>
                  <tr>
                    <td height="1" bgcolor="#417c99"><img src="./基金申購_files/spacer.gif" width="10" height="1"></td>
                  </tr>
                  <tr>
                    <td><div align="center">原始申購日期</div></td>
                  </tr>
                </tbody></table></td>
                <td width="9%" height="32"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody><tr>
                    <td><div align="center">參考價格B</div></td>
                  </tr>
                  <tr>
                    <td height="1" bgcolor="#417c99"><img src="./基金申購_files/spacer.gif" width="10" height="1"></td>
                  </tr>
                  <tr>
                    <td><div align="center">參考日期</div></td>
                  </tr>
                </tbody></table></td>
                <td width="14%" height="32"><div align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                      <td><div align="center">幣別與參考匯率C</div></td>
                    </tr>
                    <tr>
                      <td height="1" bgcolor="#417c99"><img src="./基金申購_files/spacer.gif" width="10" height="1"></td>
                    </tr>
                    <tr>
                      <td><div align="center">參考現值=AxBxC</div></td>
                    </tr>
                  </tbody></table>
                </div></td>
                <td width="9%" height="32"><div align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                      <td><div align="center">損益</div></td>
                    </tr>
                    <tr>
                      <td height="1" bgcolor="#417c99"><img src="./基金申購_files/spacer.gif" width="10" height="1"></td>
                    </tr>
                    <tr>
                      <td><div align="center">報酬率%</div></td>
                    </tr>
                  </tbody></table>
                </div></td>
                <td width="9%" height="32">
                <div align="center">
								  <table width="100%" border="0" cellspacing="0" cellpadding="0">
								    <tbody><tr>
								      <td><div align="center">累積配息金額</div></td>
								    </tr>
								    <tr>
								      <td height="1" bgcolor="#417c99"><img src="./基金申購_files/spacer.gif" width="10" height="1"></td>
								    </tr>
								    <tr>
								      <td><div align="center">含息報酬率%</div></td>
								    </tr>
								  </tbody></table>
								</div>
                </td>
              </tr>
			  <script>
				document.write(showData);
			  </script>
		</tbody>
	</table>
	
	<hr size="1">
	<table width="765" border="1" bordercolor="#999999" align="center">
	  <tr bgcolor="#6CCEFF"> 
		<td width="26%"> 
		  <div align="center">信託金額總計</div>
		</td>
		<td width="24%"> 
		  <div align="center">參考現值</div>
		</td>
		<td width="24%"> 
		  <div align="center">配息金額總計</div>
		</td>
		<td width="23%"> 
		  <div align="center">投資損益</div>
		</td>
	  </tr>
	  <tr> 
		<td width="26%" height="95"> 
		  <table width="100%" border="0">
		   <script>document.write(window.opener.showAddFund());</script>
		  </table>
		</td>
		<td width="24%" height="95"> 
		  <table width="100%" border="0">
		   <script>document.write(window.opener.shownowFund());</script>
		  </table>
		</td>
		<td width="24%" height="95"> 
		  <table width="100%" border="0">
		   <script>document.write(window.opener.showDivFund());</script>
		  </table>
		</td>
		<td width="23%" height="95"> 
		  <table width="100%" border="0">
		   <script>document.write(window.opener.showProfitFund());</script>
		  </table>
		</td>
	  </tr>
	</table>  
	</br>
	<div align="center">
		<a href="javascript:window.print()"><img src="../../graph/fund/graph/print.gif" width="52" height="24" border="0"></a>
	</div>
</body>
