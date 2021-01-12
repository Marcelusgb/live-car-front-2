// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(displayCharts);


// Grafico Tempo Medio de Atendimento 

function tempoMedioAtendimento(){
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'eita'], //Colunas
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
        width: 550,
        height: 280,
    };

    var chart = new google.visualization.LineChart(document.getElementById('tempomedioatendimento'));

    chart.draw(data, options);

}


// Grafico Tempo Medio de Espera

function tempoMedioEspera(){
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'eita'], //Colunas
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
        width: 550,
        height: 280,
    };

    var chart = new google.visualization.LineChart(document.getElementById('tempomedioespera'));

    chart.draw(data, options);
}






// Grafico Leads Gerados

function leadsGerados (){
    var data = google.visualization.arrayToDataTable([
        ['Tipo', 'quantidade'], //Colunas
        ['Não Atendidos',     40], // linhas
        ['Atendidos',    60]
    ]);

    var options = {
        width: 520,
        height: 300,
        pieHole: 0.5,//Tamanho central do donut
        legend: {
          position: 'labeled', //coloca o valor fora do gráfico com a linha o setando
        },
        pieSliceText: 'none',//Retira o valor de dentro do gráfico
    };

    var chart = new google.visualization.PieChart(document.getElementById('leadgerados'));
    chart.draw(data, options);
}



// Grafico Leads Agendados

function leadsAgendado (){
    var data = google.visualization.arrayToDataTable([
        ['Tipo', 'quantidade'], //Colunas
        ['Atendidos na data',     80], // linhas
        ['Não atendidos na data        ',    120]
    ]);

    var options = {
        width: 520,
        height: 310,
        pieHole: 0.5,//Tamanho central do donut
        legend: {
          position: 'labeled', //coloca o valor fora do gráfico com a linha o setando
        },
        pieSliceText: 'none',//Retira o valor de dentro do gráfico
    };

    var chart = new google.visualization.PieChart(document.getElementById('leadagendado'));
    chart.draw(data, options);
}



// Grafico do Leads Online 

function leadsOnline (){
    var data = google.visualization.arrayToDataTable([
        ['Tipo', 'quantidade'], //Colunas
        ['Atendidos na data',     80], // linhas
        ['Não atendidos na data        ',    120]
    ]);

    var options = {
        width: 520,
        height: 310,
        pieHole: 0.5,//Tamanho central do donut
        legend: {
          position: 'labeled', //coloca o valor fora do gráfico com a linha o setando
        },
        pieSliceText: 'none',//Retira o valor de dentro do gráfico
    };

    var chart = new google.visualization.PieChart(document.getElementById('leadonline'));
    chart.draw(data, options);
}





// Function utilizada para o onload da página carregar os gráficos.
function displayCharts(){
    // Necessrário listar todos as functions 
    leadsGerados();
    tempoMedioAtendimento();
    tempoMedioEspera();
    leadsAgendado();
    leadsOnline();
}


