import React, {useContext, useMemo} from 'react'
import Table from '@components/Table'
import Typography from '@components/commons/Typography'
import {COLUMNS} from '@constants'
import HireRequestsContext from '@stores/hire-request/HireRequestsContext'
import {IHireRequest} from '@types'
import {formatDate, getItemInLocalStorage} from '@helpers'

import '../HireRequestManagement/hire-request.css'

const HireRequestSent: React.FC = () => {
  const {hireRequestState} = useContext(HireRequestsContext)
  const memberId: string = getItemInLocalStorage('memberId')
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
