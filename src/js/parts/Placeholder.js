


export default function placeholder(controlGroupSelector, controlSelector, labelSelector, className) {
    let inputsControl = document.querySelectorAll(controlGroupSelector);


    for (let i = inputsControl.length;i--;){
        let element = inputsControl[i],
            label = element.querySelector(labelSelector),
            input = element.querySelector(controlSelector);

        input.addEventListener('focus', function () {
            label.classList.add(className);
            input.focus();
        });

        input.addEventListener('blur', function (){
            if ('' === input.value.trim()) {
                input.value = '';
                label.classList.remove(className);
            }
        });
    }
}

