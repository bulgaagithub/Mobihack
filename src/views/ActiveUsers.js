import { useEffect, useState } from "react"
import axios from "axios"
import { Meh } from "react-feather"
import StatsWithLineChart from "@components/widgets/stats/StatsWithLineChart"

const ActiveUsers = ({ success }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get("/card/card-statistics/active-users")
      .then((res) => setData(res.data))
  }, [])

  const options = {
    chart: {
      id: "activeUsers",
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
    colors: [success],
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
        gradientToColors: ["#55DD92"],
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
      icon={<Meh size={21} />}
      color="warning"
      stats="1205"
      statTitle="Neutral"
      series={[]}
      options={options}
      type="line"
    />
  )
}

export default ActiveUsers
