import "./header.css"
import { MdHotel } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'
import { MdFlight } from 'react-icons/md'
import { MdLocalTaxi } from 'react-icons/md'
import { MdAttractions } from 'react-icons/md'

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <MdHotel/>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <MdFlight/>
            <span>Voos</span>
          </div>
          <div className="headerListItem">
            <AiFillCar/>
            <span>Aluguel de Carros</span>
          </div>
          <div className="headerListItem">
            <MdAttractions/>
            <span>Atrações</span>
          </div>
          <div className="headerListItem">
            <MdLocalTaxi/>
            <span>Taxi do Aeroporto</span>
          </div>
        </div>
        <h1 className="headerTitle">Aceita um desconto? É uma ótima ideia.</h1>
        <p className="headerDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam exercitationem, ad optio similique, quae debitis laudantium et quia aliquam culpa ipsa quod dolorem laborum quasi modi explicabo maxime suscipit.
        </p>
        <button className="headerBtn">Entrar / Registrar</button>
      </div>
    </div>
  )
}

export default Header