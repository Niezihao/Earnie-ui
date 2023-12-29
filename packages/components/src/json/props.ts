/*
 * @Descripttion:
 * @Author: niezihao
 * @Date: 2023-12-15 09:42:54
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-25 15:56:29
 */
export const basicProps = {
  data: {
    // 传入的json数据
    type: [Object, Array],
    default() {
      return {};
    },
  },
  isReadonly: {
    // 是否只读
    type: Boolean,
    default: false,
  },
  jsonKey: {
    // json的key值，用于第二层及二层以上的组件的key值
    type: String,
    default: "",
  },
  closed: {
    // 是否折叠
    type: Boolean,
    default: false,
  },
  isLast: {
    //是否是最后一行
    type: Boolean,
    default: true,
  },
  fontSize: {
    //字体大小
    type: Number,
    default: 14,
  },
  lineHeight: {
    //行高
    type: Number,
    default: 24,
  },
  deep: {
    // 展开深度
    type: Number,
    default: 3,
  },
  currentDeep: {
    // 当前为递归的第几层
    type: Number,
    default: 1,
  },
  iconStyle: {
    // 折叠icon样式
    type: String,
    default: "square",
  },
  iconColor: {
    //icon颜色
    type: Array,
    default() {
      return [];
    },
  },
  theme: {
    // 主题
    type: String,
    default: "",
  },
  hasSiblings: {
    // 是否有兄弟节点
    type: Boolean,
    default: true,
  },
};
