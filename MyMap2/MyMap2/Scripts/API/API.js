var typeButton = "";

var MyMap = function () {

    var map, positionCenter;
    var initialize = function () {
        var mapContainer = document.getElementById("container");
        var mapProp = {
            center: new vietbando.LatLng(10.792409292650149, 106.6392794251442),
            zoom: 16,
            zoomControlOptions: { position: vbd.ControlPosition.TOP_RIGHT, offset: new vbd.Size(0, 0) }
        };
        map = new vbd.Map(mapContainer, mapProp);
        positionCenter = map.getCenter();
        AddMarker();
        ListenEvent();
        //ResetButton();

    }

    var AddMarker = function () {
        var size = new vbd.Size(20, 34);
        var icon = new vbd.Icon({ size: size, url: 'http://developers.vietbando.com/Images/red_markers_A_J2.png', origin: new vietbando.Point(0, 0) });
        var marker = new vbd.Marker({
            position: map.getCenter(),
            icon: icon
        });
        marker.setMap(map);
        vbd.event.addListener(marker, 'click', function (param) {
            alert(param.LatLng.toString())
        });
    }


    var AddCustomMarker = function (position) {
        var content = '<div class="fa fa-plane red"></p></div>';
        var marker = new vbd.CustomMarker({ draggable: true, crossOnDrag: false, position: position, content: content, icon: new vbd.Icon({ size: new vbd.Size(46, 46), anchor: new vbd.Point(23, 23) }) });
        marker.setMap(map);

        vbd.event.addListener(marker, 'click', function () {
            map.removeMarker(marker);
        });
    }

    var AddInfoWindow = function (position) {
        var marker = new vbd.Marker({
            position: position
        });
        marker.setMap(map);        var templateContent = function (info) {
            var html = ['<div class="MiniPopup">'];
            //title
            html.push('<span class="Title">' + info.title + '<a id="pmarklocation" class="favToogle-Dis"></a></span>');
            html.push('<br>');
            html.push('<p class="Content">');
            //img
            html.push('<span class="popupImg"><img src="' + info.imgsrc + '"></span>');
            //address
            html.push('<span class="address">' + info.address + '</span>');
            //phone
            if (info.phone) {
                html.push('<span class="phone">' + info.phone + '</span>');
            }
            //fax
            if (info.fax) {
                html.push('<span title="Fax" class="fax">' + info.fax + '</span>');
            }
            if (info.vbdid) {
                html.push('<a class="vietbandoid" target="_blank" href="/' + info.vbdid + '">' + info.vbdid + '</a>');
            }
            if (info.website) {
                html.push('<a class="website" target="_blank" href="' + info.website + '">' + info.website + '</a>');
            }
            if (info.comment) {
                html.push('<span class="comment">' + info.comment + '</span>');
            }

            html.push('</p>');
            html.push('</div>');
            return html.join('');
        };

        //display data
        var contentShow = templateContent({
            title: 'Công ty CP Tin học - Bản đồ Việt Nam',
            address: '31A Huỳnh Văn Bánh, P. 17, Q. Phú Nhuận, Tp.HCM',
            imgsrc: 'data:image/jpeg;base64,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',
            description: 'Cafe tại đây có nhiều điều xem',
            phone: ' (84-8) 3995 6664',
            fax: ' (84-4) 3995 6662',
            vbdid: 'vietbando',
            comment: 'Cung Cấp Bản đồ Việt Nam',
            website: 'http://www.vietbando.com'

        });
        var infowindow = new vbd.InfoWindow({ content: contentShow });
        infowindow.open(map, marker);
        vbd.event.addListener(marker, 'click', function (param) {
            infowindow.open(map, marker);
        });

    }

    var arrPolyLine = [];
    var AddPolyLine = function (position) {
        arrPolyLine.push(position)
        if (arrPolyLine.length > 1) {
            var polyline = new vbd.Polyline({ path: arrPolyLine, strokeOpacity: 0.5, strokeWidth: 3 });
            polyline.setMap(map);
        }
    }

    var arrPolyGon = [];
    var AddPolyGon = function (position) {
        arrPolyGon.push(position)
        if (arrPolyGon.length > 1) {
            var polygon = new vietbando.Polygon({ paths: arrPolyGon, strokeOpacity: 0.5, strokeWidth: 3 });
            polygon.setMap(map);
        }
    }

    var ListenEvent = function () {
        vbd.event.addListener(map, 'click', function (param) {
            $('#onClick').text(param.LatLng.toString());

            switch (typeButton) {
                case "AddCustomMarker": AddCustomMarker(param.LatLng); break;
                case "AddInfoWindow": AddInfoWindow(param.LatLng); break;
                case "AddPolyLine": AddPolyLine(param.LatLng); break;
                case "AddPolyGon": AddPolyGon(param.LatLng); break;
                default: break;
            }
        });
        vbd.event.addListener(map, 'mousemove', function (param) {
            $('#MoveMouse').text(param.LatLng.toString());
        });
        vbd.event.addListener(map, 'dblclick', function (param) {
            $('#doubleClick').text(param.LatLng.toString());
        });
        vbd.event.addListener(map, 'rightclick', function (param) {
            $('#RightClick').text(param.LatLng.toString());
        });
        vbd.event.addListener(map, 'zoomstart', function (param) {
            console.log(param);
            $('#ZoomStart').text(map.getZoom);
        });
        vbd.event.addListener(map, 'zoomend', function (param) {
            console.log(param);
            $('#ZoomEnd').text("true");
        });
    }

    $('#AddCustomMarker').click(function () {
        typeButton = "AddCustomMarker";
    })
    $('#AddInfoWindow').click(function () {
        typeButton = "AddInfoWindow";
    })
    $('#AddPolyLine').click(function () {
        typeButton = "AddPolyLine";
    })
    $('#AddPolyGon').click(function () {
        typeButton = "AddPolyGon";
    })

    //var ResetButton = function () {
    //    $('#AddCustomMarker').text("Add Custom Marker");
    //    $('#AddInfoWindow').text("Add Info Window");
    //    $('#isAddPolyLine').text("Add Poly Line");
    //    $('#isAddPolyGon').text("Add Poly Gon");
    //}
    initialize();
};

vietbando.event.addDomListener(window, 'load', MyMap);

//function AddMarkerCustom() {
//    typeButton = "AddMarkerCustom"
//    isAddCustomMarker = !isAddCustomMarker;
//    $('#AddCustomMarker').text(isAddCustomMarker ? "Stop Add Custom Marker" : "Add Custom Marker")
//}

//function AddInfoWindow() {
//    isAddInfoWindow = !isAddInfoWindow;
//    $('#AddInfoWindow').text(isAddInfoWindow ? "Stop Add Info Window" : "Add Info Window")
//}

//function AddPolyLine() {
//    isAddPolyLine = !isAddPolyLine;
//    $('#AddPolyLine').text(isAddPolyLine ? "Stop Add Info Window" : "Add Info Window")
//}

//function AddPolyGon() {
//    isAddPolyGon = !isAddPolyGon;
//    $('#AddPolyGon').text(isAddPolyGon ? "Stop Add Info Window" : "Add Info Window")
//}


//function soap() {
//    var xmlhttp = new XMLHttpRequest();
//    xmlhttp.open('POST', 'http://developers.vietbando.com/V2/Service/PartnerPortalservice.svc', true);

//    // build SOAP request
//    var sr ='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">' +
//'<soapenv:Header/>' +
//'<soapenv:Body>' +
//'<tem:ReverseGeoCoding>' +
//        '<tem:x>106.2</tem:x>' +
//       ' <tem:y>17.7949506</tem:y>' +
//        '<tem:radius>2000</tem:radius>' +
//'</tem:ReverseGeoCoding>' +
//'</soapenv:Body>' +
//'</soapenv:Envelope>';

//    xmlhttp.onreadystatechange = function () {
//        if (xmlhttp.readyState == 4) {
//            if (xmlhttp.status == 200) {
//                alert(xmlhttp.responseText);
//                // alert('done. use firebug/console to see network response');
//            }
//        }
//    }
//    // Send the POST request
//    xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
//    xmlhttp.setRequestHeader('RegisterKey', 'fcaf70e6-9e20-4bac-bb21-12392389a0e1');
//   // xmlhttp.setRequestHeader('SOAPAction', 'http://tempuri.org/IPartnerPortalSoapService/ReverseGeoCoding');
//    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
//    xmlhttp.send(sr);
//}