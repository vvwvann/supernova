// ** React Imports
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart
} from 'react-feather'
import { Icon, InlineIcon } from "@iconify/react"
import bitcoin from "@iconify/icons-mdi/bitcoin"
import ethereum from "@iconify/icons-mdi/ethereum"
import usdtIcon from '@iconify-icons/cryptocurrency/usdt'


// ** Vars
const invoiceStatusObj = {
  Sent: { color: '#f7931b', icon: bitcoin },
  Paid: { color: '#5f658b', icon: ethereum },
  Draft: { color: '#009f74', icon: usdtIcon },
  Downloaded: { color: '#f7931b', icon: bitcoin },
  'Past Due': { color: '#009f74', icon: usdtIcon },
  'Partial Payment': { color: '#5f658b', icon: ethereum }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-50' img={row.avatar} width='36' height='36' />
  } else {
    return <Avatar color={color} className='mr-50' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columns = [
  {
    name: '#',
    minWidth: '107px',
    selector: 'id',
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
  },
  {
    // name: <TrendingUp size={14} />,
    name: <FormattedMessage id={"Asset"} />,
    minWidth: '102px',
    selector: 'invoiceStatus',
    sortable: true,
    cell: row => {
      const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary'
      const icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : usdtIcon
      return <Icon color={color} width={36} height={36} icon={icon} />
    }
  },
  {
    name: <FormattedMessage id={"Partner"} />,
    minWidth: '350px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe',
        email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            <small className='text-truncate text-muted mb-0'>{email}</small>
          </div>
        </div>
      )
    }
  },
  {
    name: <FormattedMessage id={"Amount"} />,
    selector: 'total',
    sortable: true,
    minWidth: '150px',
    cell: row => <span>${row.total || 0}</span>
  },
  {
    name: <FormattedMessage id={"Registered"} />,
    selector: 'dueDate',
    sortable: true,
    minWidth: '200px',
    cell: row => row.dueDate
  },
  {
    name: <FormattedMessage id={"Amount"} />,
    selector: 'balance',
    sortable: true,
    minWidth: '164px',
    cell: row => {
      return row.balance !== 0 ? (
        <span>{row.balance}</span>
      ) : (
        <Badge color='light-success' pill>
          Paid
        </Badge>
      )
    }
  },
  {
    name: <FormattedMessage id={"Transaction"} />,
    minWidth: '110px',
    selector: '',
    sortable: true,
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <Send size={17} />
        <Link to={`/apps/invoice/preview/${row.id}`}>
          <Eye size={17} className='mx-1' />
        </Link>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Download size={14} className='mr-50' />
              <span className='align-middle'>Download</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
              <Edit size={14} className='mr-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Trash size={14} className='mr-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Copy size={14} className='mr-50' />
              <span className='align-middle'>Duplicate</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
