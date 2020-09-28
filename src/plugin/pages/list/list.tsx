import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import './list.scss'
import { AtRadio } from 'taro-ui'

export default class List extends Component {
  state = {
    list: [{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }],
    value: 'option1',
  }

  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  
  render() {
    return (
      <View>
        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
        <AtRadio
          options={[
            { label: '单选项一', value: 'option1', desc: '单选项描述' },
            { label: '单选项二', value: 'option2' },
            { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
          ]}
          value={this.state.value}
          onClick={this.handleChange.bind(this)}
        />
      </View>

    )
  }
}
