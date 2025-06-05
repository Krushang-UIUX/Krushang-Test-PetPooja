import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import DashboardPage from '../page/DashboardPage'

const DashboardLayout = () => {
  return (
    <>
    <div className="row mx-0 px-0">
      <div className="col-12 px-0">
        <Header />
      </div>
      <div className="d-flex position-relative px-0">
        <Sidebar />
        <DashboardPage />
      </div>
    </div>
    </>
  )
}

export default DashboardLayout