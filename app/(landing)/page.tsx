import { Button } from "@/components/ui/button"
import Link from "next/link"
const Landing = () => {
    return(
        <div>
            <h2>AI Hub Landing page</h2>
            <Link href="/sign-in">
                <Button>Sign In</Button>
            </Link>
            <Link href="/sign-up">
                <Button>Sign Up</Button>
            </Link>
            
        </div>
    )
}

export default Landing