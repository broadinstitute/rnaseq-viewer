import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import IGV from './IGV'
import UserInfo from './UserInfo'

const StyledDiv = styled.div`
  padding: 10px 20px;
`

const SIDE_BAR_WIDTH = 210

export default () => (
  <StyledDiv>
    <Grid>
      <Grid.Row>
        <Grid.Column width={2} style={{ minWidth: `${SIDE_BAR_WIDTH}px` }}>
          <LeftSideBar />
        </Grid.Column>
        <Grid.Column style={{ minWidth: '800px', width: `calc(100% - ${2*SIDE_BAR_WIDTH}px)` }}>
          <IGV />
          <UserInfo />
        </Grid.Column>
        <Grid.Column width={2} style={{ minWidth: `${SIDE_BAR_WIDTH}px` }}>
          <RightSideBar />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </StyledDiv>
)
