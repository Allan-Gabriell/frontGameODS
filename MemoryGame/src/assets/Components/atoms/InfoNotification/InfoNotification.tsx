import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'

import { toast, type ToasterProps } from 'sonner'
import { ToastWrapper } from './style' 

type IconType = 'success' | 'info' | 'warning' | 'error'

const getIcon = (type: IconType) => {
  switch (type) {
    case 'success':
      return <CheckCircleOutlineOutlinedIcon />
    case 'info':
      return <InfoOutlinedIcon />
    case 'warning':
      return <ReportProblemOutlinedIcon />
    case 'error':
      return <ErrorOutlineOutlinedIcon />
    default:
      return null
  }
}

export const InfoNotification = (
  type: IconType,
  message: string,
  options?: ToasterProps
) => {
  toast.custom(
    () => (
      <ToastWrapper type={type}>
        {getIcon(type)}
        <span>{message}</span>
      </ToastWrapper>
    ),
    { duration: 2000, position: 'top-center', ...options }
  )
}
