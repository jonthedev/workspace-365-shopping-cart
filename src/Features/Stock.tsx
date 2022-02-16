import React, { Fragment, ReactElement } from 'react'
import OutOfStock from '../Components/Cart/OutOfStock'
import Error from '../Components/UI/Error'
import Loading from '../Components/UI/Loading'
import { useStocksContext } from '../context/stocks_context'

export const Stock = (): ReactElement => {
  const { stocks, loading, error } = useStocksContext()

  if (loading) return <Loading />
  if (error) return <Error message='Problem loading stock data..' />

  return (
    <>
      <h2>Current stock &#128230;</h2>
      <div>
        {stocks.map((item: any) => (
          <Fragment key={item.id}>
            <span>{item.name}</span> :{' '}
            <span>
              {item.quantity ? item.quantity : <OutOfStock />}
            </span>
            <br />
          </Fragment>
        ))}
      </div>
    </>
  )
}
Stock.displayName = 'Stock'
