/*
 * @Descripttion:
 * @Author: niezihao
 * @Date: 2023-12-20 10:16:27
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-25 16:44:39
 */
export function isValidString(inputString: any) {
  // 使用正则表达式检查字符串
  const regex = /^[a-zA-Z0-9]+$/; // 只包含字母和数字，不允许空格和特殊字符
  return regex.test(inputString);
}

// 字符串判断类型
export function getTypeFromString(valueString: any) {
  try {
    // !! 多层级新增和编辑还有bug未修复，暂不开放
    // // 判断是否为数组
    // if (/^\s*\[\s*\]\s*$/.test(valueString)) {
    //   // 输入是一个空数组
    //   return "array";
    // } else if (/^\s*\[\s*(\S+\s*,\s*)*\S+\s*\]\s*$/.test(valueString)) {
    //   // 输入是一个数组
    //   return "array";
    // }
    // // 判断是否为对象
    // else if (/^\s*\{\s*\}\s*$/.test(valueString)) {
    //   // 输入是一个空对象
    //   return "object";
    // } else if (
    //   /^\s*\{\s*(\S+\s*:\s*\S+\s*,\s*)*\S+\s*:\s*\S+\s*\}\s*$/.test(valueString)
    // ) {
    //   // 输入是一个对象
    //   return "object";
    // } else {
    // 输入不是数组或对象
    if (/^\d+$/.test(valueString)) {
      return "number";
    } else if (
      typeof valueString === "boolean" ||
      valueString === "true" ||
      valueString === "false"
    ) {
      return "boolean";
    } else if (valueString === null || valueString === "null") {
      return "null";
    } else {
      return "string";
    }
    // }
  } catch (error) {
    return "Invalid JSON";
  }
}

//字符串转对应的值
export function convertToType(value: string, type: string): any {
  if (!value) return type === "null" ? null : "";
  switch (type) {
    case "number":
      return parseFloat(value);

    case "string":
      return value.toString();

    case "null":
      return null;

    case "boolean":
      if (type === "boolean") {
        return true;
      } else {
        return "true";
      }

    // !! 多层级新增和编辑还有bug未修复，暂不开放
    // case "object":
    //   try {
    //     const jsonString = value.replace(
    //       /([a-zA-Z0-9_]+):([^,}]*)/g,
    //       '"$1":"$2"'
    //     );
    //     return JSON.parse(jsonString);
    //   } catch (error) {
    //     throw new Error("Invalid JSON string");
    //   }

    // case "array":
    //   try {
    //     return JSON.parse(value);
    //   } catch (error) {
    //     throw new Error("Invalid JSON string");
    //   }
    case "object":
    case "array":
      return value.toString();

    default:
      throw new Error("Unsupported type");
  }
}
