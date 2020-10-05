$(function(e){
  'use strict'
  
	/* sparkline_bar1 */
	$(".sparkline_bar1").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 5,
		barSpacing: 7,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(96, 82, 159,0.9)'
	});
	/* sparkline_bar1 end */
	
	
	/* sparkline_bar2 */
	$(".sparkline_bar2").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(50, 202, 254,0.9)'
	});
	/* sparkline_bar2 end */
	
	
	/* sparkline_bar3 */
	$(".sparkline_bar3").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(255, 204, 0,0.9)'
	});
	/* sparkline_bar3 end */
	
	
	/* sparkline_bar4 */
	$(".sparkline_bar4").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 5,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(94, 216, 79,0.9)'
	});
	/* sparkline_bar4 end */
	
	
	/* echart (#echart1) */
	var chartdata = [
		{
		  name: 'sales',
		  type: 'bar',
		  data: [120, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
		  barWidth: 25,
		},
		{
		  name: 'profit',
		  type: 'line',
		  smooth:true,
		  data: [120, 80, 100, 130, 140]
		}
		
	];
	var chart = document.getElementById('echart1');
	var barChart = echarts.init(chart);
	var option = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				lineStyle: {
					color: '#ececff'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#9ca1b9'
			}
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: '#ececff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#ececff'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#9ca1b9'
			}
		},
		series: chartdata,
		color: ['rgb(96, 82, 159,0.9)', "rgba(50, 202, 254,0.9)" ]
	};
	barChart.setOption(option);
	/* echart (#echart1) closed */
	
  
	/* pieChart */
	var ctx = document.getElementById("pieChart");
	var myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			datasets: [{
				data: [45, 25, 20, 10],
				backgroundColor: ['rgb(96, 82, 159,0.8)', 'rgba(50, 202, 254,0.8)', 'rgb(255, 204, 0,0.8)', 'rgb(94, 216, 79,0.8)'],
				hoverBackgroundColor: ['rgb(96, 82, 159,0.9)', 'rgba(50, 202, 254,0.9)', 'rgb(255, 204, 0,0.9)', 'rgb(94, 216, 79,0.9)'],
				borderColor:'transparent',
			}],
			labels: ["very satisfied", "Satisfied", "Good", "Unsatisfied", "bad"]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
					fontFamily: 'Montserrat',
				},
			},
		}
	});
	/* pieChart end */
	
	
	/* service-chart */
	var ctx = $('#service-chart');
	ctx.height(300);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10/", "E11", "E12"],
			type: 'line',
			datasets: [{
				label: "Customer retention in %",
				data: [85, 75, 96, 84, 85, 92, 79, 78, 74, 85, 86, 80],
				backgroundColor: 'transparent',
				borderColor: 'rgb(96, 82, 159,0.9)',
				borderWidth: 0,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgb(96, 82, 159,0.9)',
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(0,0,0,0.9)',
				bodyFontColor: 'rgba(0,0,0,0.9)',
				backgroundColor: '#fff',
				cornerRadius: 0,
				intersect: false,
			},
			legend: {
				display: false,
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
						color: 'rgba(0,0,0,0.061)'
					},
					scaleLabel: {
						display: false,
						labelString: '',
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
						drawBorder: true
					},
					scaleLabel: {
						display: true,
						labelString: 'Customer retention in %',
						fontColor: 'rgba(0,0,0,0.61)'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* service-chart end */
	
	
	/* echart6 */
	var chartdata = [
	{
		name: 'sales',
		type: 'bar',
		data: [120, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
		barWidth: 10,
	}
	];

	var option6 = {
		grid: {
		top: '6',
		right: '10',
		bottom: '17',
		left: '32',
	},
	xAxis: {
		type: 'value',
		axisLine: {
		lineStyle: {
		color: '#eaeaea'
		}
	},
	splitLine: {
		lineStyle: {
		color: '#fff'
		}
	},
	axisLabel: {
		fontSize: 10,
		color: 'rgba(0,0,0,0.5)'
		}
	},

	yAxis: {
		type: 'category',
		data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
		splitLine: {
		lineStyle: {
		color: '#fff'
		}
	},
	axisLine: {
		lineStyle: {
		color: '#eaeaea'
		}
	},
	axisLabel: {
		fontSize: 10,
		color: 'rgba(0,0,0,0.5)'
		}
	},
	series: chartdata,
		color:[ 'rgb(96, 82, 159,0.9)']
	};

	var chart6 = document.getElementById('echart6');
	var barChart6 = echarts.init(chart6);
	barChart6.setOption(option6);
	/* echart6 end */
  
  
    /* service-chart2 */
	var ctx = $('#service-chart2');
	ctx.height(220);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			datasets: [{
				label: "Returns on Equity",
				borderColor: "rgb(96, 82, 159,0.9)",
				borderWidth: "0",
				backgroundColor: "rgb(96, 82, 159,0.4)",
				data: [24, 25, 45, 48, 63, 48, 52]
			}, 
			    {
				label: "Returns on Equity",
				borderColor: "rgb(50, 202, 254,0.4)",
				borderWidth: "0",
				backgroundColor: "rgb(50, 202, 254,0.5)",
				data: [20, 15, 35, 43, 12, 25, 26]
			},
			]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "rgba(0,0,0,0.5)",
					},
					display: true,
					gridLines: {
						color: 'rgba(0,0,0,0.061)'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "rgba(0,0,0,0.5)",
					},
					display: false,
					gridLines: {
						display: false,
					}
				}]
			},
			legend: {
				display: false,
			},
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			tooltips: {
				titleFontSize: 12,
				titleFontColor: 'rgba(0,0,0,0.5)',
				bodyFontColor: 'rgba(0,0,0,0.5)',
				backgroundColor: '#fff',
			},
			hover: {
				mode: 'nearest',
				intersect: true
			}
		}
	});
	/* service-chart2 */
	
	
	/* Rating Record */
	$(".bar").peity("bar",{
	  height: 20,
	  max: null,
	  min: 0,
	  padding: 0.3,
	  width: 60
	})
	/* Rating Record end */

});

