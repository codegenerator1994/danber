import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

import GoalCard from "../component/GoalCard";
import TeamCard from "../component/TeamCard";

import { StyledTypography } from "../../../styles";

import CEOTextImg from "../../../assets/images/ceo_text_img.png";
import CEOImg from "../../../assets/images/DAngello.png";
import BPImg from "../../../assets/images/Britni.png";
import AMImg from "../../../assets/images/Pratibha.png";
import HRImg from "../../../assets/images/Bushra.png";
import HMImg from "../../../assets/images/Priyanca.png";
import PMImg from "../../../assets/images/Mohammad.png";
import DMImg from "../../../assets/images/Emmanuel.png";
import SSMImg from "../../../assets/images/Akhilesh.png";

const Describe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:430px)");

  return (
    <Box
      sx={{
        width: "100%",
        ...theme.container,
        flexDirection: "column",
        gap: isMobile ? "30px" : 15,
        background: "#F6F6F6",
      }}
    >
      <Box
        sx={{
          px: isMobile ? "10px" : "102px",
          width: "100%",
          ...theme.container,
          gap: isMobile ? "20px" : 4,
          alignItems: "stretch",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box
          sx={{
            padding: isMobile ? "21px 29px" : "64px 29px",
            borderRadius: "24px",
            flex: 1,
            background: "black",
            ...theme.container,
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            textAlign: isMobile ? "center" : "unset",
          }}
        >
          <StyledTypography
            fontSize={"2.5rem"}
            fontWeight={700}
            lineHeight={"24px"}
            color={"white"}
          >
            Our Mission
          </StyledTypography>
          <StyledTypography
            fontSize={"1rem"}
            fontWeight={400}
            lineHeight={"30px"}
            color={"white"}
          >
            To empower and enhance the way people live in this world by creating
            innovative solutions driven by passion and creativity in order to
            make a meaningful impact on the future by embracing the present.
          </StyledTypography>
        </Box>
        <Box
          sx={{
            padding: isMobile ? "21px 29px" : "64px 29px",
            borderRadius: "24px",
            flex: 1,
            ...theme.container,
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            textAlign: isMobile ? "center" : "unset",
          }}
        >
          <StyledTypography
            fontSize={"2.5rem"}
            fontWeight={700}
            lineHeight={"24px"}
            color={"black"}
          >
            Our Vision
          </StyledTypography>
          <StyledTypography
            fontSize={"1rem"}
            fontWeight={400}
            lineHeight={"30px"}
            color={"black"}
          >
            To be a forward-thinking technology company dedicated to delivering
            innovative solutions that empower businesses, communities, and
            individuals. We are committed to excellence, integrity, and making a
            positive impact on the world through technological advancement.
          </StyledTypography>
        </Box>
      </Box>
      <Box sx={{ px: isMobile ? "10px" : "189px" }}>
        <StyledTypography
          fontSize={"3rem"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
          mb={6}
          textAlign={"center"}
        >
          Our Goals
        </StyledTypography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "minmax(0, 1fr)"
              : "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 3,
          }}
        >
          <GoalCard
            title={"Impactful Solutions"}
            description={
              "Develop products and services that directly address pressing global issues and enhance people's lives significantly."
            }
            bgColor={"white"}
          />
          <GoalCard
            title={"Customer-Centric Approach"}
            description={
              "Continuously improve customer satisfaction by actively listening to customer feedback and adapting solutions accordingly."
            }
            bgColor={"#8F8F8F1A"}
          />
          <GoalCard
            title={"Global Reach"}
            description={
              "Develop products and services that directly address pressing global issues and enhance people's lives significantly."
            }
            bgColor={"#8F8F8F1A"}
          />
          <GoalCard
            title={"Community Engagement"}
            description={
              "Actively engage with the local and global communities through social initiatives and volunteer work."
            }
            bgColor={"white"}
          />
        </Box>
      </Box>
      <Box sx={{ px: isMobile ? "10px" : "137px" }}>
        <StyledTypography
          fontSize={"3rem"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
          mb={isMobile ? "20px" : 6}
          textAlign={"center"}
        >
          Message from the CEO
        </StyledTypography>
        <Box
          sx={{
            background: `url(${CEOTextImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: isMobile ? "30px 40px" : "56px 80px",
            borderRadius: "32px",
            ...theme.container,
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          <StyledTypography
            fontWeight={400}
            fontSize={"1.25rem"}
            lineHeight={"30px"}
            color={"white"}
          >
            Our mission is to transform your vision into reality through
            innovative and reliable technology solutions. As the CEO, I am
            deeply committed to fostering a culture of excellence, integrity,
            and trust.
          </StyledTypography>
          <StyledTypography
            fontWeight={400}
            fontSize={"1.25rem"}
            lineHeight={"30px"}
            color={"white"}
          >
            Our team comprises of passionate professionals dedicated to
            delivering the highest quality of service and exceeding your
            expectations. We understand that technology is the backbone of
            modern business, and we take pride in being your trusted partner in
            navigating the complexities of the digital world.
          </StyledTypography>
          <StyledTypography
            fontWeight={400}
            fontSize={"1.25rem"}
            lineHeight={"30px"}
            color={"white"}
          >
            We are not just a service provider; we are an extension of your
            team. Our approach is collaborative, ensuring that we understand
            your unique challenges and goals. By combining our expertise with
            your vision, we create solutions that drive success and propel your
            business forward.
          </StyledTypography>
          <StyledTypography
            fontWeight={400}
            fontSize={"1.25rem"}
            lineHeight={"30px"}
            color={"white"}
          >
            We value transparency, reliability, and long-term partnerships. Our
            reputation is built on delivering consistent results and maintaining
            open, honest communication with our clients. We are here to support
            you every step of the way, providing innovative solutions that are
            tailored to your specific needs.
          </StyledTypography>
          <StyledTypography
            fontWeight={400}
            fontSize={"1.25rem"}
            lineHeight={"30px"}
            color={"white"}
          >
            Thank you for considering us as your technology partner. We look
            forward to the opportunity to work with you and achieve remarkable
            success together.
          </StyledTypography>
          <Box sx={{ textAlign: "right", width: "100%" }}>
            <StyledTypography
              fontWeight={700}
              fontSize={"1.525rem"}
              lineHeight={"29.28px"}
              color={"white"}
              mb={1}
            >
              D'Angello Brevett
            </StyledTypography>
            <StyledTypography
              fontWeight={400}
              fontStyle={"italic"}
              fontSize={"1.22rem"}
              lineHeight={"29.28px"}
              color={"white"}
              mb={1}
            >
              Chief Executive Officer
            </StyledTypography>
            <StyledTypography
              fontWeight={600}
              fontSize={"1.22rem"}
              lineHeight={"29.28px"}
              color={"white"}
            >
              Danber Technologies
            </StyledTypography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: isMobile ? "10px" : "328px" }}>
        <StyledTypography
          fontSize={"3rem"}
          fontWeight={600}
          lineHeight={"24px"}
          color={"black"}
          mb={2.5}
          textAlign={"center"}
        >
          Our Leadership Team
        </StyledTypography>
        <StyledTypography
          fontSize={"1.25rem"}
          fontWeight={400}
          lineHeight={"30px"}
          color={"black"}
          mb={isMobile ? "20px" : 7}
          textAlign={"center"}
        >
          We are dedicated professionals with diverse backgrounds and extensive
          expertise in technology, management, and innovation. Led by our
          visionary CEO, <b> D'Angello Brevett,</b> our team is committed to
          driving excellence and delivering cutting-edge solutions to our
          clients.
        </StyledTypography>
        <Box
          sx={{
            ...theme.container,
            flexDirection: "column",
            gap: isMobile ? "20px" : 3,
            width: "100%",
          }}
        >
          <Box
            sx={{
              ...theme.container,
              gap: isMobile ? "20px" : 3,
              width: "100%",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <TeamCard
              img={CEOImg}
              name={"D'Angello Brevett"}
              role={"Chief Executive Officer"}
            />
            <TeamCard
              img={BPImg}
              name={"Britni Tracey-Brevett"}
              role={"Vice President, Business Operations"}
            />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "minmax(0, 1fr)"
                : "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
              gap: isMobile ? "20px" : 3,
            }}
          >
            <TeamCard
              img={AMImg}
              name={"Pratibha Gunjal"}
              role={"Accounting Manager"}
            />
            <TeamCard
              img={HRImg}
              name={"Bushra Afzal"}
              role={"Human Resources Manager"}
            />
            <TeamCard
              img={HMImg}
              name={"Priyanca Saini"}
              role={"Head of Marketing"}
            />
            <TeamCard
              img={PMImg}
              name={"Mohammad Ahsan"}
              role={"Project Manager and QA Engineer"}
            />
            <TeamCard
              img={DMImg}
              name={"Emmanuel Wogundu"}
              role={"Project & Design Manager"}
            />
            <TeamCard
              img={SSMImg}
              name={"Akhilesh Mourya"}
              role={"Senior SWE Manager"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Describe;
