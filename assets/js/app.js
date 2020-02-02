"use strict";

fetch("./1.jpg.json")
    .then(function(resp){
        return resp.json
    })
    .then(function(data){
        console.log(data)
    })