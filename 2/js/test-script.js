function checkQuestionForm(form) {
	var inputs = form.getElementsByTagName('input');
	var selects = form.getElementsByTagName('select');
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value == ""){        	
            alert("Не все поля были заполнены");
            inputs[i].focus();
            return false;
        }        
    }
    for (i = 0; i < selects.length; i++) {
        if(selects[i].value == ""){        	
            alert("Не все поля были заполнены");
            selects[i].focus();
            return false;
        }        
    }
    var answerField = document.getElementById('ans_3');
    var regex = /^(?:\d+(?:\.\d*)?|\.\d+)$/;
    if (!(regex.test(answerField.value)))
    {
        alert("Поле ответа на вопрос 3 должно содержать вещественное число");
        answerField.focus();
        return false;
    }
    return true;
}
