$(document).ready(function(){
    $("body").keyup(function(e)
    {
        if(e.keyCode == '13')
        {
            eql();
        }
    })
    
})
function insert(num)
{
    $("#input").val($("#input").val()+num)
}
function clearall()
{
    $("#input").val("");
}
function eql()
{
    $("#input").val(eval($("#input").val()))
}
function del()
{
    var value = $("#input").val();
    $("#input").val(value.substring(0, value.length -1))
}