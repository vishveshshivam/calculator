$(document).ready(function () {
    $('.btn').click(function () {
        let d = $(this).data('value');
        if (d == "c") {
            $('#screen').val("");
        } else if (d == "/" || d == "*" || d == "%" || d == "**") {
            var textarea = $("#screen").val();
            if (textarea == "") {
                alert("There must be value in LHS to use it");
            } else {
                let concat = textarea + d;
                $('#screen').val(concat);
            }

        } else if (d == "cut") {
            var textarea = parseInt($("#screen").val());
            var textareaString = $("#screen").val();
            if (!isNaN(textarea)) {
                var textareaString = $("#screen").val();
                let ArrayString = textareaString.split('');
                ArrayString.pop();
                let newString = ArrayString.join('');
                $('#screen').val(newString);

            } else if (textareaString != "") {
                $('#screen').val('');
            }

        } else if (d == '=') {
            var textarea = $("#screen").val();
            if (textarea == "") {
                alert("Enter a expression to continue..")
            } else {
                function evaluate() {
                    'use strict';
                    let result = eval(textarea);
                    $('#screen').val(result);
                }
                evaluate();
            }
        } else {

            var textarea = $("#screen").val();
            let concat = textarea + d;
            $('#screen').val(concat);
        }
    });

});