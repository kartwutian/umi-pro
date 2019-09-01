import React, {useState} from 'react';
import {Row, Col, Card, Input, Select, Button, Icon, Tooltip} from 'antd';
import styles from './index.css';
import {func} from "prop-types";

const {Search} = Input;
const {Option} = Select;
const defaultPrefix = 'http://jx.598110.com/?url=';


const Block: React.FC = () => {

  const [prefix, setPrefix] = useState(defaultPrefix);
  const [url, setUrl] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  // const resolveUrls = [
  //     {
  //         name: 'VIP通道1',
  //         value: 'http://jx.598110.com/?url='
  //     },
  //     {
  //         name: 'VIP通道2',
  //         value: 'http://jqaaa.com/jx.php?url='
  //     },
  // ];
  const selectBefore = (
    <Select
      value={prefix}
      style={{width: 120}}
      onChange={(val)=>{
        setPrefix(val)
      }}
    >
      <Option value='http://jx.598110.com/?url='>VIP通道1</Option>
      <Option value='http://jqaaa.com/jx.php?url='>VIP通道2</Option>
    </Select>
  );

  window.onkeydown = (e) => {
    if(e.key === 'Escape') setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>全网VIP视频免费观看</h1>
      <Row>
        <Col span={4}>

        </Col>
        <Col span={16}>

          <Card
            title={
              (
                <Search
                  addonBefore={selectBefore}
                  placeholder="请输入视频地址"
                  enterButton="立即播放"
                  size="large"
                  onSearch={value => {
                    setUrl(value)
                  }}
                />
              )
            }
          >
            <iframe
              id="playview"
              width={isFullscreen ? window.innerWidth : '100%'}
              height={isFullscreen ? window.innerHeight : window.innerHeight*2/3}
              style={isFullscreen ? {backgroundColor: '#000', position: 'fixed', left: 0, top: 0} : {backgroundColor: '#000'}}
              allowTransparency
              frameBorder="0"
              scrolling="no"
              src= {url ? prefix + url : ''}
            />
          </Card>
        </Col>
        <Col span={4}>

        </Col>
      </Row>
      {
        isFullscreen ?  (
          <div
            style={{
              position: "fixed",
              bottom: isFullscreen ? 0 : '50%',
              right: isFullscreen ? '50%': -10,
              color: 'rgb(39, 39, 39)',
              cursor: 'pointer',
            }}
            onClick={()=>{
              setIsFullscreen(!isFullscreen)
            }}
          >
            退出全屏
          </div>
        ): (
          <Tooltip placement="left" title="全屏">
            <Button
              onClick={()=>{
                setIsFullscreen(!isFullscreen)
              }}
              size="large"
              style={{
                position: "fixed",
                bottom: '50%',
                right: -10,
              }}
            >
              {
                <Icon type="fullscreen" />
              }
            </Button>
          </Tooltip>
        )
      }

    </div>
  );
}

export default Block;
