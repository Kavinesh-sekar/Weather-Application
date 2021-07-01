let place=document.getElementById('place');
const location2=document.getElementById('location');
const tempvalue=document.getElementById('temp-value');
const imgicon=document.getElementById('img-icon');
const climate=document.getElementById('climate');
const search=document.getElementById('search');
console.log('tttt');
const api = "15a992dc54be7dce1fe884744c872fb1";

search.addEventListener('click',function(e)
{
        console.log('fff');
        let placefind = place.value;
        console.log(placefind);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placefind}&appid=${api}`)

        .then(response => response.json())
        .then(data => {
            console.log(data);

            const{feels_like}=data.main;
            location2.innerHTML=data.name;
            
            tempvalue.innerHTML= Math.round(feels_like-273);
            // console.log(Math.round(Number(data.feels_like)-273));

            climate.innerHTML= data.weather[0].main;


            if(data.weather[0].id>800 && data.weather[0].id<900)
            {
                console.log('hlo');
                imgicon.src="clouds.svg";
            }

          else if(data.weather[0].id>=200 && data.weather[0].id<300)
            {
                // console.log('thunder');
                imgicon.src="storm.svg";
            }



         else  if(data.weather[0].id>=300 && data.weather[0].id<400)
            {
                // console.log('drizzle');
                imgicon.src="drizzle.svg";
            }



        else    if(data.weather[0].id>=500 && data.weather[0].id<600)
            {
                console.log('rain');
                imgicon.src="rain.svg";
            }



         else   if(data.weather[0].id>=600 && data.weather[0].id<700)
            {
                // console.log('snow');
                imgicon.src="snow.svg";
            }


           else if(data.weather[0].id>=700 && data.weather[0].id<800)
            {
                // console.log('atomshper');
                imgicon.src="atmosphere.svg";
            }

            else if(data.weather[0].id === 800)
            {
                console.log('rain');
                imgicon.src="clouds.svg";
            }

        });

    


        e.preventDefault();
});
