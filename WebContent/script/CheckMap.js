/**
 *@Project     : EAI_IBANK
 *@File name   : CheckMap.js
 *@Description :
 * 
 * =========================
 *@Version     : V. 1.0
 *@Author      : Alma
 *@Create date : 2008/10/20
 *@Modify date :
 *@Modify note : CQ0601000.jsp ���ڰU���d�ߨϥ�
 *
 */
 
 function ChkCategory(src) {
 	switch(src) {
 		case "1":
 			return "�@����";
 		case "2":
 			return "�G����";
 		case "3":
 			return "�T����";
 		case "4":
 			return "�|����";
 		default:
 			return src;
 	}
 }
 
 function ChkStatus(src) {
 	switch(src) {
 		case "B":
 			return "�O�ޤ�";
 		case "C":
 			return "���e��";
 		case "E":
 			return "�P�b";
 		case "F":
 			return "�M��";
 		case "R":
 			return "�h��";
 		default:
 			return src;
 	}
 }
