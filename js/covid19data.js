$(function() {
    "use strict";
    var regionData={};
    // loadData();
    // function loadData(){
    //     var api="https://api.covid19api.com/summary";
    //     $.get(api,function(data){
    //         data.Countries.forEach(getData);
    //         function getData(d){
    //             var a=d.CountryCode;
    //             var array=[];
    //             array.push(d.TotalConfirmed);
    //             array.push(d.TotalRecovered);
    //             array.push(d.NewConfirmed);
    //            regionData[a]=array;
    //            if(d.Country=='India'){
    //             $('#active_data').append(d.NewConfirmed);
    //             $('#recovered').append(d.TotalRecovered);
    //             $('#total').append(d.TotalConfirmed);
    //             $('#death').append(d.TotalDeaths);
    //            }
    //         }
    //     })
    // }

    $.getJSON("https://api.covid19india.org/data.json", function (data) {


        let total_active = data.statewise[0].active;
        let total_confirmed = data.statewise[0].confirmed;
        let total_recovered = data.statewise[0].recovered;
        let total_deaths = data.statewise[0].deaths;
        let last_update = data.statewise[0].lastupdatedtime;

        console.log(data.statewise[0].lastupdatedtime);
        $("#lastupdated").append(last_update);
        $('#active_data').append(total_active);
        $('#recovered').append(total_recovered);
        $('#total').append(total_confirmed);
        $('#death').append(total_deaths);
});
    // jQuery('#world-map-markers').vectorMap({
    //     map: 'world_mill_en',
    //     backgroundColor: 'transparent',
    //     borderColor: '#818181',
    //     borderOpacity: 0.25,
    //     borderWidth: 1,
    //     zoomOnScroll: false,
        
    //     regionStyle: {
    //         initial: {
    //             fill: ['#0093BE'],
    //             scale: ['#fff','#FF0000']
    //         }
    //     },
    //     enableZoom: true,
    //     hoverColor: '#8b94d6',
    //     hoverOpacity: null,
    //     normalizeFunction: 'linear',
        
    //     series:{
    //         regions: [{
    //             values: regionData,
    //             scale: ['#fff','#FF0000'],
    //             normalizeFunction: 'polynomial'
    //         }]
    //     },
    //     onRegionTipShow: function(e, el, code){
    //         el.html('<h5 id="country">'+el.html()+'</h5><h5 id="red">Total Cases - '+regionData[code][0]+'</h5><h5 id="green">Total Recovered-'+regionData[code][1]+'</h5><h5 id="yellow">New Cases -'+regionData[code][2]+'</h5>');
    //     }
    // });
   
    // $('#world-map-gdp').vectorMap({
    //     map: 'world_mill_en',
    //     series: {
    //     regions: [{
    //       values: regionData,
    //       s cale: ['#C8EEFF', '#0071A4'],
    //       normalizeFunction: 'polynomial'
    //     }]
    //     },
    //     onRegionTipShow: function(e, el, code){
    //     el.html(el.html()+' (Total Cases - )'+regionData[code]);
    //     }
    // });  
});