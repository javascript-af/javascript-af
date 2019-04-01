import React from 'react';
import styled, { ThemeProvider } from '../lib/styled-components';
import { Typography } from '../components/Typography';
import { TalkPreviewCard } from '../components/Card';
import { Wrapper } from '../components/Page';
import { theme, MONO_FAMILY } from '../components/shared';
import { Button } from '../components/Button';

const MainPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 1rem;
`;

const TalkPage = () => {
  const [shown, setShown] = React.useState(false);

  return (
    <ThemeProvider theme={{ ...theme, maxWidth: '1500px' }}>
      <Wrapper>
        <MainPageGrid>
          <div>
            <Typography mt={0} variant="h1" fontWeight="normal">
              We all started somewhere
            </Typography>
            <div
              css="
          position: relative;
          height: 0px;
          padding-top: 25px;
          padding-bottom: 56.25%;
        "
            >
              <iframe
                css="
              position: absolute;
              top: 0px;
              left: 0px;
            "
                title="We all started somewhere"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/maykR0aVsj8"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div
              css="
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            "
            >
              <div>
                <Typography
                  color="blue"
                  fontFamily={MONO_FAMILY}
                  variant="h4"
                  as="a"
                  cursor="pointer"
                >
                  #PERSONAL{' '}
                </Typography>
                <Typography
                  color="blue"
                  fontFamily={MONO_FAMILY}
                  variant="h4"
                  as="a"
                  cursor="pointer"
                >
                  #LIFE{' '}
                </Typography>
              </div>
              <Typography variant="h3" m={0}>
                3 mins
              </Typography>
            </div>
            <div
              css={`
                max-width: 75%;
                margin-top: 1.5rem;
                max-height: ${!shown ? '3rem' : 'auto'};
                overflow: hidden;
              `}
            >
              <Typography lineHeight="1.5rem" fontWeight={500}>
                Over the last three years, I’ve spoken to hundreds of React
                Native developers, and slowly a picture emerges. It’s a picture
                of excitement and frustration, obsession with technology and
                pushing the boundaries. It’s a picture of you. This talk will
                blend meticulous research, subjective personal experiences and
                speculative fiction to discover the core of that elusive
                Developer Experience, and ask the inconvenient questions you’ve
                always been afraid to ask.
              </Typography>
            </div>
            <Button
              m={0}
              as="span"
              color="rgba(17,17,17,0.6)"
              fontSize="13px"
              padding="0"
              variant="text"
              onClick={() => {
                setShown(!shown);
              }}
            >
              SHOW MORE
            </Button>
          </div>
          <div
            css="
            padding: 2rem;
            padding-top: 5rem;
           "
          >
            <TalkPreviewCard
              heading="This is a Talk About You!"
              image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_300,h_180/v1548865147/esoplan_production/ab5h8vakgjumpbwjznrd.png"
              tags={['react', 'personal']}
              avatar={{
                name: 'Jani Evakallio',
                image:
                  'https://pbs.twimg.com/profile_images/1074414240088449030/fAbT29ic_400x400.jpg',
              }}
            />
            <TalkPreviewCard
              heading="React testing library"
              image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_300,h_180/v1550943805/Screenshot_2019-02-23_at_11.12.47_PM.png"
              tags={['react', 'testing']}
              avatar={{
                name: 'Kent C Dodds',
                image:
                  'https://pbs.twimg.com/profile_images/1074414240088449030/fAbT29ic_400x400.jpg',
              }}
            />
            <TalkPreviewCard
              heading="This is a Talk About You!"
              image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_300,h_180/v1548865147/esoplan_production/ab5h8vakgjumpbwjznrd.png"
              tags={['react', 'personal']}
              avatar={{
                name: 'Jani Evakallio',
                image:
                  'https://pbs.twimg.com/profile_images/1074414240088449030/fAbT29ic_400x400.jpg',
              }}
            />
            <TalkPreviewCard
              heading="This is a Talk About You!"
              image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_300,h_180/v1548865147/esoplan_production/ab5h8vakgjumpbwjznrd.png"
              tags={['react', 'personal']}
              avatar={{
                name: 'Jani Evakallio',
                image:
                  'https://pbs.twimg.com/profile_images/1074414240088449030/fAbT29ic_400x400.jpg',
              }}
            />
            <TalkPreviewCard
              heading="This is a Talk About You!"
              image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_300,h_180/v1548865147/esoplan_production/ab5h8vakgjumpbwjznrd.png"
              tags={['react', 'personal']}
              avatar={{
                name: 'Jani Evakallio',
                image:
                  'https://pbs.twimg.com/profile_images/1074414240088449030/fAbT29ic_400x400.jpg',
              }}
            />
          </div>
        </MainPageGrid>
      </Wrapper>
    </ThemeProvider>
  );
};

export default TalkPage;