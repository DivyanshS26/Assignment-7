const form = document.querySelector('form');
const result = document.getElementById('weather');

function getWeather(city){

    while(weather.firstChild){
        weather.removeChild(result.firstChild);
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c2cc6e86dfc917fec4fc00fe4f97bf5c`
    
    fetch(url)    
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            const wea = document.createElement('div');
            const city = document.createElement('h4');
            const weat = document.createElement('h4');
            const temp = document.createElement('h1');
            const minmax = document.createElement('h3');
            const wind = document.createElement('h4');
            const body = document.querySelector('body');
            wea.setAttribute('id','weadr');
            city.innerText = data.name;
            weat.innerHTML =  data.weather[0].main; 
            temp.innerHTML = data.main.temp + '°' + 'C';
            minmax.innerHTML = data.main.temp_min+'°'+'<i class="fas fa-long-arrow-alt-down"></i>' + ' / ' + data.main.temp_max+ '°' +'<i class="fas fa-long-arrow-alt-up"></i>';
            wind.innerHTML = data.wind.speed + ' '+ '<i class="fas fa-wind"></i>';
            console.log(data);
            weather.append(wea);
            wea.append(city);
            wea.append(weat);
            wea.append(temp);
            wea.append(minmax);
            wea.append(wind);
            if(data.weather[0].main === 'Mist'){
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1525891618908-24765267dab7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
            }
            if(data.weather[0].main === 'Clear'){
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80')"
            }
            if(data.weather[0].main === 'Clouds'){
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1445264618000-f1e069c5920f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
            }
            if(data.weather[0].main === 'Rain'){
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1428592953211-077101b2021b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80')"
            }
            if(data.weather[0].main === 'Drizzle'){
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1541919329513-35f7af297129?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
            }
            if(data.weather[0].main === 'Snow'){
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80')"
            }
            if(data.weather[0].main === 'Haze'){
                document.body.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=742&q=80')"
            }
        })
        .catch((err)=>{
            alert("Please Enter a valid City name");
            console.log(err.message);
        });
    
    
    
    
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const city = form.elements[0].value;
    if(isNaN(city)){
        getWeather(city);
    }
    else{
        alert("Please Enter a valid City name");
    }
    console.log(isNaN(city));
    form.elements[0].value="";
})