import Avatar from '@components/avatar'
import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'
import { FormattedMessage } from 'react-intl'
import { Icon } from "@iconify/react"
import bitcoin from "@iconify/icons-mdi/bitcoin"
import ethereum from "@iconify/icons-mdi/ethereum"
import usdtIcon from '@iconify-icons/cryptocurrency/usdt'

const CompanyTable = () => {
  const data = [
    {
      firstIcon: <Icon width={36} height={36} color={"#5f658b"} icon={ethereum} />,
      name: 'Ethereum',
      email: 'ETH',
      category: '2,5%(1000)',
      views: '19:41:03',
      revenue: '891.2',
      time: '21.04.21',
      sales: '68'
    },
    {
      firstIcon: <Icon width={36} height={36} color={"#f7931b"} icon={bitcoin} />,
      name: 'Bitcoin',
      email: 'BTC',
      category: '2,5%(1000)',
      views: '78k',
      revenue: '668.51',
      time: '2 days',
      sales: '97',
      salesUp: true
    },
    {
      firstIcon: <Icon width={36} height={36} color={"#5f658b"} icon={ethereum} />,
      name: 'Ethereum2',
      email: 'ETH',
      category: '2,5%(1000)',
      views: '162',
      revenue: '522.29',
      time: '5 days',
      sales: '62',
      salesUp: true
    },
    {
      firstIcon: <Icon width={36} height={36} color={"#f7931b"} icon={bitcoin} />,
      name: 'Bitcoin2',
      email: 'BTC',
      category: '2,5%(1000)',
      views: '214',
      revenue: '291.01',
      time: '24 hour',
      sales: '88',
      salesUp: true
    },
    {
      firstIcon: <Icon width={36} height={36} color={"#009f74"} icon={usdtIcon} />,
      name: 'USDT',
      email: 'USDT',
      category: '2,5%(1000)',
      views: '208',
      revenue: '783.93',
      time: '1 week',
      sales: '16'
    },
    {
      firstIcon: <Icon width={36} height={36} color={"#f7931b"} icon={bitcoin} />,
      name: 'Bitcoin3',
      email: 'BTC',
      category: '2,5%(1000)',
      views: '990',
      revenue: '780.05',
      time: '1 month',
      sales: '78',
      salesUp: true
    },
    {
      firstIcon: <Icon width={36} height={36} color={"#009f74"} icon={usdtIcon} />,
      name: 'USDT2',
      email: 'USDT',
      category: '2,5%(1000)',
      views: '12.9k',
      revenue: '531.49',
      time: '12 hours',
      sales: '42',
      salesUp: true
    }
  ],
    colorsArr = {
      Technology: 'light-primary',
      Grocery: 'light-success',
      Fashion: 'light-warning'
    }

  const renderData = () => {
    return data.map(col => {
      const IconTag = col.salesUp ? (
        <TrendingUp size={15} className='text-success' />
      ) : (
        <TrendingDown size={15} className='text-danger' />
      )

      return (
        <tr key={col.name}>
          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar-content' style={{ marginRight: '18px' }}>
                {col.firstIcon}
              </div>
              <div>
                <div className='font-weight-bolder'>{col.name}</div>
                <div className='font-small-2 text-muted'>{col.email}</div>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <span>{col.category}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            <span className='font-small-4'>${col.revenue}</span>
          </td>
          <td>
            <div className='d-flex flex-column'>
              <span className='font-weight-bolder mb-25'>{col.views}</span>
              {col.time}
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <span className='font-weight-bolder mr-1'>{col.sales}%</span>
              {IconTag}
            </div>
          </td>
        </tr>
      )
    })
  }


  return (
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th><FormattedMessage id={"Asset"} /></th>
            <th><FormattedMessage id={"Calculation"} /></th>
            <th><FormattedMessage id={"Amount"} /></th>
            <th><FormattedMessage id={"Time"} /></th>
            <th><FormattedMessage id={"Profit"} /></th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
