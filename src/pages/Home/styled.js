import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`pt-[56px] pb-[64px] w-full max-w-[960px] m-auto`}
`

export const RecommendWrapper = styled.div`
  ${tw`flex items-center gap-8 mb-[56px]`}
`

export const RecommendContent = styled.div`
  ${tw`flex items-center gap-2 flex-wrap mb-[26px]`}
`

export const WrapperColumn = styled.div`
  ${tw`w-full max-w-[216px] h-full max-h-[144px] px-[12px] py-[24px] bg-black600 text-center cursor-pointer`}
`

export const WrapperContent = styled.div``

export const WrapperContentImage = styled.div`
  ${tw`w-[234px] h-[145px] relative mb-2`}
`

export const WrapperTags = styled.div`
  ${tw`flex items-center gap-2`}
`

export const Title = styled.h1`
  ${tw`text-yellow300 uppercase mb-[10px] font-normal text-[22px]`}
`

export const Text = styled.span``

export const Button = styled.button`
  ${tw`block mx-auto w-full h-full max-w-[296px] max-h-[56px] rounded p-4 text-center bg-gradient-to-r from-yellow300 to-orange400 text-white`}
`

export const StyledImg = styled.img``
