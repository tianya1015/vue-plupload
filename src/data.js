/*
 * @Author: xinyu.wang <xinyu.wang@wuage.com>
 * @Version: 0.0.1
 * @Date: 2018-01-17 15:10:58
 * @Last Modified by:   xinyu.wang
 * @Last Modified Time: 2018-01-17 15:10:58
 */

//
export const ListOptionOfPlupload = [
  {
    key: 'url',
    type: String
  }, {
    key: 'browse_button',
  }, {
    key: 'runtimes',
    type: String,
    default: 'html5,flash,silverlight,html4'
  }, {
    key: 'chunk_size',
    type: [String, Number]
  }, {
    key: 'container',
    type: [String, Object]
  }, {
    key: 'drop_element',
    type: [String, Object]
  }, {
    key: 'file_data_name',
    type: String,
    default: 'file'
  }, {
    key: 'filters',
    type: Object
  }, {
    key: 'flash_swf_url',
    type: String
  }, {
    key: 'headers',
    type: Object
  }, {
    key: 'http_method',
    type: String,
    default: 'POST'
  }, {
    key: 'max_retries',
    type: Number,
    default: 0
  }, {
    key: 'multipart',
    type: Boolean,
    default: true
  }, {
    key: 'multipart_params',
    type: Object
  }, {
    key: 'multi_selection',
    type: Boolean,
    default: true
  }, {
    key: 'required_features',
    type: [String ,Object]
  }, {
    key: 'resize',
    type: Object
  }, {
    key: 'silverlight_xap_url',
    type: String
  }, {
    key: 'send_chunk_number',
    type: Boolean,
    default: true
  }, {
    key: 'send_file_name',
    type: Boolean,
    default: true
  }, {
    key: 'unique_names',
    type: Boolean,
    default: false
  }
]
// Plupload 方法名数组
export const ListMethodOfPlupload = [
  'init',
  'setOption',
  'getOption',
  'refresh',
  'start',
  'stop',
  'disableBrowse',
  'getFile',
  'addFile',
  'removeFile',
  'splice',
  'trigger',
  'hasEventListener',
  'bind',
  'unbind',
  'unbindAll',
  'destroy'
]
// Plupload 事件名数组
export const ListEventOfPlupload = [
  'Init', 
  'PostInit',
  'OptionChanged',
  'Refresh',
  'StateChanged',
  'Browse',
  'FileFiltered',
  'QueueChanged',
  'FilesAdded',
  'FilesRemoved',
  'BeforeUpload',
  'UploadFile',
  'UploadProgress',
  'BeforeChunkUpload',
  'ChunkUploaded',
  'FileUploaded',
  'UploadComplete',
  'Destroy',
  'Error'
]
