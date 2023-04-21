function reverseString(string) {
    // return a new array of strings
    const arrayStrings = string.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}

function toggleInfo() {

  var x = document.getElementById("moreInfo");

  if (x.style.display === "none") {

    x.style.display = "block";

  } else {

    x.style.display = "none";

  }

}


// Get the full URL of the current page
var fullUrl = window.location.href;

// Parse the query string from the URL
var queryString = fullUrl.split("?")[1];

// Split the query string into individual parameters
var parameters = queryString.split("&");



// Loop through the parameters and extract the key and value
for (var i = 0; i < parameters.length; i++) {

  var keyValuePair = parameters[i].split("=");
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var message;
  var detailedMessage;
  var suggestedMessage;
  var redirectLink;
  var redirectLabel;
  var moreInfoBtnLabel;
  var moreInfo;
  var labelUsername;
  var labelUserId;
  var labelURL;
  var labelErrorCode;
  var labelLang;

  // If the key is "message", extract the value between the parentheses
  if (key === "message") {

    let str          = value;
    // returns error code between parentheses * this will always grab the parentheses from the end of the string
    var errorCode    = str.split('(').pop().split(')')[0]; 
    // remove error code from the message string
    var rawMessage   = str.replace('('+errorCode+')', '');    

    var message = decodeURIComponent(rawMessage.replaceAll('+',' ')); // Remove '+' and decode message
	message = message.replace(/(https?:\/\/[^\s]+)/g,'<a href="$1">$1</a>'); //make URLs clickable

    titleMessage     = "We are sorry.";
    detailedMessage  = "Message Not Available"; // default message when undefined
    redirectLink     = "https://google.com"; // default link when undefined
    redirectLabel    = "Go back"; // default label when undefined'
    moreInfoBtnLabel = "Click to display more information";
    suggestedMessage = "Instruction Not Available";
    moreInfoTitle    = "More Information";
    labelUsername    = "Username";
    labelUserId      = "User Id";
    labelURL         = "URL";
    labelErrorCode   = "Error Code";
    labelLang        = "Lang";
    redirectLabel    = "none";
    
    switch (errorCode) {
      case 'vc3':
        message          = "Exceeded Device Limit";  // user defined custom message for vc3
        detailedMessage  = "The user has exceeded the device limit that is set in the associated DRM policy.";
        suggestedMessage = "*Please purchase more devices to access this content"
        redirectLink     = "https://google.com";
        redirectLabel    = "Visit Store";
        break;
      case '2p3':
        message          = "Inactive Document"; // user defined custom message for 2p3
        detailedMessage  = "The user is trying to unlock a file that has been deactivated in Vitrium.";
        suggestedMessage = "*Please check if your access to this link is valid"
        redirectLink     = "https://google.com";
        redirectLabel    = "Go back";
        break;
    }

  }

  // If the key is "url", decode the URL-encoded value
  if (key === "url") {
    value = decodeURIComponent(value).replace('/Forbidden','');
  }

  if(key === "lang"){

    if(value === "fr"){

      titleMessage     = "Nous sommes désolés";
      moreInfoBtnLabel = "Cliquez pour afficher plus d'informations";
      moreInfoTitle    = "Plus dinformation";
      labelUsername    = "nom d'utilisateur";
      labelUserId      = "ID de l'utilisateur";
      labelURL         = "URL";
      labelErrorCode   = "Code d'erreur";
      labelLang        = "Langue";
      detailedMessage  = "Message non disponible"
      suggestedMessage = "Instructions non disponibles"

      switch (errorCode) {
        case 'vc3':
          message          = "Limite d'appareils dépassée";  // user defined custom message for vc3
          detailedMessage  = "L'utilisateur a dépassé la limite d'appareils définie dans la stratégie DRM associée.";
          suggestedMessage = "*Veuillez acheter plus d'appareils pour accéder à ce contenu"
          redirectLabel    = "Visiter le magasin";
          break;
        case '2p3':
          message          = "Document inactif"; // user defined custom message for 2p3
          detailedMessage  = "L'utilisateur essaie de déverrouiller un fichier qui a été désactivé dans Vitrium.";
          suggestedMessage = "*Veuillez vérifier si votre accès à ce lien est valide"
          redirectLabel    = "Retourner";
          break;
      }

    }

    if(value === "zh_cn"){

      titleMessage     = "我们很抱歉";
      moreInfoBtnLabel = "点击显示更多信息";
      moreInfoTitle    = "更多信息";
      labelUsername    = "用户名";
      labelUserId      = "用户ID";
      labelURL         = "网址";
      labelErrorCode   = "错误代码";
      labelLang        = "简体";
      detailedMessage  = "消息不可靠";
      suggestedMessage = "说明不可用";
      redirectLabel    = "none"; // "none" will hide this button


      switch (errorCode) {
        case 'vc3':
          message          = "超出设备限制";  // user defined custom message for vc3
          detailedMessage  = "用户已超出相关 DRM 策略中设置的设备限制。";
          suggestedMessage = "*请购买更多设备以访问此内容"
          redirectLabel    = "访问商店";
          break;
        case '2p3':
          message          = "文档无效"; // user defined custom message for 2p3
          detailedMessage  = "用户正在尝试解锁已在 Vitrium 中禁用的文件。";
          suggestedMessage = "*请检查您对该链接的访问是否有效"
          redirectLabel    = "返回";
          break;
      }

    }

    if(value === "zh_tw"){

      titleMessage     = "我們很抱歉";
      moreInfoBtnLabel = "點擊顯示更多信息";
      moreInfoTitle    = "更多信息";
      labelUsername    = "用戶名";
      labelUserId      = "用戶ID";
      labelURL         = "網址";
      labelErrorCode   = "錯誤代碼";
      labelLang        = "繁體";
      detailedMessage  = "消息不可用";
      suggestedMessage = "說明不可用";
      redirectLabel    = "none"; // "none" will hide this button


      switch (errorCode) {
        case 'vc3':
          message          = "超出設備限制";  // user defined custom message for vc3
          detailedMessage  = "用戶已超出相關 DRM 策略中設置的設備限制。";
          suggestedMessage = "*請購買更多設備以訪問此內容"
          redirectLabel    = "訪問商店";
          break;
        case '2p3':
          message          = "文檔無效"; // user defined custom message for 2p3
          detailedMessage  = "用戶正在嘗試解鎖已在 Vitrium 中禁用的文件。";
          suggestedMessage = "*請檢查您對該鏈接的訪問是否有效"
          redirectLabel    = "返回";
          break;
      }

    }

  }

  // Update the corresponding span element with the value
  document.getElementById(key).innerHTML = value;

} 

  document.getElementById('labelUsername').innerHTML    = labelUsername;
  document.getElementById('labelUserId').innerHTML      = labelUserId;
  document.getElementById('labelURL').innerHTML         = labelURL;
  document.getElementById('labelErrorCode').innerHTML   = labelErrorCode;
  document.getElementById('labelLang').innerHTML        = labelLang;

  document.getElementById('message').innerHTML          = message;
  document.getElementById('errorCode').innerHTML        = errorCode;
  document.getElementById('detailedMessage').innerHTML  = detailedMessage;
  document.getElementById('suggestedMessage').innerHTML = suggestedMessage;
  document.getElementById('redirectLink').innerHTML     = '<a href="' + redirectLink + '"><button class="btn-sm" style="display:'+ redirectLabel +'">' + redirectLabel + '</button></a>';
  document.getElementById('titleMessage').innerHTML     = titleMessage;

  document.getElementById('moreInfoBtnLabel').innerHTML = moreInfoBtnLabel;
  document.getElementById('moreInfoTitle').innerHTML    = moreInfoTitle;


let docTitle = document.title;
window.addEventListener("blur", () => document.title  = "We are sorry");
window.addEventListener("focus", () => document.title = message);
