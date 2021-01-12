// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(displayCharts);


function tempoMedioEspera(){
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'ppk'], //Colunas
        ['2004',  1000,      400,  555], //linhas
        ['2005',  1170,      460,  998],
        ['2006',  660,       1120, 777],
        ['2007',  1030,      540,  300]
    ]);

    var options = {
        curveType: 'function', //Adiciona curvas mais suaves nas linhas do gráfico
        legend: { //Configurações da legenda
            position:  'top', 
            alignment: 'center',
        },
        width: 900,//Largura do gráfico
        height: 400,//Altura do gráfico
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);

}




// function drawLine() {

//     var data = google.visualization.arrayToDataTable([
//         ['Year', 'Sales', 'Expenses'], //Colunas
//         ['2004',  1000,      400], //linhas
//         ['2005',  1170,      460],
//         ['2006',  660,       1120],
//         ['2007',  1030,      540]
//     ]);

//     var options = {
//         curveType: 'function', //Adiciona curvas mais suaves nas linhas do gráfico
//         legend: { //Configurações da legenda
//             position:  'top', 
//             alignment: 'center',
//         },
//         width: 900,//Largura do gráfico
//         height: 400,//Altura do gráfico
//     };

//     var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

//     chart.draw(data, options);
// }



function leadsGerados (){
    var data = google.visualization.arrayToDataTable([
        ['Tipo', 'quantidade'], //Colunas
        ['Não Atendidos',     40], // linhas
        ['Atendidos',    60]
    ]);

    var options = {
        width: 900,
        height: 400,
        pieHole: 0.4,//Tamanho central do donut
        legend: {
          position: 'labeled', //coloca o valor fora do gráfico com a linha o setando
        },
        pieSliceText: 'none',//Retira o valor de dentro do gráfico
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}




// function drawDonut(){
//     var data = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'], //Colunas
//         ['Work',     13], // linhas
//         ['Sleep',    11]
//     ]);

//     var options = {
//         width: 900,
//         height: 400,
//         pieHole: 0.4,//Tamanho central do donut
//         legend: {
//           position: 'labeled', //coloca o valor fora do gráfico com a linha o setando
//         },
//         pieSliceText: 'none',//Retira o valor de dentro do gráfico
//     };

//     var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
//     chart.draw(data, options);
// }

// Function utilizada para o onload da página carregar os gráficos.
function displayCharts(){
    // Necessrário listar todos as functions 
    leadsGerados();
    tempoMedioEspera();
}


