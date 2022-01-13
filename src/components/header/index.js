
import react from 'react';
import { AreaHeader } from './styled'
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Header() {
  return (
    <AreaHeader>
      <div className='container'>
        <div className='logo'>
          <img src ="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b9033620126391.58b02ab7797d4.jpg"/>
        </div>

        <nav>
          <ul>
          <li><Link to='/'>Home</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
            <li><Link to='/logout'>Sair</Link></li>
          </ul>
        </nav>

      </div>
    </AreaHeader>
  );

}
export default Header;
