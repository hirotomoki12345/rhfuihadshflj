function doGet(e) {
  var latitude = e.parameter.latitude;
  var longitude = e.parameter.longitude;
  
  var folderId = '1TtfQ5ifzu0BbL97A9TlL-Jh4sdSnP_gk'; // 保存するフォルダのIDを指定します
  var fileName = '位置情報.txt'; // 保存するファイルの名前を指定します
  
  var folder = DriveApp.getFolderById(folderId);
  var file = folder.createFile(fileName, latitude + ',' + longitude);
  
  return ContentService.createTextOutput('位置情報が保存されました。');
}
