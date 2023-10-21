import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Sidebar from "./sidebar";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
const MobileSidebar = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
        
    )
}

export default MobileSidebar