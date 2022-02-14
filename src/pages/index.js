import * as React from "react"
import "../styles/index.scss";
import rich from "../images/rich.png";
import {Grid, Row, Col } from "react-flexbox-grid";
import {Tab, Tabs} from "@blueprintjs/core";

const IndexPage = () => {
  return (
    <main >
      <title>Projects by Rich</title>
        <Grid fluid={true} id={"header-container"}>
            <Row id={"header-row"}>
                <Col xs={9}>
                    <img id="profile-image" src={rich} />
                </Col>
                <Col xs={3}>
                    <Grid fluid={true} >
                        <Tabs id="TabsExample"  selectedTabId="rx">
                            <Tab id="ng" title="Angular" panel={<div />} />
                            <Tab id="mb" title="Ember" panel={<div />} panelClassName="ember-panel" />
                            <Tab id="rx" title="React" panel={<div />} />
                            <Tab id="bb" disabled title="Backbone" panel={<div />} />
                            <Tabs.Expander />
                            <input className="bp3-input" type="text" placeholder="Search..." />
                        </Tabs>
                    </Grid>
                </Col>
            </Row>
        </Grid>
      <h1>

      </h1>

    </main>
  )
}

export default IndexPage
