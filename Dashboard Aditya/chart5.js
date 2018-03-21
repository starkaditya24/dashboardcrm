let sbchart = document.getElementById('stackedBar').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    let stackedBar = new Chart( sbchart, {
      type: 'bar',
      title:{
    text: "Evening Sales in a Restaurant"
  },
  
  
  data:{
        labels:["Meals","Snacks","Drinks","Dessert","Takeaway"],
      datasets:[{ 
    label: "Meals",
    xValueFormatString: "DD, MMM",
    yValueFormatString: "$#,##0",
      data: [
      { x: new Date(2017, 0, 30), y: 56 },
      { x: new Date(2017, 0, 31), y: 45 },
      { x: new Date(2017, 1, 1), y: 71 },
      { x: new Date(2017, 1, 2), y: 41 },
      { x: new Date(2017, 1, 3), y: 60 },
      { x: new Date(2017, 1, 4), y: 75 },
      { x: new Date(2017, 1, 5), y: 98 }
    ],
          //backgroundColor:'green',
    backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#808000',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
  },
  {
    labels:["Meals","Snacks","Drinks","Dessert","Takeaway"],
    label: "Snacks",
    xValueFormatString: "DD, MMM",
    yValueFormatString: "$#,##0",
    
    
    data: [
      { x: new Date(2017, 0, 30), y: 86 },
      { x: new Date(2017, 0, 31), y: 95 },
      { x: new Date(2017, 1, 1), y: 71 },
      { x: new Date(2017, 1, 2), y: 58 },
      { x: new Date(2017, 1, 3), y: 60 },
      { x: new Date(2017, 1, 4), y: 65 },
      { x: new Date(2017, 1, 5), y: 89 }
    ],
          //backgroundColor:'green',
    backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#800000',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
  },
  {
    
    label: "Drinks",
    xValueFormatString: "DD, MMM",
    yValueFormatString: "$#,##0",
    
    
    
    data: [
      { x: new Date(2017, 0, 30), y: 48 },
      { x: new Date(2017, 0, 31), y: 45 },
      { x: new Date(2017, 1, 1), y: 41 },
      { x: new Date(2017, 1, 2), y: 55 },
      { x: new Date(2017, 1, 3), y: 80 },
      { x: new Date(2017, 1, 4), y: 85 },
      { x: new Date(2017, 1, 5), y: 83 }
    ],
          //backgroundColor:'green',
    backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#454545',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
  },
  {
    labels:["Meals","Snacks","Drinks","Dessert","Takeaway"],
    
    
    label: "Dessert",
    xValueFormatString: "DD, MMM",
    yValueFormatString: "$#,##0",
    
    data: [
      { x: new Date(2017, 0, 30), y: 61 },
      { x: new Date(2017, 0, 31), y: 55 },
      { x: new Date(2017, 1, 1), y: 61 },
      { x: new Date(2017, 1, 2), y: 75 },
      { x: new Date(2017, 1, 3), y: 80 },
      { x: new Date(2017, 1, 4), y: 85 },
      { x: new Date(2017, 1, 5), y: 105 }
    ],
          //backgroundColor:'green',
    backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#0000FF',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
  },
  {
    labels:["Meals","Snacks","Drinks","Dessert","Takeaway"],
    
    
    label: "Takeaway",
    xValueFormatString: "DD, MMM",
    yValueFormatString: "$#,##0",
    data: [
      { x: new Date(2017, 0, 30), y: 52 },
      { x: new Date(2017, 0, 31), y: 55 },
      { x: new Date(2017, 1, 1), y: 20 },
      { x: new Date(2017, 1, 2), y: 35 },
      { x: new Date(2017, 1, 3), y: 30 },
      { x: new Date(2017, 1, 4), y: 45 },
      { x: new Date(2017, 1, 5), y: 25 }
    ],
          //backgroundColor:'green',
  backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#00FF00',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
  },
]},
      options:{
        scales:{
        Xaxes: {
        valueFormatString: "DDD"
        },
        Yaxes: {
       prefix: "$"
       }
       },
        title:{
          display:true,
          text:'Evening Sales in a Restaurant',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:20,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
  }
});