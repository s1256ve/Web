<%@ page language="java"  import="com.ubot.tom.*,org.apache.commons.lang.StringEscapeUtils" contentType="text/html; charset=BIG5" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

Tom tObj = new Tom();
tObj.set_TxnUrl("APSVC");
tObj.set_UrlType(1);
tObj.setConnType("POST");
tObj.set_TxnID("UBBANKSER");
tObj.setTA("REVE-ACTOR", StringEscapeUtils.escapeHtml(request.getParameter("sessid")));
tObj.setTA("REVE-SESSION-ID", StringEscapeUtils.escapeHtml(request.getParameter("sessid")));
//tObj.setTA("REVE-SESSION-ID", "KCO4YXAMGCN4YK0AVPQ1W5I");
//tObj.setTA("REVE-ACTOR", "KCO4YXAMGCN4YK0AVPQ1W5I");
tObj.set_TxnType(StringEscapeUtils.escapeHtml(request.getParameter("aptype").trim()));
tObj.doTxn();

String retncode = tObj.get_TxnMsg();
String retndesc = tObj.get_TxnMsgDesc();
String msgid = tObj.get_SysMsg();
String msgdesc = tObj.get_SysMsgDesc();
String ubser = "";

if( msgid.equals("0000") && retncode.equals("0000")){
		ubser = tObj.getSofData("SEND-REC", 0, "SEND-UBBANK-SER");	
%>
		<%="YESGOGOGO:OK:"+ubser%>
<%}else{%>
    <%="YESGOGOGO:FAIL:"+msgid+":"+msgdesc+":"+retncode+":"+retndesc%>
<%}

tObj.dispose();
tObj = null;
%>