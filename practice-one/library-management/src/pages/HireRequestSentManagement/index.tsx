import React, {useContext, useMemo} from 'react'

// Importing the Table and Typography components
import Table from '@components/Table'
import Typography from '@components/Typography'

// Importing the constants
import {COLUMNS} from '@constants'

// Importing the Hire request context
import HireRequestsContext from '@stores/hire-request/HireRequestsContext'

// Importing the Hire request type
import {IHireRequest} from '@types'

// Importing the helper function
import {formatDate, getItemInLocalStorage} from '@helpers'

const HireRequestSent: React.FC = () => {
  // Context hooks to retrieve hire request data and dispatch new hire requests
  const {hireRequestState} = useContext(HireRequestsContext)

  const memberId = getItemInLocalStorage('memberId')

  // Array of all hire requests stored in state
  const allHireRequests: IHireRequest[] = hireRequestState.hireRequests

  // Map over the hire requests and format the fromDate and toDate fields
  const formattedHireRequestsData = useMemo(
    () =>
      allHireRequests
        .map(hireRequest => ({
          ...hireRequest,
          fromDate: formatDate(hireRequest.fromDate),
          toDate: formatDate(hireRequest.toDate),
        }))
        .filter(hireRequest => hireRequest.memberId === memberId),
    [allHireRequests, memberId]
  )

  return (
    <section className="hire-request-section">
      <Typography variant={'h2'} className="hire-request-title">
        hire book requests
      </Typography>
      <Table data={formattedHireRequestsData} columns={COLUMNS} />
    </section>
  )
}

export default HireRequestSent
