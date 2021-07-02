import TopNav from './TopNav'

function Layout({children}) {
  
  return (
    <div>
      <TopNav />
      {children}
    </div>
  )
}

export default Layout
