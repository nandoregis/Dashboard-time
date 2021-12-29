window.onload = function(){

    fetch('./data.json')
    .then(response=> response.json())
    .then(data=> {

        iniciarEventoAddTime();
        function iniciarEventoAddTime(){
    
            let btn_menu = document.querySelectorAll('.menu a');
            let single_horaH1 = document.querySelectorAll('.single__horario h2');
            let single_horaP = document.querySelectorAll('.previous');
            let title = document.querySelectorAll('.title p');
    
            let array1 = [ [],[],[] ];
        
            for(let i = 0; i < single_horaH1.length; i++){
                array1[0].push(data[i].timeframes.daily)
                array1[1].push(data[i].timeframes.weekly);
                array1[2].push(data[i].timeframes.monthly);
            };
            
            console.log(array1);
            for(let i = 0;i < btn_menu.length; i++){
        
                btn_menu[i].addEventListener('click', ()=> {
                    for(let i = 0; i < btn_menu.length; i++){ btn_menu[i].classList.remove('select');}
                    btn_menu[i].classList.add('select');
                    
                    verificacao(btn_menu, i, title, single_horaH1, single_horaP, array1);

                });
            }
        };

        function verificacao(btn_menu, i, title, horaH1, horaP, array1) {

            if(btn_menu[i].classList == 'select'){
                console.log('----> ', i);

                for(let key = 0; key < horaH1.length; key++){
                    title[key].innerHTML = data[key].title;
                    horaH1[key].innerHTML = `${array1[i][key].current}hrs`;
                    horaP[key].innerHTML = `Last Week - ${array1[i][key].previous}hrs`;
                }

            }
        }
    
    });


}; 

