import React from 'react'
import Style from '../style/Home.module.css'
import { Container } from 'semantic-ui-react'


const Home = () => {
  return (
    <section className={Style.bg}>
      <h1 className={Style.intro}>A long time ago in a galaxy far far away....</h1>
      <h1 className={Style.title}>Star Wars</h1>
      <Container className={Style.main_text}>
        <p>
        It is a period of civil wars in the galaxy. A brave alliance of underground freedom fighters
        has challenged the tyranny and oppression of the awesome GALACTIC EMPIRE.
        </p>
        <p>
        Striking from a fortress hidden among the billion stars of the galaxy,
        rebel spaceships have won their first victory in a battle with the powerful Imperial Starfleet.
        The EMPIRE fears that another defeat could bring a thousand more solar systems into the rebellion,
        and Imperial control over the galaxy would be lost forever.
        </p>
        <p>
        To crush the rebellion once and for all, the EMPIRE is constructing a sinister new battle station. 
        Powerful enough to destroy an entire planet, its completion spells certain doom for the champions of freedom.
        </p>
      </Container>
    </section>
  )
}

export default Home
