$(function(e){
  'use strict'
    /* echart1 */
	var chartdata = [{
		name: 'products',
		type: 'bar',
		data: [10, 15, 9, 18, 10, 15],
		barWidth: 25,
	}];
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
			data: ['ipad', 'iphone', 'samsung', 'vivo', 'oppo'],
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
		color: ['rgb(96, 82, 159,0.9)' ]
	};
	barChart.setOption(option);
	/* echart1 end */

 
    /* canvasDoughnut */
	if ($('.canvasDoughnut').length){
	var chart_doughnut_settings = {
			type: 'doughnut',
			tooltipFillColor: "rgba(51, 51, 51, 0.55)",
			data: {
				labels: [
					"Last Month",
					"Last Week",
					"This Week"
				],
				datasets: [{
					data: [10, 15, 38],
					backgroundColor: [
						"rgb(94, 216, 79,0.9)",
						"rgba(50, 202, 254,0.9)",
						"rgb(96, 82, 159,0.8)"
					],
					hoverBackgroundColor: [
						"rgb(94, 216, 79,0.9)",
						"rgba(50, 202, 254,0.9)",
						"rgb(96, 82, 159,0.9)"
					]
				}]
			},
			options: {
				legend: false,
				responsive: false
			}
		}

		$('.canvasDoughnut').each(function(){

			var chart_element = $(this);
			var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);

		});
	}
	/* canvasDoughnut end */
	
	
	/* revenue-chart */
	var area = new Morris.Area({
		element: 'revenue-chart',
		resize: true,
		data: [{
 			y: '2011 Q1',
 			item1: 26,
 			item2: 12
 		}, {
 			y: '2011 Q2',
 			item1: 27,
 			item2: 22
 		}, {
 			y: '2011 Q3',
 			item1: 49,
 			item2: 19
 		}, {
 			y: '2011 Q4',
 			item1: 37,
 			item2: 13
 		}, {
 			y: '2012 Q1',
 			item1: 68,
 			item2: 19
 		}, {
 			y: '2012 Q2',
 			item1: 15,
 			item2: 42
 		}, {
 			y: '2012 Q3',
 			item1: 48,
 			item2: 37
 		}, {
 			y: '2012 Q4',
 			item1: 15,
 			item2: 59
 		}, {
 			y: '2013 Q1',
 			item1: 10,
 			item2: 44
 		}, {
 			y: '2013 Q2',
 			item1: 84,
 			item2: 57
 		}],
 		xkey: 'y',
 		ykeys: ['item1', 'item2'],
 		labels: ['Item 1', 'Item 2'],
 		lineColors: ['rgba(50, 202, 254,0.9)', 'rgb(96, 82, 159,0.9)'],
		behaveLikeLine: true,
		pointSize: 0,
        lineWidth: 0,
        resize: true,
        hideHover: 'auto',
		labelscolor: '#fff'
 	});
	/* revenue-chart end */
	
	
	/* line chart */
	var ctx = $('#lineChart');
	ctx.height(160);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			datasets: [{
				label: "Total Sales",
				borderColor: "rgba(96, 82, 159,0.8)",
				borderWidth: "1",
				backgroundColor: "rgba(96, 82, 159,0.7)",
				data: [22, 44, 67, 43, 76, 45, 12]
			}, {
				label: "Total income",
				borderColor: "#32cafe",
				borderWidth: "1",
				backgroundColor: "rgb(50, 202, 254,0.8)",
				pointHighlightStroke: "rgba(50, 202, 254,1)",
				data: [16, 32, 18, 26, 42, 33, 44]
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			tooltips: {
				mode: 'index',
				intersect: false
			},
			hover: {
				mode: 'nearest',
				intersect: true
			}
		}
	});
	/* line chart end */

    /* sparkline_bar */
	$(".sparkline_bar").sparkline([6,2,8,4,3,8,1,3,6,5,7,2,8,1,4,8,7,8,2,1], {
		type: 'bar',
		height: 68,
		width:250,
		barWidth: 4,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(50, 202, 254,0.9)'
	});
	/* sparkline_bar end */
	
	/* sparkline_bar2 */
	$(".sparkline_bar-2").sparkline([6,2,8,4,3,8,1,3,6,5,7], {
		type: 'bar',
		height: 90,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#60529f',
		barSpacing: 7,
		barWidth: 6,
	});
	/* sparkline_bar end */
});


   

 

  
	


