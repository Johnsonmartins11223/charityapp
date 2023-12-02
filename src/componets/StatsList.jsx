import HouseIcon from '@mui/icons-material/House';
import CheckIcon from '@mui/icons-material/Check';
import FlagIcon from '@mui/icons-material/Flag';
import '../componets/Statslist.css'

const StatsList = () => {
    return (
        <ul className='stats-list'>
            <li className="list1"><HouseIcon />Total Votes: 4995 out of 50000</li>
            <li className="list2"><CheckIcon />Total Votes To Win: 50000</li>
            < a href="" className='link1'>
                <li className="list3">
                <FlagIcon />
                    Help
                </li>
            </a>
        </ul >
    )
}
export default StatsList