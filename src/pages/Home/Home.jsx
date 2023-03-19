import { Wrapper } from './styled'
import imagesRecord1 from '../../assets/images/imagesRecord1.png'
import imagesRecord2 from '../../assets/images/imagesRecord2.png'
import imagesRecord3 from '../../assets/images/imagesRecord3.png'
import MyExe from './components/MyExe.jsx'

const Home = () => {
  return (
    <Wrapper>
      <div className="flex items-center gap-[48px]">
        <div className="py-[24px] px-[20px] bg-yellow300 w-[288px] h-[288px] relative">
          <img
            src={imagesRecord1}
            alt=""
            className="w-full h-full object-cover bg-black500"
          />
        </div>
        <span></span>
        <div className="py-[24px] px-[20px] bg-yellow300 w-[288px] h-[288px] relative">
          <img
            src={imagesRecord2}
            alt=""
            className="w-full h-full object-cover bg-black500"
          />
        </div>
        <span></span>
        <div className="py-[24px] px-[20px] bg-yellow300 w-[288px] h-[288px] relative">
          <img
            src={imagesRecord3}
            alt=""
            className="w-full h-full object-cover bg-black500"
          />
          <span></span>
        </div>
      </div>
      <MyExe />
    </Wrapper>
  )
}

export default Home
