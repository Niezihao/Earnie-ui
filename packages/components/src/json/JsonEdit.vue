<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-13 12:22:30
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-28 17:31:43
-->
<template>
  <div
    :class="['json-view-container', theme, `deep-${currentDeep}`]"
    v-if="visible"
  >
    <div
      :class="['json-view', length ? 'closeable' : '']"
      :style="{ fontSize: fontSize + 'px', lineHeight: lineHeight + 'px' }"
    >
      <!--icon-style-square-->
      <span
        @click="toggleClose"
        class="angle"
        v-if="length && iconStyle === 'square'"
      >
        <svg
          v-if="innerclosed"
          :fill="iconColors[0]"
          width="1em"
          height="1em"
          viewBox="0 0 1792 1792"
          style="
            vertical-align: middle;
            color: rgb(42, 161, 152);
            height: 1em;
            width: 1em;
          "
        >
          <path
            d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
          ></path>
        </svg>
        <svg
          v-if="!innerclosed"
          :fill="iconColors[1]"
          width="1em"
          height="1em"
          viewBox="0 0 1792 1792"
          style="
            vertical-align: middle;
            color: rgb(88, 110, 117);
            height: 1em;
            width: 1em;
          "
        >
          <path
            d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
          ></path>
        </svg>
      </span>
      <!--icon-style-circle-->
      <span
        @click="toggleClose"
        class="angle"
        v-if="length && iconStyle === 'circle'"
      >
        <svg
          v-if="!innerclosed"
          viewBox="0 0 24 24"
          :fill="iconColors[0]"
          preserveAspectRatio="xMidYMid meet"
          style="
            vertical-align: middle;
            color: rgb(1, 160, 228);
            height: 1em;
            width: 1em;
          "
        >
          <path
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
          ></path>
        </svg>
        <svg
          v-if="innerclosed"
          viewBox="0 0 24 24"
          :fill="iconColors[1]"
          preserveAspectRatio="xMidYMid meet"
          style="
            vertical-align: middle;
            color: rgb(161, 106, 148);
            height: 1em;
            width: 1em;
          "
        >
          <path
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
          ></path>
        </svg>
      </span>
      <!--icon-style-triangle-->
      <span
        @click="toggleClose"
        class="angle"
        v-if="length && iconStyle === 'triangle'"
      >
        <svg
          v-if="!innerclosed"
          viewBox="0 0 15 15"
          :fill="iconColors[0]"
          style="
            vertical-align: top;
            color: #3c4047;
            height: 1em;
            width: 1em;
            padding-left: 2px;
          "
        >
          <path d="M0 5l6 6 6-6z"></path>
        </svg>
        <svg
          v-if="innerclosed"
          viewBox="0 0 15 15"
          :fill="iconColors[1]"
          style="
            vertical-align: top;
            color: #3c4047;
            height: 1em;
            width: 1em;
            padding-left: 2px;
          "
        >
          <path d="M0 14l6-6-6-6z"></path>
        </svg>
      </span>

      <div class="content-wrap">
        <p
          :class="['first-line', length > 0 ? 'pointer' : '']"
          @click="toggleClose"
        >
          <span v-if="jsonKey" class="json-key">"{{ jsonKey }}": </span>
          <span v-if="length">
            {{ prefix }}{{ innerclosed ? "..." + subfix : "" }}
            <span class="json-note">{{
              innerclosed ? length + " items" : ""
            }}</span>
          </span>
          <span v-if="!length">{{
            `${isArray ? "[]" : "{}"}${isLast ? "" : ","}`
          }}</span>
          <svg
            @click.stop="openModal"
            v-if="!isReadonly"
            t="1703045272434"
            class="add_icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5143"
            width="16"
            height="16"
            style="
              vertical-align: middle;
              color: rgb(88, 110, 117);
              height: 1em;
              width: 1em;
              margin-left: 5px;
            "
          >
            <path
              d="M512 1023.914667c-281.315556 0-509.269333-229.205333-509.269333-511.943111C2.730667 229.176889 230.684444 0.028444 512 0.028444c281.230222 0 509.240889 229.148444 509.240889 511.943112 0 282.794667-227.925333 511.943111-509.240889 511.943111z m0-955.704889c-243.768889 0-441.372444 198.656-441.372444 443.704889 0 244.963556 197.603556 443.676444 441.372444 443.676444 243.740444 0 441.287111-198.627556 441.344-443.676444 0-245.048889-197.603556-443.704889-441.344-443.704889z m234.382222 473.6h-199.822222l-0.881778 228.721778c0 8.476444 1.820444 44.8-37.432889 44.8-37.262222 0-33.536-23.978667-33.536-42.069334l0.085334-231.395555H255.260444c-14.336 0-31.374222 0.085333-31.374222-43.747556 0-32.568889 39.850667-28.871111 39.850667-28.871111h211.057778V248.547556c0-14.449778 11.121778-27.306667 35.84-25.856 24.718222 1.422222 35.84 11.463111 35.84 25.856v220.700444h199.850666s45.539556-5.944889 45.084445 34.588444c-0.483556 40.561778-35.868444 37.973333-45.027556 37.973334z"
              p-id="5144"
              :fill="iconColors[0]"
            ></path>
          </svg>
        </p>
        <div v-if="!innerclosed && length" class="json-body">
          <template v-for="(item, index) in items">
            <ea-json
              v-if="item.isJSON"
              :closed="isClose()"
              :key="index"
              :data="item.value"
              :jsonKey="item.key"
              :currentDeep="templateDeep + 1"
              :deep="deep"
              :iconStyle="iconStyle"
              :theme="theme"
              :fontSize="fontSize"
              :lineHeight="lineHeight"
              :iconColor="iconColors"
              :isLast="index === items.length - 1"
              :hasSiblings="item.hasSiblings"
            />
            <!-- 节点 -->
            <p class="json-item" v-else>
              <span class="json-key">{{
                isArray ? "" : '"' + item.key + '":'
              }}</span>
              <span
                :class="['json-value', getDataType(item.value)]"
                v-if="item.key !== editValue"
              >
                {{
                  `${
                    getDataType(item.value) === "string" ? '"' : ""
                  }${formatValue(item.value)}${
                    getDataType(item.value) === "string" ? '"' : ""
                  }${index === items.length - 1 ? "" : ","}`
                }}
              </span>
              <textarea
                ref="textarea"
                type="text"
                v-if="item.key === editValue"
                v-model="item.value"
                class="json_input_edit"
                v-focus
                @input="changeEditValue(item)"
                rows="1"
              ></textarea>
              <select
                v-if="item.key === editValue"
                v-model="valueType"
                option="valueTypeList"
                class="json_select_edit"
              >
                <option
                  :value="item.value"
                  v-for="(item, index) in valueTypeList"
                >
                  {{ item.label }}
                </option>
              </select>
              <svg
                v-if="item.key === editValue"
                @click="handleSave(item)"
                t="1703146054868"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9697"
                style="
                  vertical-align: middle;
                  color: rgb(88, 110, 117);
                  width: 1.2em;
                  margin-left: 5px;
                "
              >
                <path
                  d="M947.605 139.803c-15.766-15.763-39.836-14.107-57.1 0-133.71 109.263-541.798 419.618-541.798 419.618s-165.018-71.128-216.268-94.163c-20.338-9.14-41.328-15.766-57.101 0-15.763 15.763-15.763 41.326 0 57.087 0 0 242.992 244.252 244.157 245.415 8.052 8.052 18.652 11.867 29.212 11.693 10.554 0.175 21.154-3.64 29.211-11.693 1.159-1.163 427.18-428.238 569.686-570.87 15.759-15.772 15.768-41.324 0.001-57.087z m0 0"
                  :fill="iconColors[0]"
                  p-id="9698"
                ></path>
              </svg>
              <!-- 编辑 -->
              <svg
                @click="handleEdit(item)"
                v-if="!isEdit && !isReadonly"
                t="1703045638507"
                class="edit_icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7179"
                style="
                  vertical-align: middle;
                  color: rgb(88, 110, 117);
                  width: 1.2em;
                  margin-left: 5px;
                  cursor: pointer;
                "
              >
                <path
                  d="M126 862h784v64H126zM325.3 799l-184.9-7.4-7.4-184.9L663.3 76.4l192.3 192.3L325.3 799zM202 730l97.9 3.9 465.3-465.3-101.9-101.7L198 632.1l4 97.9z"
                  p-id="7180"
                  :fill="iconColors[0]"
                ></path>
                <path
                  d="M534.164 250.806l45.254-45.254 147.077 147.076-45.254 45.255z"
                  p-id="7181"
                  :fill="iconColors[0]"
                ></path>
              </svg>
              <!-- 删除 -->
              <svg
                v-if="!isReadonly"
                @click="handleDelete(item)"
                t="1703045686066"
                class="del_icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8501"
                style="
                  vertical-align: middle;
                  color: rgb(88, 110, 117);
                  width: 1.2em;
                  margin-left: 5px;
                  cursor: pointer;
                "
              >
                <path
                  d="M847.743 223.953H640.639c-3.132-68.921-60.177-124.029-129.858-124.029s-126.726 55.108-129.858 124.029H173.256c-17.673 0-32 14.327-32 32s14.327 32 32 32h674.487c17.673 0 32-14.327 32-32s-14.327-32-32-32z m-336.962-60.03c34.379 0 62.689 26.426 65.718 60.029H445.064c3.029-33.603 31.338-60.029 65.717-60.029zM767.743 351.79c-17.673 0-32 14.327-32 32v478.173H288.256V383.79c0-17.673-14.327-32-32-32s-32 14.327-32 32v510.173c0 17.673 14.327 32 32 32h511.487c17.673 0 32-14.327 32-32V383.79c0-17.673-14.327-32-32-32z"
                  :fill="iconColors[0]"
                  p-id="8502"
                ></path>
                <path
                  d="M449.306 732.802V448.208c0-17.673-14.327-32-32-32s-32 14.327-32 32v284.593c0 17.673 14.327 32 32 32s32-14.326 32-31.999zM640.84 732.802V448.208c0-17.673-14.327-32-32-32s-32 14.327-32 32v284.593c0 17.673 14.327 32 32 32s32-14.326 32-31.999z"
                  :fill="iconColors[0]"
                  p-id="8503"
                ></path>
              </svg>
            </p>
          </template>
          <span v-if="!innerclosed" class="base-line"></span>
        </div>
        <p v-if="!innerclosed" class="last-line">
          <span>{{ subfix }}</span>
        </p>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div id="overlay" class="overlay" @click="closeModal"></div>
    <!-- 模态框内容 -->
    <div id="modal" class="modal">
      <span @click="closeModal" style="cursor: pointer; float: right"
        >&times;</span
      >
      key:
      <input
        type="text"
        v-model="addValue"
        :style="{
          border: valid
            ? '2px solid #ff2121a8 !important'
            : '1px solid #c0c4cc',
          outline: 'none',
          marginRight: '10px',
        }"
        @input="changeAddValue"
        class="json_input_edit"
      />

      <button @click.prevent.enter="handleAdd" style="margin-right: 10px">
        确认
      </button>
      <div v-if="valid" style="color: #ff2121a8; margin-left: 35px">
        {{ validMessage }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import eaJson from "./index.vue";
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { basicProps } from "./props";
import { isValidString, getTypeFromString, convertToType } from "./utils";
defineOptions({ name: "jsonEdit" });
const props = defineProps(basicProps);
const emit = defineEmits(["update:data", "change"]);

let innerclosed = ref(props.closed);
let templateDeep = ref(props.currentDeep);
let visible = ref(false);
let isEdit = ref(false);
let editValue = ref("");
let addValue = ref("");
let textarea = ref();
let valid = ref(false);
let valueType = ref("");
let validMessage = ref(""); // 校验信息
interface ValueType {
  value: string;
  label: string;
}
let valueTypeList = ref<ValueType[]>([
  {
    value: "string",
    label: "string",
  },
]);

//注册自动聚焦指令
const vFocus = {
  mounted: (el: { focus: () => any }) => el.focus(),
};

let isArray = computed(() => {
  return getDataType(props.data) === "array";
});
let length = computed(() => {
  return isArray.value
    ? props.data?.length
    : Object.keys(props.data as object).length;
});
let subfix = computed(() => {
  const data = props.data;
  if (isEmptyArrayOrObject(data)) {
    // 如果是空数组或空对象
    return "";
  } else {
    return (isArray.value ? "]" : "}") + (props.isLast ? "" : ",");
  }
});
let prefix = computed(() => {
  return isArray.value ? "[" : "{";
});
let items = computed(() => {
  const json: any = props.data;

  if (isArray.value) {
    return json?.map((item: any) => {
      const isJSON = isObjectOrArray(item);
      return {
        value: item,
        isJSON,
        key: "",
      };
    });
  }
  return Object.keys(json as object).map((key) => {
    const item = json[key];
    const isJSON = isObjectOrArray(item);
    return {
      value: item,
      isJSON,
      key,
    };
  });
});
let iconColors = computed((): string[] => {
  const { theme, iconColor } = props;
  if (iconColor.length === 2) {
    return iconColor as string[];
  } else {
    if (theme === "one-dark") {
      return ["#747983", "#747983"];
    } else if (theme === "vs-code") {
      return ["#c6c6c6", "#c6c6c6"];
    } else {
      return ["#747983", "#747983"];
    }
  }
});

function formatValue(data: any) {
  if (data && data._isBigNumber) {
    return data.toString(10);
  }
  return data;
}
function getDataType(data: any) {
  return data && data._isBigNumber
    ? "number"
    : Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
function isObjectOrArray(source: any) {
  return ["array", "object"].includes(getDataType(source));
}
function toggleClose() {
  if (length.value === 0) {
    return;
  }
  if (innerclosed.value) {
    innerclosed.value = false;
  } else {
    innerclosed.value = true;
  }
}
function isClose() {
  return templateDeep.value + 1 > props.deep;
}
function isEmptyArrayOrObject(
  data: unknown[] | Record<string, any> | undefined
) {
  // 空数组或者空对象
  return [{}, []]
    .map((item) => JSON.stringify(item))
    .includes(JSON.stringify(data));
}
function openModal(event: any) {
  // 显示遮罩层和模态框
  const overlay: HTMLElement | null = document.getElementById("overlay");
  const modal: HTMLElement | null = document.getElementById("modal");
  overlay && (overlay.style.display = "block");

  // 设置模态框位置为鼠标点击位置
  if (modal) {
    modal.style.top = event.clientY + 20 + "px";
    modal.style.left = event.clientX - 26 + "px";
    modal.style.display = "block";
  }
}
function closeModal() {
  // 隐藏遮罩层和模态框
  const overlay: HTMLElement | null = document.getElementById("overlay");
  const modal: HTMLElement | null = document.getElementById("modal");
  overlay && (overlay.style.display = "none");
  modal && (modal.style.display = "none");

  addValue.value = "";
  valid.value = false;
}
// 新增
function handleAdd() {
  // console.log(valid.value);
  const obj = JSON.parse(JSON.stringify(props.data));
  const existingKeys = Object.keys(obj);

  if (!isValidString(addValue.value) || existingKeys.includes(addValue.value)) {
    valid.value = true;
  } else {
    obj[addValue.value] = null;
    emit("change", obj);
    closeModal();
  }
}
// 编辑
function handleEdit(node: { [x: string]: any; key: string }) {
  editValue.value = node.key;
  isEdit.value = true;
  nextTick(() => {
    changeEditValue(node);
  });
}
function handleSave(node: { [x: string]: any; key: string | number }) {
  isEdit.value = false;
  if (!valueType.value) {
    return;
  }
  const obj = JSON.parse(JSON.stringify(props.data));
  console.log(convertToType(node.value, valueType.value));

  let value = convertToType(node.value, valueType.value);
  obj[node.key] = value;
  editValue.value = "";
  // 重置
  valueTypeList.value = [
    {
      value: "string",
      label: "string",
    },
  ];
  // console.log("obj", obj);

  getDataType(convertToType(node.value, valueType.value));
  emit("change", obj);
}
// 删除
function handleDelete(node: any) {
  const obj = JSON.parse(JSON.stringify(props.data));
  delete obj[node.key];
  emit("change", obj);
}
function changeAddValue() {
  const obj = JSON.parse(JSON.stringify(props.data));
  const existingKeys = Object.keys(obj);
  if (!isValidString(addValue.value) || existingKeys.includes(addValue.value)) {
    valid.value = true;
  } else {
    valid.value = false;
  }
  validMessage.value = "请输入正确的值";
}
function changeEditValue(node: { [x: string]: any; key: string | number }) {
  // 重置
  valueTypeList.value = [
    {
      value: "string",
      label: "string",
    },
  ];
  valueType.value = getTypeFromString(node.value);
  // 去重后加上类型
  if (!valueTypeList.value.some((item) => item.value === valueType.value)) {
    valueTypeList.value.push({
      value: valueType.value,
      label: valueType.value,
    });
  }
}
watch(
  () => props.closed,
  (value, oldValue) => {
    innerclosed.value = value;
  }
);
onMounted(() => {
  setTimeout(() => {
    visible.value = true;
  }, 0);
});
</script>
<style scoped lang="less">
@import "./style/index";
@import "./style/on-dark";
@import "./style/vs-code";
@import "./style/default";
</style>
