$(function(e){
  'use strict'
    /* doughut chart */
	var ctx = $('#doughutChart');
	ctx.height(300);
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [45, 25, 20, 10],
				backgroundColor: ['#60529f', ' #32cafe', '#5ed84f', '#fc0'],
				hoverBackgroundColor: ['#60529f', ' #32cafe', '#5ed84f', '#fc0'],
				borderColor:'transparent',
			}],
			labels: ["Total players", "Online players", "Best players", "New player"]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				labels: {
					fontColor: "rgba(0,0,0,0.5)"
				},
			},
		}
	});
	/* doughut chart end */
	
	
	/* barChart */
	var ctx = $('#barChart');
	ctx.height(300);
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			datasets: [{
				label: "Installs",
				data: [65, 59, 80, 81, 56, 55, 40],
				borderColor: "#60529f",
				borderWidth: "1",
				backgroundColor: "#60529f"
			}, {
				label: "clicks",
				data: [28, 48, 40, 19, 86, 27, 90],
				borderColor: "#32cafe",
				borderWidth: "1",
				backgroundColor: "#32cafe"
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				xAxes: [{
					barThickness : 20,
					ticks: {
						fontColor: "rgba(0,0,0,0.5)",
						
					 },
					gridLines: {
						color: 'transparent'
					}
				}],
				yAxes: [{
					barThickness : 20,
					ticks: {
						beginAtZero: true,
						fontColor: "rgba(0,0,0,0.5)",
						
					},
					gridLines: {
						color: 'transparent'
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
	/* barChart closed */
	
	
	/* sparkline_bar28 */
	$(".sparkline_bar28").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4,], {
		type: 'bar',
		height: 140,
		width:250,
		barWidth: 5,
		barSpacing: 15,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(96, 82, 159,0.9)'
	});
	/* sparkline_bar28 closed */ 
	
	
	/* sparkline_bar2 */
	$(".sparkline_bar2").sparkline([15, 17, 16, 11, 12, 15, 10, 19, 16, 13, 12, 15, 17, 16, 11], {
		type: 'bar',
		height: 70,
		width:800,
		barWidth: 5,
		barSpacing: 5,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(96, 82, 159,0.7)'
	});
	/* sparkline_bar2 closed */
    

    /* Campaign */
    var ctx = document.getElementById( "campaign" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            type: 'line',
            datasets: [ {
                data: [1, 7, 3, 9, 4, 5, 2, 1],
                label: '',
                backgroundColor: 'rgba(96, 82, 159,0.7)',
                borderColor: 'rgba(96, 82, 159,0.8)',
            }, ]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                cornerRadius: 0,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
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
    } );
	/* campaign end */
	
	
	/* Areachart-1 */
	var ctx = document.getElementById( "Areachart-1" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data : {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            type: 'line',
             datasets: [
			 {
				label: "Contribution",
				backgroundColor: 'rgba(50, 202, 254,0.7)',
                borderColor: 'rgba(50, 202, 254,0.8)',
				data: [5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2]
			}
		  ]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                cornerRadius: 0,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
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
	/* Areachart-1 end*/
	
	
	/* Game-overview */
    var ctx = $('#Game-overview');
	ctx.height(300);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
			type: 'line',
			datasets: [{
				label: "Total Profit",
				data: [2532, 1856, 1965, 2014, 2351, 2458, 3564, 2145, 1756, 3250, 2153, 1278],
				backgroundColor: 'rgba(96, 82, 159,0.7)',
				borderColor: 'rgba(96, 82, 159,0.8)',
				borderWidth: 0,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgba(96, 82, 159,0.8)',
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
				bodyFontFamily: 'Montserrat',
				cornerRadius: 0,
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
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* Game-overview end */
	
	
	/* Active-users */
	var ctx = $('#Active-users');
	ctx.height(300);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
			type: 'line',
			datasets: [{
				label: "Active users",
				data: [85, 75, 96, 84, 85, 92, 79, 78, 74, 85, 86, 80],
				backgroundColor: 'transparent',
				borderColor: '#32cafe',
				borderWidth: 0,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#32cafe',
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
				bodyFontFamily: 'Montserrat',
				cornerRadius: 0,
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
					
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* Active-users end */
	
	
  });
  
  



