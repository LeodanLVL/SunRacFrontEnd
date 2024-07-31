import './App.css'
import logo from './assets/Icons/logo.png';
import logoOptions from './assets/Icons/Perfil.png';
import logoLeftSideoptions from './assets/Icons/icon_addclientes.png';

function App() {

  return (
    <main className='main'>

      <div className='nav_bar menu'>
        <div className='options'>
          <img className='logoOptions' src={logoOptions} alt="" />

        </div>
        <div className='options'>
          <img className = "logoleftSideoptions" src={logoLeftSideoptions} alt="" />
          <p className='options_text'>option1</p>

        </div>
        <div className='options'>
          <img className = "logoleftSideoptions"  src={logoLeftSideoptions} alt="" />
          <p className='options_text'>option2</p>

        </div>
        <div>

        </div>
        <div className='options'>
          <img className = "logoleftSideoptions" src={logoLeftSideoptions} alt="" />
          <p className='options_text'>option</p>
        </div>
      </div>

      <div className='mainl'>
        <img className='main_logo' src={logo} alt="Logo SunRac" />

      </div>
    </main>
  )
}

export default App
