export const numberValidator = {
  minValue (minValue, canEqual = true) {
    return function (rule, value, callback) {
      if (value === undefined || value === '') {
        callback()
      } else if (isNaN(Number(value).toFixed(5))) {
        callback(new Error('数值格式错误'))
      } else if (value < minValue) {
        callback(new Error(`值必须大于 ${minValue}`))
      } else if ((!canEqual && Number(value).toFixed(5) === Number(minValue).toFixed(5))) {
        callback(new Error(`值必须大于等于 ${minValue}`))
      } else {
        callback()
      }
    }
  },
  maxValue (maxValue, canEqual = true) {
    return function (rule, value, callback) {
      if (value > maxValue || (!canEqual && value === maxValue)) {
        callback(new Error(`值必须小于 ${maxValue}`))
      }
      callback()
    }
  }
}

export const required = (opt = {}) => {
  return Object.assign({ required: true, message: '必填', trigger: 'blur' }, opt)
}

export const email = (opt = {required: false}) => {
  return Object.assign({ type: 'email', message: '邮箱格式错误', trigger: 'blur' }, opt)
  // if (!value || value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i)) {
  //   callback(new Error('email is not valid'))
  // }
  // callback()
}

export const number = (opt = {required: false}) => {
  return Object.assign({ type: 'number', message: '必须是数字', trigger: 'blur' }, opt)
}

export const phoneValidator = (rule, value, callback) => {
  if (!(value && value.match(/^1\d{10}$/))) {
    callback(new Error('格式错误'))
  }
  callback()
}

export const requiredArrayValidator = (rule, value, callback) => {
  if (!(value instanceof Array) || value.length === 0) {
    callback(new Error('不允许为空'))
  }
  callback()
}

export const requiredDateValidator = (rule, value, callback) => {
  if (!value) {
    callback(new Error('不允许为空'))
  }
  callback()
}

export default {
  required,
  email,
  number,
  numberValidator,
  phoneValidator,
  requiredArrayValidator,
  requiredDateValidator
}
