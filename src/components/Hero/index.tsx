import Image from "next/image";

import house from "../../../public/images/house.svg"
import house1 from "../../../public/images/house1.svg"


// Styles
import { Container, HomeHero, PagePadding, HeroIntro, IntroMovie, IntroContent, IntroHeader } from "./styles";

const Hero = () => {
    return (
        <HomeHero>
            <PagePadding>
                <Container>
                    <HeroIntro>
                        <IntroMovie>
                            <PagePadding>
                                <Container>
                                    <svg width="256" height="255" viewBox="0 0 256 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="127.931" cy="127.189" r="126.689" fill="white" stroke="black" />
                                        <path d="M189.878 111.453C201.991 118.447 201.991 135.93 189.878 142.924L110.592 188.7C98.4784 195.694 83.3369 186.952 83.3369 172.965L83.3369 81.4124C83.3369 67.4253 98.4785 58.6833 110.592 65.6769L189.878 111.453Z" fill="#FAEC57" />
                                    </svg>
                                </Container>
                            </PagePadding>
                        </IntroMovie>

                        <IntroContent>
                            <PagePadding>
                                <Container>
                                    <IntroHeader>
                                        <h1>Reinvente seu jeito de <strong>morar.</strong></h1>
                                        <div>
                                            <p>
                                                Soluções para condomínios na palma da sua mão! Com Waiuru você encontra soluções integradas, modernas e práticas.
                                            </p>

                                            <br />
                                            <p>
                                                Com nosso APP você tem controle total da administração do seu condomínio. Seja você morador, síndico ou administrador, a Waiuru lhe garante praticidade e comodidade a todo momento
                                            </p>
                                        </div>
                                    </IntroHeader>
                                </Container>
                            </PagePadding>
                        </IntroContent>
                    </HeroIntro>
                    <Image
                        style={{ position: "absolute", left: 0 }}
                        src={house}
                        alt="banner"
                        width={696}
                        height={355}
                    />

                    <Image
                        style={{ position: "absolute", right: 0 }}
                        src={house1}
                        alt="banner"
                        width={500}
                        height={315}
                    />
                </Container>
            </PagePadding>
        </HomeHero>
    )
}

export default Hero;