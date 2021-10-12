import * as React from 'react';
import CardMu from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';

const Card = ({ data }) => {
  const { url, description, likes, id } = data;

  return (
    <Grid item xs={6} md={4}>
      <StyledCard>
        <CardMedia component="img" height="140" image={url} alt={description} />
        <Content>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Icon>
            <FavoriteIcon /> <span>{` ${likes}`}</span>
          </Icon>
        </Content>
      </StyledCard>
    </Grid>
  );
};

export default Card;

const StyledCard = styled(CardMu)`
  width: 100%;
  height: 220px;
`;

const Content = styled(CardContent)`
  display: flex;
  padding-top: 16px;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.div`
  align-items: center;
  display: flex;
  & svg {
    fill: red;
  }
`;
