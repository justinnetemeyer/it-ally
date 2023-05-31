$(function() {


    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        success: function(label) {
            label.parent().removeClass("error-parent");
        },
        highlight: function(element, errorClass) {
            $(element).parent().addClass("error-parent");
            $(element).parent().find(".error").fadeOut(function() {
                $(this).fadeIn();
            });
        },
        rules: {
            fname: {
                required: true
            },
            lname: {
                require: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            comments: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "Please enter your first name",
            },
            lname: {
                required: "Please enter your last name",
            },
            email: {
                required: "Please provide your email",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please select a subject line"
            },
            comments: {
                required: "Please provide details"
            }
        }
    });


});