/* ---hightchart1----*/
$(function(e){
  'use strict';

		Highcharts.chart('hightchart1', {

			chart: {
				type: 'area'
			},
			title: {
				text: ''
			},
			exporting: { enabled: false },
			 credits: {
				  enabled: false
			  },
			xAxis: {
				allowDecimals: false,
				labels: {
					formatter: function () {
						return this.value; // clean, unformatted number for year
					}
				}
			},
			yAxis: {
				title: {
					text: 'values'
				},
				labels: {
					formatter: function () {
						return this.value / 1000 + 'k';
					}
				}
			},
			tooltip: {
				pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
			},
			plotOptions: {
				area: {
					pointStart: 1982,
					marker: {
						enabled: false,
						symbol: 'circle',
						radius: 2,
						color:'#f6f6f6',
						states: {
							hover: {
								enabled: false
							}
						}
					}
				}
			},
			series: [{
				name: 'SALES',
				data: [
					369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
					20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
					26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
					24304, 23464, 23708, 24099, 24357, 24237, 24401,2500
				],
				color:'#32cafe'
			}, {
				name: 'PROFIT',
				data: [
					 200, 426, 660, 869, 1060,
					1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
					11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
					30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
					37000, 35000, 33000

				],
				color:'#60529f '
			}]
		});
	});

$(function(e){
  'use strict';

  /* ---hightchart2----*/
  var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
    4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
    3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
    3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 4];

	Highcharts.chart('highchart2', {

		title: {
			text: ''
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		xAxis: [{
			title: {
				text: 'Data'
			},
			alignTicks: false
		}, {
			title: {
				text: ''
			},
			alignTicks: false,
			opposite: true
		}],

		yAxis: [{
			title: { text: 'data1' }
		}, {
			title: { text: 'data2' },
			opposite: true
		}],

		series: [{
			name: 'data1',
			type: 'bellcurve',
			xAxis: 1,
			yAxis: 1,
			color:'#60529f ',
			baseSeries: 1,
			zIndex: -1
		}, {
			name: 'data2',
			type: 'scatter',
			data: data,
			color:'#32cafe',
			marker: {
				radius: 2.5
			}
		}]
	});
});

$(function(e){
  'use strict';

	 /* ---hightchart3----*/

	Highcharts.chart('highchart3', {
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 45,
				beta: 0
			}
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 35,
				dataLabels: {
					enabled: true,
					format: '{point.name}'
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['Firefox', 40.0],
				['IE', 20.8],
				{
					name: 'Chrome',
					y: 18.8,
					sliced: true,
					selected: true
				},
				['Safari', 12.5],
				['Opera', 6.2],
				['Others', 2]
			],
			colors: ['#60529f ', '#32cafe', '#ecb403', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
		}]
	});


	/* ---hightchart4----*/

	Highcharts.chart('highchart4', {
		chart: {
			type: 'pie',
			options: {
				enabled: true,
				alpha: 45,
				beta: 0
			}
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 35,
				dataLabels: {
					enabled: true,
					format: '{point.name}'
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['Sales', 40.0],
				['Profit', 40.8],
				['Growth', 20.5]
			],
			colors: ['#60529f ', '#32cafe', '#ecb403']
		}]
	});

	/* ---hightchart5----*/

	Highcharts.chart('highchart5', {
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			categories: ['growth', 'sales', 'profit', 'Emloyes'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			}
		},
		tooltip: {
			valueSuffix: ' millions'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -40,
			y: 80,
			enabled: false,
			floating: true,
			borderWidth: 1,
			backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
			shadow: true
		},
		colors: ['#ecb403', '#64E572' ,'#24CBE5', '#60529f ', '#32cafe' ],
		credits: {
			enabled: false
		},
		series: [{
			name: 'Year 1800',
			data: [107, 31, 635, 203]
		}, {
			name: 'Year 1900',
			data: [133, 156, 947, 408]
		}, {
			name: 'Year 2000',
			data: [814, 841, 3714, 727]
		}, {
			name: 'Year 2010',
			data: [1216, 1001, 4436, 738]
		}, {
			name: 'Year 2018',
			data: [1500, 2051, 3526, 968]
		}]
	});

	/* ---hightchart6----*/

	Highcharts.chart('highchart6', {

		title: {
			text: ''
		},

		subtitle: {
			text: ''
		},
		exporting: { enabled: false },
		credits: {
			enabled: false
		},
		yAxis: {
			title: {
				text: 'Number of Employees'
			}
		},
		legend: {
			layout: 'horizontal',
			align: '',
			verticalAlign: 'middle',
			enabled: false
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 2010
			}
		},

		series: [{
			name: 'Installation',
			data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
		}, {
			name: 'Manufacturing',
			data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
		}, {
			name: 'Sales & Distribution',
			data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
		}, {
			name: 'Project Development',
			data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
		}],
		colors: ['#ecb403', '#24CBE5', '#32cafe' , '#60529f ', '#ff5c75' ],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		}

	});

	/* ---hightchart7----*/
	var chart = Highcharts.chart('highchart7', {

    title: {
        text: ''
    },

    subtitle: {
        text: 'Plain'
    },
	exporting: { enabled: false },
	credits: {
		enabled: false
	},
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
	colors: ['#60529f ', '#32cafe', '#ecb403', '#24CBE5', '#64E572', '#FF9655', '#f1c40f', '#6AF9C4'],
    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]

});


$('#plain').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Plain'
        }
    });
});

$('#inverted').click(function () {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

$('#polar').click(function () {
    chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        subtitle: {
            text: 'Polar'
        }
    });
});



 });