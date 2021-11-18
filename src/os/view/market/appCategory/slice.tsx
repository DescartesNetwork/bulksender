import { useHistory } from 'react-router'

import AppCard from '../appCard'
import { SwiperOs } from 'os/components/swiperOS'
import IonIcon from 'shared/ionicon'
import { SwiperSlide } from 'swiper/react'
import { Button, Col, Row, Typography } from 'antd'

import { useAppCategory } from './hooks'

const AppCategorySlice = ({ category }: { category: string }) => {
  const history = useHistory()
  const { title, appIds } = useAppCategory({ category })

  return (
    <Row gutter={[20, 20]} align="bottom">
      {/* title */}
      <Col flex="auto">
        <Typography.Title level={2}>{title}</Typography.Title>
      </Col>
      {/* see all button*/}
      <Col>
        <Typography.Text type="danger">
          <Button
            danger
            size="small"
            type="text"
            onClick={() =>
              history.push({
                pathname: '/store',
                search: `?category=${category}`,
              })
            }
          >
            See all
            <IonIcon name="chevron-forward-outline" />
          </Button>
        </Typography.Text>
      </Col>
      {/* list app category */}
      <Col span={24}>
        <SwiperOs>
          {appIds.map((appId) => (
            <SwiperSlide
              key={appId}
              style={{
                maxWidth: 334,
                width: '75vw',
              }}
            >
              <AppCard appId={appId} />
            </SwiperSlide>
          ))}
        </SwiperOs>
      </Col>
    </Row>
  )
}
export default AppCategorySlice
