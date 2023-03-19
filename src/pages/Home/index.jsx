import React, { useEffect, useState } from 'react'
import { recommendContent, recommendTitle } from '../../constants/dataRecommend' // mock data
import {
  Button,
  RecommendContent,
  RecommendWrapper,
  StyledImg,
  Text,
  Tittle,
  Wrapper,
  WrapperColumn,
  WrapperContent,
  WrapperContentImage,
  WrapperTags,
} from './styled'

const Home = () => {
  const [filter, setFilter] = useState('column')
  const [defaultValue, setDefaultValue] = useState(8)

  const [recommendData, setRecommendData] = useState(recommendContent) // fake data

  const showMoreItems = () => {
    setDefaultValue((preValue) => preValue + 4)
  }

  const handleChangeFilter = (value) => {
    const result = recommendContent.filter((item) => item.value === value) // don't have api filter
    setRecommendData(result)
  }

  useEffect(() => {
    handleChangeFilter(filter)
    setDefaultValue(8)
  }, [filter])

  return (
    <Wrapper className="pt-[56px] pb-[64px]">
      {/* filter column */}
      <RecommendWrapper className="flex items-center gap-8 justify-center mb-[56px]">
        {recommendTitle.map((item, index) => (
          <WrapperColumn
            key={index}
            className="w-full max-w-[216px] h-full max-h-[144px] px-[12px] py-[24px] bg-black600 text-center cursor-pointer"
            onClick={() => setFilter(item.value)}
          >
            <Tittle className="text-yellow300 uppercase mb-[10px] font-normal text-[22px]">
              Recommended {item.title}
            </Tittle>
            <hr className="w-[40%] mx-auto mb-2 text-white" />
            <Text className="text-white">{item.content}</Text>
          </WrapperColumn>
        ))}
      </RecommendWrapper>
      {/* data after filter */}
      <RecommendContent className="flex items-center justify-center gap-2 flex-wrap mb-[26px]">
        {recommendData.slice(0, defaultValue).map((item, idx) => (
          <WrapperContent key={idx}>
            <WrapperContentImage className="w-[234px] h[145px] relative mb-2">
              <StyledImg
                src={item.images}
                alt={item.images}
                className="w-full h-full object-cover"
              />
              <Text className="bg-yellow300 text-white px-2 py-1 absolute left-0 bottom-0 text-[15px]">
                {item.date} {item.time}
              </Text>
            </WrapperContentImage>
            <Text className="w-full max-w-[234px] text-[15px] text-textColor mb-2 block">
              {item.content}
            </Text>
            <WrapperTags className="flex items-center gap-2">
              {item.tags.map((value) => (
                <Text className="text-orange400 text-xs" key={value.id}>
                  #{value.title}
                </Text>
              ))}
            </WrapperTags>
          </WrapperContent>
        ))}
      </RecommendContent>
      {/* load more button */}
      <Button
        className="block mx-auto w-full h-full max-w-[296px] max-h-[56px] rounded p-4 text-center bg-gradient-to-r from-yellow300 to-orange400 text-white"
        onClick={showMoreItems}
      >
        コラムをもっと見る
      </Button>
    </Wrapper>
  )
}

export default Home
