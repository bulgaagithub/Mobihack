import { useEffect, useState } from "react"
import axios from "axios"
import { Frown, HelpCircle } from "react-feather"
import StatsWithLineChart from "@components/widgets/stats/StatsWithLineChart"

const Question = ({ warning }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get("/card/card-statistics/question")
      .then((res) => setData(res.data))
  }, [])

  const options = {
    chart: {
      id: "Question",
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 4,
        opacity: 0.1
      }
    },
    grid: {
      show: false
    },
    colors: [warning],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 5
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        gradientToColors: ["#ffc085"],
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },

    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: { show: false }
    }
  }

  return (
    <StatsWithLineChart
      icon={<HelpCircle size={21} />}
      color="#decede"
      stats="323"
      statTitle="Question"
      series={[]}
      type="line"
      options={options}
    />
  )
}

export default Question
