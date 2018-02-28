var app = angular.module("appModule");
app.filter("removeHtml", function(){
    return function(texto){
        return String(texto).replace(/<[^>]+>/gm,'');
    }
});

app.filter("textMayus", function(){
    return function(texto){
        return String(texto).toUpperCase();
    }
});