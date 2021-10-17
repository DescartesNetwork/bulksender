import { useHistory } from 'react-router-dom'

import { Row, Col, Typography, Avatar, Space, Affix, Card } from 'antd'
import Wallet from 'view/wallet'
import WalletIntro from 'view/wallet/intro'
import NetSwitch from './netSwitch'

import logo from 'static/images/sen.svg'

const Header = () => {
  const history = useHistory()

  const home = () => history.push('/')

  return (
    <Affix offsetTop={12}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card bodyStyle={{ padding: 16 }} hoverable>
            <Row gutter={[24, 24]} align="middle" wrap={false}>
              <Col flex="auto">
                <Space
                  align="center"
                  onClick={home}
                  style={{ cursor: 'pointer' }}
                >
                  <Avatar src={logo} alt="logo" />
                  <Typography.Text>Sentre</Typography.Text>
                </Space>
              </Col>
              <Col>
                <WalletIntro />
              </Col>
              <Col>
                <NetSwitch />
              </Col>
              <Col>
                <Wallet />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Affix>
  )
}

export default Header
