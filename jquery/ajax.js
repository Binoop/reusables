/**
 * Created by Binu on .
 *
 *
 * Common Reusable function for calling ajax requests with jquery "deferred.then()" object
 * @requirement : Jquery 1.8 >
 * @author Binoop V
 * @date 01-11-2016
 *
 */

/**
 * Ajax Functionality to Request to web services
 * @param $url  - URL End point
 * @param $data - Request Param
 * @param $type - method : "POST", "GET", "PUT"
 * @param $async - to send request asynchronously, set it to "true" for synchronous
 * @param $dataType - return response type
 * @returns {*}
 */
function ajaxCall($url = '', $data = {}, $type = 'GET', $async = true, $dataType = 'JSON') {

    if (!$url)
        return false;

    // Ajax Call
    return $.ajax({
        url: $url,
        headers: {},                                         // Customize header
        type: $type,
        dataType: $dataType,
        async: $async,
        data: $data,
        beforeSend: function (request) {
            // Set Up Before Send Request
        }
    })
}

/** Jquery Example to call
 * @api_end_point : jsonplaceholder
 * */
$(document).ready(function (e) {


    // Get Method
    $promise = ajaxCall('http://jsonplaceholder.typicode.com/posts');

    // Post Method
    $promise = ajaxCall('http://jsonplaceholder.typicode.com/posts',{title: 'foo', body: 'bar',userId: 1},'POST');

    // Use Jquery Deferred then on Promise
    $promise.then(function (successResponse) {
            // Do Actions related to an Success Event
            console.log(successResponse);
        },
        function (failureResponse) {
            // Do Action related to an failed Event
            console.log(failureResponse);
        });

});
