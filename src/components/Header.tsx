
// import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbar container'>
            {/* <Link className='navbar-brand text-light' to='/'>Trello Clone</Link> */}
            <a className='navbar-brand text-light' href="/">Trello Clone</a>

            <button className='btn btn-info'>Sign up</button>

        </nav>
    </>
  )
}

export default Header