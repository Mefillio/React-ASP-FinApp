import React from 'react'
import Card from '../Card/Card'


interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
        <Card companyName="Apple" ticker="APPL" price={110} />
        <Card companyName="Microsoft" ticker="MSFT" price={200} />
        <Card companyName="Google" ticker="GOOGL" price={150} />
    </div>
  )
}

export default CardList