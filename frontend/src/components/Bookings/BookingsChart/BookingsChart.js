import React from 'react'
import { Bar as BarChart } from 'react-chartjs'

import './BookingsChart.css'

const BOOKINGS_BUCKETS = {
  Cheap: {
    min: 0,
    max: 10,
  },
  Normal: {
    min: 10,
    max: 30,
  },
  Expensive: {
    min: 40,
    max: 100,
  },
}

const bookingsChart = (props) => {
  const chartData = { labels: [], datasets: [] }
  let values = []
  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        current.event.price > BOOKINGS_BUCKETS[bucket].min &&
        current.event.price < BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1
      } else {
        return prev
      }
    }, 0)
    values.push(filteredBookingsCount)
    chartData.labels.push(bucket)
    chartData.datasets.push({
      fillColor: 'rgba(220, 220, 220, 0.5)',
      strokeColor: 'rgba(220, 220, 220, 0.8)',
      highlightFill: 'rgba(220, 220, 220, 0.75)',
      highlightStroke: 'rgba(220, 220, 220, 0.1)',
      data: values,
    })
    values = [...values]
    values[values.length - 1] = 0
  }
  return <div className="barChart"><BarChart data={chartData} /></div>
}

export default bookingsChart
