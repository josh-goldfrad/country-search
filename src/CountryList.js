import { useContext } from "react";
import { SupremeContext } from "./Layout";
export default function CountryList(props) {
    const { filterd } = useContext(SupremeContext)
    props.Countries.map((country) => { country.code = country.cca2; country.label = country.name.common })
    // console.log({ props });

    return props.filterd.map((item) => {
        return (
            <div className='country' onClick={() => {
                props.setPopUp_pick([item.capital, item.flags.png, item.population, item.languages, item.name.common]);

            }
            }>
                <h4 className='cardContent'>{item.continents}</h4>
                <h4 className='cardContent'>{item.capital}</h4>
                <h4 className='cardfooter'>{item.name.common}   </h4>
                <img className='png' src={item.flags.png} alt={item.name}></img>
            </div>
        )
    })
}
