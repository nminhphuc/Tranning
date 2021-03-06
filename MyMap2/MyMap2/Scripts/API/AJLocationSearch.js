AJLocationSearch_class = function () { };
Object.extend(AJLocationSearch_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
    GetTreeChapter: function () {
        return this.invoke("GetTreeChapter", {}, this.GetTreeChapter.getArguments().slice(0));
    },
    GetTemplate: function (UserName) {
        return this.invoke("GetTemplate", { "UserName": UserName }, this.GetTemplate.getArguments().slice(1));
    },
    URLEncoding: function (sURL) {
        return this.invoke("URLEncoding", { "sURL": sURL }, this.URLEncoding.getArguments().slice(1));
    },
    URLDecoding: function (sURL) {
        return this.invoke("URLDecoding", { "sURL": sURL }, this.URLDecoding.getArguments().slice(1));
    },
    GetAllMyMap: function () {
        return this.invoke("GetAllMyMap", {}, this.GetAllMyMap.getArguments().slice(0));
    },
    GetAllMyCoor: function (mymapId) {
        return this.invoke("GetAllMyCoor", { "mymapId": mymapId }, this.GetAllMyCoor.getArguments().slice(1));
    },
    GetAllMyCoorML: function (mymapId) {
        return this.invoke("GetAllMyCoorML", { "mymapId": mymapId }, this.GetAllMyCoorML.getArguments().slice(1));
    },
    CreateNewMap: function (strRequest) {
        return this.invoke("CreateNewMap", { "strRequest": strRequest }, this.CreateNewMap.getArguments().slice(1));
    },
    GetMyMapProperty: function (MyMapID) {
        return this.invoke("GetMyMapProperty", { "MyMapID": MyMapID }, this.GetMyMapProperty.getArguments().slice(1));
    },
    GetMyMapCoorProperty: function (MyMapCoorID) {
        return this.invoke("GetMyMapCoorProperty", { "MyMapCoorID": MyMapCoorID }, this.GetMyMapCoorProperty.getArguments().slice(1));
    },
    DeleteMyMap: function (MyMapID) {
        return this.invoke("DeleteMyMap", { "MyMapID": MyMapID }, this.DeleteMyMap.getArguments().slice(1));
    },
    SaveMyMap: function (strMM, strNewObj, strEditObj, strDeleteObj, ArrMMProperty, ArrNewProperty, ArrEditProperty, strDeleteProperty) {
        return this.invoke("SaveMyMap", { "strMM": strMM, "strNewObj": strNewObj, "strEditObj": strEditObj, "strDeleteObj": strDeleteObj, "ArrMMProperty": ArrMMProperty, "ArrNewProperty": ArrNewProperty, "ArrEditProperty": ArrEditProperty, "strDeleteProperty": strDeleteProperty }, this.SaveMyMap.getArguments().slice(8));
    },
    IsAuthenticated: function () {
        return this.invoke("IsAuthenticated", {}, this.IsAuthenticated.getArguments().slice(0));
    },
    SearchResultWithAds: function (strKey, strWhat, strWhere, nPage, nCLevel, dbLX, dbLY, dbRX, dbRY, nSearchType) {
        return this.invoke("SearchResultWithAds", { "strKey": strKey, "strWhat": strWhat, "strWhere": strWhere, "nPage": nPage, "nCLevel": nCLevel, "dbLX": dbLX, "dbLY": dbLY, "dbRX": dbRX, "dbRY": dbRY, "nSearchType": nSearchType }, this.SearchResultWithAds.getArguments().slice(10));
    },
    SearchWhat: function (strKey, nCLevel, dbLX, dbLY, dbRX, dbRY) {
        return this.invoke("SearchWhat", { "strKey": strKey, "nCLevel": nCLevel, "dbLX": dbLX, "dbLY": dbLY, "dbRX": dbRX, "dbRY": dbRY }, this.SearchWhat.getArguments().slice(6));
    },
    SearchAutocomplete: function (strKey) {
        return this.invoke("SearchAutocomplete", { "strKey": strKey }, this.SearchAutocomplete.getArguments().slice(1));
    },
    SearchResult: function (strKey, strWhat, strWhere, nPage, nCLevel, dbLX, dbLY, dbRX, dbRY, nSearchType) {
        return this.invoke("SearchResult", { "strKey": strKey, "strWhat": strWhat, "strWhere": strWhere, "nPage": nPage, "nCLevel": nCLevel, "dbLX": dbLX, "dbLY": dbLY, "dbRX": dbRX, "dbRY": dbRY, "nSearchType": nSearchType }, this.SearchResult.getArguments().slice(10));
    },
    SearchRoad: function (strKey, strWhat, strWhere, nPage, nCLevel, dbLX, dbLY, dbRX, dbRY, nSearchType) {
        return this.invoke("SearchRoad", { "strKey": strKey, "strWhat": strWhat, "strWhere": strWhere, "nPage": nPage, "nCLevel": nCLevel, "dbLX": dbLX, "dbLY": dbLY, "dbRX": dbRX, "dbRY": dbRY, "nSearchType": nSearchType }, this.SearchRoad.getArguments().slice(10));
    },
    FindPlace: function (strKey, nPage, nCLevel, dbLX, dbLY, dbRX, dbRY) {
        return this.invoke("FindPlace", { "strKey": strKey, "nPage": nPage, "nCLevel": nCLevel, "dbLX": dbLX, "dbLY": dbLY, "dbRX": dbRX, "dbRY": dbRY }, this.FindPlace.getArguments().slice(7));
    },
    SearchStoreInAdd: function (strKey, strWhat, strWhere, nPage, nCLevel, dbLX, dbLY, dbRX, dbRY, nSearchType) {
        return this.invoke("SearchStoreInAdd", { "strKey": strKey, "strWhat": strWhat, "strWhere": strWhere, "nPage": nPage, "nCLevel": nCLevel, "dbLX": dbLX, "dbLY": dbLY, "dbRX": dbRX, "dbRY": dbRY, "nSearchType": nSearchType }, this.SearchStoreInAdd.getArguments().slice(10));
    },
    SearchCategoryInWard: function (strAddress, strCategory, strCategoryType, nPage, nPageSize) {
        return this.invoke("SearchCategoryInWard", { "strAddress": strAddress, "strCategory": strCategory, "strCategoryType": strCategoryType, "nPage": nPage, "nPageSize": nPageSize }, this.SearchCategoryInWard.getArguments().slice(5));
    },
    SearchUniversityExam: function (strUniversityName, strAdmissionNo, nPage) {
        return this.invoke("SearchUniversityExam", { "strUniversityName": strUniversityName, "strAdmissionNo": strAdmissionNo, "nPage": nPage }, this.SearchUniversityExam.getArguments().slice(3));
    },
    FindMorePlace: function (strKey, strWhat, strWhere, nPage, nCLevel, dbLX, dbLY, dbRX, dbRY, nSearchType) {
        return this.invoke("FindMorePlace", { "strKey": strKey, "strWhat": strWhat, "strWhere": strWhere, "nPage": nPage, "nCLevel": nCLevel, "dbLX": dbLX, "dbLY": dbLY, "dbRX": dbRX, "dbRY": dbRY, "nSearchType": nSearchType }, this.FindMorePlace.getArguments().slice(10));
    },
    SWInsertFocusResultWeb: function (strKeyWord, strName, strAddress, nSearchType, strGuID, intPage, intActionType) {
        return this.invoke("SWInsertFocusResultWeb", { "strKeyWord": strKeyWord, "strName": strName, "strAddress": strAddress, "nSearchType": nSearchType, "strGuID": strGuID, "intPage": intPage, "intActionType": intActionType }, this.SWInsertFocusResultWeb.getArguments().slice(7));
    },
    ClickStatistics: function (strObjectKeyName, strObjectNote) {
        return this.invoke("ClickStatistics", { "strObjectKeyName": strObjectKeyName, "strObjectNote": strObjectNote }, this.ClickStatistics.getArguments().slice(2));
    },
    SearchNearByPoint: function (strKey, strWhat, strName, strAddress, strLng, strLat, dbDistance, nPage) {
        return this.invoke("SearchNearByPoint", { "strKey": strKey, "strWhat": strWhat, "strName": strName, "strAddress": strAddress, "strLng": strLng, "strLat": strLat, "dbDistance": dbDistance, "nPage": nPage }, this.SearchNearByPoint.getArguments().slice(8));
    },
    SearchNearByPointForBanking: function (strKey, strWhat, strName, strAddress, strLng, strLat, dbDistance, nPage) {
        return this.invoke("SearchNearByPointForBanking", { "strKey": strKey, "strWhat": strWhat, "strName": strName, "strAddress": strAddress, "strLng": strLng, "strLat": strLat, "dbDistance": dbDistance, "nPage": nPage }, this.SearchNearByPointForBanking.getArguments().slice(8));
    },
    SWInsertFocusResultWap: function (strKeyWord, strName, strAddress, nSearchType, strLat, strLng, intPage, intActionType) {
        return this.invoke("SWInsertFocusResultWap", { "strKeyWord": strKeyWord, "strName": strName, "strAddress": strAddress, "nSearchType": nSearchType, "strLat": strLat, "strLng": strLng, "intPage": intPage, "intActionType": intActionType }, this.SWInsertFocusResultWap.getArguments().slice(8));
    },
    GetGeometry: function (dgId, layerName) {
        return this.invoke("GetGeometry", { "dgId": dgId, "layerName": layerName }, this.GetGeometry.getArguments().slice(2));
    },
    SearchDefaultLocation: function (key) {
        return this.invoke("SearchDefaultLocation", { "key": key }, this.SearchDefaultLocation.getArguments().slice(1));
    },
    FindShortestBus: function (ClientID, strFindString, nTransportType, iInstructionMode, iFindMode, nFindType, level, left, top, right, bottom, findopts, index, sub, isInsert, alley, block, trafficJam) {
        return this.invoke("FindShortestBus", { "ClientID": ClientID, "strFindString": strFindString, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "nFindType": nFindType, "level": level, "left": left, "top": top, "right": right, "bottom": bottom, "findopts": findopts, "index": index, "sub": sub, "isInsert": isInsert, "alley": alley, "block": block, "trafficJam": trafficJam }, this.FindShortestBus.getArguments().slice(18));
    },
    ClearAllPath: function (nPath) {
        return this.invoke("ClearAllPath", { "nPath": nPath }, this.ClearAllPath.getArguments().slice(1));
    },
    DeletePath: function (indexPath, nPath) {
        return this.invoke("DeletePath", { "indexPath": indexPath, "nPath": nPath }, this.DeletePath.getArguments().slice(2));
    },
    GetAllPath: function (nPath, level, top, left, bottom, right) {
        return this.invoke("GetAllPath", { "nPath": nPath, "level": level, "top": top, "left": left, "bottom": bottom, "right": right }, this.GetAllPath.getArguments().slice(6));
    },
    DeleteAndFindPath: function (strPoints, nTransportType, iInstructionMode, iFindMode, alley, block, trafficJam, level, top, left, bottom, right, indexShape, nPath) {
        return this.invoke("DeleteAndFindPath", { "strPoints": strPoints, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "alley": alley, "block": block, "trafficJam": trafficJam, "level": level, "top": top, "left": left, "bottom": bottom, "right": right, "indexShape": indexShape, "nPath": nPath }, this.DeleteAndFindPath.getArguments().slice(14));
    },
    GetPathBus: function (strPoints, nTransportType, iInstructionMode, iFindMode, level, top, left, bottom, right) {
        return this.invoke("GetPathBus", { "strPoints": strPoints, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "level": level, "top": top, "left": left, "bottom": bottom, "right": right }, this.GetPathBus.getArguments().slice(9));
    },
    GetAllPathBus: function (level, top, left, bottom, right) {
        return this.invoke("GetAllPathBus", { "level": level, "top": top, "left": left, "bottom": bottom, "right": right }, this.GetAllPathBus.getArguments().slice(5));
    },
    GetPath: function (strPoints, nTransportType, iInstructionMode, iFindMode, alley, block, trafficJam, level, top, left, bottom, right, aIndexShape, nNumPath, IsDrag, IsAddPath) {
        return this.invoke("GetPath", { "strPoints": strPoints, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "alley": alley, "block": block, "trafficJam": trafficJam, "level": level, "top": top, "left": left, "bottom": bottom, "right": right, "aIndexShape": aIndexShape, "nNumPath": nNumPath, "IsDrag": IsDrag, "IsAddPath": IsAddPath }, this.GetPath.getArguments().slice(16));
    },
    BuildAllPath: function (strPoints, nTransportType, iInstructionMode, iFindMode, alley, block, trafficJam, level, top, left, bottom, right) {
        return this.invoke("BuildAllPath", { "strPoints": strPoints, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "alley": alley, "block": block, "trafficJam": trafficJam, "level": level, "top": top, "left": left, "bottom": bottom, "right": right }, this.BuildAllPath.getArguments().slice(12));
    },
    FindShortestPath: function (ClientID, strFindString, nTransportType, iInstructionMode, iFindMode, nFindType, level, left, top, right, bottom, findopts, index, sub, isInsert, alley, block, trafficJam) {
        return this.invoke("FindShortestPath", { "ClientID": ClientID, "strFindString": strFindString, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "nFindType": nFindType, "level": level, "left": left, "top": top, "right": right, "bottom": bottom, "findopts": findopts, "index": index, "sub": sub, "isInsert": isInsert, "alley": alley, "block": block, "trafficJam": trafficJam }, this.FindShortestPath.getArguments().slice(18));
    },
    FindShortestPathTouch: function (ClientID, strFindString, nTransportType, iInstructionMode, iFindMode, nFindType, level, left, top, right, bottom, findopts, index, sub, isInsert, alley, block, trafficJam) {
        return this.invoke("FindShortestPathTouch", { "ClientID": ClientID, "strFindString": strFindString, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "nFindType": nFindType, "level": level, "left": left, "top": top, "right": right, "bottom": bottom, "findopts": findopts, "index": index, "sub": sub, "isInsert": isInsert, "alley": alley, "block": block, "trafficJam": trafficJam }, this.FindShortestPathTouch.getArguments().slice(18));
    },
    FindTrafficJamShortestPath: function (ClientID, strFindString, nTransportType, iInstructionMode, iFindMode, nFindType, level, left, top, right, bottom, findopts, index, sub, isInsert, alley, block) {
        return this.invoke("FindTrafficJamShortestPath", { "ClientID": ClientID, "strFindString": strFindString, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "nFindType": nFindType, "level": level, "left": left, "top": top, "right": right, "bottom": bottom, "findopts": findopts, "index": index, "sub": sub, "isInsert": isInsert, "alley": alley, "block": block }, this.FindTrafficJamShortestPath.getArguments().slice(17));
    },
    FindShortestPathTracking: function (strUserPosition, strFindString, nTransportType, iInstructionMode, iFindMode, nFindType, level, left, top, right, bottom, findopts, index, sub, isInsert, alley, nTargets) {
        return this.invoke("FindShortestPathTracking", { "strUserPosition": strUserPosition, "strFindString": strFindString, "nTransportType": nTransportType, "iInstructionMode": iInstructionMode, "iFindMode": iFindMode, "nFindType": nFindType, "level": level, "left": left, "top": top, "right": right, "bottom": bottom, "findopts": findopts, "index": index, "sub": sub, "isInsert": isInsert, "alley": alley, "nTargets": nTargets }, this.FindShortestPathTracking.getArguments().slice(17));
    },
    GetDirection: function () {
        return this.invoke("GetDirection", {}, this.GetDirection.getArguments().slice(0));
    },
    GetDirectionLatLngs: function (ClientID, level, left, top, right, bottom) {
        return this.invoke("GetDirectionLatLngs", { "ClientID": ClientID, "level": level, "left": left, "top": top, "right": right, "bottom": bottom }, this.GetDirectionLatLngs.getArguments().slice(6));
    },
    RemoveDirectionPlaces: function (ClientID, start, length) {
        return this.invoke("RemoveDirectionPlaces", { "ClientID": ClientID, "start": start, "length": length }, this.RemoveDirectionPlaces.getArguments().slice(3));
    },
    RemoveSession: function () {
        return this.invoke("RemoveSession", {}, this.RemoveSession.getArguments().slice(0));
    },
    SearchNearPath: function (indexPath, key, radius, nPage) {
        return this.invoke("SearchNearPath", { "indexPath": indexPath, "key": key, "radius": radius, "nPage": nPage }, this.SearchNearPath.getArguments().slice(4));
    },
    SearchNearByPolyline: function (ClientID, start, length, keyword, strWhat, strWhere, nPage, radius) {
        return this.invoke("SearchNearByPolyline", { "ClientID": ClientID, "start": start, "length": length, "keyword": keyword, "strWhat": strWhat, "strWhere": strWhere, "nPage": nPage, "radius": radius }, this.SearchNearByPolyline.getArguments().slice(8));
    },
    FindMoreNearByPolyline: function (ClientID, start, length, keyword, strWhat, strWhere, nPage, radius) {
        return this.invoke("FindMoreNearByPolyline", { "ClientID": ClientID, "start": start, "length": length, "keyword": keyword, "strWhat": strWhat, "strWhere": strWhere, "nPage": nPage, "radius": radius }, this.FindMoreNearByPolyline.getArguments().slice(8));
    },
    FindMoreNearByPoint: function (strKey, strWhat, strName, strAddress, strLng, strLat, dbDistance, nPage) {
        return this.invoke("FindMoreNearByPoint", { "strKey": strKey, "strWhat": strWhat, "strName": strName, "strAddress": strAddress, "strLng": strLng, "strLat": strLat, "dbDistance": dbDistance, "nPage": nPage }, this.FindMoreNearByPoint.getArguments().slice(8));
    },
    GetRandomLocation: function () {
        return this.invoke("GetRandomLocation", {}, this.GetRandomLocation.getArguments().slice(0));
    },
    GetInfo: function (guid) {
        return this.invoke("GetInfo", { "guid": guid }, this.GetInfo.getArguments().slice(1));
    },
    GetInfoFromVietbandoID: function (VietbandoID) {
        return this.invoke("GetInfoFromVietbandoID", { "VietbandoID": VietbandoID }, this.GetInfoFromVietbandoID.getArguments().slice(1));
    },
    GetStoreInfo: function (sId) {
        return this.invoke("GetStoreInfo", { "sId": sId }, this.GetStoreInfo.getArguments().slice(1));
    },
    GetOverview: function (guid) {
        return this.invoke("GetOverview", { "guid": guid }, this.GetOverview.getArguments().slice(1));
    },
    BeginWriteAReview: function () {
        return this.invoke("BeginWriteAReview", {}, this.BeginWriteAReview.getArguments().slice(0));
    },
    GetReview: function (guid, sortype) {
        return this.invoke("GetReview", { "guid": guid, "sortype": sortype }, this.GetReview.getArguments().slice(2));
    },
    DeleteReview: function (guid) {
        return this.invoke("DeleteReview", { "guid": guid }, this.DeleteReview.getArguments().slice(1));
    },
    SendReview:     function (title, rate, content, guid) {
        return this.invoke("SendReview", { "title": title, "rate": rate, "content": content, "guid": guid }, this.SendReview.getArguments().slice(4));
    },
    GetPhoto: function (guid) {
        return this.invoke("GetPhoto", { "guid": guid }, this.GetPhoto.getArguments().slice(1));
    },
    GetVideo: function (guid) {
        return this.invoke("GetVideo", { "guid": guid }, this.GetVideo.getArguments().slice(1));
    },
    SendFeedBack: function (Name, Email, Comment) {
        return this.invoke("SendFeedBack", { "Name": Name, "Email": Email, "Comment": Comment }, this.SendFeedBack.getArguments().slice(3));
    },
    AddPlace: function (strName, strNumber, strStreet, strWard, strDistrict, strProvince, strPhone, strNote, strCoor, VbdID) {
        return this.invoke("AddPlace", { "strName": strName, "strNumber": strNumber, "strStreet": strStreet, "strWard": strWard, "strDistrict": strDistrict, "strProvince": strProvince, "strPhone": strPhone, "strNote": strNote, "strCoor": strCoor, "VbdID": VbdID }, this.AddPlace.getArguments().slice(10));
    },
    AddPlaceL: function (strName, strNumber, strStreet, strWard, strDistrict, strProvince, strPhone, strNote, strCoor, VbdID, strExtAdd, strWebsite, strSKeyword, strRID) {
        return this.invoke("AddPlaceL", { "strName": strName, "strNumber": strNumber, "strStreet": strStreet, "strWard": strWard, "strDistrict": strDistrict, "strProvince": strProvince, "strPhone": strPhone, "strNote": strNote, "strCoor": strCoor, "VbdID": VbdID, "strExtAdd": strExtAdd, "strWebsite": strWebsite, "strSKeyword": strSKeyword, "strRID": strRID }, this.AddPlaceL.getArguments().slice(14));
    },
    IsVBDIDAvailable: function (VBDID) {
        return this.invoke("IsVBDIDAvailable", { "VBDID": VBDID }, this.IsVBDIDAvailable.getArguments().slice(1));
    },
    GetChild: function (ParentID) {
        return this.invoke("GetChild", { "ParentID": ParentID }, this.GetChild.getArguments().slice(1));
    },
    GetFitLevel: function (ID, type, main_width, main_height) {
        return this.invoke("GetFitLevel", { "ID": ID, "type": type, "main_width": main_width, "main_height": main_height }, this.GetFitLevel.getArguments().slice(4));
    },
    GetAHGeometry: function (ID, level, type, left, top, right, bottom) {
        return this.invoke("GetAHGeometry", { "ID": ID, "level": level, "type": type, "left": left, "top": top, "right": right, "bottom": bottom }, this.GetAHGeometry.getArguments().slice(7));
    },
    GetGeoInfoByPoint: function (X, Y) {
        return this.invoke("GetGeoInfoByPoint", { "X": X, "Y": Y }, this.GetGeoInfoByPoint.getArguments().slice(2));
    },
    GetGeoInfoByPointForManageStore: function (X, Y) {
        return this.invoke("GetGeoInfoByPointForManageStore", { "X": X, "Y": Y }, this.GetGeoInfoByPointForManageStore.getArguments().slice(2));
    },
    GetGeoObjectByPoint: function (X, Y) {
        return this.invoke("GetGeoObjectByPoint", { "X": X, "Y": Y }, this.GetGeoObjectByPoint.getArguments().slice(2));
    },
    ping_connection: function (pingcontent) {
        return this.invoke("ping_connection", { "pingcontent": pingcontent }, this.ping_connection.getArguments().slice(1));
    },
    GetAllBank: function () {
        return this.invoke("GetAllBank", {}, this.GetAllBank.getArguments().slice(0));
    },  
    GetBlockHouse: function () {
        return this.invoke("GetBlockHouse", {}, this.GetBlockHouse.getArguments().slice(0));
    },
    GetPoiForType: function (X, Y, Level) {
        return this.invoke("GetPoiForType", { "X": X, "Y": Y, "Level": Level }, this.GetPoiForType.getArguments().slice(3));
    },
    GetPoiForTiles: function (arrPoint, Level) {
        return this.invoke("GetPoiForTiles", { "arrPoint": arrPoint, "Level": Level }, this.GetPoiForTiles.getArguments().slice(2));
    },
    SendFeedback: function (strName, strEmail, strDes) {
        return this.invoke("SendFeedback", { "strName": strName, "strEmail": strEmail, "strDes": strDes }, this.SendFeedback.getArguments().slice(3));
    },
    SetSearchType: function (searchType) {
        return this.invoke("SetSearchType", { "searchType": searchType }, this.SetSearchType.getArguments().slice(1));
    },
    GetSearchType: function () {
        return this.invoke("GetSearchType", {}, this.GetSearchType.getArguments().slice(0));
    },
    url: '/maps/ajaxpro/AJLocationSearch,Vietbando.Web.Library.ashx'
}));
AJLocationSearch = new AJLocationSearch_class();

