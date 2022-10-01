import { Row, Col, Container, Card, CardBody } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import { ThemeColors } from "@src/utility/context/ThemeColors"
import { Fragment, useContext } from "react"
import SiteTraffic from "./SiteTraffic"
import ActiveUsers from "./ActiveUsers"
import Newsletter from "./Newsletter"
import { Doughnut, Line } from "react-chartjs-2"
import { useSkin } from "@hooks/useSkin"
import Tasks from "./Tasks"
import { comments } from "./comments"
import Question from "./Question"

const Home = () => {
  const context = useContext(ThemeColors)

  const { colors } = useContext(ThemeColors),
    [skin, setSkin] = useSkin(),
    labelColor = skin === "dark" ? "#b4b7bd" : "#6e6b7b",
    tooltipShadow = "rgba(0, 0, 0, 0.25)",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    blueColor = "#cc4125",
    blue2Color = "#99edc3",
    blueLightColor = "#5579c6",
    greyLightColor = "#EDF1F4"

  const data = {
    labels: ["Positive", "Neutral", "Negative", "Question"],
    datasets: [
      {
        label: "# of Votes",
        data: [903, 1205, 642, 300],
        backgroundColor: ["#2fdede", "#5579c6", "#cc4125", "#99edc3"],
        borderColor: ["#2fdede", "#5579c6", "#cc4125", "#99edc3"],
        borderWidth: 1
      }
    ]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "top",
      align: "start",
      labels: {
        usePointStyle: true,
        padding: 25,
        boxWidth: 9
      }
    },
    layout: {
      padding: {
        top: -20,
        bottom: -20,
        left: -20
      }
    },
    tooltips: {
      // Updated default tooltip UI
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowBlur: 8,
      // shadowColor: tooltipShadow,
      backgroundColor: "#fff",
      titleFontColor: "#000",
      bodyFontColor: "#000"
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            color: "transparent"
            // zeroLineColor: gridLineColor
          },
          scaleLabel: {
            display: true
          }
          // ticks: {
          //   fontColor: labelColor
          // }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: "transparent",
            zeroLineColor: gridLineColor
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 300,
            fontColor: labelColor
          },
          scaleLabel: {
            display: true
          }
        }
      ]
    }
  }

  const optionsArea = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
      align: 'start',
      labels: {
        usePointStyle: true,
        padding: 25,
        boxWidth: 9
      }
    },
    layout: {
      padding: {
        top: -20,
        bottom: -20,
        left: -20
      }
    },
    tooltips: {
      // Updated default tooltip UI
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowBlur: 8,
      shadowColor: tooltipShadow,
      backgroundColor: '#fff',
      titleFontColor: '#000',
      bodyFontColor: '#000'
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: gridLineColor
          },
          scaleLabel: {
            display: true
          },
          ticks: {
            fontColor: labelColor
          }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: gridLineColor
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 300,
            fontColor: labelColor
          },
          scaleLabel: {
            display: true
          }
        }
      ]
    }
  },
    dataArea = {
      labels: [
        '1-р сар',
        '2-р сар',
        '3-р сар',
        '4-р сар',
        '5-р сар',
        '6-р сар',
        '7-р сар',
        '8-р сар',
        '9-р сар'
      ],
      datasets: [
        {
          label: 'Question',
          data: [30, 10, 17, 25, 15, 15, 10, 15, 30, 48, 20, 10, 15, 14, 15],
          lineTension: 0,
          backgroundColor: '#99edc3',
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: blue2Color,
          pointHoverBorderColor: '#fff'
        },
        {
          label: 'Negative',
          data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
          lineTension: 0,
          backgroundColor: blueColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: blueColor,
          pointHoverBorderColor: '#fff'
        },
        {
          label: 'Neutral',
          data: [70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275],
          lineTension: 0,
          backgroundColor: blueLightColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: blueLightColor,
          pointHoverBorderColor: '#fff'
        },
        {
          label: 'Positive',
          data: [240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300, 315],
          lineTension: 0,
          backgroundColor: '#2fdede',
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: greyLightColor,
          pointHoverBorderColor: '#fff'
        }

      ]
    }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Container fluid>
      <Row>
        {/* Stats Line Charts */}
        <Col lg="4" sm="6">
          <SiteTraffic />
        </Col>
        <Col lg="4" sm="6">
          <ActiveUsers success={context.colors.success.main} />
        </Col>
        <Col lg="4" sm="6">
          <Question warning={'#99edc3'} />
        </Col>
        <Col lg="4" sm="6">
          <Newsletter warning={context.colors.warning.main} />
        </Col>
        {/* Stats Line Charts */}
      </Row>
      <Row>
        <Col lg="4" sm="6">
          <Card>
            <CardBody>
              <Doughnut data={data} height={280} />
            </CardBody>
          </Card>
        </Col>
        <Col lg="8" sm="6">
          <Card>
            <CardBody>
              <div className="recharts-wrapper">
                <Line
                  data={dataArea}
                  options={optionsArea}
                  height={304}
                // plugins={plugins}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
