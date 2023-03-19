import React, { useEffect, useRef, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { WrapperChart, WrapperFilter, WrapperHeader } from './styled'
import api from '../../../config/axios'
const LineChart = () => {
  const chartComponentRef = useRef(null)
  const [filter, setFilter] = useState('year')
  const [active, setActive] = useState('year')
  const [dataChart, setDataChart] = useState([
    {
      _id: '6414d5c34df39d1cb2bc86c3',
      user: '6414b8b96d38ab46ef031fa3',
      date: '2021-01-19T00:00:00.000Z',
      bodyFat: 70,
      createdAt: '2023-03-17T21:04:03.540Z',
      updatedAt: '2023-03-17T21:04:03.540Z',
      __v: 0,
    },
    {
      _id: '6414d5a04df39d1cb2bc86b4',
      user: '6414b8b96d38ab46ef031fa3',
      date: '2021-01-20T00:00:00.000Z',
      bodyFat: 70,
      createdAt: '2023-03-17T21:03:28.898Z',
      updatedAt: '2023-03-17T21:03:28.898Z',
      __v: 0,
    },
    {
      _id: '6414dbf2b9e00b015bd89fe8',
      user: '6414b8b96d38ab46ef031fa3',
      date: '2022-01-19T00:00:00.000Z',
      bodyFat: 70,
      createdAt: '2023-03-17T21:30:26.511Z',
      updatedAt: '2023-03-17T21:30:26.511Z',
      __v: 0,
    },
    {
      _id: '6414dbf6b9e00b015bd89feb',
      user: '6414b8b96d38ab46ef031fa3',
      date: '2022-01-19T00:00:00.000Z',
      bodyFat: 70,
      createdAt: '2023-03-17T21:30:30.086Z',
      updatedAt: '2023-03-17T21:30:30.086Z',
      __v: 0,
    },
    {
      _id: '6414dc609cea11c258bbc4b1',
      user: '6414b8b96d38ab46ef031fa3',
      date: '2023-02-14T00:00:00.000Z',
      bodyFat: 60,
      createdAt: '2023-03-17T21:32:16.584Z',
      updatedAt: '2023-03-17T21:32:16.584Z',
      __v: 0,
    },
  ])
  const handleGetChartData = async () => {
    const result = await api.get(`/bodyrecord?types=${filter}`)
    console.log(result)
  }
  const filterOptions = [
    {
      title: '日',
      value: 'day',
    },
    {
      title: '週',
      value: 'week',
    },
    {
      title: '月',
      value: 'month',
    },
    {
      title: '年',
      value: 'year',
    },
  ]
  const chartOptions = {
    chart: {
      type: 'line',
      backgroundColor: '#414141',
      spacing: [80, 40, 20, 40],
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
      ],
    },
    yAxis: [
      {
        id: 'y_axis_0',
        gridLineWidth: 0.2,
        gridZIndex: 2,
        title: '',
        labels: {
          formatter: function () {
            return ''
          },
        },
      },
    ],

    series: [
      {
        yAxis: 'y_axis_0',
        name: '',
        data: dataChart.map((item) => item.bodyFat),
      },
    ],
  }

  const handleClick = (title) => {
    setActive(title)
    setFilter(title)
  }

  useEffect(() => {
    handleGetChartData(filter)
  }, [filter])

  return (
    <WrapperChart className="relative">
      <WrapperHeader>
        <span className="uppercase text-[15px] text-yellow300">
          Body record
        </span>
        <span>Body record</span>
      </WrapperHeader>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartComponentRef}
      />
      <WrapperFilter className="flex items-center gap-4 absolute bottom-4 left-10">
        {filterOptions.map((item, index) => (
          <span
            className={
              active === item.value
                ? 'text-center bg-yellow300 text-white rounded-full cursor-pointer w-[56px] h-[24px]'
                : 'text-center bg-white text-yellow300 rounded-full cursor-pointer w-[56px] h-[24px]'
            }
            key={index}
            onClick={() => handleClick(item.value)}
          >
            {item.title}
          </span>
        ))}
      </WrapperFilter>
    </WrapperChart>
  )
}

export default React.forwardRef(LineChart)
