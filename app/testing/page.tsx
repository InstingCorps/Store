import ComponentNavbar from "@/components/Navbar/Navbar";
import HorizontalCard from "./carding";
import CardWithFormInputs from "./form";
import CardTest2 from "./cardtest2";
import TestFetch from "./fetchdata";


export default function Testing() {
    return(
        <main>
        <ComponentNavbar />
        <CardTest2 />
        <TestFetch />
        <HorizontalCard />
        <CardWithFormInputs />
        
        </main>
    )
}

