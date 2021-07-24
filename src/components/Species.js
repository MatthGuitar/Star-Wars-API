import React from 'react'
import { Card, Grid, Container } from 'semantic-ui-react'
import Style from '../style/Species.module.css'

const Species = ({data}) => {
  return (
    <section className={Style.bg}>
      <Container>
        <h1 className={Style.title}>Species</h1>
        <Grid columns={3}>
          {data.map((species, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content style={{ 
                  backgroundColor: "#000", padding: "25px 20px" }}>
                    <Card.Header style={{
                     color: "#f3dc0b",
                     fontSize: "2em",
                     paddingBottom: "5px" }}>{species.name}</Card.Header>
                    <Card.Description>
                      <h2>Average Height</h2>
                      <p>{species.average_height} Cm</p>
                      <h2>Average Lifespan</h2>
                      <p>{species.average_lifespan}</p>
                      <h2>Language</h2>
                      <p>{species.language}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            )
          })}

        </Grid>
      </Container>
    </section>
  )
}

export default Species
