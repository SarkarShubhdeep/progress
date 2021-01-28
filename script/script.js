$(document).ready(function(){

    $('#add-subtask').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $('#add-subtask').before(
                '<div class="form-check mt-1">' +
                    '<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">' + 
                    '<label class="form-check-label" for="defaultCheck1">' + 
                        $('add-subtask').val() +
                    '</label>' + 
                '</div>' 
            );
        }
    });
    


    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        alert('You pressed a "enter" key in somewhere');    
    }
    
});

// $("#plus").click(function(){
    //     $("progress").hide();
        
      
    // });
    // $("button").click(function(){
    //     $(this).hide();
    // });