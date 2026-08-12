import React from 'react'
import HomeBreadcrum from '../../Components/HomeBreadcrum/HomeBreadcrum'
import Brand from '../../Components/Brand/Brand'
import TradingPlatform from '../../Components/TradingPlatform/TradingPlatform'
import Newsline from '../../Components/Newsline/Newsline'
import Trading from '../../Components/Trading/Trading'
import Counting from '../../Components/Counting/Counting'
import Tradingaccount from '../../Components/Tradingaccount/Tradingaccount'
import Exprerience from '../../Components/Exprerience/Exprerience'
import Globallyawarded from '../../Components/Globallyawarded/Globallyawarded'
import Downloadapp from '../../Components/Downloadapp/Downloadapp'
import Latestnews from '../../Components/Latestnews/Latestnews'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Homefaq from '../../Components/Homefaq/Homefaq'

const Home = () => {
  return (
    <div>
        <HomeBreadcrum/>
        <Brand/>
        <TradingPlatform/>
        <Newsline/>
        <Trading/>
        <Counting/>
        <Tradingaccount/>
        <Exprerience/>
        <Globallyawarded/>
        <Homefaq/>
        <Downloadapp/>
        <Latestnews/>
        <Subscribe/>
    </div>
  )
}

export default Home