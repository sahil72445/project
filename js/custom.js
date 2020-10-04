$("#formBtn1").click(function(){
        $("#userInfo").hide();
        $("#form1").show();
      });
      $("#formBtn2").click(function(){
        $("#form1").hide();
        $("#form2").show();
      });
      $("#formBtn3").click(function(){
        $("#form2").hide();
        $("#form3").show();
      });
      $("#formBtn4").click(function(){
        $("#form3").hide();
        $("#form4").show();
      });
      $("#formBtn5").click(function(){
        $("#form4").hide();
        $("#form5").show();
      });
      $("#formBtn6").click(function(){
        $("#form5").hide();
        $("#form6").show();
      });
      $("#formBtn7").click(function(){
        $("#form6").hide();
        $("#form7").show();
      });


      var ctx = document.getElementById("myChart").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          datasets: [{
            backgroundColor: [
              "#2ecc71",
              "#3498db",
              "#95a5a6",
              "#9b59b6",
              "#f1c40f",
              "#e74c3c",
              "#34495e"
            ],
            data: [12, 19, 3, 17, 28, 24, 7]
          }]
        }
      });