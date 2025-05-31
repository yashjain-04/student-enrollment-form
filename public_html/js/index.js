/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var jpdbBaseUrl = "http://api.login2explore.com:5577";
var jpdbIML = "/api/iml";
var jpdbIRL = "/api/irl";
//var connToken = "90934601|-31949211987306539|90956794";
var connToken = "YOUR_CONNECTION_TOKEN";
var jpdbDBName = "Student Enrollment"
var jpdbRelName = "Students"

        
$("#stId").focus();

if (connToken === "YOUR_CONNECTION_TOKEN") {
    alert("Please enter your JsonPowerDB Connection Token in the 'connToken' variable before using the form.\n\nWithout it, data cannot be saved or fetched from JPDB.");
}

function getStudent() {
    var stIdJsonObject = getStudentIdAsJsonObject();
    var getRequest = createGET_BY_KEYRequest(connToken, jpdbDBName, jpdbRelName, stIdJsonObject);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseUrl, jpdbIRL);
    jQuery.ajaxSetup({async: true});

    if (resultObj.status === 400) {
        $("#stSave").prop("disabled", false);
        $("#reset").prop("disabled", false);

        $("#stName").focus();
    } else if (resultObj.status === 200) {
        $("#stId").prop("disabled", true);
        fillData(resultObj);
        
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);

        $("#stName").focus();
    }
}

function saveRecNo2LS(jsonObject){
    var lvData = JSON.parse(jsonObject.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function fillData(jsonObject){
    saveRecNo2LS(jsonObject);
    var record = JSON.parse(jsonObject.data).record;
    
    $("#stId").val(record.stId);
    $("#stName").val(record.stName);
    $("#stClass").val(record.stClass);
    $("#stBirthDate").val(record.stBirthDate);
    $("#stAdd").val(record.stAdd);
    $("#stEnrollDate").val(record.stEnrollDate);
}

function getStudentIdAsJsonObject() {
    var stId = $("#stId").val();
    var json = {
        stId: stId
    };
    return JSON.stringify(json);
}

function validateAndGetFormData() {
    var stIdVar = $("#stId").val();
    if (stIdVar === "") {
        alert("Student ID Required Value");
        $("#stId").focus();
        return "";
    }

    var stNameVar = $("#stName").val();
    if (stNameVar === "") {
        alert("Student Name is Required Value");
        $("#stName").focus();
        return "";
    }

    var stClassVar = $("#stClass").val();
    if (stClassVar === "") {
        alert("Student Class is Required Value");
        $("#stClass").focus();
        return "";
    }

    var stBirthDateVar = $("#stBirthDate").val();
    if (stBirthDateVar === "") {
        alert("Student Birth Date is Required Value");
        $("#stBirthDate").focus();
        return "";
    }

    var stAddVar = $("#stAdd").val();
    if (stAddVar === "") {
        alert("Student Address is Required Value");
        $("#stAdd").focus();
        return "";
    }
    var stEnrollDateVar = $("#stEnrollDate").val();
    if (stEnrollDateVar === "") {
        alert("Student Enrollment Date is Required Value");
        $("#stEnrollDate").focus();
        return "";
    }

    var jsonStrObj = {
        stId: stIdVar,
        stName: stNameVar,
        stClass: stClassVar,
        stBirthDate: stBirthDateVar,
        stAdd: stAddVar,
        stEnrollDate: stEnrollDateVar
    };

    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#stId").val("");
    $("#stName").val("");
    $("#stClass").val("");
    $("#stBirthDate").val("");
    $("#stAdd").val("");
    $("#stEnrollDate").val("");

    $("#stId").prop("disabled", false);
    $("#stSave").prop("disabled", true);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", true);

    $("#stId").focus();
}

function saveStudent() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(connToken, jsonStr, jpdbDBName, jpdbRelName);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, jpdbBaseUrl, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();

    $("#stId").focus();
}

function changeDetails() {
    $("#change").prop("disabled", true);
    jsonChange = validateAndGetFormData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonChange, jpdbDBName, jpdbRelName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseUrl, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();

    $("#stId").focus();
}

