import "./header.css"
import { MdHotel } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'
import { MdFlight } from 'react-icons/md'
import { MdLocalTaxi } from 'react-icons/md'
import { MdAttractions } from 'react-icons/md'
import { AiFillCalendar } from 'react-icons/ai'
import { GiPerson } from 'react-icons/gi'
import { DateRange } from 'react-date-range';
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"


const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <MdHotel />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <MdFlight />
            <span>Voos</span>
          </div>
          <div className="headerListItem">
            <AiFillCar />
            <span>Aluguel de Carros</span>
          </div>
          <div className="headerListItem">
            <MdAttractions />
            <span>Atrações</span>
          </div>
          <div className="headerListItem">
            <MdLocalTaxi />
            <span>Taxi do Aeroporto</span>
          </div>
        </div>
        { type !== "list" &&
          <>
            <h1 className="headerTitle">Aceita um desconto? É uma ótima ideia.</h1>
            <p className="headerDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam exercitationem, ad optio similique, quae debitis laudantium et quia aliquam culpa ipsa quod dolorem laborum quasi modi explicabo maxime suscipit.
            </p>
            <button className="headerBtn">Entrar / Registrar</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <MdHotel className="headerIcon" />
                <input type="text"
                  placeholder="Para onde está indo?"
                  className="headerSearchInput" />
              </div>
              <div className="headerSearchItem">
                <AiFillCalendar className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,
                  "MM/dd/yyyy")} para 
            ${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />}
              </div>
              <div className="headerSearchItem" >
                <GiPerson className="headerIcon" />
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                  {`${options.adult} adulto . ${options.children} crianças.${options.room} quarto`}
                </span>
                {openOptions && <div className="options" >
                  <div className="optionItem">
                    <span className="optionText">Adulto</span>
                    <div className="optionCounter">
                      <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                      <span className="optionCounterNumber" >{options.adult}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Criança</span>
                    <div className="optionCounter">
                      <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                      <span className="optionCounterNumber">{options.children}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Quarto</span>
                    <div className="optionCounter">
                      <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                      <span className="optionCounterNumber">{options.room}</span>
                      <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Procurar</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Header