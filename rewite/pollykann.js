/**
 * @fileoverview Example of HTTP rewrite.
 *
 * @supported glassskay1 (v1.0.5-build173)
 */

// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
//
// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.
//
// setTimeout(function() { console.log("abc"); }, 1000);
//
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// htttp://api.pollykann.com:80 url script-response-body https://raw.githubusercontent.com/glassysky1/qx/refs/heads/main/rewite/pollykann.js

var body = $response.body;
var obj = JSON.parse(body);

if (obj.data) {
    obj.data.enabled = true
    obj.data.pollykannVipState = true
    obj.data.tingleeVipState = true
    obj.data.chinleeVipState = true
    obj.data.JpnVipState = true
}
body = JSON.stringify(obj);

console.log(body);

$done(body);