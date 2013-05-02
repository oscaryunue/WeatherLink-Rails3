$(function () {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart'
            },
            title: {
                text: 'Estadisticas Meterorologicas del dia '
            },
            xAxis: {
                categories: ['12:00a', '2:00a', '4:00a', '6:00a', '8:00a','10:00a','12:00p','2:00p','4:00p','6:00p','8:00p','10:00p']
            },
            tooltip: {
                formatter: function() {
                    var s;
                    if (this.point.name) { // the pie chart
                        s = ''+
                            this.point.name +': '+ this.y +' C°';
                    } else {
                        s = ''+
                            this.x  +': '+ this.y;
                    }
                    return s;
                }
            },
            labels: {
                items: [{
                    html: 'Temperatura : 23/09/2012',
                    style: {
                        left: '40px',
                        top: '8px',
                        color: 'black'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: 'Temperatura Exterior',
                data: [24.7, 26.9, 22.2, 20.9, 23.3, 23.7, 31.4, 37.5, 37, 35.2, 27, 25.2]
            }, {
                type: 'column',
                name: 'Temperatura Máxima',
                data: [25.2, 26.9, 22.4, 21.9, 23.6, 24.7, 32.4, 37.5, 37.5, 35.2, 27.2, 25.35]
            }, {
                type: 'column',
                name: 'Temperatura Mínima',
                data: [22.7, 22.9, 20.2, 18.9, 21.3, 21.7, 28.4, 35.5, 34.5, 34.2, 25, 23.2]
            }, {
                type: 'spline',
                name: 'Promedio',
                data: [24.7, 26.9, 22.2, 20.9, 23.3, 23.7, 31.4, 37.5, 37.5,35.2, 27, 25.2]
            }, {
                type: 'pie',
                name: 'Total consumption',
                data: [{
                    name: 'Temperatura Exterior',
                    y: 123,
                    color: '#4572A7' // Jane's color
                }, {
                    name: 'Temperatura Máxima',
                    y: 233,
                    color: '#AA4643' // John's color
                }, {
                    name: 'Temperatura Mínima',
                    y: 129,
                    color: '#89A54E' // Joe's color
                }],
                center: [100, 80],
                size: 100,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    });

});