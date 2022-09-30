import { useEffect, useState } from "react"
import axios from "axios"
import { Smile } from "react-feather"
import StatsWithLineChart from "@components/widgets/stats/StatsWithLineChart"

const SiteTraffic = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get("/card/card-statistics/site-traffic")
      .then((res) => setData(res.data))
  }, [])

  return (
    <StatsWithLineChart
      icon={<Smile size={21} />}
      color="success"
      stats="903"
      statTitle="Positve"
      series={[]}
      type="line"
    />
  )
}

export default SiteTraffic
