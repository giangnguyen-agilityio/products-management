import React from 'react'

// Importing the Loading and Typography components
import Loading from '@components/LoadingIndicator'
import Typography from '@components/Typography'

const LoadingPage = (): JSX.Element => {
  return (
    <div className="page-loading">
      <Loading isLoading={true} />
      <Typography variant={'h2'}>The website is loading ...</Typography>
    </div>
  )
}

export default LoadingPage
