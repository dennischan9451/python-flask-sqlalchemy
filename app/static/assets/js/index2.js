$(function(e){
  'use strict'
    /* echartArea2 */
	var areaData2 = [
	{
	  name: 'Sales',
	  type: 'line',
	  smooth: true,
	  data: [0,5,15,19,22,29],
	  symbolSize:14,
	   lineStyle: {
			normal: { width: 4 ,
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[
						{offset: 0, color: 'rgb(96, 82, 159,0.9)'}
					]
				)
			}
		},
	},
	];

	var optionArea2 = {
	grid: {
	  top: '6',
	  right: '12',
	  bottom: '17',
	  left: '25',
	},
	xAxis: {
	  data: [ '2013', '2014', '2015', '2016', '2017', '2018'],
	  boundaryGap: false,
	  axisLine: {
		lineStyle: { color: '#c0dfd8' }
	  },
	  axisLabel: {
		fontSize: 10,
		color: '#000',
		display:'false'
	  }
	},
	tooltip: {
		show: true,
		showContent: true,
		alwaysShowContent: true,
		triggerOn: 'mousemove',
		trigger: 'axis',
		axisPointer:
			{
				label: {
					show: false,
				}
			}

	},
	yAxis: {
	  splitLine: {
		lineStyle: { color: '#eaeaea' },
		display:false
	  },
	  axisLine: {
		lineStyle: { color: '#eaeaea' },
		display:false
	  },
	  axisLabel: {
		fontSize: 10,
		color: '#000'
	  }
	},
	series: areaData2,
	color:[ '#60529f']
	};

	var chartArea2 = document.getElementById('echartArea2');
	var areaChart2 = echarts.init(chartArea2);
	areaChart2.setOption(optionArea2);
	/* echartArea2 */
	
  
    /* ChartJS (Revenue-chart) */
	var ctx = $('#Revenue-chart');
	ctx.height(300);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
			type: 'line',
			datasets: [{
				data: [0, 7, 3, 5, 2, 10, 7],
				label: "Revenue",
				backgroundColor: 'rgb(96, 82, 159,0.7)',
				borderColor: 'rgb(96, 82, 159,0.7)',
				borderWidth: 3.5,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgb(96, 82, 159,0.9)',
			}, ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: false,
				position: 'top',
				labels: {
					usePointStyle: true,
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "rgba(0,0,0,0.5)",
					 },
					display: true,
					gridLines: {
						display: false,
						drawBorder: true,
						color: 'rgba(0,0,0,0.1)'
					},
					scaleLabel: {
						display: true,
						labelString: 'Year',
						fontColor: 'rgba(0,0,0,0.61)'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "rgba(0,0,0,0.5)",
					 },
					display: true,
					gridLines: {
						display: false,
						drawBorder: false,
						color: 'rgba(0,0,0,0.061)'
					},
					scaleLabel: {
						display: true,
						labelString: 'Revenue',
						fontColor: 'rgba(0,0,0,0.61)'
					}
				}]
			},
			title: {
				display: false,
			}
		}
	});
	/* ChartJS (#Revenue-chart) closed */
	
	
	/* ChartJS (#lineChart) */
	var ctx = document.getElementById( "lineChart" );
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			datasets: [{
				label: "Return On Assets ",
				borderColor: "rgba(96, 82, 159, 0.8)",
				borderWidth: "1",
				backgroundColor: "rgba(96, 82, 159, 0.7)",
				data: [0, 30, 10, 120, 50, 63, 102]
			}, {
				label: "Return On Equity",
				borderColor: "rgba(50, 202, 254 ,0.8)",
				borderWidth: "1",
				backgroundColor: "rgba(	50, 202, 254, 0.5)",
				pointHighlightStroke: "rgba(50, 202, 254 ,0.7)",
				data: [0, 50, 40, 80, 40, 79, 120]
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				intersect: false
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "rgba(0,0,0,0.5)",
					 },
					gridLines: {
						color: 'rgba(0,0,0,0.061)'
					}
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: "rgba(0,0,0,0.5)",
					},
					gridLines: {
						color: 'rgba(0,0,0,0.061)'
					},
				}]
			},
			legend: {
				labels: {
					fontColor: "rgba(0,0,0,0.5)"
				},
			},
		}
	});
	/* ChartJS (#lineChart) closed */
	
	
	/* index */
    var echartBar = echarts.init(document.getElementById('index'), {
		color: ['rgb(96, 82, 159,0.9)', 'rgb(50, 202, 254,0.9)'],
		categoryAxis: {
			axisLine: {
				lineStyle: {
					color: '#888180'
				}
			},
			splitLine: {
				lineStyle: {
					color: ['#eee']
				}
			}
		},
		grid: {
			x: 40,
			y: 20,
			x2: 40,
			y2: 20
		},
		valueAxis: {
			axisLine: {
				lineStyle: {
					color: '#888180'
				}
			},
			splitArea: {
				show: true,
				areaStyle: {
					color: ['rgba(255,255,255,0.1)']
				}
			},
			splitLine: {
				lineStyle: {
					color: ['#eee']
				}
			}
		},
		
	});
	echartBar.setOption({
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['New Account', 'Expansion Account']
		},
		toolbox: {
			show: false
		},
		calculable: false,
		xAxis: [{
			type: 'category',
			data: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: 'Revenue',
			type: 'bar',
			data: [30.0, 42.3, 60.2, 70.3, 60.8, 19.8, 27.8, 85.63, 52.63, 14.25, 63.25, 12.32],
			markPoint: {
				data: [{
					type: 'max',
					name: ''
				}, {
					type: 'min',
					name: ''
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: ''
				}]
			}
		}, {
			name: 'Expenses',
			type: 'bar',
			data: [16.6, 40.9,50.0, 16.4, 28.7, 80.7, 178.6, 188.2, 48.7, 18.8, 6.0, 2.3],
			markPoint: {
				data: [{
					name: 'Expenses',
					value: 182.2,
					xAxis: 7,
					yAxis: 183,
				}, {
					name: 'Expenses',
					value: 2.3,
					xAxis: 11,
					yAxis: 3
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: ''
				}]
			}
		}]
	});
	/* index  closed */

});

