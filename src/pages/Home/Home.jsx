import {
  ColumnContent,
  ColumnStyled,
  StyledImg,
  Wrapper,
  WrapperColumn,
} from './styled'
import imagesRecord1 from '../../assets/images/imagesRecord1.png'
import imagesRecord2 from '../../assets/images/imagesRecord2.png'
import imagesRecord3 from '../../assets/images/imagesRecord3.png'
import ToTop from '../../assets/svg/component_scroll.svg'
import LineChart from './chart/index'
import { useEffect } from 'react'
import api from '../../config/axios'

const Home = () => {
  const handleCallApi = async () => {
    const startDate = '2023-03-19'
    const endDate = '2023-03-19'
    const result = await api.get(
      `/bodyrecord?startDate=${startDate}&endDate=${endDate}`,
    )
    console.log(result)
  }
  useEffect(() => {
    handleCallApi()
  }, [])
  const dataColumn = [
    {
      images: imagesRecord1,
      title: 'Body record',
      content: '自分のカラダの記録',
    },
    {
      images: imagesRecord2,
      title: 'My exercise',
      content: '自分の運動の記録',
    },
    {
      images: imagesRecord3,
      title: 'My diary',
      content: '自分の日記',
    },
  ]
  return (
    <Wrapper>
      <WrapperColumn>
        {dataColumn.map((item, index) => (
          <ColumnStyled key={index}>
            <StyledImg src={item.images} alt="" />
            <ColumnContent>
              <span className="text-yellow300 uppercase text-[25px] font-normal">
                {item.title}
              </span>
              <span className="bg-orange400 text-white text-[14px] px-2 py-1 w-[60%] block m-auto">
                {item.content}
              </span>
            </ColumnContent>
          </ColumnStyled>
        ))}
      </WrapperColumn>
      <img
        src={ToTop}
        alt=""
        className="fixed right-[calc(8vw/2)] top-[50%] cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      />
      <LineChart />
    </Wrapper>
  )
}

export default Home
