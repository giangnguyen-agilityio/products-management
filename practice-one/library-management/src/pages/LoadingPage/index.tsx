import Loading from '../../components/LoadingIndicator/index'
import Typography from '../../components/Typography/index'
import React from 'react'

const LoadingPage = (): JSX.Element => {
  return (
    <div className="page-loading">
      <Loading isLoading={true} />
      <Typography variant={'h2'}>The website is loading ...</Typography>
    </div>
  )
}

export default LoadingPage
