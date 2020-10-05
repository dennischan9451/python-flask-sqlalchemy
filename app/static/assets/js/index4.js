$(function(e){
  'use strict'
    /* echart2 */
	var chartdata2 = [{
		name: 'Net cost',
		type: 'line',
		smooth: true,
		borderWidth: 3,
		symbolSize:8,
		data: [10, 18, 13, 20, 7, 16],
		color: ['rgb(96, 82, 159,0.9)']
	}, {
		name: 'Revenue',
		type: 'line',
		smooth: true,
		borderWidth: 3,
		symbolSize:8,
		data: [10, 14, 10, 15, 9, 25],
		color: ['rgb(50, 202, 254,0.9)']
	}];
	var chart2 = document.getElementById('echart2');
	var barChart2 = echarts.init(chart2);
	var option2 = {
		
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
		series: chartdata2,
		color: ['#32cafe', '#60529f' ]
	};
	barChart2.setOption(option2);
	 /* echart2 end */
	
   
    /* employeechart */
	var ctx = document.getElementById( "employeechart" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data : {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            type: 'line',
             datasets: [
			{
				label: "this Month",
				borderColor: "rgba(96, 82, 159,0.8)",
				backgroundColor: "rgba(96, 82, 159,0.6)",
				data: [2,7,3,9,4,5,2]
			}
		  ]
        },
        options: {
            maintainAspectRatio: true,
            legend: {
                display: true
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                cornerRadius: 0,
                intersect: true,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: '#646367'
                    },
                    ticks: {
                        fontSize: 12,
                        fontColor: '#646367'
                    }
                } ],
                yAxes: [ {
                    display:true,
                    ticks: {
                        fontSize: 12,
                        fontColor: '#646367'
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
	/* employeechart closed */
	
	
	
	/* lineChart1 */
	var ctx = $('#lineChart1');
	ctx.height(320);
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["<25", "26-30", "31-35", "36-40", "41-50", "51-55", "55-60"],
			datasets: [{
				label: "Hours",
				borderColor: "transparent",
				borderWidth: "4",
				backgroundColor: "rgb(96, 82, 159,0.9)",
				data: [4, 3.5, 3.0, 2.5, 2.0, 1.4, 1.0, 0.50],
				barGap:6,
			  barSizeRatio:0.35,
			}]
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
					display: true,
					gridLines: {
						display: false,
					}
				}]
			},
			legend: {
				labels: {
					fontColor: "rgba(0,0,0,0.5)",
				},
			},
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			tooltips: {},
			hover: {
				mode: 'nearest',
				intersect: true
			}
		}
	});
	/* lineChart1 end */
	
	
    /* employeedetails */
	var ctx = $('#employeedetails');
	ctx.height(304);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["P1-6", "p1-8", "p2-6", "p2-8", "p3-6", "p3-8", "p4-6", "p4-8", "p5-6", "p5-8", "p6-6", "p6-8"],
			type: 'line',
			datasets: [{
				label: "Males",
				data: [20000, 25000, 38000, 42000, 65000, 74000, 66000, 58500, 69000, 75600, 58400, 78000],
				backgroundColor: 'transparent',
				borderColor: 'rgb(96, 82, 159,0.9)',
				borderWidth: 3,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgb(96, 82, 159,0.9)',
			}, {
				label: "Females",
				data: [25000, 32000, 26000, 41000, 69000, 76000, 38000, 42500, 63000, 72400, 58620, 96000],
				backgroundColor: 'transparent',
				borderColor: 'rgb(50, 202, 254,0.9) ',
				borderWidth: 3,
				pointStyle: 'circle',
				pointRadius: 5,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgb(50, 202, 254,0.9)',
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(0,0,0,0.5)',
				bodyFontColor: 'rgba(0,0,0,0.5)',
				backgroundColor: '#fff',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
					fontFamily: 'Montserrat',
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "rgba(0,0,0,0.5)",
					 },
					display: true,
					gridLines: {
						color: 'rgba(0,0,0,0.1)'
					},
					scaleLabel: {
						display: false,
						labelString: ''
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
						display: false,
						labelString: 'Response time In secs'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* employeedetails end */
	
	
	/* sparkline_bar1 */
    $(".sparkline_bar1").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 5,
		barSpacing: 9,
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
	
	
	/* sparkline_pie */
	$(".sparkline_pie").sparkline([1, 1, 2,1], {
		type: 'pie',
		width: 120,
		height: 120,
		sliceColors: ['rgb(94, 216, 79,0.8)','rgba(50, 202, 254,0.8)','rgb(96, 82, 159,0.8)']
	});
	/* sparkline_pie end */
    
});

