import MegaMenus from "./MegaMenus";
import NavbarEl from "./NavbarEl";

export default function Header(props) {
    return(
        <>
        <div className="container-fluid">
        <NavbarEl />
        <MegaMenus />
        </div>
        </>
        


    );

}