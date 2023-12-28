import Chart from "react-apexcharts";

function DonutChart() {
  return (
    <>
    <Chart
type="donut"
series={[45, 45, 10]}
options={{
  chart: {
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 500,
      },
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        legend: {
          position: "top",
        },
      },
    },
  ],
  labels: ["Fronted", "Backend", "UX/UI"],
  colors: ["#2E93fA", "#66DA26", "#FF9800"],
  legend: {
    show: true,
    position: "bottom",
    labels: {
      colors: "#ffffff",
    },
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            color: "#ffffff",
          },
        },
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
}}
/>
    </>
  )
}

export default DonutChart