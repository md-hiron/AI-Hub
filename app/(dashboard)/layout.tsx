import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
const DashboardLayout = ({
    children
}:{
    children : React.ReactNode
}) => {
    return(
        <div className="h-full relative">
            <div className="hidden md:flex md:flex-wrap md:flex-col md:fixed md:max-w-72 h-full bg-gray-900">
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
            <main className="md:ml-72">
                <Navbar />
                {children}
            </main>
          
        </div>
    )
}

export default DashboardLayout