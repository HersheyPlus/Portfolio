import { FaStarHalfAlt } from "react-icons/fa";
import Chart from "react-apexcharts";
import { languages } from "../utility/skills";
import { frameworksAndLibraries } from "../utility/skills";
import { databasesAndServices } from "../utility/skills";
import { tools } from "../utility/skills";
function Skills() {
  return (
    <section className="section" id="skills">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
        <div className="border-2">
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
        </div>
        
      </div>
    </section>
  );
}

export default Skills;
