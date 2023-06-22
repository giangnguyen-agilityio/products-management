import React from 'react'
import Loading from '@components/commons/LoadingIndicator'
import Typography from '@components/commons/Typography'

const LoadingPage = (): JSX.Element => {
  return (
    <div className="page-loading">
      <Loading isLoading={true} />
      <Typography className="loading-text" variant={'h2'}>
        The website is loading ...
      </Typography>
    </div>
  )
}

export default LoadingPage
