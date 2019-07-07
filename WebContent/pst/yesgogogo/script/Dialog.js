// JScript 檔

var BUTTON_OK=1;
var BUTTON_CANCEL=2;

var dialog_return = BUTTON_CANCEL;

function showDialog(strUrl, title, style)
{
    dialog_return = BUTTON_CANCEL;
    window.showModalDialog(strUrl, self, style);
/*
	if(getBrowserType()==BROWSER_IE)
	{
		window.showModalDialog(strUrl, self, style);
	}
	else
	{
		window.open(strUrl, title, "modal=yes,"+ style);
	}
*/
	return dialog_return;
}

function click_OK()
{
    dialog_return = BUTTON_OK;
}

function click_Cancel()
{
    dialog_return = BUTTON_CANCEL;
}

function getOpener()
{
    if(getBrowserType()==BROWSER_IE)
    {
        return window.dialogArguments;
    }
    else
    {
        return window.opener;
    }
}