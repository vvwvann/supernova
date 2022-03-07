import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, Heart, ArrowDown, ArrowUp, User, Box, DollarSign, ArrowRightCircle } from 'react-feather'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import { FormattedMessage } from 'react-intl'
import { Fragment, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Icon, InlineIcon } from "@iconify/react"
import bitcoin from "@iconify/icons-mdi/bitcoin"
import ethereum from "@iconify/icons-mdi/ethereum"
import usdtIcon from '@iconify-icons/cryptocurrency/usdt'
import { styles } from 'react-contexify/lib/utils/styles'

const StatsCard = ({ cols }) => {

  const data = [
    {
      title: '750',
      subtitle: 'USDT',
      icon: <Icon color="#009f74" width={50} height={50} icon={usdtIcon} className='mr-2' />
    },
    {
      title: '0.012',
      subtitle: 'BTC',
      icon: <Icon color="#f7931b" width={59} height={59} icon={bitcoin} className='mr-2' />
    },
    {
      title: '0.9',
      subtitle: 'ETH',
      icon: <Icon color="#5f658b" width={60} height={60} icon={ethereum} className='mr-2' />
    }
    // {
    //   title: '$9745',
    //   subtitle: 'Вывести',
    //   color: 'light-success',
    //   icon: <DollarSign size={24} />
    // }
  ]

  const modalRef = useRef(null)

  const TimeInterval = () => {
    const [stateTime, updateTime] = useState(
      new Date().toTimeString().split(' ')[0])

    setInterval(() => {
      updateTime(new Date().toTimeString().split(' ')[0])
    }, 1000)

    return <CardText className='card-text font-weight-bolder font-small-4 mr-25 mb-0'>{stateTime}</CardText>
  }

  const ModalWithdraw = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)

    useImperativeHandle(ref, () => ({
      openModal() {
        setOpen(true)
      }
    }))

    // const onClick = useCallback((a, b) => {
    //   // do something with a, b and props.x
    // }, [props.x]);

    const close = _ => {
      setOpen(false)
    }

    // const openModal = _ => {
    //   setOpen(true)
    // }

    return (
      <Modal
        isOpen={open}
        toggle={() => close()}
        className={`modal-dialog-centered modal-lg`}
      >
        <ModalHeader toggle={() => close()}>
          {"item.modalTitle"}
          {"item.title"}
        </ModalHeader>
        <ModalBody>
          Halvah powder wafer. Chupa chups pie topping carrot cake cake. Tootsie roll sesame snaps jelly-o marshmallow
          marshmallow jelly jujubes candy. Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet roll.
            </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => close()} outline>
            Accept
              </Button>
        </ModalFooter>
      </Modal>
    )
  })

  const openModal = _ => {
    modalRef.current.openModal()
  }

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media
            className='my-auto'
            style={{
              display: 'table',
              width: '100%',
              tableLayout: 'fixed',
              borderSpacing: '10px'
            }}
            body
          >
            <div style={{ display: 'table-cell' }}>
              <div style={{ float: 'right' }}>{item.icon}</div>
            </div>
            <div style={{ display: 'table-cell', float: 'left' }}><h4 className='font-weight-bolder mb-0 font-large-1'>{item.title}</h4>
              <CardText className='font-medium-3 mb-0'>{item.subtitle}</CardText></div>
          </Media>
          {/* <Media
              className='my-auto'
              style={{
                display: 'table',
                width: '100%',
                tableLayout: 'fixed',
                borderSpacing: '10px'
              }}
              body
            >
              <div style={{ display: 'table-cell' }}>
                <div style={{ float: 'right' }}>{item.icon}</div>
              </div>
              <div style={{ display: 'table-cell', float: 'left' }}><h4 className='font-weight-bolder mb-0 font-large-1'>{item.title}</h4>
                <CardText className='font-medium-3 mb-0'>{item.subtitle}</CardText></div>
            </Media> */}

          <div className='item-options text-center'>
            <div className='item-wrapper'>
              <div className='item-cost'>
                <h4 className='item-price'></h4>
                {/* {item.hasFreeShipping ? (
                  <CardText className='shipping'>
                    <Badge color='light-success'>Free Shipping</Badge>
                  </CardText>
                ) : null} */}
              </div>
            </div>
            <Button
              className='btn-wishlist'
              color='light'
              style={{ marginRight: '1px', borderColor: '#2058e8' }}
            >
              {<ArrowUp
                className={classnames('mr-50', {
                  'text-danger': item.isInWishlist
                })}
                size={14}
              />}
              <span><FormattedMessage id={"Deposit"} /></span>
            </Button>
            <Button
              onClick={() => openModal()}
              className='btn-cart move-cart'
              color='primary'
            >
              {<ArrowRightCircle
                className={classnames('mr-50', {
                  'text-danger': item.isInWishlist
                })}
                size={14}
              />}
              <span><FormattedMessage id={"Withdraw"} /></span>
            </Button>
          </div>
        </Col >
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'><FormattedMessage id={"Balance"} /></CardTitle>
        <TimeInterval />
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
      <ModalWithdraw ref={modalRef} />
    </Card>
  )
}

export default StatsCard

