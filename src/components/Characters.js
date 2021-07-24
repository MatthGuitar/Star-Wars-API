import React from 'react'
import { Card, Grid, Container } from 'semantic-ui-react'
import Style from '../style/Characters.module.css'

const Characters = ({ data }) => {
  return (
    <section className={Style.bg}>
      <Container>
        <h1 className={Style.title}>Planets</h1>
        <Grid columns={3}>
          {data.map((planets, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content style={{ 
                  backgroundColor: "#000", padding: "25px 20px" }}>
                    <Card.Header style={{
                     color: "#f3dc0b",
                     fontSize: "2em",
                     paddingBottom: "5px" }}>{planets.name}</Card.Header>
                    <Card.Description>
                      <h2>Climate</h2>
                      <p>{planets.climate}</p>
                      <h2>Diameter</h2>
                      <p>{planets.diameter}</p>
                      <h2>Population</h2>
                      <p>{planets.population}</p>
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

export default Characters