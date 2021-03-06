import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import Card from '../../components/Card';

import TokenSymbol from '../../components/TokenSymbol';
import useLpStats from '../../hooks/useLpStats';
import { makeStyles } from '@material-ui/core/styles';
import useCashStat from "../../hooks/useCashPriceInEstimatedTWAP.ts"

const useStyles = makeStyles((theme) => ({
    third: {
      width: "50% !important",
      marginLeft: "auto",
      marginRight: "auto"
    },
    fullheight: {
        height: "100% !important"
    },
    "@media only screen and (max-width: 600px)": {
        third: {
            width: "100% !important"
        }
    }
  }));

const CemeteryCard = () => {
  const tombFtmLpStats = useLpStats('NOSNO-USDC-LP');
  const tShareFtmLpStats = useLpStats('NOSNOSHARE-USDC-LP');
  const snoSnoShareLpStats = useLpStats('NOSNO-NOSNOSHARE-LP')
  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const snoSnoShareLPStats = useMemo(() => (snoSnoShareLpStats ? snoSnoShareLpStats : null), [snoSnoShareLpStats])
  const classes = useStyles();
  const snoPrice = useCashStat()
  return (
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
    <Card>
      <CardContent align="center">
          <Typography variant="h5" component="h2">
              NOSNO-USDC-LP
            </Typography>
        <Box mt={1}>
            <TokenSymbol symbol="NOSNO-USDC-LP" />
        </Box>
        <Box mt={2}>
        </Box>
        <Box mt={2}>
          <span style={{ fontSize: '23px' }}>
            {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} NOSNO /{' '}
            {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} USDC
          </span>
        </Box>
        <Box>${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'}</Box>
        <span style={{ fontSize: '12px' }}>
          Liquidity: ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
          Total supply: {tombLPStats?.totalSupply ? tombLPStats.totalSupply : '-.--'}
        </span>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
          <Button color="primary" style={{ width: '150px', height: "45px", marginBottom: '5%' }} variant="contained" component={Link} to={`/farms/SnoJoeLPSnoShareRewardPool/`}>
            Farm
          </Button>
          <Button color="primary" target="_blank" style={{ width: '150px', height: "45px", marginBottom: '5%' }} variant="contained" href="https://traderjoexyz.com/pool/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd">
              Add Liquidity
            </Button>
        </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent align="center">
            <Typography variant="h5" component="h2">
            NOSNOSHARE-USDC-LP
              </Typography>
          <Box mt={1}>
              <TokenSymbol symbol="NOSNOSHARE-USDC-LP" />
          </Box>
          <Box mt={2}>
          </Box>
          <Box mt={2}>
          <span style={{ fontSize: '23px' }}>
                  {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} NOSNOSHARE /{' '}
                  {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} USDC
                </span>
          </Box>
          <Box>${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply: {tshareLPStats?.totalSupply ? tshareLPStats.totalSupply : '-.--'}
              </span>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
            <Button color="primary" style={{ width: '150px', height: "45px", marginBottom: '5%' }} variant="contained" component={Link} to={`/farms/SnoShareJoeLPSnoShareRewardPool/`}>
              Farm
            </Button>
            <Button color="primary" target="_blank" style={{ width: '150px', height: "45px", marginBottom: '5%' }} variant="contained" href="https://traderjoexyz.com/pool/0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd" >
              Add Liquidity
            </Button>
          </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Card>
        <CardContent align="center">
            <Typography variant="h5" component="h2">
            NOSNO-NOSNOSHARE-LP
              </Typography>
          <Box mt={1}>
              <TokenSymbol symbol="NOSNO-NOSNOSHARE-LP" />
          </Box>
          <Box mt={2}>
          </Box>
          <Box mt={2}>
          <span style={{ fontSize: '23px' }}>
                  {snoSnoShareLPStats?.ftmAmount ? snoSnoShareLPStats?.ftmAmount : '-.--'} NOSNO /{' '}
                  {snoSnoShareLPStats?.tokenAmount ? snoSnoShareLPStats?.tokenAmount : '-.--'} NOSNOSHARE
                </span>
          </Box>
          <Box>${snoSnoShareLPStats?.priceOfOne ? snoSnoShareLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${snoSnoShareLPStats?.totalLiquidity ? snoSnoShareLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply: {snoSnoShareLPStats?.totalSupply ? snoSnoShareLPStats.totalSupply : '-.--'}
              </span>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
            <Button color="primary" style={{ width: '150px', height: "45px", marginBottom: '5%' }} variant="contained" component={Link} to={`/farms/SnoSnoShareLPSnoShareRewardPool/`}>
              Farm
            </Button>
            <Button color="primary" target="_blank" style={{ width: '150px', height: "45px", marginBottom: '5%' }} variant="contained" href="https://traderjoexyz.com/pool/0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D/0xe7A102Fbc8AB3581d62830DdB599eCCaae5e7875" >
              Add Liquidity
            </Button>
          </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Card>
        <CardContent align="center">
            <Typography variant="h5" component="h2">
            NOSNO
              </Typography>
          <Box mt={1}>
              <TokenSymbol symbol="NOSNO" />
          </Box>
          <Box mt={2}>
              SINGLE STAKE
          </Box>
          <Box>${snoPrice?.priceInDollars ? snoPrice?.priceInDollars : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Circulating Supply: ${snoPrice?.circulatingSupply ? snoPrice?.circulatingSupply : '-.--'}
                <br />
                Total supply: {snoPrice?.totalSupply ? snoPrice.totalSupply : '-.--'}
              </span>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
            <Button color="primary" style={{ width: '150px', height: "45px", marginBottom: '5%' }} variant="contained" component={Link} to={`/farms/SnoSnoShareRewardPool/`}>
              Farm
            </Button>
            <Button color="primary" target="_blank" style={{ width: '150px', height: "45px", marginBottom: '5%' }} variant="contained" href="https://traderjoexyz.com/trade?inputCurrency=0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd&outputCurrency=0x1fE4869f2C5181b9CD780a7E16194FA2c4C4293D" >
              Buy NOSNO
            </Button>
          </CardActions>
      </Card>
      </Grid>
      </Grid>
  );
};

export default CemeteryCard;
