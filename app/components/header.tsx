import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/next.svg"
const headerLinks = [{
    id: 1,
    href: '/',
    name: 'About'
},{
    id: 2,
    href: '/',
    name: 'Contact'
},{
    id: 3,
    href: '/',
    name: 'Services'
}]
 const Header = () => {
    return (
    <header className="flex flex-col justify-between m-auto md:flex-row px-4 py-4">
        <Image className="flex-row m-auto md:m-0 py-4" src={Logo} alt="A black logo that says Next.js" height={80} width={100}/>
        <nav className="flex-row m-auto md:m-0 py-4 space-x-4 font-semibold text-lg">
           {headerLinks.map((link)=>(
            <Link key={link.id} href={link.href}>{link.name}</Link>
           ))} 
            
        </nav>
    </header>
    )
 }  

export default Header 