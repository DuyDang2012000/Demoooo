import React, { useEffect, useState } from 'react'
import api from '../../../config/axios'
import Dot from '../../../assets/svg/dot.svg'
import InfiniteScroll from 'react-infinite-scroll-component'
const dataMock = {
  _id: '6414c2de34edc52ab7098f12',
  user: '6414b8b96d38ab46ef031fa3',
  date: '2023-03-18T00:00:00.000Z',
  description: 'a',
  energy: 10,
  totalTime: 10,
  createdAt: '2023-03-17T19:43:26.422Z',
  updatedAt: '2023-03-17T19:43:26.422Z',
  __v: 0,
}
const MyExe = (date) => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({ limit: 15, page: 1 })
  const callApi = async () => {
    // const result = await api.get(`/exercise`, {
    //   params: {
    //     date: '2023-03-18',
    //   },
    // })
    // console.log(result)
    if (filter?.page === 1) {
      setData(Array(filter.limit).fill(dataMock))
    } else {
      setData((prev) => [...prev, ...Array(filter.limit).fill(dataMock)])
    }
  }
  const loadMore = () => {
    setFilter((prev) => ({ ...prev, page: prev.page + 1 }))
  }
  useEffect(() => {
    callApi()
  }, [date, filter])

  return (
    <div className="h-[264px] px-[16px] py-[24px] bg-textColor mt-[56px]">
      <div className="flex">
        <h2 className="text-[18px] text-white">
          MY <br /> EXERCISE
        </h2>
        <h2 className="text-[18px] text-white ml-[16px]">2021.05.21</h2>
      </div>
      <div className="h-[calc(264px-80px)]  overflow-auto">
        <InfiniteScroll
          dataLength={data?.length}
          next={loadMore}
          hasMore={true}
          height={184}
        >
          <div className="grid grid-cols-2 gap-x-[42px] w-[100%] ">
            {data?.map((value, index) => (
              <div
                key={index}
                className="cursor-pointer flex justify-between border-b-[1px] border-gray400"
              >
                <div className="flex">
                  <img src={Dot} alt="" className="w-[5px] h-[22px] mr-[8px]" />
                  <div className="flex flex-col">
                    <span className=" text-white">{value?.description}</span>
                    <span className=" text-yellow300">{value?.energy}kcal</span>
                  </div>
                </div>
                <span className=" text-yellow300">{value?.totalTime} min</span>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default MyExe
