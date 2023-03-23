import Image from "next/image";

// Images
import house from "../../../public/images/house.svg";
import house1 from "../../../public/images/house1.svg";
import banner from "../../../public/images/banner.png";
import bannerCloud from "../../../public/images/bannerCloud.svg";

import { FormEnum } from '../../models/index'

// Styles
import {
  Container,
  Section,
  PagePadding,
  HeroIntro,
  IntroMovie,
  IntroContent,
  IntroHeader,
  UiIntroHeader,
  UiIntroSection
} from "./styles";

import { Form, Input } from "antd";

const Hero = () => {
  const [form] = Form.useForm()


  const onFinish = async () => {
    try {
    } catch (error: any) {
    } finally {
    }
  }

  return (
    <>
      <Section>
        <PagePadding>
          <Container>
            <HeroIntro>
              <Image
                style={{ position: "absolute", left: "-135px", top: "245px", zIndex: -1 }}
                src={bannerCloud}
                alt="banner"
                width={181.83}
                height={65.49}
              />

              <IntroMovie >
                <PagePadding>
                  <Container>
                    <svg
                      width="256"
                      height="255"
                      viewBox="0 0 256 255"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="127.931"
                        cy="127.189"
                        r="126.689"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        d="M189.878 111.453C201.991 118.447 201.991 135.93 189.878 142.924L110.592 188.7C98.4784 195.694 83.3369 186.952 83.3369 172.965L83.3369 81.4124C83.3369 67.4253 98.4785 58.6833 110.592 65.6769L189.878 111.453Z"
                        fill="#FAEC57"
                      />
                    </svg>
                  </Container>
                </PagePadding>
              </IntroMovie>

              <IntroContent>
                <PagePadding>
                  <Container>
                    <IntroHeader>
                      <Image
                        style={{ position: "absolute", right: "250px", top: "200px", zIndex: -1 }}
                        src={bannerCloud}
                        alt="banner"
                        width={181.83}
                        height={65.49}
                      />

                      <h1>
                        Reinvente seu jeito de <strong>morar.</strong>
                      </h1>
                      <div>
                        <p>
                          Soluções para condomínios na palma da sua mão! Com
                          Waiuru você encontra soluções integradas, modernas e
                          práticas.
                        </p>

                        <br />
                        <p>
                          Com nosso APP você tem controle total da administração
                          do seu condomínio. Seja você morador, síndico ou
                          administrador, a Waiuru lhe garante praticidade e
                          comodidade a todo momento
                        </p>
                      </div>
                    </IntroHeader>
                  </Container>
                </PagePadding>
              </IntroContent>

              <Image
                style={{ position: "absolute", left: 0, bottom: "-15rem" }}
                src={house}
                alt="banner"
                width={696}
                height={269.76}
              />

              <Image
                style={{ position: "absolute", right: 0, bottom: "-15rem" }}
                src={house1}
                alt="banner"
                width={521.54}
                height={315}
              />
            </HeroIntro>

            <HeroIntro className="UiHeroIntro">
              <UiIntroHeader>
                <h1>
                  Demo <strong>gratuita</strong>
                </h1>
                <div>
                  <p>
                    Faça parte do mundo waiuru, e descubra um universos de
                    benefícios. Faça um teste Já!
                  </p>
                </div>
              </UiIntroHeader>

              <UiIntroSection>
                <Image src={banner} alt="banner" width={727} height={754} />
                <Form form={form} layout="vertical" onFinish={onFinish} scrollToFirstError={true}>
                  <Form.Item
                    name="name"
                    label={FormEnum.name}
                  >
                    <Input maxLength={99} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label={FormEnum.email}
                  >
                    <Input maxLength={99} />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label={FormEnum.phone}
                  >
                    <Input maxLength={99} />
                  </Form.Item>
                  <Form.Item
                    name="condominium"
                    label={FormEnum.condominium}
                  >
                    <Input maxLength={99} />
                  </Form.Item>
                </Form>
              </UiIntroSection>
            </HeroIntro>
          </Container>
        </PagePadding>
      </Section>
    </>
  );
};

export default Hero;
