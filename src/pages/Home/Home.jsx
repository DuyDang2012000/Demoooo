import ToTop from '../../assets/svg/component_scroll.svg'
import MyExe from './components/MyExe.jsx'
import { Wrapper } from './styled'
import MyRecord from './components/MyRecord'

const Home = () => {
  return (
    <Wrapper>
      <MyRecord />
      <MyExe />
      <img
        src={ToTop}
        alt=""
        className="fixed right-[calc(8vw/2)] top-[50%] cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      />
    </Wrapper>
  )
}

export default Home
