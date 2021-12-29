var btn_menu = document.querySelectorAll('.menu a');
var single_horaH1 = document.querySelectorAll('.single__horario h2');
var single_horaP = document.querySelectorAll('.previous');
var title = document.querySelectorAll('.title p');

fetch('./data.json')
.then(response=> response.json())
.then(data=> {

    console.log(data);
    eventoAddHoras();

    function eventoAddHoras() {

        for(let i = 0; i < btn_menu.length; i++){

            btn_menu[i].addEventListener('click', ()=> {
                for(let i = 0; i < btn_menu.length; i++){ btn_menu[i].classList.remove('select');}
                btn_menu[i].classList.add('select');
            
                if(btn_menu[i].classList == 'select'){
        
                    if(btn_menu[i].innerHTML == 'Daily' || i == 0){
                        
                        for(let key = 0; key < single_horaH1.length; key++){
                            title[key].innerHTML = data[key].title;
                            single_horaH1[key].innerHTML =  `${data[key].timeframes.daily.current}hrs`;
                            single_horaP[key].innerHTML =  `Last Week - ${data[key].timeframes.daily.previous}hrs`;
                        };
                    
                    }else if(btn_menu[i].innerHTML == 'Weekly' || i == 1) {
                    
                        for(let key = 0; key < single_horaH1.length; key++){
                            title[key].innerHTML = data[key].title;
                            single_horaH1[key].innerHTML =  `${data[key].timeframes.weekly.current}hrs`;
                            single_horaP[key].innerHTML =  `Last Week - ${data[key].timeframes.weekly.previous}hrs`;
                        };
                    
                    }else if(btn_menu[i].innerHTML == 'Monthly' || i == 2) {
                    
                        for(let key = 0; key < single_horaH1.length; key++){
                            title[key].innerHTML = data[key].title;
                            single_horaH1[key].innerHTML =  `${data[key].timeframes.monthly.current}hrs`;
                            single_horaP[key].innerHTML =  `Last Week - ${data[key].timeframes.monthly.previous}hrs`;
                        };
                    
                    };
                    
                    
                }else{

                }

            });
        
        }; 
    
    };

});
