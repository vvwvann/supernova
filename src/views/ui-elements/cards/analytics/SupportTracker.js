import { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import {
  Card,
  Button,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Input,
  Row,
  Col
} from 'reactstrap'
import Chart from 'react-apexcharts'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FormattedMessage } from 'react-intl'

const ToastSuccess = () => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        {/* <Avatar size='sm' color='success' icon={<Check />} /> */}
        <h6 className='toast-title'><FormattedMessage id={"Copied"} /></h6>
      </div>
    </div>
  </Fragment>
)

const SupportTracker = props => {
  const [value, setValue] = useState('link.com/refflink')
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/support-tracker').then(res => setData(res.data))
  }, [])

  const handleCopy = ({ target: { value } }) => {
    setValue(value)
  }

  const options = {
    plotOptions: {
      radialBar: {
        size: 150,
        offsetY: 20,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '65%'
        },
        track: {
          background: '#fff',
          strokeWidth: '100%'
        },
        dataLabels: {
          name: {
            offsetY: -5,
            fontFamily: 'Montserrat',
            fontSize: '1rem'
          },
          value: {
            offsetY: 15,
            fontFamily: 'Montserrat',
            fontSize: '1.714rem'
          }
        }
      }
    },
    colors: [props.danger],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [props.primary],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      dashArray: 8
    },
    labels: ['4 Ранг']
  },
    series = [83]
  const onCopy = () => {
    toast.success(<ToastSuccess />, {
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false
    })
  }


  return data !== null ? (
    <Card>
      <CardHeader className='pb-0'>
        <CardTitle tag='h4'>{data.title}</CardTitle>
        <UncontrolledDropdown className='chart-dropdown'>
          {/* <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            Last 7 days
          </DropdownToggle> */}
          <DropdownMenu right>
            {data.last_days.map(item => (
              <DropdownItem className='w-100' key={item}>
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm='2' className='d-flex flex-column flex-wrap text-center'>
            <h1 className='font-large-2 font-weight-bolder mt-2 mb-0'>{data.totalTicket}</h1>
            <CardText>Партнеров</CardText>
          </Col>
          <Col sm='10' className='d-flex justify-content-center'>
            <Chart options={options} series={series} type='radialBar' height={270} id='support-tracker-card' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-1'>
          <div className='text-center'>
            <CardText className='mb-50'>Инвестировано Партнерами</CardText>
            <span className='font-large-1 font-weight-bold'>{data.newTicket}</span>
          </div>
          <div className='text-center'>
            <CardText className='mb-50'>Заработано</CardText>
            <span className='font-large-1 font-weight-bold'>{data.openTicket}</span>
          </div>
          {/* <div className='text-center'>
            <CardText className='mb-50'>Response Time</CardText>
            <span className='font-large-1 font-weight-bold'>{data.responseTime}d</span>
          </div> */}

        </div>
        <div>
          <Row>
            <Col xl='4' md='4' sm='6' className='pr-sm-0 mb-md-0 mb-1'>
              <Input value={value} onChange={handleCopy} />
            </Col>
            <Col md='2' sm='12'>
              <CopyToClipboard onCopy={onCopy} text={value}>
                <Button.Ripple color='primary' outline>
                  <FormattedMessage id={"Copy"} />!
                    </Button.Ripple>
              </CopyToClipboard>
            </Col>
          </Row>
          {/* <CopyToClipboard onCopy={onCopy} text={"link.com"}>
              <Button.Ripple color='primary' outline>
                Copy!
                    </Button.Ripple>
            </CopyToClipboard> */}

        </div>
      </CardBody>
    </Card>
  ) : null
}
export default SupportTracker
