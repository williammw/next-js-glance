import requests from '../utils/requests'

function Nav() {
  return (
    <nav>
      {Object.entries(requests).map(([key, {title,url}]) =>{
        <h2 key={key} >{title}</h2>
      }
      )}
    </nav>
  )
}

export default Nav
