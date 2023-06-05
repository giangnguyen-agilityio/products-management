import React, { useContext } from 'react'
import Table from '../../components/Table/index'
import Typography from '../../components/Typography/index'
import { COLUMNS } from '../../constants/hire-request'
import './hire-request.css'
import HireRequestsContext from '../../store/hire-request/HireRequestsContext'
import { type HireRequest } from '../../types/hireRequest'
import { formatDate } from '../../helpers/format-date'

const HireRequestPage: React.FC = () => {
  const { state } = useContext(HireRequestsContext)
  const allHireRequests: HireRequest[] = state.hireRequests

  const handleEdit = (id: string): void => {
    window.alert(id)
  }

  const handleDelete = (id: string): void => {
    window.alert(id)
  }

  const handleToggleCompletion = (id: string): void => {
    window.alert(id)
  }
  // Map over the hire requests and format the fromDate and toDate fields
  const formattedHireRequestsData = allHireRequests.map((hireRequest) => ({
    ...hireRequest,
    fromDate: formatDate(hireRequest.fromDate),
    toDate: formatDate(hireRequest.toDate)
  }))

  return (
    <section className="hire-request-section">
      <Typography variant={'h2'} className="hire-request-title">
        book hire request
      </Typography>
      <Table
        data={formattedHireRequestsData}
        columns={COLUMNS}
        onToggleCompletion={handleToggleCompletion}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </section>
  )
}

export default HireRequestPage
