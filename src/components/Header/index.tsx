import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Translate
import { useTranslation } from "react-i18next";

// Styles
import { Container, Logo, Nav, NavInner, PagePadding, Actions, CustomSelect } from "./styles";

// Images
import logo from "../../../public/images/logo.svg"
import en from "../../../public/images/en.png"
import pt from "../../../public/images/br.png"

import { Button } from "antd"
import { signIn } from "next-auth/react";

const Header = () => {
    const [navbar, setNavBar] = useState(false);
    const [languageSelected, setLanguageSelected] = useState("pt");
    const { t, i18n } = useTranslation();

    const handleChangeLng = (lng: string) => {
        setLanguageSelected(lng);
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
    };

    const handleChangeBackground = () => {
        setNavBar(window.scrollY >= 80);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleChangeBackground);
        const item = `${localStorage.getItem('i18nextLng')}`;
        setLanguageSelected(item);
    }, []);

    return (
        <Nav className={navbar ? `${"navActive"}` : `${"nav"}`}>
            <PagePadding>
                <Container>
                    <NavInner>
                        <Logo>
                            <Link href={"/#"}>
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                />
                                <p>Waiuru</p>
                            </Link>
                        </Logo>
                        <Actions>
                            <Button
                                name="Login"
                                className="btnLogin"
                                onClick={(e) => {
                                    e.preventDefault()
                                    signIn()
                                }}>
                                <Link href={`/api/auth/signin`}>
                                    Login
                                </Link>
                            </Button>
                            <Button name="Login" className="btnList">
                                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.28859" y1="-1.28859" x2="21.4117" y2="-1.28859" transform="matrix(-1 0 0 1 22.8438 3)" stroke="white" strokeWidth="2.57719" strokeLinecap="round" />
                                    <line x1="1.28859" y1="-1.28859" x2="11.543" y2="-1.28859" transform="matrix(-1 0 0 1 12.9766 10.7314)" stroke="white" strokeWidth="2.57719" strokeLinecap="round" />
                                    <line x1="1.28859" y1="-1.28859" x2="16.0288" y2="-1.28859" transform="matrix(-1 0 0 1 17.4531 18.4629)" stroke="white" strokeWidth="2.57719" strokeLinecap="round" />
                                </svg>
                            </Button>
                            <CustomSelect>
                                <Image
                                    src={languageSelected === "pt" ? pt : en}
                                    alt="Logo"
                                    width={30}
                                    height={30}
                                />
                                <select onChange={(event) => handleChangeLng(event.target.value)}>
                                    <option className={languageSelected === "pt" ? `${"btnActive"}` : `${"btnLng"}`} value={"pt"} aria-label="Português">Português</option>
                                    <option className={languageSelected === "en" ? `${"btnActive"}` : `${"btnLng"}`} value={"en"} aria-label="English">Inglês</option>
                                </select>
                            </CustomSelect>
                        </Actions>
                    </NavInner>
                </Container>
            </PagePadding>
        </Nav>
    )
}

export default Header;