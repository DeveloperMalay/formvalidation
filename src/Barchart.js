import React from "react";
import { useEffect, useRef} from "react";

import * as d3 from "d3";
const Barchart = ({ xdim, ydim, margin }) => {

  // const [data, setdata] = useState(ydata)
  const xdata = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const ydata = [10, 30, 40, 20, 10, 40, 30, 20, 50, 10, 29, 39];

  
  
  // const shuffeldata = [10, 30, 40, 20, 10, 40, 30, 20, 50, 10, 29, 39];
  // console.log("before",shuffeldata);
  // function shuffle(a) {
  //   var j, x, i;
  //   for (i = a.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     x = a[i];
  //     a[i] = a[j];
  //     a[j] = x;
  //   }
  //   return a;
  // }
  // const onchange = () => {
  //   shuffeldata = shuffle(shuffeldata);
  // };
  // console.log("after",shuffeldata);

//   function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {

//         // Generate random number
//         var j = Math.floor(Math.random() * (i + 1));

//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }

//     return array;
// }
  // const onchange = () => {
  //   const ydata1 = shuffleArray(ydata);
  //  data.yaxisdata=ydata1 
  // };

  const canvas = useRef(null);

  useEffect(() => {
    const svg = d3.select(canvas.current);
    addAxes(svg);
    addBar(svg);
    addtext(svg);
  }, [xdim, ydim, margin, xdata, ydata]);

  const addAxes = (svg) => {
    const xAxis = d3.axisBottom(xscale);
    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${ydim + margin.top})`)
      .attr("text-anchor", "start");

    const yAxis = d3.axisLeft(yscale);
    svg
      .append("g")
      .call(yAxis)
      .attr("transform", `translate(${margin.left},${margin.top})`);
  };

  const addBar = (svg) => {
    const linearScale = d3
      .scaleLinear()
      .domain([0, d3.max(ydata)])
      .range([0, ydim]);
    const scaledYData = ydata.map((yval) => {
      return linearScale(yval);
    });
    svg
      .selectAll("rect")
      .data(scaledYData)
      .enter()
      .append("rect")
      .attr("width", xscale.bandwidth())
      .attr("height", (d) => {
        return d;
      })
      .attr("x", (d, i) => {
        return xscale(xdata[i]);
      })
      .attr("y", (d) => {
        return margin.top + ydim - d;
      })
      .attr("fill", "dodgerblue")
      .attr("stroke", "black");
  };
  const addtext = (svg) => {
    svg
      .append("text")
      .text("Temperature")
      .attr("x", (margin.left + margin.rigth + xdim) * 2)
      .attr("y", margin.top / 2);
  };

  const xscale = d3
    .scaleBand()
    .domain(xdata)
    .range([margin.left, xdim + margin.left])
    .padding(0.1);

  const yscale = d3
    .scaleLinear()
    .domain([0, d3.max(ydata)])
    .range([ydim, 0]);

  return (
    <div className="chart">
      <div className="canvas">
        <svg
          viewBox={`0 0 ${xdim + margin.left + margin.right} ${
            ydim + margin.top + margin.bottom
          }`}
          preserveAspectRatio="xMinYMin"
          width="100%"
          height="100%"
          style={{ backgroundColor: "beige" }}
          ref={canvas}
        ></svg>
      </div>
      {/* <button onClick={onchange}>change</button> */}
    </div>
  );
};

export default Barchart;
